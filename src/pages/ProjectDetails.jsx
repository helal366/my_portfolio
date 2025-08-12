import React from 'react';
import { useParams } from 'react-router';

const ProjectDetails = () => {
    const {id}=useParams()
    return (
        <section className='text-red-500 padding bg-teal-200/50 min-h-screen'>
            project details here: {id}
        </section>
    );
};

export default ProjectDetails;