import './App.css';
import Footer from './pages/Footer';
import Navbar from './pages/Navbar';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> {/* Wrap the entire routing in BrowserRouter */}
      <div>
        <header>
          <Navbar />
        </header>

        <main>
          <Routes>
            {/* Updated to use "path" and removed "exact" */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
        </main>

        {/* <footer className="custom-footer">
          <Footer />
        </footer> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
