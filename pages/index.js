import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Home.module.scss';

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <section className={styles.start}>
                <div className={styles.start__description}>
                    <p className={styles.start__text}>
                        You know how many cost your favorite crypto?
                    </p>
                    <p className={styles.start__subtext}>
                        <Link href='/dashboard'>
                            <button className={styles.start__link}>
                                {' '}
                                Check it now!!
                            </button>
                        </Link>
                    </p>
                    <p className={styles.start__subtext}>
                        Crypto.observer.com is one of the best exchange
                        services. Find you favorite coin and observer it!!
                    </p>
                </div>

                <div className={styles.start__image}>
                    <Image src='/image_21.png' width={605} height={660} />
                </div>
            </section>
            <section className={styles.about}>
                <div className={styles.about__images}>
                    <div className={styles.about__image}>
                        <Image
                            src='/Binance Coin.png'
                            width={265}
                            height={153}
                        />
                    </div>
                    <div className={styles.about__image}>
                        <Image src='/Bitcoin.png' width={265} height={153} />
                    </div>
                    <div className={styles.about__image}>
                        <Image src='/Dogecoin.png' width={265} height={153} />
                    </div>
                    <div className={styles.about__image}>
                        <Image src='/Ethereum.png' width={265} height={153} />
                    </div>
                </div>
                <div className={styles.about__description}>
                    <h2 className={styles.about__title}>
                        List of Crypto You Can Observed on Coin.observer.com
                    </h2>
                    <p className={styles.about__text}>
                        It is the best place to observer and learn about crypto.
                    </p>
                </div>
            </section>
        </div>
    );
}
