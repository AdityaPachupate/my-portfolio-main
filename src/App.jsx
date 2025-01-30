import Home from "./pages/home"
import { Route, Routes } from "react-router-dom"
import About from "./pages/about"
import Project from "./pages/project"
import ErrorMessage from "./pages/404"
import Dark from "./tool/dark"
import NavLayout from "./Layouts/NavLayout"


function App() {
  return (
    <>
      <Dark>
        <Routes>
          <Route path="/" element={<NavLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
          </Route>
          <Route path="*" element={<ErrorMessage />} />
          
        </Routes>
      </Dark>
    </>
  )
}

export default App
