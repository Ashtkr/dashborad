import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Blank from "./pages/Blank";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Blank />} />
          <Route path="/assets" element={<Blank />} />
          <Route path="/analysis" element={<Blank />} />
          <Route path="/jobs" element={<Blank />} />
          <Route path="/reports" element={<Blank />} />
          <Route path="/transfers" element={<Blank />} />
          <Route path="/projects" element={<Blank />} />
          <Route path="/settings" element={<Blank />} />
          <Route path="/support" element={<Blank />} />
          <Route path="/feedback" element={<Blank />} />
          <Route path="/raiseTicket" element={<Blank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
