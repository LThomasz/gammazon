import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import AllItems from '../components/AllItems/AllItems';
import SingleItem from '../components/SingleItem/SingleItem'
import CreateItem from '../components/CreateItem/CreateItem';
import Reviews from '../components/Reviews/Reviews'
import EditItem from '../components/EditItem/EditItem';
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <h1>Welcome!</h1>,
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
      {
        path: "new-product",
        element: <CreateItem />
      },
      {
        path: "products",
        element: <AllItems />
      },
      {
        path: "products/:productId",
        element: <SingleItem />
      },
      {
        path: "products/:productId/edit",
        element: <EditItem />
      },
      {
        path: "my-products",
        element: <h1>Placeholder for user products page</h1>
      },
      {
        path: "test",
        element: <Reviews />
      }
    ],
  },
]);
