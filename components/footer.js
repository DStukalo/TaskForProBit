import styles from '../styles/Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__item}>
                2022 <sup>&#169;</sup>
            </div>
            <div className={styles.footer__item}>
                <a
                    href='https://www.linkedin.com/in/dmytro-stukalo-799b50250/'
                    className={styles.footer__link}
                >
                    Author →
                </a>
            </div>
        </footer>
    );
};
