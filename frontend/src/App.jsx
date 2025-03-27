import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import LogIn from "./pages/LogIn"
import { Routes, Route } from "react-router-dom";
import EachHotel from "./components/EachHotel";

function App() {

  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel" element={<EachHotel />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>

      {/* Footer */}
    </>
  )
}

export default App
