import { Routes, Route } from "react-router-dom";
import LayOutClient from "./components/client/LayOutClient";
import Blog from "./pages/client/Blog";
import Home from "./pages/client/Home";
import Register from "./pages/client/Register";
import Login from "./pages/client/Login";
import ProductDetail from "./pages/client/Product-Detail";
import Shop from "./pages/client/Shop";
import Cart from "./pages/client/Cart";
import LayOutAdmin from "./components/admin/LayOutAdmin";
import Dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Products";
import Orders from "./pages/admin/Orders";
import Categories from "./pages/admin/Categories";
import Users from "./pages/admin/Users";
import AddProduct from "./components/admin/products/AddProduct";
import UpdateProduct from "./components/admin/products/UpdateProduct";
import AddCategory from "./components/admin/categories/AddCategory";
import UpdateCategory from "./components/admin/categories/UpdateCategory";
import EmailResetpass from "./pages/client/Email-Resetpass";
import ResetPassword from "./pages/client/ResetPassword";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<EmailResetpass />} />
        <Route path="/reset-password/:id" element={<ResetPassword />} />
        <Route path="/" element={<LayOutClient />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="admin" element={<LayOutAdmin/>}>
          <Route path="" element={<Dashboard/>}/>
          
          <Route path="products"  element={<Products/>}/>
          <Route path="products/add"  element={<AddProduct/>}/>
          <Route path="products/update/:id"  element={<UpdateProduct/>}/>

          <Route path="categories"  element={<Categories/>}/>
          <Route path="categories/add"  element={<AddCategory/>}/>
          <Route path="categories/update/:id"  element={<UpdateCategory/>}/>

          <Route path="orders"  element={<Orders/>}/>
          <Route path="users"  element={<Users/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;