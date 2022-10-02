import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Recipes from "./pages/Recipes"

export default function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/recipes" element={<Recipes />}/>
      </Routes>
    </Router>
  )
}
