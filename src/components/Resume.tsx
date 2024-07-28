"use client"
import React from 'react'
import TimeLine from './TimeLine';
import { educationEvents, professionalEvents } from '@/contants';

const Resume = () => {
    return (
        <>
            <h1 className='text-4xl text-gray-700 font-extrabold mb-2'>Academic knowledge and hands-on expertise</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">

                <div className="p-1">
                    <h2 className="text-2xl text-gray-700 font-extrabold mb-2">Education</h2>
                    <TimeLine events={educationEvents} />
                </div>
                <div className="p-1">
                    <h2 className="text-2xl text-gray-700 font-extrabold mb-2">Experience</h2>
                    <TimeLine events={professionalEvents} />
                </div>
            </div>
        </>

    )
}

export default Resume;


