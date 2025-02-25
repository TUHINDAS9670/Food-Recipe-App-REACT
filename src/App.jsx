import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDetails from'./pages/RecipeDetails'
import CountryWiseRecipe from "./pages/CountryWiseRecipe";
import Searchresult from "./pages/Searchresult";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:idMeal" element={<RecipeDetails/>}></Route>
          <Route path="/country/:name" element={<CountryWiseRecipe/>}></Route>
          <Route path="/search/:searchItem" element={<Searchresult/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
