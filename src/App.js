import ChildList from "./pages/ChildList.js";
import {
  HashRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/Home/Home";
import Parent from "./pages/Parent/parent";
import ChildPage from "./pages/Child/ChildPage.js";
import About from "./pages/About/about";
import Admin from "./pages/Admin/admin";
import Hash from "./pages/hash-users/hash";
import Users from "./pages/hash-users/users";
import Orders from "./pages/orders";

function App() {
  return (
    <div>
      <div>
        <Router>
          <Routes>
            <Route path="/kids" element={<ChildList />} />
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/child" element={<ChildPage />} />
            <Route exact path="/parent" element={<Parent />} />
            <Route exact path="/child" element={<ChildPage />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/hash" element={<Hash />} />
            <Route exact path="/users" element={<Users />} />
            <Route path="/parent/orders" element={<Orders />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
