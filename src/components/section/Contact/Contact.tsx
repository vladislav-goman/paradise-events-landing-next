import React, { ChangeEvent, FormEventHandler, useState } from 'react';
import Image from 'next/image';
import classes from './Contact.module.scss';
import EmailIcon from '../../../images/EmailIcon.png';
import InstagramIcon from '../../../images/InstagramIcon.png';
import FacebookIcon from '../../../images/FacebookIcon.png';
import { Dialog } from '../../common/Dialog';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [showDialog, setShowDialog] = useState(false);

  const handleNameChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setName(target.value);
  const handleTelChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setTel(target.value);
  const handleDialogClose = () => setShowDialog(false);

  const formSubmitHandler: FormEventHandler = (event) => {
    event.preventDefault();
    fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify({ name, tel }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        setShowDialog(true);
      })
      .catch((err) => {
        console.log(err);
        setShowDialog(true);
      });
    setName('');
    setTel('');
  };

  return (
    <section className={classes.contact} id="contact">
      <Dialog open={showDialog} onOpenChange={handleDialogClose} />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="contact--inner">
              <h2 data-animate="animate__fadeIn" className={classes.header}>
                Contact us
              </h2>
              <div className={classes.body}></div>
            </div>
          </div>
          <div className="col-md-6">
            <form
              data-animate="animate__fadeInLeft"
              onSubmit={formSubmitHandler}
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
                  onChange={handleNameChange}
                  value={name}
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
                  onChange={handleTelChange}
                  value={tel}
                  required
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder="888 888 8888"
                  className={classes.input}
                />
              </div>
              <div className={classes.input_group}>
                <button className={classes.submit} type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <nav data-animate="animate__fadeInRight" className={classes.social}>
              <h3 className={classes.description}>
                <br />
                Reach Us Out In Social Media
              </h3>
              <a
                href="mailto:paradiseeventsplanner@gmail.com"
                className={classes.social__item}
              >
                <Image
                  src={EmailIcon}
                  width="80px"
                  height="80px"
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
                  width="80px"
                  height="80px"
                  src={InstagramIcon}
                  alt="Instagram logo"
                  className={classes.image}
                />
                <h4 className={classes.link}>@paradiseeventsplanner</h4>
              </a>
              <a
                href="https://www.facebook.com/Paradiseeventsplanner-102947148835169"
                target="_blank"
                rel="noreferrer"
                className={classes.social__item}
              >
                <Image
                  width="80px"
                  height="80px"
                  src={FacebookIcon}
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
    </section>
  );
};
