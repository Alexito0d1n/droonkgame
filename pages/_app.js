import AppContext from "/context/AppContext";

// Style
import "/styles/style.scss";

function MyApp({ Component, pageProps }) {
  const getQuestions = () => {};

  return (
    <AppContext.Provider value={{}}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
