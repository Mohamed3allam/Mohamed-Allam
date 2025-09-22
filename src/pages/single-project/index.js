// SingleProject.jsx
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../portfolio/projects";
import { Container } from "react-bootstrap";


export default function SingleProject() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === Number(id));

    if (!project) return <p>Not found</p>;

    return (
        <Container className="p-6">
            <Link to="/" className="text-blue-500">⬅ Back</Link>

            {/* Shared element */}
            <motion.div layoutId={`project-${project.id}`} className="mb-6">
                <img src={project.imageUrl} alt={project.name} className="w-100 rounded-lg" />
            </motion.div>

            {/* Other data fades in */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold"
            >
                {project.name}
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 text-gray-600"
            >
                {project.description}
            </motion.p>
        </Container>
    );
}
