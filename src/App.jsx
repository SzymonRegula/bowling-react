import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home';
import RootLayout from './pages/root';
import ErrorPage from './pages/error';
import BowlingPage from './pages/bowling';
import BarPage from './pages/bar';
import GalleryPage from './pages/gallery';
import ContactPage from './pages/contact';
import BookingPage from './pages/booking';
import { useDispatch } from 'react-redux';
import { setBooked } from './redux/booking';
import { useEffect } from 'react';

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
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://bowling-booking-4dff2-default-rtdb.europe-west1.firebasedatabase.app/.json`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        if (data) {
          dispatch(setBooked(data));
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
