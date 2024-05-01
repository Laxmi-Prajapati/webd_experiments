// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/index.jsx'
import Blog from './pages/Blog/index.jsx'


const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path = "/" exact element={<Home/>}/>
        <Route path = "/blog/:id" element={<Blog/>}/>
      </Routes>
    </div>
  );
}

export default App;
