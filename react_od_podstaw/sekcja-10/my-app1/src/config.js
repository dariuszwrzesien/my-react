import AdminPanel from "./pages/AdminPanel";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

export const routeList = [
  {
    name: "Start",
    path: "/",
    exact: true,
    background: "header1.jpg",
    component: <Home />,
  },
  {
    name: "Blog",
    path: "/blog",
    background: "header2.jpg",
    component: <Blog />,
  },
  {
    name: "Contact",
    path: "/contact",
    background: "header3.jpg",
    component: <Contact />,
  },
  {
    name: "Admin panel",
    path: "/admin-panel",
    background: "header4.jpg",
    component: <AdminPanel />,
  },
];
