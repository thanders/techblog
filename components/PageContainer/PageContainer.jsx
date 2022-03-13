import HorizontalNav from '../HorizontalNav/HorizontalNav';
import Link from 'next/link';
import Footer from '../Footer/Footer';
import { pageContainerBody } from "./styles.module.css";
import React,  { useEffect } from "react";
import Prism from "prismjs";
require('prismjs/components/prism-bash');
import "prismjs/components/prism-jsx";
import Head from "next/head";

const PageContainer = ({ children, title, description, image, pageURL, datetime, keywords, type }) => {
    const clickStyle = {  padding: '14px 16px' }
    const headerprops = {
        logo: <Link href="/" passHref><a><div style={clickStyle}>Logo</div></a></Link>,
        buttonLeft: null,
        buttonRightOne: null,
        buttonRightTwo: null,
        styles: {backgroundColor: '#002171'}
      };

      const container = (
        <div id='PageContainer' style={{ color: 'white', width: '100%' }}>
          <Head>
            <title>{title}</title>
            <meta name="description" content={description}></meta>
            <meta name="keywords" content={keywords}></meta>

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description}/>
            <meta property="og:url" content={pageURL} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content={type} />
            <meta property="og:updated_time" content={datetime} />
            <meta name="twitter:card" content="summary" />
            <meta property="fb:app_id" content="your fb app id" />

            <meta charset="UTF-8"></meta>
            <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type"></meta>
            <meta content="width=device-width, initial-scale=1.0" name="viewport"></meta>
          </Head>
          <HorizontalNav {...headerprops} />

          <div id={pageContainerBody}>
            { children }
          </div>
          <Footer />
        </div>
      );

      useEffect(() => {
        Prism.highlightAll();
      }, []);

    return container;
  }
  
  export default PageContainer