import {
  Home,
  BarChart,
  HelpCircle,
  ShieldAlert,
  LayoutDashboard,
  ActivitySquare,
} from "lucide-react";
import { ROUTES } from "@/pages/routes";
import { UserModel } from "@/types";
import { Roles } from "@/constants";
import { ReactNode } from "react";

interface SidebarItem {
  name: string;
  link: string;
  path: string;
  icon: ReactNode;
  condition?: (user: UserModel | null) => boolean | undefined;
}

export const sidebarItems: SidebarItem[] = [
  {
    name: "Home",
    link: ROUTES.home,
    path: ROUTES.home,
    icon: <Home />,
  },
  {
    name: "Dashboard",
    link: ROUTES.dashboard.base,
    path: ROUTES.dashboard.base,
    icon: <LayoutDashboard />,
  },
  {
    name: "Analytics",
    link: ROUTES.analytics,
    path: ROUTES.analytics,
    icon: <BarChart />,
  },
  {
    name: "Activity",
    link: ROUTES.activity,
    path: ROUTES.activity,
    icon: <ActivitySquare />,
  },
  {
    name: "Get Help",
    link: ROUTES.help,
    path: ROUTES.help,
    icon: <HelpCircle />,
  },
  {
    name: "Admin Panel",
    link: ROUTES.admin,
    path: ROUTES.admin,
    icon: <ShieldAlert />,
    condition: (user: UserModel | null) => user?.roles.includes(Roles.Admin),
  },
];
