import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Ship, LogOut, Loader2, RefreshCw, Trash2, Eye } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

interface QuoteSubmission {
  id: string;
  full_name: string;
  email: string;
  phone: string | null;
  company: string | null;
  service_type: string;
  origin: string | null;
  destination: string | null;
  message: string | null;
  status: string | null;
  notes: string | null;
  created_at: string;
}

export default function Admin() {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [submissions, setSubmissions] = useState<QuoteSubmission[]>([]);
  const [loadingData, setLoadingData] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<QuoteSubmission | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      fetchSubmissions();
    }
  }, [user]);

  const fetchSubmissions = async () => {
    setLoadingData(true);
    const { data, error } = await supabase
      .from("quote_submissions")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to load submissions",
        variant: "destructive",
      });
    } else {
      setSubmissions(data || []);
    }
    setLoadingData(false);
  };

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from("quote_submissions")
      .update({ status })
      .eq("id", id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update status",
        variant: "destructive",
      });
    } else {
      setSubmissions(submissions.map(s => s.id === id ? { ...s, status } : s));
      toast({
        title: "Updated",
        description: "Status updated successfully",
      });
    }
  };

  const updateNotes = async (id: string, notes: string) => {
    const { error } = await supabase
      .from("quote_submissions")
      .update({ notes })
      .eq("id", id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update notes",
        variant: "destructive",
      });
    } else {
      setSubmissions(submissions.map(s => s.id === id ? { ...s, notes } : s));
      toast({
        title: "Updated",
        description: "Notes saved successfully",
      });
    }
  };

  const deleteSubmission = async (id: string) => {
    const { error } = await supabase
      .from("quote_submissions")
      .delete()
      .eq("id", id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete submission",
        variant: "destructive",
      });
    } else {
      setSubmissions(submissions.filter(s => s.id !== id));
      toast({
        title: "Deleted",
        description: "Submission deleted successfully",
      });
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const getStatusColor = (status: string | null) => {
    switch (status) {
      case "pending": return "bg-yellow-500/20 text-yellow-500";
      case "contacted": return "bg-blue-500/20 text-blue-500";
      case "quoted": return "bg-purple-500/20 text-purple-500";
      case "confirmed": return "bg-green-500/20 text-green-500";
      case "rejected": return "bg-red-500/20 text-red-500";
      default: return "bg-muted text-muted-foreground";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Ship className="h-8 w-8 text-primary" />
            <div>
              <h1 className="font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={fetchSubmissions}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Quotes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">{submissions.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-yellow-500">
                {submissions.filter(s => s.status === "pending" || !s.status).length}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Quoted</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-purple-500">
                {submissions.filter(s => s.status === "quoted").length}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Confirmed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-green-500">
                {submissions.filter(s => s.status === "confirmed").length}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Submissions Table */}
        <Card>
          <CardHeader>
            <CardTitle>Quote Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            {loadingData ? (
              <div className="flex justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : submissions.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No quote submissions yet.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Route</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {submissions.map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell className="whitespace-nowrap">
                          {new Date(submission.created_at).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="font-medium">{submission.full_name}</TableCell>
                        <TableCell>{submission.email}</TableCell>
                        <TableCell>{submission.service_type}</TableCell>
                        <TableCell>
                          {submission.origin && submission.destination
                            ? `${submission.origin} → ${submission.destination}`
                            : submission.origin || submission.destination || "-"}
                        </TableCell>
                        <TableCell>
                          <Select
                            value={submission.status || "pending"}
                            onValueChange={(value) => updateStatus(submission.id, value)}
                          >
                            <SelectTrigger className="w-32">
                              <Badge className={getStatusColor(submission.status)}>
                                {submission.status || "pending"}
                              </Badge>
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pending">Pending</SelectItem>
                              <SelectItem value="contacted">Contacted</SelectItem>
                              <SelectItem value="quoted">Quoted</SelectItem>
                              <SelectItem value="confirmed">Confirmed</SelectItem>
                              <SelectItem value="rejected">Rejected</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => setSelectedSubmission(submission)}
                                >
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-lg">
                                <DialogHeader>
                                  <DialogTitle>Quote Details</DialogTitle>
                                </DialogHeader>
                                {selectedSubmission && (
                                  <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                      <div>
                                        <p className="text-muted-foreground">Name</p>
                                        <p className="font-medium">{selectedSubmission.full_name}</p>
                                      </div>
                                      <div>
                                        <p className="text-muted-foreground">Email</p>
                                        <p className="font-medium">{selectedSubmission.email}</p>
                                      </div>
                                      <div>
                                        <p className="text-muted-foreground">Phone</p>
                                        <p className="font-medium">{selectedSubmission.phone || "-"}</p>
                                      </div>
                                      <div>
                                        <p className="text-muted-foreground">Company</p>
                                        <p className="font-medium">{selectedSubmission.company || "-"}</p>
                                      </div>
                                      <div>
                                        <p className="text-muted-foreground">Service</p>
                                        <p className="font-medium">{selectedSubmission.service_type}</p>
                                      </div>
                                      <div>
                                        <p className="text-muted-foreground">Route</p>
                                        <p className="font-medium">
                                          {selectedSubmission.origin || "-"} → {selectedSubmission.destination || "-"}
                                        </p>
                                      </div>
                                    </div>
                                    {selectedSubmission.message && (
                                      <div>
                                        <p className="text-muted-foreground text-sm">Message</p>
                                        <p className="text-sm mt-1">{selectedSubmission.message}</p>
                                      </div>
                                    )}
                                    <div>
                                      <p className="text-muted-foreground text-sm mb-2">Notes</p>
                                      <Textarea
                                        placeholder="Add internal notes..."
                                        defaultValue={selectedSubmission.notes || ""}
                                        onBlur={(e) => updateNotes(selectedSubmission.id, e.target.value)}
                                      />
                                    </div>
                                  </div>
                                )}
                              </DialogContent>
                            </Dialog>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => deleteSubmission(submission.id)}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
