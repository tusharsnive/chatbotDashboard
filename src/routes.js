import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import Playground from "views/admin/playground";
import DataTables from "views/admin/tables";
import Chats from "views/admin/chats";
import RTLDefault from "views/rtl/default";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdModelTraining,
  MdApps,
  MdCode,
  MdSpaceDashboard,
  MdLock,
  MdChatBubble,
  MdPerson
} from "react-icons/md";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdSpaceDashboard className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Train",
    layout: "/admin",
    path: "train",
    icon: <MdModelTraining className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "Apps",
    layout: "/admin",
    icon: <MdApps className="h-6 w-6" />,
    path: "apps",
    component: <DataTables />,
  },
  {
    name: "Playground",
    layout: "/admin",
    path: "playground",
    icon: <MdCode className="h-6 w-6" />,
    component: <Playground />,
  },
  {
    name: "Chats",
    layout: "/admin",
    path: "chats",
    icon: <MdChatBubble className="h-6 w-6" />,
    component: <Chats />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "rtl",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <RTLDefault />,
  // },
];
export default routes;
