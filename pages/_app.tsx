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
          <title>Paradise events planner</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
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
