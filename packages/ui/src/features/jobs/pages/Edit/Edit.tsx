import type { FC } from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import JobForm from "../../components/JobForm/JobForm";
import { useUpdateJob } from "../../hooks/useUpdateJob";
import { useJobs } from "../../hooks/useJobs";

const EditJob: FC = () => {
    const { uuid } = useParams<{ uuid: string }>();
    const navigate = useNavigate();
    const { jobs } = useJobs();
    const { updateJob, error, success } = useUpdateJob();
    const [job, setJob] = useState<{
    title: string;
    category: string;
    salary: string;
    type: string;
    } | null>(null);

    useEffect(() => {
        if (uuid) {
            const foundJob = jobs.find((j) => j.uuid === uuid);
            if (foundJob) {
                setJob({
                    title: foundJob.title,
                    category: foundJob.category,
                    salary: foundJob.salary.toString(),
                    type: foundJob.type,
                });
            }
        }
    }, [uuid, jobs]);

    useEffect(() => {
        if (success) navigate("/");
    }, [success, navigate]);

    if (!job) return <div>Chargement...</div>;

    const handleSubmit = ({
        title,
        category,
        salary,
        type,
    }: {
        title: string;
        category: string;
        salary: string;
        type: string;
    }) => {
        if (uuid) {
            updateJob({
                uuid,
                title,
                category,
                salary: parseInt(salary),
                type,
            });
        }
    };

    return (
        <div>
            <h1>Modifier l'annonce</h1>
            {error && <div style={{ color: "red" }}>⚠️ {error}</div>}
            <JobForm onSubmit={handleSubmit} initialValues={job} />
        </div>
    );
};

export default EditJob;
