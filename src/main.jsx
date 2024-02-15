import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import "./assets/styles/index.scss";
import { ThemeProvider } from "./providers/ThemeProvider";
import { Theme } from "./const/theme";
import { Suspense } from "react";
import { routerNavigations } from "./const/router";
import { PageLoader } from "./ui/PageLoader";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: routerNavigations.map(({path, element}) => (
      {
        path: path,
        element: <Suspense fallback={<PageLoader/>}>{element}</Suspense>,
      }
    )),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider inititalTheme={Theme.LIGHT}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>


);
