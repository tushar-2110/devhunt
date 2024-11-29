// import { Navbar } from 'react-bootstrap';
import './App.css';
import Footer from './pages/Footer';
import Navbar from "./pages/Navbar"
import Homepage from "./pages/Homepage"

function App() {
  return (
    <div >
      <header><Navbar/></header>
       
       <main>
            <Homepage/>
       </main>

       <footer className='custom-footer'><Footer/></footer>

    </div>
  );
}

export default App;
