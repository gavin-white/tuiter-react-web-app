import Labs from "./labs";
import Tuiter from "./tuiter";
import TuiterHome from "./tuiter/home";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route index
                   element={<Labs/>}/>
            <Route path="/*" element={<Labs/>}/>
            <Route path="/tuiter" element={<TuiterHome/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}
export default App;
