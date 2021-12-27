/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import classes from './Packages.module.scss';
import cx from 'classnames';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SeaPicnic from '../../../images/under1.jpg';
import SeaPicnic1 from '../../../images/under2.jpg';
import SeaPicnic2 from '../../../images/under3.jpg';
import ZooPicnic1 from '../../../images/zoo1.jpg';
import ZooPicnic2 from '../../../images/zoo2.jpg';
import Romantic from '../../../images/romantic2.jpg';
import Romantic1 from '../../../images/romantic1.jpg';
import Boho from '../../../images/boho1.jpg';
import Boho1 from '../../../images/boho2.jpg';

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
              <div data-animate="animate__fadeIn" className={classes.card}>
                <Swiper
                  spaceBetween={70}
                  slidesPerView={1}
                  modules={[Pagination]}
                  pagination={{
                    el: '#zoo-pagination',
                    clickable: true,
                    bulletActiveClass: `${classes.bulletActive}`,
                    renderBullet: (_index, className) => {
                      return `<div class="${cx(
                        classes.bullet,
                        className
                      )}"></div>`;
                    },
                  }}
                >
                  <SwiperSlide className={classes.slide}>
                    <Image
                      // quality={25}
                      priority={true}
                      placeholder="blur"
                      src={ZooPicnic1}
                      alt="Zoo Picnic"
                      className={classes.image}
                    />
                  </SwiperSlide>
                  <SwiperSlide className={classes.slide}>
                    <Image
                      // quality={25}
                      priority={true}
                      placeholder="blur"
                      src={ZooPicnic2}
                      alt="Zoo Picnic"
                      className={classes.image}
                    />
                  </SwiperSlide>
                  <div className={classes.pagination} id="zoo-pagination" />
                </Swiper>
                <h3 className={classes.picnicHeader}>Zoo Picnic</h3>
              </div>
              <div data-animate="animate__fadeIn" className={classes.card}>
                <Swiper
                  spaceBetween={70}
                  slidesPerView={1}
                  modules={[Pagination]}
                  pagination={{
                    el: '#under-pagination',
                    clickable: true,
                    bulletActiveClass: `${classes.bulletActive}`,
                    renderBullet: (_index, className) => {
                      return `<div class="${cx(
                        classes.bullet,
                        className
                      )}"></div>`;
                    },
                  }}
                >
                  <SwiperSlide className={classes.slide}>
                    <Image
                      // quality={25}
                      priority={true}
                      placeholder="blur"
                      src={SeaPicnic}
                      alt="Under The Sea"
                      className={classes.image}
                    />
                  </SwiperSlide>
                  <SwiperSlide className={classes.slide}>
                    <Image
                      // quality={25}
                      priority={true}
                      placeholder="blur"
                      src={SeaPicnic1}
                      alt="Under The Sea"
                      className={classes.image}
                    />
                  </SwiperSlide>
                  <SwiperSlide className={classes.slide}>
                    <Image
                      // quality={25}
                      priority={true}
                      placeholder="blur"
                      src={SeaPicnic2}
                      alt="Under The Sea"
                      className={classes.image}
                    />
                  </SwiperSlide>
                  <div className={classes.pagination} id="under-pagination" />
                </Swiper>
                <h3 className={classes.picnicHeader}>Under The Sea</h3>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className={classes.row}>
              <div data-animate="animate__fadeIn" className={classes.card}>
                <Swiper
                  spaceBetween={70}
                  slidesPerView={1}
                  modules={[Pagination]}
                  pagination={{
                    el: '#romantic-pagination',
                    clickable: true,
                    bulletActiveClass: `${classes.bulletActive}`,
                    renderBullet: (_index, className) => {
                      return `<div class="${cx(
                        classes.bullet,
                        className
                      )}"></div>`;
                    },
                  }}
                >
                  <SwiperSlide className={classes.slide}>
                    <Image
                      // quality={25}
                      priority={true}
                      placeholder="blur"
                      src={Romantic}
                      alt="Romantic Getaway"
                      className={classes.image}
                    />
                  </SwiperSlide>
                  <SwiperSlide className={classes.slide}>
                    <Image
                      // quality={25}
                      priority={true}
                      placeholder="blur"
                      src={Romantic1}
                      alt="Romantic Getaway"
                      className={classes.image}
                    />
                  </SwiperSlide>
                  <div
                    className={classes.pagination}
                    id="romantic-pagination"
                  />
                </Swiper>
                <h3 className={classes.picnicHeader}>Romantic Getaway</h3>
              </div>
              <div data-animate="animate__fadeIn" className={classes.card}>
                <Swiper
                  spaceBetween={70}
                  slidesPerView={1}
                  modules={[Pagination]}
                  pagination={{
                    el: '#boho-pagination',
                    clickable: true,
                    bulletActiveClass: `${classes.bulletActive}`,
                    renderBullet: (_index, className) => {
                      return `<div class="${cx(
                        classes.bullet,
                        className
                      )}"></div>`;
                    },
                  }}
                >
                  <SwiperSlide className={classes.slide}>
                    <Image
                      // quality={25}
                      priority={true}
                      placeholder="blur"
                      src={Boho}
                      alt="Boho Picnic"
                      className={classes.image}
                    />
                  </SwiperSlide>
                  <SwiperSlide className={classes.slide}>
                    <Image
                      // quality={25}
                      priority={true}
                      placeholder="blur"
                      src={Boho1}
                      alt="Boho Picnic"
                      className={classes.image}
                    />
                  </SwiperSlide>
                  <div className={classes.pagination} id="boho-pagination" />
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
              <h3
                data-animate="animate__fadeIn"
                className={classes.servicesHeader}
              >
                Service Description picnic for large groups more than 10 guests
              </h3>
            </div>
            <div className="col-md-6">
              <ul
                data-animate="animate__fadeIn"
                className={cx(classes.list, classes.paddingLeft)}
              >
                <li
                  data-animate="animate__fadeIn"
                  className={classes.servicesItem}
                >
                  <span className={classes.dot}></span>Setup of picnic
                </li>
                <li
                  data-animate="animate__fadeIn"
                  className={classes.servicesItem}
                >
                  <span className={classes.dot}></span>Table and tablescape
                  setup
                </li>
                <li
                  data-animate="animate__fadeIn"
                  className={classes.servicesItem}
                >
                  <span className={classes.dot}></span>Rug/s or blankets{' '}
                </li>
                <li
                  data-animate="animate__fadeIn"
                  className={classes.servicesItem}
                >
                  <span className={classes.dot}></span>Assortment of pillows or
                  floor cushions
                </li>
                <li
                  data-animate="animate__fadeIn"
                  className={classes.servicesItem}
                >
                  <span className={classes.dot}></span>Plates/Placemats
                </li>
                <li
                  data-animate="animate__fadeIn"
                  className={classes.servicesItem}
                >
                  <span className={classes.dot}></span>Plates{' '}
                </li>
                <li
                  data-animate="animate__fadeIn"
                  className={classes.servicesItem}
                >
                  <span className={classes.dot}></span>Silverware
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul
                data-animate="animate__fadeIn"
                className={cx(classes.list, classes.paddingRight)}
              >
                <li
                  data-animate="animate__fadeIn"
                  className={classes.servicesItem}
                >
                  <span className={classes.dot}></span>Flower arrangements{' '}
                </li>
                <li
                  data-animate="animate__fadeIn"
                  className={classes.servicesItem}
                >
                  <span className={classes.dot}></span>2 big cheese platters
                  (variety of 4 cheeses, berries, grapes, crackers, olives, dip,
                  salami)
                </li>
                <li
                  data-animate="animate__fadeIn"
                  className={classes.servicesItem}
                >
                  <span className={classes.dot}></span>Linen Napkins
                </li>
                <li
                  data-animate="animate__fadeIn"
                  className={classes.servicesItem}
                >
                  <span className={classes.dot}></span>2 types of juice (1
                  gallon each)
                </li>
                <li
                  data-animate="animate__fadeIn"
                  className={classes.servicesItem}
                >
                  <span className={classes.dot}></span>1 fruit platter{' '}
                </li>
                <li
                  data-animate="animate__fadeIn"
                  className={classes.servicesItem}
                >
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
            <h3 data-animate="animate__fadeIn" className={classes.addonsHeader}>
              Add-ons
            </h3>
            <ul data-animate="animate__fadeIn" className={classes.addons}>
              <li data-animate="animate__fadeIn" className={classes.addon_item}>
                DJ for you party
              </li>
              <li data-animate="animate__fadeIn" className={classes.addon_item}>
                Photo zone set up
              </li>
              <li data-animate="animate__fadeIn" className={classes.addon_item}>
                Sweet table and decor for it
              </li>
              <li data-animate="animate__fadeIn" className={classes.addon_item}>
                Photographer
              </li>
            </ul>
            <a
              data-animate="animate__fadeIn"
              href="https://www.instagram.com/paradiseeventsplanner/"
              target="_blank"
              className={classes.link}
              rel="noreferrer"
            >
              <div data-animate="animate__fadeIn" className={classes.label}>
                DM for more details
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
