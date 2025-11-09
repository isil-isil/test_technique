import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout/Layout";
import AddJob from "./features/jobs/pages/Add/Add";
import JobList from "./features/jobs/pages/List/List";
import EditJob from "./features/jobs/pages/Edit/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <JobList />,
      },
      {
        path: "/add-job",
        element: <AddJob />,
      },
      {
        path: "/edit-job/:uuid",
        element: <EditJob />,
      },
    ],
  },
]);

export default router;
