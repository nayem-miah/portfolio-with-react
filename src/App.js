import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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


function App() {
  return (
    <div className="App">
      <AuthContext>
        <Router>
          <ScrollToTop>
          <Switch>
            <Route path="/" exact><Home /> </Route>
            <Route path="/home"><Home /></Route>
            <Route path="/contact"><Contact /></Route>
            <Route path="/blog"><Blog /></Route>
            <Route path="/single-blog/:slug"><SingleBlog/></Route>
            <Route path="/service"><Service /></Route>
            <Route path="/project"> <Project /></Route>
            <PrivateRoute path="/dashbord"><Dashbord /></PrivateRoute>
            <Route path="/admin-box"><LoginPage /> </Route>
            <PrivateRoute path="/create-blog-post"> <CreateBlogPost/></PrivateRoute>          
            <PrivateRoute path="/all-blog-post"> <AllBlogPost /></PrivateRoute>
            <PrivateRoute path="/add-slider"><AddSlider/></PrivateRoute>
            <PrivateRoute path="/remove-slider"> <RemoveSlider/></PrivateRoute>
            <PrivateRoute path="/add-section"><AddWorkingSection/></PrivateRoute>
            <PrivateRoute path="/remove-section"><RemoveWorkingSection/></PrivateRoute>
            <PrivateRoute path="/add-project"><AddProject/></PrivateRoute>
            <PrivateRoute path="/all-project"> <AllProject/></PrivateRoute>

            <Route path="*"><NoPageFound/></Route>
          </Switch>
          </ScrollToTop>
        </Router>
      </AuthContext>
    </div>
  );
}

export default App;
