import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Subscribe } from './components/Subscribe';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { MainPage } from './pages/main';
import { BlogPage } from './pages/blog';
import { PostPage } from './pages/post';
import { useSelector } from 'react-redux';
import { BlogPage2 } from './pages/blog/blog2';

export const App = () => {

  const burgerStatus = useSelector(state => state.burger.status);

  useEffect(()  => {
    if (burgerStatus) {
      document.body.classList.add('overlay');
    } 

    return () => {
      document.body.classList.remove('overlay');
    };
  }, [burgerStatus]); // TODO: make as hook


  return (
    <BrowserRouter>
      <Header/>

      <main className="main">
        <Routes>
          <Route path="/blog" element={<BlogPage/>}/>
          <Route path="/post" element={<PostPage/>} />
          <Route path="/" element={<MainPage/>} />
          <Route path="/blog/blog2" element={<BlogPage2/>} />
        </Routes>
      </main>      

      <Subscribe/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
