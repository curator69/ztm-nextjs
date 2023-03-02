import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import cls from "classnames";

import CoffeeStoresData from "../../data/coffee-stores.json";
import styles from "../../styles/coffee-store.module.css";

export function getStaticProps(staticProps) {
  const params = staticProps.params;

  return {
    props: {
      CoffeeStore: CoffeeStoresData.find((CoffeeStore) => {
        return CoffeeStore.id.toString() === params.id;
      }),
    },
  };
}

export function getStaticPaths() {
  const paths = CoffeeStoresData.map((CoffeeStore) => {
    return {
      params: {
        id: CoffeeStore.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

const CoffeeStore = (props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { name, neighbourhood, imgUrl } = props.CoffeeStore;

  const handleUpvoteButton = () => {};

  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">
              <p>Back to home</p>
            </Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <Image
            src={imgUrl}
            width={600}
            height={360}
            className={styles.storeImg}
            alt={name}
          />
        </div>
        <div className={cls("glass", styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image src="/static/icons/places.svg" width="24" height="24" />
            <p className={styles.text}>{name}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src="/static/icons/nearMe.svg" width="24" height="24" />
            <p className={styles.text}>{neighbourhood}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src="/static/icons/stars.svg" width="24" height="24" />
            <p className={styles.text}>1</p>
          </div>
          <button className={styles.upvoteButton} onClic={handleUpvoteButton}>
            Up Vote!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeStore;

// fsq3hwaxSDCTgrBHfsYPSDGc+hdcZEMkHkuY4woJhTBVHlg=
