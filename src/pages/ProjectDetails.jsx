import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router';

const ProjectDetails = () => {
    const {id}=useParams();

    const {data:project, isLoading}=useQuery({
        queryKey: ['project', id],
        queryFn: async()=> {
           const res= await axios.get(`/data/projects.json`)
           const projects=res?.data;
           return projects.find(p=>p?.id===parseInt(id))
        },
        staleTime: Infinity
    })

    if(isLoading) {
    return <div className='text-green-600 font-semibold text-center'>Loading project details...</div>
}
    return (
        <section className='padding bg-teal-200/50 min-h-screen py-10 '>
            <div className='w-full mb-10'>
                <img className='w-full' src={project?.image} alt="" />
            </div>
            <h2 className='text-3xl font-semibold text-purple-600 mb-5'>
                {project?.name}
            </h2>
            <p className='mb-2'>
                <span className='text-lg font-semibold'>Project Description:</span> <br/>
                {project?.description}
            </p>
            <p className='mb-2'>
                 <span className='text-lg font-semibold'>Project Live Link:</span> {project?.liveLink}
            </p>
            <p className='mb-2'>
                 <span className='text-lg font-semibold'>Project Github Repository Link:</span> {project?.githubLink}
            </p>
            <p className='mb-2'>
                 <span className='text-lg font-semibold'>Challenges faced while developing the project:</span> <br/>
                 {project?.challenges}
            </p>
            <p className='mb-2'>
                 <span className='text-lg font-semibold'>Potential Improvements and Future Plan for the Project:</span> <br/>
                 {project?.futurePlans}
            </p>
        </section>
    );
};

export default ProjectDetails;