import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, Clock, ArrowLeft, Tag, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  // Simple markdown-like rendering for ## headings, **bold**, and - lists
  const renderContent = (content: string) => {
    return content
      .trim()
      .split("\n")
      .map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return <br key={i} />;
        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={i} className="text-2xl font-bold text-foreground mt-8 mb-4 font-['Playfair_Display']">
              {trimmed.replace("## ", "")}
            </h2>
          );
        }
        if (trimmed.startsWith("### ")) {
          return (
            <h3 key={i} className="text-xl font-semibold text-foreground mt-6 mb-3">
              {trimmed.replace("### ", "")}
            </h3>
          );
        }
        if (trimmed.startsWith("- **")) {
          const match = trimmed.match(/^- \*\*(.+?)\*\*\s*[–-]\s*(.+)$/);
          if (match) {
            return (
              <li key={i} className="ml-6 mb-2 text-muted-foreground list-disc">
                <strong className="text-foreground">{match[1]}</strong> – {match[2]}
              </li>
            );
          }
        }
        if (trimmed.startsWith("- ")) {
          return (
            <li key={i} className="ml-6 mb-2 text-muted-foreground list-disc">
              {trimmed.replace("- ", "")}
            </li>
          );
        }
        return (
          <p key={i} className="text-muted-foreground leading-relaxed mb-4">
            {trimmed}
          </p>
        );
      });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 lg:pt-24">
        {/* Hero Image */}
        <div className="relative h-[40vh] lg:h-[50vh] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Article */}
        <article className="container mx-auto px-4 lg:px-8 -mt-24 relative z-10 max-w-4xl">
          <div className="bg-card rounded-xl border border-border/50 shadow-xl p-8 lg:p-12">
            <Link to="/blog">
              <Button variant="ghost" size="sm" className="mb-6 gap-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4" /> Back to Blog
              </Button>
            </Link>

            <Badge variant="secondary" className="mb-4">
              <Tag className="h-3 w-3 mr-1" />
              {post.category}
            </Badge>

            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 font-['Playfair_Display'] leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>

            <div className="prose-custom">{renderContent(post.content)}</div>

            {/* CTA */}
            <div className="mt-12 p-8 rounded-xl bg-primary/5 border border-primary/20 text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">Need Logistics Support?</h3>
              <p className="text-muted-foreground mb-4">Get in touch with our team for a free consultation.</p>
              <a href="/#quote">
                <Button variant="default" className="gap-2">
                  Get a Free Quote
                </Button>
              </a>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="py-16">
              <h2 className="text-2xl font-bold text-foreground mb-8 font-['Playfair_Display']">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((rp) => (
                  <Link key={rp.id} to={`/blog/${rp.slug}`} className="group">
                    <Card className="h-full overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={rp.image}
                          alt={rp.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 text-sm">
                          {rp.title}
                        </h4>
                        <span className="text-xs text-muted-foreground mt-2 block">{rp.readTime}</span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;
