import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Research from "./pages/Research";
import Team from "./pages/Team";
import News from "./pages/News";
import Login from "./pages/login";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import GetStarted from "./pages/GetStarted";
import NotFound from "./pages/NotFound";
import Register from "./pages/register";
import AppLayout from "./layout/layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppLayout>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/research" element={<Research />} />
                <Route path="/team" element={<Team />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/get-started" element={<GetStarted />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </AppLayout>
  </QueryClientProvider>
);

export default App;
