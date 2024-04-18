import { ROUTES } from "@/pages/routes";
import { BarChart, Edit, PlusCircle, Star } from "lucide-react";

export const buttons = [
  {
    name: "Start a New Job Share",
    link: ROUTES.jobshare.create,
    icon: <PlusCircle />,
    color: "green"
  },
  { name: "Manage My Job Shares", link: "/", icon: <Edit />, color: "blue" },
  { name: "Saved Job Shares", link: "/", icon: <Star />, color: "orange" },
  { name: "View My Analytics", link: "/", icon: <BarChart />, color: "purple" }
];
