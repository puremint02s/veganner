import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import { Reset } from "styled-reset";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Insights from "./pages/Insights";
import LoginForm from "./pages/login/Login";
import RegisterForm from "./pages/register/Register";
import View from "./pages/view/View";
import Map from "./pages/Map";
import AddPost from "./pages/write/Addpost";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Reset />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/insights" element={<Insights />} />
          {/* <Route path="/board" element={} /> */}
          <Route path="/view" element={<View />} />
          <Route path="/write" element={<AddPost />} />
          <Route path="/explore" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
