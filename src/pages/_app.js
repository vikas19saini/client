import Head from "next/head"
import { Fragment } from "react"
import { wrapper } from "../redux/store"
import { useStore } from "react-redux"
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import axios from "axios";
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

  axios.interceptors.request.use((con) => {
    let config = store.getState().config;

    if (config.auth)
      if (config.auth.token)
        con.headers.Authorization = `${config.auth.token}`;

    return con;
  },
    (err) => Promise.reject(err)
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    error => {
      return Promise.reject(error);
    }
  );

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="google-site-verification" content="xvj66e2ya5woglN4ZKsFqBFeXewEgvx5jpYh0gB2r-M" />
        <script src="/js/jquery.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/owl.carousel.js"></script>
        {/* <script src="/js/tabheader.js"></script> */}
        <script src="/js/wow.js"></script>
        <script src="/js/scripts.js"></script>

        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NK4ZLVB');`,
        }}>
        </script>
        <link type="text/css" rel="stylesheet" href="/css/bootstrap.min.css" />
        <link type="text/css" rel="stylesheet" href="/css/owl.carousel.css" />
        <link type="text/css" rel="stylesheet" href="/css/style.css" />
        <link type="text/css" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" />
        <link type="text/css" rel="stylesheet" href="/css/animate.min.css" />
        <link type="text/css" rel="stylesheet" href="/css/responsive.css" />
        <link type="text/css" rel="stylesheet" href="/css/additional.css" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NK4ZLVB"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
      </noscript>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default wrapper.withRedux(MyApp);
