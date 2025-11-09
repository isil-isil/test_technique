import { useState } from "react";

export const useUpdateJob = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const updateJob: ({
    uuid,
    title,
    category,
    salary,
    type,
  }: {
    uuid: string,
    title: string;
    category: string;
    salary: number;
    type: string;
  }) => void = (data) => {
    setError(null);
    setSuccess(false);

    fetch(`http://localhost:3000/jobs/${data.uuid}`, {
      method: "PUT",
      body: JSON.stringify({
        title: data.title,
        category: data.category,
        salary: data.salary,
        type: data.type,
      }),
      headers: {
        "Content-Type": "application/json",
        "authorization": "ubiquid",
      },
    }).then((response) => {
      if (!response.ok) {
        response.json().then((r) => setError(r.message));
      } else {
        response.json().then(() => setSuccess(true));
      }
    });
  };

  return { updateJob, error, success };
};
