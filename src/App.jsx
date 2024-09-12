import { Route,Routes } from "react-router-dom";
import DisplayCharacters from "./DisplayCharacters";
import DisplayCharacterDetails from "./details";
import Comics from "./comics";
import Home from "./home";
import NotFound from "./NotFound";

import "./App.css";

function App() {
  return (
    <div>
    <Routes>
      <Route path="/characters" element={<DisplayCharacters />} />
      <Route path="/character/:id" element={<DisplayCharacterDetails />}/>
      <Route path="/comics" element={<Comics />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    </div>
  )
}

export default App;
