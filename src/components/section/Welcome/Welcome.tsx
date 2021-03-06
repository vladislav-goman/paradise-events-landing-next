import React from 'react';
import Image from 'next/image';
import cx from 'classnames';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import classes from './Welcome.module.scss';
import backgroundImage from '../../../images/welcome-background.png';
import welcomeImage from '../../../images/welcome-image.jpg';
import EmailIcon from '../../../images/EmailIcon.png';
import InstagramIcon from '../../../images/InstagramIcon.png';
import FacebookIcon from '../../../images/FacebookIcon.png';

export const Welcome: React.FC = () => {
  return (
    <section
      className={cx(classes.welcome, 'animate__animated', 'animate__fadeIn')}
    >
      <div className={classes.background__container}>
        <Image
          src={backgroundImage}
          alt="Decorative image"
          layout="fill"
          className={classes.background}
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className={classes.inner}>
              <h1 className={classes.header}>
                Brighten up your event with Paradise Events Planner
              </h1>
              <AnchorLink offset="50" href="#contact" className={classes.link}>
                <div className={classes.label}>Book now</div>
              </AnchorLink>
            </div>
          </div>
          <div className="col-lg-5">
            <div className={classes.image__container}>
              <Image
                // quality={25}
                placeholder="blur"
                src={welcomeImage}
                layout="fill"
                alt="Picture of a nicely served outdoors dining table"
                className={classes.image}
              />
            </div>
          </div>
          <div className="col-lg-1">
            <nav className={classes.nav}>
              <a
                href="mailto:paradiseeventsplanner@gmail.com"
                className={classes.social}
              >
                <Image src={EmailIcon} layout="fill" alt="Email sign" />
              </a>
              <a
                href="https://www.instagram.com/paradiseeventsplanner/"
                target="_blank"
                className={classes.social}
                rel="noreferrer"
              >
                <Image src={InstagramIcon} layout="fill" alt="Instagram logo" />
              </a>
              <a
                href="https://www.facebook.com/Paradiseeventsplanner-102947148835169"
                target="_blank"
                className={classes.social}
                rel="noreferrer"
              >
                <Image src={FacebookIcon} layout="fill" alt="Facebook logo" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};
