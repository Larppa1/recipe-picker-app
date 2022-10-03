import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Recipes from "./pages/Recipes"

export default function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/recipes" element={<Recipes />}/>
      </Routes>
    </Router>
  )
}
