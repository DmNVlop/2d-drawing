import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import CountetopContextProvider from "./countertops1/context/ct-context-provider";
import CountertopHome from "./countertops1/pages/countertop-home";
import Loading from "./countertops1/components/Simple-Componentes/loading";

// const HomePage = lazy(() => import("./HomePage"));
const NotFoundPage = lazy(() => import("./shared/not-found-page"));
const CountertopPage = lazy(() =>
  import("./countertops1/pages/countertop-page")
);
const SimpleCTPage = lazy(() => import("./countertops1/pages/simplect-page"));
const LShapedPage = lazy(() => import("./countertops1/pages/L-shaped-page"));
const UShapedPage = lazy(() => import("./countertops1/pages/U-shaped-page"));

import RectLTemplateTest from "./countertops1/components/TEST/rect-l-test.template";
const AppFormTest = lazy(() =>
  import("./countertops1/components/TEST/form-test")
);

const RoutersApp = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Navigate to="/countertop" />} />
          <Route path="/" element={<Navigate to="/countertop" />} />
          {/* <Route path="/" element={<HomePage />} /> */}

          <Route path="/not-found" element={<NotFoundPage />} />

          <Route path="*" element={<Navigate to="/not-found" />} />

          <Route path="/loading" element={<Loading />} />

          <Route
            path="/countertop"
            element={
              <CountetopContextProvider>
                <CountertopPage />
              </CountetopContextProvider>
            }
          >
            <Route path="test" element={<RectLTemplateTest />} />
            <Route path="test-form" element={<AppFormTest />} />

            <Route
              path="simple"
              element={
                <SimpleCTPage shape={"simple"} title="Encimera Simple" />
              }
            />
            <Route
              path="square"
              element={
                <SimpleCTPage shape={"square"} title="Encimera Cuadrada" />
              }
            />
            <Route
              path="circle"
              element={
                <SimpleCTPage shape={"circle"} title="Encimera Circular" />
              }
            />
            <Route
              path="l-shaped"
              element={<LShapedPage title="Encimera en L" />}
            />
            <Route
              path="u-shaped"
              element={<UShapedPage title="Encimera en U" />}
            />
            <Route path="" element={<CountertopHome />} />

            <Route path="*" element={<Navigate to="/not-found" />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default RoutersApp;
