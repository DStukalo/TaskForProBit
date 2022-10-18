import Chart from '../../components/Chart';
import styles from '../../styles/components/Coin.module.scss';

export async function getServerSideProps(context) {
    const { id } = context.params;
    const responseChart = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30`
    );
    const dataChart = await responseChart.json();

    const responseCoin = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}`
    );
    const dataCoin = await responseCoin.json();
    return {
        props: {
            chart: dataChart,
            coin: dataCoin,
        },
    };
}

const Coin = ({ chart, coin }) => {
    const data = [];
    chart.prices.forEach((element) => {
        const dayOfMonth = new Date(element[0]).getDate();
        const month = new Date(element[0]).getMonth();
        const year = new Date(element[0]).getFullYear();
        const hours = new Date(element[0]).getHours();
        const minute = new Date(element[0]).getMinutes();
        if (minute < 10) {
            const lastVal = minute;
            minute = `0${lastVal}`;
        }
        const fullDate = `${dayOfMonth}.${month}.${year} ${hours}:${minute}`;
        const res = {
            name: fullDate,
            value: element[1],
        };
        data.push(res);
    });
    return (
        <section className={styles.coinInfo}>
            <h2 className={styles.coinInfo__title}>{coin[0].id}</h2>
            {chart && (
                <>
                    <div className={styles.coinInfo__description}>
                        <p className={styles.coinInfo__text}>
                            Coin current price:{' '}
                            <span className={styles.value}>
                                {coin[0].current_price}$
                            </span>
                        </p>
                        <p className={styles.coinInfo__text}>
                            Coin max value from 24 hours:{' '}
                            <span className={styles.value}>
                                {coin[0].high_24h}
                            </span>
                        </p>
                        <p className={styles.coinInfo__text}>
                            Coin min value from 24 hours:{' '}
                            <span className={styles.value}>
                                {coin[0].low_24h}
                            </span>
                        </p>
                        <p className={styles.coinInfo__text}>
                            Coin last update:{' '}
                            <span className={styles.value}>
                                {coin[0].last_updated}
                            </span>
                        </p>
                        <p className={styles.coinInfo__text}>
                            Coin rank:{' '}
                            <span className={styles.value}>
                                {coin[0].market_cap_rank}
                            </span>
                        </p>
                    </div>
                    <div className={styles.coinInfo__chart}>
                        <p className={styles.coinInfo__chart_title}>
                            Chart that shows the dynamics of the coin
                        </p>
                        <Chart val={data} />
                    </div>
                </>
            )}
        </section>
    );
};

export default Coin;
