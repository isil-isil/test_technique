import type { FC } from "react";
import { Outlet } from "react-router";
import styles from "./Layout.module.css";
import Topbar from "./Topbar/Topbar";

const Layout: FC = () => {
  return (
    <div className={styles.container}>
      <Topbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
