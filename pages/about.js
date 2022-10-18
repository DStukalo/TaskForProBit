import styles from '../styles/pages/About.module.scss';

export default function About() {
    return (
        <section className={styles.about}>
            <div className={styles.about__description}>
                <h2 className={styles.about__title}>About APP</h2>
                <p className={styles.about__text}>
                    This project was made for a test task. The project is built
                    as a Next JS. It consists of the main page, a page of
                    dashboard, an about page and a page that displays
                    information about an individual coin.
                </p>
                <p className={styles.about__text}>
                    The main page is an informative page, where there are a
                    couple of blocks and a button to redirect to dashboard page.
                    Dashboard page displays the 6 most famous currencies, you
                    can see the logo, the value in dollars and euros and go to
                    the page of detailed information about this currency. About
                    page contains information about the application.
                </p>
                <p className={styles.about__text}>
                    Each page contains a header and footer. The header contains
                    a logo and navigation with links to the main page, dashboard
                    and about page. The active page is highlighted. You can go
                    to the currency information page only from the dashboard
                    page. Footer contains links to linkedin and year of
                    development.
                </p>
            </div>
        </section>
    );
}
