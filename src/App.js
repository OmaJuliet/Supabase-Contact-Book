import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
// import Home from './Pages/Home';
// import Update from './Pages/Update';
// import Create from './Pages/Create';
import React, { lazy, Suspense } from 'react';
import Loading from './Components/Loading';

const Home = lazy(() => import("./Pages/Home"));
const Create = lazy(() => import("./Pages/Create"));
const Update = lazy(() => import("./Pages/Update"));


function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/:id" element={<Update />} />
          </Routes>
        </Suspense>

      </Router>
    </>
  );
}

export default App;
