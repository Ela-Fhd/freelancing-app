import "@/App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DarkModeProvider } from "./context/darkMode";
import { Toaster } from "react-hot-toast";
import Auth from "@/pages/Auth.jsx";
import Dashboard from "@/pages/Dashboard.jsx";
import CompleteProfile from "@/pages/CompleteProfile.jsx";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import OwnerDashboard from "@/pages/OwnerDashboard";
import OwnerLayout from "@/features/owner/ownerLayout";
import Projects from "@/pages/Projects";
import Project from "@/pages/Project";
import FreelancerLayout from "@/features/freelancer/freelancerLayout";
import FreelancerDashboard from "@/pages/FreelancerDashboard";
import Proposals from "@/pages/proposals";
import SubmittedProjects from "@/pages/SubmittedProjects";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoute from "@/ui/protectedRoute";

function App() {
  const queryClient = new QueryClient();
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <div className="container p-5 md:p-0 max-w-screen-xl">
          <Toaster />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/owner"
              element={
                <ProtectedRoute>
                  <OwnerLayout />
                </ProtectedRoute>
              }
            >
              <Route
                index
                element={<Navigate to="dashboard" />}
                replace="true"
              />
              <Route path="dashboard" element={<OwnerDashboard />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:id" element={<Project />} />
            </Route>

            <Route
              path="/freelancer"
              element={
                <ProtectedRoute>
                  <FreelancerLayout />
                </ProtectedRoute>
              }
            >
              <Route
                index
                element={<Navigate to="dashboard" />}
                replace="true"
              />
              <Route path="dashboard" element={<FreelancerDashboard />} />
              <Route path="proposals" element={<Proposals />} />
              <Route path="projects" element={<SubmittedProjects />} />
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
