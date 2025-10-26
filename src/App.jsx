import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./pages/Hero";

function App() {
  return (
    <div>
      <Hero />
    </div>
  );
}
export default App;
