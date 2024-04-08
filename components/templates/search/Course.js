import CoursesItem from '@/components/modules/courseItem/courseItem';
import React from 'react'
import styles from "@/styles/Course.module.css";


function Course({courses}) {

    return (
        <>
            <section className={styles.courses}>
                <div className={styles.courses_top}>
                    <h2 className={styles.courses_title}>دوره ها</h2>

                </div>
                <ul className={styles.courses_list}>
                    {
                        courses.map(course => (
                            <CoursesItem  {...course} key={course._id} />
                        ))
                    }
                    

                </ul>
            </section>
        </>
    )
}

export default Course;