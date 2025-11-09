import { useEffect, useState } from "react";

type JobCategory = "it" | "sales" | "managment";
type JobType = "cdi" | "cdd" | "internship";
export type SortByT = "title" | "category" | "type" | "salary" | "createdAt";
export type SortOrderT = "asc" | "desc";

export interface Job {
  uuid: string;
  title: string;
  category: JobCategory;
  type: JobType;
  salary: number;
  createdAt: string;
}

const URL = "http://localhost:3000/jobs";

export const useJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortByT>("title");
  const [sortOrder, setSortOrder] = useState<SortOrderT>("asc");
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const getJobs = async () => {
      const response = await fetch(URL, {
        headers: {
          "authorization": "ubiquid",
        }
      });

      if (!response.ok) {
        setError("Erreur de connexion au serveur.");
      }

      const data = await response.json();

      setJobs(data);
    };

    getJobs();
  }, []);

  const sortFn: (a: Job, b: Job) => number = (a, b) => {
    switch (sortBy) {
      case "category": {
        return sortOrder === "asc"
          ? a.category.localeCompare(b.category)
          : b.category.localeCompare(a.category);
      }
      case "salary": {
        return sortOrder === "asc" ? a.salary - b.salary : b.salary - a.salary;
      }

      case "title": {
        return sortOrder === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      }

      case "type": {
        return sortOrder === "asc"
          ? a.type.localeCompare(b.type)
          : b.type.localeCompare(a.type);
      }
      case "createdAt": {
        return sortOrder === "asc"
          ? new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    }
  };

  const searchFn = jobs.filter((job) => {
    return (
      job.title.toLocaleLowerCase().includes(search.toLowerCase()) ||
      job.category.toLocaleLowerCase().includes(search.toLowerCase()) ||
      job.type.toLocaleLowerCase().includes(search.toLowerCase())
    );
  })

  return {
    jobs: searchFn.sort(sortFn),
    error,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    search,
    setSearch,
  };
};
