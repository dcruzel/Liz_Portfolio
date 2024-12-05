// Todo: Bring in the required import from 'react-router-dom'
import {  Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      {/* Todo: Fill in the appropriate component so that the user will conditionally see the appropriate view based on the URL */}
      <main className="mx-3">
        <Outlet />
      </main>  
      <Footer />  
    </>
  );
}

export default App;
