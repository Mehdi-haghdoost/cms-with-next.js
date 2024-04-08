import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Navbar.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = () => {

    const router = useRouter()
    

    const [search, setSearch] = useState('')

    const searchHandler = () => {

        if(search.trim()) {
            router.push(`/search?q=${search}`)
        }
    }

    useEffect(() => {
        setSearch(router.query.q)
    }, [])

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_search}>
                <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    type="text"
                    placeholder="جستجو کنید...."
                />
                <span className={styles.navbar_search_icon} onClick={searchHandler}>
                    <FontAwesomeIcon icon={faSearch} />
                </span>
            </div>
            <div className={styles.navbar_user_avatar}>
                <img src="/images/avatar/1.png" alt="" />
            </div>
        </nav>
    )
}

export default Navbar
