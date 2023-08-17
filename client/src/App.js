import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";



function App() {
  return (
    <>
        <BrowserRouter>
          <Header />
          <Toaster />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:id" element={<Project />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
    </>
  );
}

export default App;
