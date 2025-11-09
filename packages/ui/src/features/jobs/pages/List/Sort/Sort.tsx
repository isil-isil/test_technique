import type { FC } from "react";
import type { SortByT, SortOrderT } from "../../../hooks/useJobs";
import styles from "./Sort.module.css";

interface SortProps {
  sortBy: SortByT;
  sortOrder: SortOrderT;
  setSortBy: (sortBy: SortByT) => void;
  setSortOrder: (sortOrder: SortOrderT) => void;
}

const Sort: FC<SortProps> = ({
  sortBy,
  sortOrder,
  setSortOrder,
  setSortBy,
}) => {
  const handleChangeFilter = (by: SortByT) => {
    if (sortBy === by) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(by);
      setSortOrder("asc");
    }
  };

  return (
    <div className={styles.container}>
      <div
        onClick={() => handleChangeFilter("title")}
        className={styles.button}
      >
        {sortBy === "title" && (
          <span>
            {sortOrder === "asc" && "⬆️"}
            {sortOrder === "desc" && "⬇️"}
          </span>
        )}
        <span>Nom</span>
      </div>
      <div
        onClick={() => handleChangeFilter("category")}
        className={styles.button}
      >
        {sortBy === "category" && (
          <span>
            {sortOrder === "asc" && "⬆️"}
            {sortOrder === "desc" && "⬇️"}
          </span>
        )}
        <span>Catégorie</span>
      </div>
      <div onClick={() => handleChangeFilter("type")} className={styles.button}>
        {sortBy === "type" && (
          <span>
            {sortOrder === "asc" && "⬆️"}
            {sortOrder === "desc" && "⬇️"}
          </span>
        )}
        <span>Type</span>
      </div>
      <div
        onClick={() => handleChangeFilter("salary")}
        className={styles.button}
      >
        {sortBy === "salary" && (
          <span>
            {sortOrder === "asc" && "⬆️"}
            {sortOrder === "desc" && "⬇️"}
          </span>
        )}
        <span>Salaire</span>
      </div>
      <div
        onClick={() => handleChangeFilter("createdAt")}
        className={styles.button}
      >
        {sortBy === "createdAt" && (
          <span>
            {sortOrder === "asc" && "⬆️"}
            {sortOrder === "desc" && "⬇️"}
          </span>
        )}
        <span>Date de création</span>
      </div>
    </div>
  );
};

export default Sort;
