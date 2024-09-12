import { Link } from "react-router-dom";
import styles from './Nav.module.css';

function NavBar() {
    return (
            <nav className={styles.nav}>
                <Link to={'/'} className={styles.link}>Home</Link>
                <Link to={'/characters'} className={styles.link}>Characters</Link>
                <Link to={'/comics'} className={styles.link}>Comics</Link>
            </nav>
    )
}

export default NavBar; 