//import reactDom, createBrowserRouter, and RouterProvider

import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Bringing in the pages the router will use to conditionally
import App from './App';
import ErrorPage from './pages/ErrorPage';
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
