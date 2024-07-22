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
import { WORKS_TYPES } from "./countertops1/mocks/WORKS.types";
import { SHAPE_TYPES } from "./countertops1/mocks/SHAPE_TYPES.const";
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
                <SimpleCTPage
                  title="Encimera Simple"
                  shape={SHAPE_TYPES.SIMPLE}
                />
              }
            />
            <Route
              path="square"
              element={
                <SimpleCTPage
                  title="Encimera Cuadrada"
                  shape={SHAPE_TYPES.SQUARE}
                />
              }
            />
            <Route
              path="circle"
              element={
                <SimpleCTPage
                  title="Encimera Circular"
                  shape={SHAPE_TYPES.CIRCLE}
                />
              }
            />
            <Route
              path="l-shaped"
              element={
                <LShapedPage
                  title="Encimera en L"
                  shape={SHAPE_TYPES.LShaped_l1}
                />
              }
            />
            <Route
              path="u-shaped"
              element={
                <UShapedPage
                  title="Encimera en U"
                  shape={SHAPE_TYPES.UShaped_u1}
                />
              }
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
