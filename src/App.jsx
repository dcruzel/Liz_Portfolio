// Todo: Bring in the required import from 'react-router-dom'
import {  Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <header>
      <Nav />
      </header>
      <body>
      {/* Todo: Fill in the appropriate component so that the user will conditionally see the appropriate view based on the URL */}
      <main className="mx-3">
        <Outlet />
      </main>  
      </body>
      <Footer />  
    </>
  );
}

export default App;
