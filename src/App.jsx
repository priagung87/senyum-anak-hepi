import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppShell from "./components/AppShell";
import NotFoundPage from "./pages/NotFoundPage";
import BrushPage from "./pages/BrushPage";
import FunActivitiesPage from "./pages/FunActivitiesPage";
import GamesPage from "./pages/GamesPage";
import HomePage from "./pages/HomePage";
import InteractiveStoriesPage from "./pages/InteractiveStoriesPage";
import LearnPage from "./pages/LearnPage";
import LittleKidsPage from "./pages/LittleKidsPage";
import MouthLearningPage from "./pages/MouthLearningPage";
import ParentsPage from "./pages/ParentsPage";
import StoriesPage from "./pages/StoriesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<HomePage />} />
          <Route path="/main-balita" element={<LittleKidsPage />} />
          <Route path="/belajar" element={<LearnPage />} />
          <Route path="/sikat-gigi" element={<BrushPage />} />
          <Route path="/cerita" element={<StoriesPage />} />
          <Route path="/cerita-interaktif" element={<InteractiveStoriesPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/aktivitas-seru" element={<FunActivitiesPage />} />
          <Route path="/kenali-mulut" element={<MouthLearningPage />} />
          <Route path="/orang-tua" element={<ParentsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
