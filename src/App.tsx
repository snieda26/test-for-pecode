import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Header } from './components';
import { Characters, WishList } from './pages';



function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
