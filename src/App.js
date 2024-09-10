import Header from "./Header";
import Nav from "./Nav";
import About from "./About";
import Missing from "./Missing";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Footer from "./Footer";
import Home from "./Home";
import EditPost from "./EditPost";
import Post from "./Post";
import PostLayout from "./PostLayout";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import api from './api/posts';  
import useWindowSize from "./hooks/useWindowSize";
import useAxiosFetch from "./hooks/useAxiosFetch";
import { DataProvider } from "./context/DataContext";

function App() {

  return (
    <div className="App">
      <DataProvider>
        <Header title="Arun Social Media" />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post">
            <Route 
              index 
              element={
                <NewPost />
              }
            />
            <Route path=":id" element={<PostPage />} />
          </Route>
          <Route path="/edit/:id" element={
            <EditPost />
          } />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
          {/* Removed redundant /postpage route */}
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
