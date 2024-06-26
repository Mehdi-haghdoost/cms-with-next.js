import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCashRegister, faFile, faTag, faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Modal.module.css";
import { useState } from "react";
import swal from "sweetalert";

const AddCourseModal = ({ hideAddCourseModal, getAllCourses }) => {

    const [title, setTitle] = useState('')

    const addNewCourse = async (event) => {
        event.preventDefault();

        const res = await fetch('/api/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title })
        });
        const data = await res.json()

        if (res.status === 201) {
            getAllCourses()
            swal({
                title: 'دوره با موفقیت ایجاد شد',
                icon: 'success',
                buttons: 'اوکی'
            })
            setTitle('')
            hideAddCourseModal()
        }
    }

    return (
        <div className={styles.modal_container} id="add-new-course-modal">
            <div className={styles.modal_bg} onClick={hideAddCourseModal}></div>
            <div className={styles.modal_content}>

                <h1 className={styles.modal_title}>اضافه کردن دوره جدید</h1>
                <form action="#" className={styles.edit_user_form} onSubmit={addNewCourse}>
                    <div className={styles.input_field}>
                        <span><FontAwesomeIcon icon={faTag} /></span>
                        <input
                            value={title}
                            onChange={event => setTitle(event.target.value)}
                            type="text"
                            placeholder="نام دوره"
                            spellcheck="false"
                        />
                    </div>


                    <button type="submit" className={styles.update_btn} onClick={getAllCourses} >
                        ایجاد دوره
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddCourseModal
