import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <footer>
        <p>@ 2023 Curator</p>
      </footer>
    </div>
  );
}

export default MyApp;
