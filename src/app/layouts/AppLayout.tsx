import {
  BarChart3,
  CalendarDays,
  CheckSquare,
  Clock3,
  GraduationCap,
  LayoutDashboard,
  Settings,
} from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

export type Navigation = {
  label: string;
  path: string;
  icon: any;
}[];

const navigation = [
  {
    label: "Tableau de bord",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Emploi du temps",
    path: "/timetable",
    icon: CalendarDays,
  },
  {
    label: "Tâches",
    path: "/tasks",
    icon: CheckSquare,
  },
  {
    label: "Devoirs",
    path: "/assignments",
    icon: GraduationCap,
  },
  {
    label: "Révisions",
    path: "/focus",
    icon: Clock3,
  },
  {
    label: "Statistiques",
    path: "/statistics",
    icon: BarChart3,
  },
];

export function AppLayout() {
  return (
    <div className="flex min-h-screen bg-zinc-50 text-zinc-950">
      <aside className="flex h-screen w-64 flex-col justify-between border-r border-zinc-200 bg-white p-4">
        <div>
          <div className="mb-8">
            <p className="text-xl font-bold">Study Live</p>
            <p className="text-sm text-zinc-500">Organise ta vie étudiante</p>
          </div>

          <nav className="space-y-1">
            {navigation.map(({ label, path, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  [
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm",
                    isActive
                      ? "bg-zinc-900 text-white"
                      : "text-zinc-600 hover:bg-zinc-100",
                  ].join(" ")
                }
              >
                <Icon className="size-4" />
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="flex w-full items-center gap-2 border-t pt-1">
          <NavLink
            key="/settings"
            to="/settings"
            className={({ isActive }) =>
              [
                "rounded-full p-2",
                isActive
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-600 hover:bg-zinc-100",
              ].join(" ")
            }
          >
            <Settings className="size-4" />
          </NavLink>
        </div>
      </aside>

      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
