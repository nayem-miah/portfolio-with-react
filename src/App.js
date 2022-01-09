
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import Blog from './Components/Pages/Blog';
import Dashbord from './Components/Dashbord/Dashbord';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/contact'  element={<Contact></Contact>}></Route>
          <Route path='/blog'  element={<Blog></Blog>}></Route>
          <Route path='/contact'  element={<Contact></Contact>}></Route>
          <Route path='dashbord'  element={<Dashbord></Dashbord>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
