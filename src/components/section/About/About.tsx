/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import classes from './About.module.scss';
import { loader } from '../../../utility/loader';

export const About: React.FC = () => {
  return (
    <section className={classes.about} id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className={classes.header}>About us</h2>
          </div>
          <div className="col-md-6">
            <div className={classes.container}>
              <div
                data-animate="animate__fadeInLeft"
                className={classes.background}
              >
                <img
                  className={classes.pic}
                  src="/images/about-us-background.png"
                  alt="Stars Emoji"
                />
              </div>
              <div data-animate="animate__fadeInLeft" className={classes.image}>
                <img
                  className={classes.pic}
                  src="/images/about-us-image.png"
                  alt="Stars Emoji"
                />
              </div>
            </div>
          </div>
          <div data-animate="animate__fadeInRight" className="col-md-6">
            <p className={classes.paragraph}>
              Welcome to{' '}
              <span className={classes.highlight}>Paradise Events Planner</span>
              !
            </p>
            <p className={classes.paragraph}>
              We are glad you are here. Planning a party? Romantic picnic date
              or, maybe, birthday?{' '}
              <span className={classes.highlight}>Just call us</span> and we’ll
              turn all your ideas and desires into reality.
              <Image
                className={classes.emoji}
                loader={loader}
                src="/images/stars-icon.png"
                width="24"
                height="24"
                alt="Stars Emoji"
              />
            </p>
            <p className={classes.paragraph}>
              <span className={classes.highlight}>The philosophy</span> of our
              work is simple - we put a part of our{' '}
              <span className={classes.highlight}>soul</span> to every project.
            </p>
            <p className={classes.paragraph}>
              We have an amazing variety of ways to fill your event with{' '}
              <span className={classes.highlight}>joy</span> and make it
              special: flowers, music, photo zone - let us take care of it. Our
              experts will happily handle the{' '}
              <span className={classes.highlight}>deluge of details</span> so
              you can focus on the vision and vibe of your event - and most
              important, <span className={classes.highlight}>having fun</span>!
            </p>
            <p className={classes.paragraph}>
              Marta and Kristina, with love from Paradise Events Planner{' '}
              <Image
                className={classes.emoji}
                loader={loader}
                src="/images/heart-icon.png"
                width="24"
                height="24"
                alt="Heart Emoji"
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};