import "@/App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "@/pages/Auth.jsx";
import Dashboard from "@/pages/Dashboard.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "@/pages/CompleteProfile.jsx";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import AppLayout from "@/ui/appLayout";
import Freelancer from "@/pages/Freelancer";
import Admin from "@/pages/Admin";
import OwnerDashboard from "@/pages/OwnerDashboard";
import Projects from "@/pages/Projects";
import Project from "@/pages/Project";
import { DarkModeProvider } from "./context/darkMode";

function App() {
  const queryClient = new QueryClient();
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <div className="container p-5 md:p-0 max-w-screen-xl">
          <Toaster />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/owner" element={<AppLayout />}>
              <Route
                index
                element={<Navigate to="dashboard" />}
                replace="true"
              />
              <Route path="dashboard" element={<OwnerDashboard />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:id" element={<Project />} />
            </Route>
            <Route path="/auth" element={<Auth />} />
            <Route path="/complete-profile" element={<CompleteProfile />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
