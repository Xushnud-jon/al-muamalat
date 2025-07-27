import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ShowLayout from './components/showlayout.jsx';
import Homepage from './pages/HomePage/index.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { ThreeDot } from 'react-loading-indicators';

// Barcha sahifalarni lazy loading bilan yuklash
const InternationalPrograms = React.lazy(() => import('./pages/HomePage/Programs/InternationalPage/index.jsx'));
const SpecializedCourses = React.lazy(() => import('./pages/HomePage/Programs/SpecializedCourses'));
const IslamicFinance = React.lazy(() => import('./pages/HomePage/Programs/IslamicFinanceLiteracyCourse'));
const CertificationProgram = React.lazy(() => import('./pages/HomePage/Programs/CertificationProgram'));
const LoginPage = React.lazy(() => import('./pages/AuthPage/_components/Login'));
const RegisterPage = React.lazy(() => import('./pages/AuthPage/_components/Register'));
const ContactPage = React.lazy(() => import('./pages/Contact/index.jsx'));

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col max-w-[1700px] m-auto">
        <ShowLayout>
          <Header />
        </ShowLayout>

        <main className="flex-1">
          <Suspense fallback={
            <div className="flex justify-center items-center h-[80vh]">
              <ThreeDot 
                variant="bounce" 
                color="#009688"
                size="large"
              />
            </div>
          }>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/international-programs" element={<InternationalPrograms />} />
              <Route path="/specialized-courses" element={<SpecializedCourses />} />
              <Route path="/islamic-finance" element={<IslamicFinance />} />
              <Route path="/certification" element={<CertificationProgram />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </main>

        <ShowLayout>
          <Footer />
        </ShowLayout>
      </div>
    </Router>
  );
}

export default App;