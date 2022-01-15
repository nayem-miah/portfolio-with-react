import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import Blog from "./Components/Pages/Blog";
import Dashbord from "./Components/Dashbord/Dashbord";
import SingleBlog from "./Components/Pages/SingleBlog";
import Service from "./Components/Pages/Service";
import Project from "./Components/Pages/Project";
import NoPageFound from "./Components/Pages/NoPageFound";
import LoginPage from "./Components/Pages/LoginPage";
import AuthContext from "./Context/AuthContext";
import CreateBlogPost from "./Components/Dashbord/Page/CreateBlogPost";
import AllBlogPost from "./Components/Dashbord/Page/AllBlogPost";
import AddSlider from "./Components/Dashbord/Page/AddSlider";
import RemoveSlider from "./Components/Dashbord/Page/RemoveSlider";
import AddWorkingSection from "./Components/Dashbord/Page/AddWorkingSection";
import RemoveSection from "./Components/Dashbord/Page/RemoveSection";

function App() {
  return (
    <div className="App">
      <AuthContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/blog" element={<Blog></Blog>}></Route>
            <Route
              path="/single-blog"
              element={<SingleBlog></SingleBlog>}
            ></Route>
            <Route path="/service" element={<Service></Service>}></Route>
            <Route path="/project" element={<Project></Project>}></Route>
            <Route path="/dashbord" exact element={<Dashbord></Dashbord>}></Route>
            <Route
              path="/admin-box"
              exact
              element={<LoginPage></LoginPage>}
            ></Route>
            <Route path="/create-blog-post" element={<CreateBlogPost></CreateBlogPost>}></Route>
            <Route path="/all-blog-post" element={<AllBlogPost></AllBlogPost>}></Route>
            <Route path="/add-slider" element={<AddSlider></AddSlider>}></Route>
            <Route path="/remove-slider" element={<RemoveSlider></RemoveSlider>}></Route>
            <Route path="/add-section" element={<AddWorkingSection></AddWorkingSection>}></Route>
            <Route path="/remove-section" element={<RemoveSection></RemoveSection>}></Route>

            <Route path="*" element={<NoPageFound></NoPageFound>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthContext>
    </div>
  );
}

export default App;
