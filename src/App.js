import {
  HashRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/Home/Home";
import Parent from "./pages/Parent/parent";
import ChildPage from "./pages/Child/Child";
import ChildList from "./pages/Parent/ChildList/ChildList.js";
import UsersSearch from "./pages/Admin/UsersSearch";
import OrdersSearch from "./pages/Admin/OrdersSearch";
import OrdersHistory from "./pages/OrdersHistory";
import About from "./pages/About/about";
import AdminMenu from "./pages/Admin/admin.js";
import HeaderLayout from "./component/header/header";
import FooterLayout from "./component/footer/footer.js";
import { roleValue } from "./shared/contractDeploy";

function App() {
  return (
    <div>
      <div>
        <HeaderLayout />
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/parent" element={<Parent />} />
            <Route path="/kids" element={<ChildList />} />
            <Route path="/parent/orders" element={<OrdersHistory />} />
            <Route exact path="/child" element={<ChildPage />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/admin" element={<AdminMenu />} />
            <Route exact path="/admin/userList" element={<UsersSearch />} />
            <Route exact path="/admin/ordersearch" element={<OrdersSearch />} />
          </Routes>
        </Router>
      </div>
      <FooterLayout />
    </div>
  );
}

export default App;
