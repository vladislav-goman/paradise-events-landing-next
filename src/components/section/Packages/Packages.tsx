/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import classes from './Packages.module.scss';
import cx from 'classnames';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import SeaPicnic from '../../../images/picnic-under-sea.png';
import ZooPicnic from '../../../images/picnic-zoo.png';
import Romantic from '../../../images/picnic-romantic.png';
import Boho from '../../../images/picnic-boho.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Selfie from '../../../images/selfie.png';
import DJ from '../../../images/control-knobs.png';
import Cupcake from '../../../images/cupcake.png';
import Plate from '../../../images/fork-and-knife-with-plate.png';
import Bouquet from '../../../images/bouquet.png';
import Broom from '../../../images/broom.png';
import Cheese from '../../../images/cheese.png';
import Peach from '../../../images/peach.png';
import TropicalDrink from '../../../images/tropical-drink.png';

export const Packages: React.FC = () => {
  return (
    <section className={classes.packages} id="packages">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 data-animate="animate__fadeIn" className={classes.header}>
              Picnic packages
            </h2>
          </div>
          <div className="col-md-12">
            <div className={classes.row}>
              <div className={classes.card}>
                <Swiper
                  autoplay={{ delay: 3000 }}
                  spaceBetween={70}
                  slidesPerView={1}
                  modules={[Autoplay]}
                >
                  <SwiperSlide>
                    <Image
                      src={ZooPicnic}
                      alt="Zoo Picnic"
                      className={classes.image}
                      placeholder="blur"
                      quality={100}
                    />
                  </SwiperSlide>
                </Swiper>
                <h3 className={classes.picnicHeader}>Zoo Picnic</h3>
              </div>
              <div className={classes.card}>
                <Swiper
                  autoplay={{ delay: 4000 }}
                  spaceBetween={70}
                  slidesPerView={1}
                  modules={[Autoplay]}
                >
                  <SwiperSlide className={classes.slide}>
                    <Image
                      src={SeaPicnic}
                      alt="Under The Sea"
                      className={classes.image}
                      placeholder="blur"
                      quality={100}
                    />
                  </SwiperSlide>
                </Swiper>
                <h3 className={classes.picnicHeader}>Under The Sea</h3>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className={classes.row}>
              <div className={classes.card}>
                <Swiper
                  autoplay={{ delay: 5000 }}
                  spaceBetween={70}
                  slidesPerView={1}
                  modules={[Autoplay]}
                >
                  <SwiperSlide className={classes.slide}>
                    <Image
                      src={Romantic}
                      alt="Romantic Getaway"
                      className={classes.image}
                      placeholder="blur"
                      quality={100}
                    />
                  </SwiperSlide>
                </Swiper>
                <h3 className={classes.picnicHeader}>Romantic Getaway</h3>
              </div>
              <div className={classes.card}>
                <Swiper
                  autoplay={{ delay: 6000 }}
                  spaceBetween={70}
                  slidesPerView={1}
                  modules={[Autoplay]}
                >
                  <SwiperSlide className={classes.slide}>
                    <Image
                      src={Boho}
                      alt="Boho Picnic"
                      className={classes.image}
                      placeholder="blur"
                      quality={100}
                    />
                  </SwiperSlide>
                </Swiper>
                <h3 className={classes.picnicHeader}>Boho Picnic</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.services}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className={classes.servicesHeader}>
                Service Description picnic for large groups more than 10 guests
              </h3>
            </div>
            <div className="col-md-6">
              <ul className={cx(classes.list, classes.paddingLeft)}>
                <li className={classes.servicesItem}>
                  <span className={classes.dot}></span>Setup of picnic
                </li>
                <li className={classes.servicesItem}>
                  <span className={classes.dot}></span>Table and tablescape
                  setup
                </li>
                <li className={classes.servicesItem}>
                  <span className={classes.dot}></span>Rug/s or blankets{' '}
                </li>
                <li className={classes.servicesItem}>
                  <span className={classes.dot}></span>Assortment of pillows or
                  floor cushions
                </li>
                <li className={classes.servicesItem}>
                  <span className={classes.dot}></span>Plates/Placemats
                </li>
                <li className={classes.servicesItem}>
                  <span className={classes.dot}></span>Plates{' '}
                </li>
                <li className={classes.servicesItem}>
                  <span className={classes.dot}></span>Silverware
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className={cx(classes.list, classes.paddingRight)}>
                <li className={classes.servicesItem}>
                  <span className={classes.dot}></span>Flower arrangements{' '}
                </li>
                <li className={classes.servicesItem}>
                  <span className={classes.dot}></span>2 big cheese platters
                  (variety of 4 cheeses, berries, grapes, crackers, olives, dip,
                  salami)
                </li>
                <li className={classes.servicesItem}>
                  <span className={classes.dot}></span>Linen Napkins
                </li>
                <li className={classes.servicesItem}>
                  <span className={classes.dot}></span>2 types of juice (1
                  gallon each)
                </li>
                <li className={classes.servicesItem}>
                  <span className={classes.dot}></span>1 fruit platter{' '}
                </li>
                <li className={classes.servicesItem}>
                  <span className={classes.dot}></span>Clean up
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className={classes.addonsHeader}>Add-ons</h3>
            <ul className={classes.addons}>
              <li className={classes.addon_item}>DJ for you party</li>
              <li className={classes.addon_item}>Photo zone set up</li>
              <li className={classes.addon_item}>
                Sweet table and decor for it
              </li>
              <li className={classes.addon_item}>Photographer</li>
            </ul>
            <a
              href="https://www.instagram.com/paradiseeventsplanner/"
              target="_blank"
              className={classes.link}
              rel="noreferrer"
            >
              <div className={classes.label}>DM for more details</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
