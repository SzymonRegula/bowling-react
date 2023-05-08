import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home';
import RootLayout from './pages/root';
import ErrorPage from './pages/error';
import BowlingPage from './pages/bowling';
import BarPage from './pages/bar';
import GalleryPage from './pages/gallery';
import ContactPage from './pages/contact';
import BookingPage from './pages/booking';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/bowling',
        element: <BowlingPage />,
      },
      {
        path: '/bar',
        element: <BarPage />,
      },
      {
        path: '/gallery',
        element: <GalleryPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/booking',
        element: <BookingPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
