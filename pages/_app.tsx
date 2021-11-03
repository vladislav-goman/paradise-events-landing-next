import React, { useEffect } from 'react';
import '../src/styles/index.scss';
import 'animate.css';
import type { AppProps } from 'next/app';

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
  return <Component {...pageProps} />;
}

export default MyApp;
