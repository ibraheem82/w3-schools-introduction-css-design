
// import './App.css'
import { Routes, Route } from "react-router-dom";
import StyleSheetOne from './components/StyleSheetOne'
import StyleSheetTwo from "./components/StyleSheetTwo";

function App() {
  

  return (
   <>

<Routes>
        <Route path="/" element={<StyleSheetOne />} />
        <Route path="/stylesheettwo" element={<StyleSheetTwo />} />
      </Routes>
   </>
  )
}

export default App
