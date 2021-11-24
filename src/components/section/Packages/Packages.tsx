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
                    />
                  </SwiperSlide>
                </Swiper>
                <h3 className={classes.picnicHeader}>Boho Picnic</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 data-animate="animate__fadeIn" className={classes.subHeader}>
          Extra
        </h3>
        <div className={classes.extra}>
          <h4 data-animate="animate__fadeIn" className={classes.extraItem}>
            <Image
              src={Cupcake}
              alt="Cupcake Emoji"
              width="32"
              height="32"
              className={classes.image}
            />
            <span>sweet table and decor for it</span>
          </h4>
          <h4 className={classes.extraItem}>
            <Image
              src={Selfie}
              alt="Selfie Emoji"
              width="32"
              height="32"
              className={classes.image}
            />
            <span>photo zone set up</span>
          </h4>
          <h4 className={classes.extraItem}>
            <Image
              src={DJ}
              alt="Control knobs Emoji"
              width="32"
              height="32"
              className={classes.image}
            />
            <span>DJ for you party</span>
          </h4>
        </div>
      </div>
    </section>
  );
};
