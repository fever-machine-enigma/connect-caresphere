import {
  BiUserPin,
  BiHome,
  BiReceipt,
  BiSolidCapsule,
  BiSolidInjection,
  BiSolidBrain,
  BiSolidCog,
  BiSolidHelpCircle,
} from "react-icons/bi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Home",
    path: "/",
    icon: <BiHome />,
  },
  {
    key: "appointment",
    label: "Doctors",
    path: "/appointment",
    icon: <BiUserPin />,
  },
  {
    key: "prescription",
    label: "Prescription",
    path: "/prescription",
    icon: <BiReceipt />,
  },
  {
    key: "medication",
    label: "Medication",
    path: "/medication",
    icon: <BiSolidCapsule />,
  },
  {
    key: "vaccination",
    label: "Vaccination",
    path: "/vaccination",
    icon: <BiSolidInjection />,
  },
  {
    key: "feedback",
    label: "Feedback",
    path: "/feedback",
    icon: <BiSolidBrain />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <BiSolidCog />,
  },
  {
    key: "help",
    label: "Help & Support",
    path: "/help",
    icon: <BiSolidHelpCircle />,
  },
];
