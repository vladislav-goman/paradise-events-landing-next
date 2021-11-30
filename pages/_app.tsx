import React, { useEffect } from 'react';
import '../src/styles/index.scss';
import 'animate.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { IdProvider } from '@radix-ui/react-id';

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const animationClass = entry.target.getAttribute('data-animate')!;
        if (
          entry.isIntersecting &&
          !entry.target.classList.contains(animationClass)
        ) {
          const animationClass = entry.target.getAttribute('data-animate');
          entry.target.classList.add(`animate__animated`);
          entry.target.classList.add(`${animationClass}`);
          return;
        }
      });
    }, options);

    Array.from(
      document.querySelectorAll<HTMLElement>('[data-animate]')
    ).forEach((element) => {
      element.style.opacity = '0';
      observer.observe(element);
    });
  });
  return (
    <IdProvider>
      <div className="app">
        <Head>
          <meta charSet="utf-8" />
          <title>
            Luxury Party and Wedding Planning in Los Angeles, California -
            Paradise Events Planner
          </title>
          <meta
            name="description"
            content="Planning a picnic on the coast? Or maybe you were made a marriage proposal and you do not know how to celebrate such an important event? Our team will be happy to help you organize a holiday that you and your guests will remember for a lifetime. Leave all the difficulties to the professionals - Paradise Events Planner"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="keywords"
            content="wedding planner, the wedding planners, event planner, event planning, party planner, party planners near me, event coordinator, wedding coordinator, wedding planners near me, meeting planner, picnic planner, birthday planner, event planner la, wedding planner la, party planner la, birthday planner la, event planner los angeles, wedding planner los angeles, party planner los angeles, birthday planner los angeles"
          />
          <meta name="theme-color" content="#b392ac" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>
        <Component {...pageProps} />
      </div>
    </IdProvider>
  );
}

export default MyApp;
