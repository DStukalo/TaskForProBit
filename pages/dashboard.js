import { useEffect, useState } from 'react';

import { Card } from '../components/Card';
import styles from '../styles/pages/Dashboard.module.scss';
import LoadingScreen from '../components/Loader';

export default function Dashboard() {
    const [state, setState] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(false);
            const response = await fetch(
                'https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cbitcoin%2Cbinancecoin%2Cdogecoin%2Cshiba-inu%2Ctron&vs_currencies=usd%2Ceur'
            );
            const data = await response.json();
            console.log(data, Date());
            setState(data);
        };
        setInterval(fetchData, 10000);
    }, []);

    if (state) {
        console.log(Object.entries(state));
    }
    return (
        <div className={styles.dashboards}>
            <h2 className={styles.dashboards__title}>
                The most popular currency:
            </h2>
            <section className={styles.cards}>
                {state && Object.entries(state).map((el) => Card(el))}
                {isLoading && <LoadingScreen />}
            </section>
        </div>
    );
}
