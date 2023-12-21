import ReactDOM from "react-dom/client";
import "./assets/scss/main.scss"
import './App.css';
import MainLayout from "./Layout/mainLayout";
import About from "./pages/About";
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
export default App
