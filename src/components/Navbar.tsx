import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link href="/" className={styles.link}>Home</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/about" className={styles.link}>About</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/services" className={styles.link}>Services</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/contact" className={styles.link}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;