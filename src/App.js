import {
  HashRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/Home/Home";
import Parent from "./pages/Parent/Parent";
import ChildPage from "./pages/Child/Child";
import MainPage from "./pages/MainPage.js";
import ChildList from "./pages/ChildList.js";
import UsersSearch from "./pages/Admin/UsersSearch";
import OrdersSearch from "./pages/Admin/OrdersSearch";
import OrdersHistory from "./pages/OrdersHistory";

function App() {
  return (
    <div>
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/parent" element={<Parent />} />
            <Route path="/kids" element={<ChildList />} />
            <Route path="/parent/orders" element={<OrdersHistory />} />
            <Route exact path="/child" element={<ChildPage />} />
            <Route exact path="/admin" element={<MainPage />} />
            <Route exact path="/admin/userList" element={<UsersSearch />} />
            <Route exact path="/admin/ordersearch" element={<OrdersSearch />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
