import type { FC } from "react";
import JobForm from "../../components/JobForm/JobForm";
import { useAddJob } from "../../hooks/useAddJob";

const AddJob: FC = () => {
  const { addNewJob, error, success } = useAddJob();

  return (
    <div>
      {error && <div>{error}</div>}
      {success && <div>YEAH !</div>}
      <JobForm onSubmit={(e) => addNewJob({ ...e, salary: +e.salary })} />
    </div>
  );
};

export default AddJob;
