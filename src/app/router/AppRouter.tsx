import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AppLayout } from "@/app/layouts/AppLayout";
import { AssignmentsPage } from "@/features/assignments/pages/AssignmentsPage";
import { DashboardPage } from "@/features/dashboard/pages/DashboardPage";
import { FocusPage } from "@/features/focus/pages/FocusPage";
import { SettingsPage } from "@/features/settings/pages/SettingsPage";
import { StatisticsPage } from "@/features/statistics/pages/StatisticsPage";
import { TasksPage } from "@/features/tasks/pages/TasksPage";
import { TimetablePage } from "@/features/timetable/pages/TimetablePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "timetable",
        element: <TimetablePage />,
      },
      {
        path: "tasks",
        element: <TasksPage />,
      },
      {
        path: "assignments",
        element: <AssignmentsPage />,
      },
      {
        path: "focus",
        element: <FocusPage />,
      },
      {
        path: "statistics",
        element: <StatisticsPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
