
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import Blog from './Components/Pages/Blog';
import Dashbord from './Components/Dashbord/Dashbord';
import SingleBlog from './Components/Pages/SingleBlog';
import Service from './Components/Pages/Service';
import Project from './Components/Pages/Project';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/contact'  element={<Contact></Contact>}></Route>
          <Route path='/blog'  element={<Blog></Blog>}></Route>
          <Route path='/single-blog'  element={<SingleBlog></SingleBlog>}></Route>
          <Route path='/service'  element={<Service></Service>}></Route>
          <Route path='/project'  element={<Project></Project>}></Route>
          <Route path='dashbord'  element={<Dashbord></Dashbord>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
