import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ShowLayout from './components/showlayout.jsx';
import Homepage from './pages/HomePage/index.jsx';
import LoginPage from './pages/AuthPage/_components/Login.jsx';
import RegisterPage from './pages/AuthPage/_components/Register.jsx';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <Router>

      <div className="min-h-screen flex flex-col max-w-[1700px] m-auto  ">
        <ShowLayout>
          <Header />
        </ShowLayout>

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>

        <ShowLayout>
          <Footer />
        </ShowLayout>
      </div>
    </Router>
  );
}

export default App;