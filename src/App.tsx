import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./pages/HomePage/HomePage"
import CasePage from "./pages/CasePage/CasePage"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case/:id" element={<CasePage />} />
      </Routes>
      <Footer/>

      {/* Добавляем блок размытия */}
      <div className="bottom-blur" />
    </BrowserRouter>
  )
}

export default App
