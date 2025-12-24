import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CustomBrokerage from "./pages/services/CustomBrokerage";
import FreightForwarding from "./pages/services/FreightForwarding";
import Warehousing from "./pages/services/Warehousing";
import InlandTransport from "./pages/services/InlandTransport";
import Consolidation from "./pages/services/Consolidation";
import Deconsolidation from "./pages/services/Deconsolidation";
import SupplyChain from "./pages/services/SupplyChain";
import AfghanTransit from "./pages/services/AfghanTransit";
import Inspection from "./pages/services/Inspection";
import ProjectHandling from "./pages/services/ProjectHandling";
import CarImport from "./pages/services/CarImport";
import VesselChartering from "./pages/services/VesselChartering";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
