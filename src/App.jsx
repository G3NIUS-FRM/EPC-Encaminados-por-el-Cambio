import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MembersPage from "./pages/MembersPage";
import MinistriesPage from "./pages/MinistriesPage";
import MinistryDetailPage from "./pages/MinistryDetailPage";
import NewsPage from "./pages/NewsPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import PlansPage from "./pages/PlansPage";
import PlanDetailPage from "./pages/PlanDetailPage";
import LeadershipDetailPage from "./pages/LeadershipDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre-nosotros" element={<AboutPage />} />
          <Route path="/miembros" element={<MembersPage />} />
          <Route path="/lideres/:slug" element={<LeadershipDetailPage />} />
          <Route path="/ministerios" element={<MinistriesPage />} />
          <Route
            path="/ministerios/:slug"
            element={<MinistryDetailPage />}
          />
          <Route path="/noticias" element={<NewsPage />} />
          <Route path="/noticias/:slug" element={<NewsDetailPage />} />
          <Route path="/planes" element={<PlansPage />} />
          <Route path="/planes/:slug" element={<PlanDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}