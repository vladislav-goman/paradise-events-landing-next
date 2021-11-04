import React, { useEffect } from 'react';
import '../src/styles/index.scss';
import 'animate.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animationClass = entry.target.getAttribute('data-animate');
          console.log(animationClass);
          entry.target.classList.add(`animate__animated`);
          entry.target.classList.add(`${animationClass}`);
          return;
        }
      });
    });

    document
      .querySelectorAll('[data-animate]')
      .forEach((element) => observer.observe(element));
  });
  return (
    <div className="app">
      <Head>
        <meta charSet="utf-8" />
        <title>Paradise events planner</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#b392ac" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
