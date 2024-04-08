import Course from '@/components/templates/search/Course'
import coureModel from '@/models/course';
import connectToDB from '@/utils/db'
import React from 'react'

function index({ courses }) {

    return (
        <Course courses={courses} />
    )
}


export async function getServerSideProps(context) {
    connectToDB();
    const { query } = context
    const courses = await coureModel.find({ title: { $regex: query.q } })

    console.log(courses);


    return {
        props: {
            courses: JSON.parse(JSON.stringify(courses))
        },
    }
}

export default index