import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Loader2, Bot, User, FileText, MapPin, Phone, HelpCircle, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type QuickReply = {
  label: string;
  message: string;
  icon: React.ElementType;
};

const quickReplies: QuickReply[] = [
  { label: "Get a Quote", message: "I'd like to get a quote for shipping services.", icon: FileText },
  { label: "Track Shipment", message: "I want to track my shipment.", icon: MapPin },
  { label: "Contact Sales", message: "I'd like to speak with your sales team.", icon: Phone },
  { label: "Our Services", message: "What services do you offer?", icon: HelpCircle },
];

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;

async function streamChat({
  messages,
  onDelta,
  onDone,
  onError,
}: {
  messages: Message[];
  onDelta: (deltaText: string) => void;
  onDone: () => void;
  onError: (error: string) => void;
}) {
  try {
    const resp = await fetch(CHAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ messages }),
    });

    if (!resp.ok) {
      const errorData = await resp.json().catch(() => ({}));
      throw new Error(errorData.error || "Failed to get response");
    }

    if (!resp.body) throw new Error("No response body");

    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let textBuffer = "";
    let streamDone = false;

    while (!streamDone) {
      const { done, value } = await reader.read();
      if (done) break;
      textBuffer += decoder.decode(value, { stream: true });

      let newlineIndex: number;
      while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
        let line = textBuffer.slice(0, newlineIndex);
        textBuffer = textBuffer.slice(newlineIndex + 1);

        if (line.endsWith("\r")) line = line.slice(0, -1);
        if (line.startsWith(":") || line.trim() === "") continue;
        if (!line.startsWith("data: ")) continue;

        const jsonStr = line.slice(6).trim();
        if (jsonStr === "[DONE]") {
          streamDone = true;
          break;
        }

        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content as string | undefined;
          if (content) onDelta(content);
        } catch {
          textBuffer = line + "\n" + textBuffer;
          break;
        }
      }
    }

    // Final flush
    if (textBuffer.trim()) {
      for (let raw of textBuffer.split("\n")) {
        if (!raw) continue;
        if (raw.endsWith("\r")) raw = raw.slice(0, -1);
        if (raw.startsWith(":") || raw.trim() === "") continue;
        if (!raw.startsWith("data: ")) continue;
        const jsonStr = raw.slice(6).trim();
        if (jsonStr === "[DONE]") continue;
        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content as string | undefined;
          if (content) onDelta(content);
        } catch { /* ignore */ }
      }
    }

    onDone();
  } catch (error) {
    onError(error instanceof Error ? error.message : "An error occurred");
  }
}

// Play a notification sound using Web Audio API
const playNotificationSound = () => {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(880, audioContext.currentTime); // A5 note
    oscillator.frequency.setValueAtTime(1108.73, audioContext.currentTime + 0.1); // C#6 note
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
  } catch (e) {
    // Audio not supported or blocked
  }
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm here to help you with your shipping and logistics questions. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = useCallback(async (messageText?: string) => {
    const text = messageText || input.trim();
    if (!text || isLoading) return;

    const userMessage: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setShowQuickReplies(false);

    let assistantContent = "";

    const updateAssistant = (chunk: string) => {
      assistantContent += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant" && prev.length > 1 && prev[prev.length - 2].role === "user") {
          return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantContent } : m));
        }
        return [...prev, { role: "assistant", content: assistantContent }];
      });
    };

    await streamChat({
      messages: [...messages, userMessage],
      onDelta: updateAssistant,
      onDone: () => {
        setIsLoading(false);
        if (isSoundEnabled) playNotificationSound();
      },
      onError: (error) => {
        setIsLoading(false);
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: `I'm sorry, I encountered an error: ${error}. Please try again.` },
        ]);
      },
    });
  }, [input, isLoading, messages, isSoundEnabled]);

  const handleQuickReply = (reply: QuickReply) => {
    sendMessage(reply.message);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg transition-all duration-300",
          "bg-primary hover:bg-primary/90",
          isOpen && "rotate-90"
        )}
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-[360px] max-h-[500px] rounded-xl shadow-2xl transition-all duration-300 overflow-hidden",
          "bg-background border border-border",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="bg-primary text-primary-foreground px-4 py-3 flex items-center gap-3">
          <div className="bg-primary-foreground/20 p-2 rounded-full">
            <Bot className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-sm">Customer Support</h3>
            <p className="text-xs opacity-80">We typically reply instantly</p>
          </div>
          <button
            onClick={() => setIsSoundEnabled(!isSoundEnabled)}
            className="p-2 rounded-full hover:bg-primary-foreground/20 transition-colors"
            title={isSoundEnabled ? "Mute notifications" : "Unmute notifications"}
          >
            {isSoundEnabled ? (
              <Volume2 className="h-4 w-4" />
            ) : (
              <VolumeX className="h-4 w-4 opacity-60" />
            )}
          </button>
        </div>

        {/* Messages */}
        <div className="h-[340px] overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "flex gap-2",
                message.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              {message.role === "assistant" && (
                <div className="bg-primary/10 p-1.5 rounded-full h-fit">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
              )}
              <div
                className={cn(
                  "max-w-[80%] rounded-xl px-4 py-2 text-sm",
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                )}
              >
                {message.content}
              </div>
              {message.role === "user" && (
                <div className="bg-primary/10 p-1.5 rounded-full h-fit">
                  <User className="h-4 w-4 text-primary" />
                </div>
              )}
            </div>
          ))}
          {isLoading && messages[messages.length - 1]?.role === "user" && (
            <div className="flex gap-2 justify-start">
              <div className="bg-primary/10 p-1.5 rounded-full h-fit">
                <Bot className="h-4 w-4 text-primary" />
              </div>
              <div className="bg-muted rounded-xl px-4 py-3">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" />
                </div>
              </div>
            </div>
          )}
          
          {/* Quick Replies */}
          {showQuickReplies && messages.length === 1 && !isLoading && (
            <div className="flex flex-wrap gap-2 mt-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply.label}
                  onClick={() => handleQuickReply(reply)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary/50 transition-colors"
                >
                  <reply.icon className="h-3 w-3" />
                  {reply.label}
                </button>
              ))}
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-border p-3 flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 text-sm"
            disabled={isLoading}
          />
          <Button
            onClick={() => sendMessage()}
            size="icon"
            disabled={!input.trim() || isLoading}
            className="shrink-0"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
