import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";

// Lazy load non-critical routes for code splitting
const NotFound = lazy(() => import("./pages/NotFound"));
const Auth = lazy(() => import("./pages/Auth"));
const Admin = lazy(() => import("./pages/Admin"));
const CustomBrokerage = lazy(() => import("./pages/services/CustomBrokerage"));
const FreightForwarding = lazy(() => import("./pages/services/FreightForwarding"));
const Warehousing = lazy(() => import("./pages/services/Warehousing"));
const InlandTransport = lazy(() => import("./pages/services/InlandTransport"));
const Consolidation = lazy(() => import("./pages/services/Consolidation"));
const Deconsolidation = lazy(() => import("./pages/services/Deconsolidation"));
const SupplyChain = lazy(() => import("./pages/services/SupplyChain"));
const AfghanTransit = lazy(() => import("./pages/services/AfghanTransit"));
const Inspection = lazy(() => import("./pages/services/Inspection"));
const ProjectHandling = lazy(() => import("./pages/services/ProjectHandling"));
const CarImport = lazy(() => import("./pages/services/CarImport"));
const VesselChartering = lazy(() => import("./pages/services/VesselChartering"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<div className="min-h-screen bg-background" />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/services/custom-brokerage" element={<CustomBrokerage />} />
                <Route path="/services/freight-forwarding" element={<FreightForwarding />} />
                <Route path="/services/warehousing" element={<Warehousing />} />
                <Route path="/services/inland-transport" element={<InlandTransport />} />
                <Route path="/services/consolidation" element={<Consolidation />} />
                <Route path="/services/deconsolidation" element={<Deconsolidation />} />
                <Route path="/services/supply-chain" element={<SupplyChain />} />
                <Route path="/services/afghan-transit" element={<AfghanTransit />} />
                <Route path="/services/inspection" element={<Inspection />} />
                <Route path="/services/project-handling" element={<ProjectHandling />} />
                <Route path="/services/car-import" element={<CarImport />} />
                <Route path="/services/vessel-chartering" element={<VesselChartering />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
