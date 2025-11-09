import type { FC } from "react";
import { Link } from "react-router";
import logo from "../../../assets/logo.svg";
import styles from "./Topbar.module.css";

const Topbar: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.branding}>
        <img src={logo} />
        <h1>JobBoard</h1>
      </div>
      <nav>
        <Link to={"/"}>Liste des jobs</Link>
        <Link to={"/add-job"}>Ajouter un job</Link>
      </nav>
    </div>
  );
};

export default Topbar;
