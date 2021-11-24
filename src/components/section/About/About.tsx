/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import classes from './About.module.scss';
import HeartIcon from '../../../images/heart-icon.png';
import StarsIcon from '../../../images/stars-icon.png';
import BackgroundImage from '../../../images/about-us-background.png';
import FrontImage from '../../../images/about-us-image.png';

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
                <Image
                  className={classes.pic}
                  src={BackgroundImage}
                  alt="Stars Emoji"
                  placeholder="blur"
                  quality={100}
                />
              </div>
              <div data-animate="animate__fadeInLeft" className={classes.image}>
                <Image
                  className={classes.pic}
                  src={FrontImage}
                  alt="Stars Emoji"
                  placeholder="blur"
                  quality={100}
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
                src={StarsIcon}
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
              Marta and Kristina, with love from Paradise Events Planner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
