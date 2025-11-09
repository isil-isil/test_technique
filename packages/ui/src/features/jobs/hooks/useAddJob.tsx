import { useState } from "react";

export const useAddJob = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSucces] = useState(false);

  const addNewJob: ({
    title,
    category,
    salary,
    type,
  }: {
    title: string;
    category: string;
    salary: number;
    type: string;
  }) => void = (e) => {
    setError(null);
    setSucces(false);

    fetch("http://localhost:3000/jobs", {
      method: "post",
      body: JSON.stringify(e),
      headers: {
        "Content-Type": "application/json",
        "authorization": "ubiquid",
      },
    }).then((response) => {
      if (!response.ok) {
        response.json().then((r) => setError(r.message));
      } else {
        response.json().then(() => setSucces(true));
      }
    });
  };

  return { addNewJob, error, success };
};
