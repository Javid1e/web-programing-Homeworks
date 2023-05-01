import { createBrowserRouter } from "react-router-dom";
import Guest from "./Views/Layouts/Guest";
import Default from "./Views/Layouts/Default";
import Main from "./Views/Layouts/Main";
import NotFound from "./Views/Layouts/NotFound";
import H1Q1 from "./Views/Pages/HomeWork1/H1Q1";
import H1Q2 from "./Views/Pages/HomeWork1/H1Q2";
import H1Q3 from "./Views/Pages/HomeWork1/H1Q3";
import H1Q4 from "./Views/Pages/HomeWork1/H1Q4";
import H1Q5 from "./Views/Pages/HomeWork1/H1Q5";
import H1Q6 from "./Views/Pages/HomeWork1/H1Q6";
import H1Q7 from "./Views/Pages/HomeWork1/H1Q7";
import H1Q8 from "./Views/Pages/HomeWork1/H1Q8";
import H2Q1 from "./Views/Pages/HomeWork2/H2Q1";
import H2Q2 from "./Views/Pages/HomeWork2/H2Q2";
import H2Q3 from "./Views/Pages/HomeWork2/H2Q3";
import H2Q4 from "./Views/Pages/HomeWork2/H2Q4";
import H3Q1 from "./Views/Pages/HomeWork3/H3Q1";

const Router = createBrowserRouter([
  {
    path: "/web_programing_homeworks",
    element: <Guest />,
  },
  {
    path: "/homeworks",
    children: [
      {
        path: "homework1",
        element: <Default id={1} />,
      },
      {
        path: "homework2",
        element: <Default id={2} />,
      },
      {
        path: "homework3",
        element: <Default id={3} />,
      },
    ],
  },
  {
    path: "/homeworks/homework1/answers/",
    element: <Main id={1} />,
    children: [
      {
        path: "q1",
        element: <H1Q1 hId={1} aId={1} />,
      },
      {
        path: "q2",
        element: <H1Q2 hId={1} aId={2} />,
      },
      {
        path: "q3",
        element: <H1Q3 hId={1} aId={3} />,
      },
      {
        path: "q4",
        element: <H1Q4 hId={1} aId={4} />,
      },
      {
        path: "q5",
        element: <H1Q5 hId={1} aId={5} />,
      },
      {
        path: "q6",
        element: <H1Q6 hId={1} aId={6} />,
      },
      {
        path: "q7",
        element: <H1Q7 hId={1} aId={7} />,
      },
      {
        path: "q8",
        element: <H1Q8 hId={1} aId={8} />,
      },
    ],
  },
  {
    path: "/homeworks/homework2/answers/",
    element: <Main id={2} />,
    children: [
      {
        path: "q1",
        element: <H2Q1 hId={2} aId={1} />,
      },
      {
        path: "q2",
        element: <H2Q2 hId={2} aId={2} />,
      },
      {
        path: "q3",
        element: <H2Q3 hId={2} aId={3} />,
      },
      {
        path: "q4",
        element: <H2Q4 hId={2} aId={4} />,
      },
    ],
  },
  {
    path: "/homeworks/homework3/answers/",
    element: <Main id={3} />,
    children: [
      {
        path: "q1",
        element: <H3Q1 hId={3} aId={1} />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default Router;
