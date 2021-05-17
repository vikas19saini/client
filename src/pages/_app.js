import Head from "next/head"
import { Fragment, useState } from "react"
import { wrapper } from "../redux/store"
import { PersistGate } from "redux-persist/integration/react"
import { useStore } from "react-redux"
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import axios from "axios";
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
  window.scroll({
    top: 0
  });
});
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const store = useStore();
  const route = useRouter();
  const [blockUi, setBlockUi] = useState(false);

  axios.interceptors.request.use((con) => {
    let config = store.getState().config
    setBlockUi(true);
    if (config.auth)
      if (config.auth.token)
        con.headers.Authorization = `${config.auth.token}`;

    return con;
  },
    (err) => Promise.reject(err)
  );

  axios.interceptors.response.use(
    (response) => {
      setBlockUi(false);
      return response;
    },
    error => {
      if (error.response && error.response.status === 401) {
        store.dispatch({ type: "SIGN_OUT" });
        route.push("/account?redirect=" + window.location.pathname);
      }
      setBlockUi(false);
      return Promise.reject(error);
    }
  );

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link type="text/css" rel="stylesheet" href="/css/bootstrap.min.css" />
        <link type="text/css" rel="stylesheet" href="/css/owl.carousel.css" />
        <link type="text/css" rel="stylesheet" href="/css/style.css" />
        <link type="text/css" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" />
        <link type="text/css" rel="stylesheet" href="/css/animate.min.css" />
        <link type="text/css" rel="stylesheet" href="/css/responsive.css" />
        <link type="text/css" rel="stylesheet" href="/css/additional.css" />
        <link rel="icon" href="/logo.png" />
        <script src="/js/jquery.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/owl.carousel.js"></script>
        {/* <script src="/js/tabheader.js"></script> */}
        <script src="/js/wow.js"></script>
        <script src="/js/scripts.js"></script>
      </Head>
      <PersistGate persistor={store.__persistor} loading={<div>Initializing application...</div>}>
        <BlockUi tag="div" blocking={blockUi}>

          <Component {...pageProps} />

        </BlockUi>
      </PersistGate>
    </Fragment>)
}

export default wrapper.withRedux(MyApp);
