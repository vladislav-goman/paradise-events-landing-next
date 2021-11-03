import React from 'react';
import Image from 'next/image';
import cx from 'classnames';
import classes from './Welcome.module.scss';
import { loader } from '../../../utility/loader';

export const Welcome: React.FC = () => {
  return (
    <section
      className={cx(classes.welcome, 'animate__animated', 'animate__fadeIn')}
    >
      <div className={classes.background__container}>
        <Image
          loader={loader}
          src="/images/welcome-background.png"
          alt="Decorative image"
          layout="fill"
          className={classes.background}
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className={classes.inner}>
              <h2 className={classes.header}>
                Brighten up your event with Paradise Events Planner{' '}
                <Image
                  loader={loader}
                  src="/images/sparkling-heart.png"
                  width="39"
                  height="39"
                  alt="Sparkling Heart Emoji"
                />
              </h2>
              <a href="" className={classes.link}>
                <div className={classes.label}>Learn more</div>
              </a>
            </div>
          </div>
          <div className="col-md-5">
            <div className={classes.image__container}>
              <Image
                loader={loader}
                src="/images/welcome-image.png"
                layout="fill"
                alt="Picture of a nicely served outdoors dining table"
                className={classes.image}
              />
            </div>
          </div>
          <div className="col-md-1">
            <nav className={classes.nav}>
              <a
                href="mailto:paradiseeventsplanner@gmail.com"
                className={classes.social}
              >
                <Image
                  loader={loader}
                  src="/images/EmailIcon.png"
                  layout="fill"
                  alt="Email sign"
                />
              </a>
              <a
                href="https://www.instagram.com/paradiseeventsplanner/"
                target="_blank"
                className={classes.social}
                rel="noreferrer"
              >
                <Image
                  loader={loader}
                  src="/images/InstagramIcon.png"
                  layout="fill"
                  alt="Instagram logo"
                />
              </a>
              <a
                href="https://www.facebook.com/Paradiseeventsplanner"
                target="_blank"
                className={classes.social}
                rel="noreferrer"
              >
                <Image
                  loader={loader}
                  src="/images/FacebookIcon.png"
                  layout="fill"
                  alt="Facebook logo"
                />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};
