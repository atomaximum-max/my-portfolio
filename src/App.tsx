import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./pages/HomePage/HomePage"
import CasePage from "./pages/CasePage/CasePage"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ui/ScrollToTop"
import { BackToTop } from "./components/ui/BackToTop"

function App() {
  return (
    <BrowserRouter basename="/my-portfolio">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case/:id" element={<CasePage />} />
      </Routes>
      <Footer/>

      {/* Добавляем блок размытия */}
      <div className="bottom-blur" />
      <BackToTop />
    </BrowserRouter>
  )
}

export default App
