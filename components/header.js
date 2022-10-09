import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <Link href='/'>
                    <>
                        <h1 className={styles.title}>
                            <Image
                                src='/logo.svg'
                                width={30}
                                height={30}
                                alt='logo'
                            />
                            Coin
                        </h1>
                        <h2 className={styles.subtitle}>observer</h2>
                    </>
                </Link>
            </div>
            <nav className={styles.navigation}>
                <Link href='/'>
                    <a className={styles.navigation__item}>Main</a>
                </Link>
                <Link href='/dashboard'>
                    <a className={styles.navigation__item}>Dashboard</a>
                </Link>
                <Link href='/about'>
                    <a className={styles.navigation__item}>About</a>
                </Link>
            </nav>
        </header>
    );
};
