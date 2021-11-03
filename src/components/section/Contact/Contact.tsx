import React from 'react';
import Image from 'next/image';
import classes from './Contact.module.scss';
import { loader } from '../../../utility/loader';

export const Contact: React.FC = () => {
  return (
    <section className={classes.contact} id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="contact--inner">
              <h2 data-animate="animate__fadeIn" className={classes.header}>
                Contact us
              </h2>
              <div className={classes.body}>
                <form
                  data-animate="animate__fadeInLeft"
                  action=""
                  className={classes.form}
                >
                  <h3 className={classes.description}>
                    Let’s Get Things Started!
                    <br />
                    Leave Us A Message and We’ll Contact You in 24 Hours
                  </h3>
                  <div className={classes.input_group}>
                    <label htmlFor="nameInput" className={classes.label}>
                      Name
                    </label>
                    <input
                      required
                      id="nameInput"
                      name="name"
                      type="text"
                      className={classes.input}
                      placeholder="Enter your Name"
                    />
                  </div>
                  <div className={classes.input_group}>
                    <label htmlFor="mobile" className={classes.label}>
                      Mobile Number
                    </label>
                    <input
                      required
                      id="mobile"
                      name="mobile"
                      type="tel"
                      placeholder="888 888 8888"
                      pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                      className={classes.input}
                    />
                  </div>
                  <div className={classes.input_group}>
                    <label htmlFor="message" className={classes.label}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className={classes.input}
                    ></textarea>
                  </div>
                  <div className={classes.input_group}>
                    <button className={classes.submit} type="submit">
                      Submit
                    </button>
                  </div>
                </form>
                <nav
                  data-animate="animate__fadeInRight"
                  className={classes.social}
                >
                  <h3 className={classes.description}>
                    Reach Us Out In Social Media
                  </h3>
                  <a
                    href="mailto:paradiseeventsplanner@gmail.com"
                    className={classes.social__item}
                  >
                    <Image
                      loader={loader}
                      src="/images/EmailIcon.png"
                      width="100px"
                      height="100px"
                      alt=""
                      className={classes.image}
                    />
                    <h4 className={classes.link}>
                      paradiseeventsplanner@gmail.com
                    </h4>
                  </a>
                  <a
                    href="https://www.instagram.com/paradiseeventsplanner/"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.social__item}
                  >
                    <Image
                      loader={loader}
                      width="100px"
                      height="100px"
                      src="/images/InstagramIcon.png"
                      alt="Instagram logo"
                      className={classes.image}
                    />
                    <h4 className={classes.link}>@paradiseeventsplanner</h4>
                  </a>
                  <a
                    href="https://www.facebook.com/Paradiseeventsplanner"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.social__item}
                  >
                    <Image
                      loader={loader}
                      width="90px"
                      height="90px"
                      src="/images/FacebookIcon.png"
                      alt="Facebook logo"
                      className={classes.image}
                    />
                    <h4 className={classes.link}>
                      facebook.com/Paradiseeventsplanner
                    </h4>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
