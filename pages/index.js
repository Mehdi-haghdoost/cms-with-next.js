import Course from '@/components/templates/index/Course'
import coureModel from '@/models/course';
import connectToDB from '@/utils/db'
import React from 'react'

function index() {
  return (
    <Course />
  )
}


export async function getStaticProps(context) {
  connectToDB();
  
  const courses = await coureModel.find({})
  console.log(courses);

  return {
    props: {}
  }
}

export default index