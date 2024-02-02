import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import AllItems from '../components/AllItems/AllItems';
import SingleItem from '../components/SingleItem/SingleItem'
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
        element: <h1>Placeholder for create product page</h1>
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
        element: <h1>Placeholder for product edit page</h1>
      },
      {
        path: "new-product",
        element: <h1>Placeholder for create product page</h1>
      },
      {
        path: "my-products",
        element: <h1>Placeholder for user products page</h1>
      }
    ],
  },
]);
