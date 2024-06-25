import "@/App.css";
import { Route, Routes } from "react-router-dom";
import Auth from "@/pages/Auth.jsx";
import Dashboard from "@/pages/Dashboard.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "@/pages/CompleteProfile.jsx";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import AppLayout from "@/ui/appLayout";
import Owner from "@/pages/Owner";
import Freelancer from "@/pages/Freelancer";
import Admin from "@/pages/Admin";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container p-5 md:p-0 max-w-screen-xl">
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route element={<AppLayout />}>
            <Route path="owner" element={<Owner />} />
            <Route path="freelancer" element={<Freelancer />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
