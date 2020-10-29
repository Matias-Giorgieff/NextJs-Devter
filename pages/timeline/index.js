import styles from '../../styles/Timeline.module.css';
import Link from 'next/link';

export default function Timeline () {
    return (
        <>
            <Link href='/'><a>Go Home</a></Link>
            <h1 className={styles.titulo}>This is the timeline</h1>
        </>
    )
}