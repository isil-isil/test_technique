import type { FC } from "react";
import { useEffect, useState } from "react";
import styles from "./JobForm.module.css";

interface JobFormProps {
  onSubmit: ({
    title,
    category,
    salary,
    type,
  }: {
    title: string;
    category: string;
    salary: string;
    type: string;
  }) => void;
  initialValues?: {
    title: string;
    category: string;
    salary: string;
    type: string;
  }
}

const JobForm: FC<JobFormProps> = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues?.title || "");
  const [category, setCategory] = useState(initialValues?.category || "sales");
  const [salary, setSalary] = useState(initialValues?.salary || "");
  const [type, setType] = useState(initialValues?.type || "cdi");

  useEffect(() => {
    if (initialValues) {
      setTitle(initialValues.title);
      setCategory(initialValues.category);
      setSalary(initialValues.salary);
      setType(initialValues.type);
    }
  }, [initialValues]);

  const handleSubmit = () => {
    onSubmit({ title, category, salary, type });
  };

  return (
    <div className={styles.container}>
      {/* Title */}
      <div className={styles.field}>
        <div className={styles.label}>Titre</div>
        <input
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
      </div>

      {/* Category */}
      <div className={styles.field}>
        <div className={styles.label}>Catégorie</div>
        <select
          value={category}
          onChange={(e) => setCategory(e.currentTarget.value)}
        >
          <option value={"sales"}>Sales</option>
          <option value={"it"}>IT</option>
          <option value={"managment"}>Managment</option>
        </select>
      </div>

      {/* Salary */}
      <div className={styles.field}>
        <div className={styles.label}>Salaire annuel</div>
        <input
          value={salary}
          onChange={(e) => setSalary(e.currentTarget.value)}
        />
      </div>

      {/* Type */}
      <div className={styles.field}>
        <div className={styles.label}>Type de contrat</div>
        <select value={type} onChange={(e) => setType(e.currentTarget.value)}>
          <option value={"cdi"}>CDI</option>
          <option value={"cdd"}>CDD</option>
          <option value={"internship"}>Stage</option>
        </select>
      </div>

      {/* Buttons */}
      <div className={styles.buttons}>
        <div className={styles.button} onClick={() => handleSubmit()}>
          Enregistrer
        </div>
      </div>
    </div>
  );
};

export default JobForm;
