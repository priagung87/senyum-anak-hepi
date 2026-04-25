import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppShell from "./components/AppShell";
import NotFoundPage from "./pages/NotFoundPage";
import BrushPage from "./pages/BrushPage";
import GamesPage from "./pages/GamesPage";
import HomePage from "./pages/HomePage";
import LearnPage from "./pages/LearnPage";
import ParentsPage from "./pages/ParentsPage";
import StoriesPage from "./pages/StoriesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<HomePage />} />
          <Route path="/belajar" element={<LearnPage />} />
          <Route path="/sikat-gigi" element={<BrushPage />} />
          <Route path="/cerita" element={<StoriesPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/orang-tua" element={<ParentsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
