import ChildList from "./pages/ChildList.js";
import {
  HashRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div>
      <div>
        <Router>
          <Routes>
            <Route exact path="/main" element={<MainPage />} />
            <Route path="/" element={<Navigate replace to="/main" />} />
            <Route path="/kids" element={<ChildList />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
