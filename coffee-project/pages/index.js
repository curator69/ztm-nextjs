import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Banner from "../components/Banner";
import Card from "../components/card";
import { fetchCoffeeStores } from "../lib/coffee-stores";

export async function getStaticProps() {
  const imagesArray = await fetchCoffeeStores();
  const response = await fetch(
    "https://api.foursquare.com/v3/places/nearby?ll=43.65267326999575,-79.39545615725015&query=coffee stores&v=20230302",
    {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY,
      },
    }
  );
  const data = await response.json();

  const transformedData =
    data?.results?.map((venue) => {
      return {
        id: venue.fsq_id,
        ...venue,
      };
    }) || [];

  return {
    props: {
      coffeeStores: { transformedData, imagesArray },
    },
  };
}

export default function Home(props) {
  const handleOnBannerBtnClick = () => {
    console.log("hello");
    // handleTrackLocation();
  };

  const { coffeeStores } = props;
  const { transformedData, imagesArray } = coffeeStores;

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText="View stores nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image
            src="/static/36779986-hero-image.png"
            width={700}
            height={400}
            alt="hero image"
          />
        </div>
        {transformedData.length > 0 && (
          <>
            <h2 className={styles.heading2}>Toronto stores</h2>
            <div className={styles.cardLayout}>
              {transformedData.map((coffeeStore, i) => {
                return (
                  <Card
                    key={coffeeStore.id}
                    name={coffeeStore.name}
                    imgUrl={imagesArray[i]?.imgUrl}
                    href={`/coffee-store/${coffeeStore.id}`}
                    className={styles.card}
                  />
                );
              })}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
