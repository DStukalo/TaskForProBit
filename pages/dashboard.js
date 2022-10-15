import { useEffect, useState } from 'react';

import { Card } from '../components/card';
import styles from '../styles/pages/Dashboard.module.scss';

export default function Dashboard() {
    const [state, setState] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                'https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cbitcoin%2Cbinancecoin%2Cdogecoin%2Cshiba-inu%2Ctron&vs_currencies=usd%2Ceur'
            );
            const data = await response.json();
            console.log(data, Date());
            setState(data);
        };
        setInterval(fetchData, 20000);
    }, []);

    if (state) {
        console.log(Object.entries(state));
    }
    return (
        <div className={styles.wrapper}>
            <section className={styles.cards}>
                {state && Object.entries(state).map((el) => Card(el))}
                {!state && <div>Wait few second</div>}
            </section>
        </div>
    );
}
