import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/components/Card.module.scss';

export const Card = (props) => {
    console.log(props[0], props[1], 'cards', props);
    return (
        <section className={styles.card} key={`${props[0]}${props[1].usd}`}>
            <div className={styles.card__image}>
                {' '}
                <Link href={`/coin/${props[0]}`}>
                    <Image
                        src={`/coins/${props[0]}.png`}
                        width={200}
                        height={200}
                        alt='image of coin'
                    />
                </Link>
            </div>
            <div>
                <Link href={`/coin/${props[0]}`}>
                    <h4 className={styles.card__title}>{props[0]}</h4>
                </Link>
                <p className={styles.card__description}>usd: {props[1].usd}</p>
                <p className={styles.card__description}>eur: {props[1].eur}</p>
                <Link href={`/coin/${props[0]}`}>
                    <span className={styles.card__link}>More...</span>
                </Link>
            </div>
        </section>
    );
};
