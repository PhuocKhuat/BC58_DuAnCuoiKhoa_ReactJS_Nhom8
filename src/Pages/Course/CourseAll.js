import React from 'react'
import Course from './Course/Course'
import Schedule from './Schedule/Schedule'
import CourseOfPage from './Course/CourseOfPage'
import "./Course/styleCourse.css";

export default function CourseAll() {
  return (
    <>
     <Course/>
     <CourseOfPage/>
     <Schedule/>
    </>
  )
}
