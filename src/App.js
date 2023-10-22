import React from "react";
import "./App.css";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import Blog from "./Components/Pages/Blog";
import Dashbord from "./Components/Dashbord/Dashbord";
import SingleBlog from "./Components/Pages/SingleBlog";
import Service from "./Components/Pages/Service";
import Project from "./Components/Pages/Project";
import NoPageFound from "./Components/Pages/NoPageFound";
import AuthContext from "./Context/AuthContext";
import CreateBlogPost from "./Components/Dashbord/Page/CreateBlogPost";
import AllBlogPost from "./Components/Dashbord/Page/AllBlogPost";
import AddSlider from "./Components/Dashbord/Page/AddSlider";
import RemoveSlider from "./Components/Dashbord/Page/RemoveSlider";
import AddWorkingSection from "./Components/Dashbord/Page/AddWorkingSection";
import AddProject from "./Components/Dashbord/Page/AddProject";
import LoginPage from "./Components/Pages/LogInPage/LoginPage";
import AllProject from "./Components/Dashbord/Page/AllProject";
import PrivateRoute from "./Components/Pages/LogInPage/PrivateRoute";
import ScrollToTop from "./Components/HelpPoint/ScrollToTop";
import RemoveWorkingSection from "./Components/Dashbord/Page/RemoveWorkingSection";



import { BrowserRouter,Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
 
              
     <BrowserRouter>
       <Routes>
        
          <Route path='/' element={ <Home />}></Route>
          <Route path='/service' element={<Service/>}> </Route>
          <Route path='/project' element={<AllProject />}> </Route>
          <Route path='/add-project' element={<AddProject />}> </Route>
          <Route path='/contact' element={<Contact />}> </Route>
          <Route path='/blog' element={<Blog/>}> </Route>
          <Route path='/Singl-blog' element={<SingleBlog />}> </Route>
          <Route path='/create-blog-post' element={<CreateBlogPost />}> </Route>
          <Route path='/add-slider' element={<AddSlider />}> </Route>
          <Route path='/remove-slider' element={<RemoveSlider />}> </Route>
          <Route path='/all-blog-post' element={<AllBlogPost />}> </Route>
          <Route path='/Add-Working-Section' element={<AddWorkingSection />}> </Route>
          <Route path='/remove-working-section' element={<RemoveWorkingSection />}> </Route>
          <Route path='/No-Page-Found' element={<NoPageFound />}> </Route>
          <Route path='/dashbord' element={<Dashbord />}> </Route>

          
       </Routes>
    </BrowserRouter>

   
 
    </div>
  );
}

export default App;

{/* <AuthContext>
        <Router>
          <ScrollToTop>
            <Switch>
              <Route path="/" exact>
                <Home />{" "}
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route  path="/contact">
                <Contact />
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/single-blog/:slug">
                <SingleBlog />
              </Route>
              <Route path="/service">
                <Service />
              </Route>
              <Route path="/project">
                {" "}
                <Project />
              </Route>
              <PrivateRoute path="/dashbord">
                <Dashbord />
              </PrivateRoute>
              <Route path="/admin-box">
                <LoginPage />{" "}
              </Route>
              <PrivateRoute path="/create-blog-post">
                {" "}
                <CreateBlogPost />
              </PrivateRoute>
              <PrivateRoute path="/all-blog-post">
                {" "}
                <AllBlogPost />
              </PrivateRoute>
              <PrivateRoute path="/add-slider">
                <AddSlider />
              </PrivateRoute>
              <PrivateRoute path="/remove-slider">
                {" "}
                <RemoveSlider />
              </PrivateRoute>
              <PrivateRoute path="/add-section">
                <AddWorkingSection />
              </PrivateRoute>
              <PrivateRoute path="/remove-section">
                <RemoveWorkingSection />
              </PrivateRoute>
              <PrivateRoute path="/add-project">
                <AddProject />
              </PrivateRoute>
              <PrivateRoute path="/all-project">
                {" "}
                <AllProject />
              </PrivateRoute>

              <Route path="*">
                <NoPageFound />
              </Route>
            </Switch>
          </ScrollToTop>
        </Router>
      </AuthContext> */}