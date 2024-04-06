import React, { useState } from 'react'
import CoursesItem from "@/components/modules/courseItem/courseItem"
import AddCourseModal from './AddCourseModal';
import styles from "@/styles/Course.module.css";

function Course({ data }) {
    const [showAddCourseModal, setShowAddCourseModal] = useState(false);

    const hideAddCourseModal = () => setShowAddCourseModal(false);

    return (
        <>
            <section className={styles.courses}>
                <div className={styles.courses_top}>
                    <h2 className={styles.courses_title}>دوره ها</h2>
                    <a
                        href="#"
                        className={styles.new_course_btn}
                        onClick={() => setShowAddCourseModal(true)}
                    >
                        اضافه کردن دوره جدید
                    </a>
                </div>
                <ul className={styles.courses_list}>
                    {
                        data.map(course => (
                            <CoursesItem  {...course} key={course._id} />
                        ))
                    }
                </ul>
            </section>

            {showAddCourseModal && (
                <AddCourseModal hideAddCourseModal={hideAddCourseModal} />
            )}
        </>
    )
}

export default Course