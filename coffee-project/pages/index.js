import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Banner from '../components/Banner';
import Card from '../components/card';

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log('hello');
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText='View stores nearby'
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image
            src='/static/36779986-hero-image.png'
            width={700}
            height={400}
            alt='hero image'
          />
        </div>
        <Card
          name='DarkHorse Coffee'
          imgUrl='/static/36779986-hero-image.png'
          href='/coffee-store/darkhorse-coffee'
        />
      </main>
    </div>
  );
}
