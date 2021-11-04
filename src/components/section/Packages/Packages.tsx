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
          <div data-animate="animate__fadeIn" className="col-md-12">
            <Swiper
              autoplay={{ delay: 3000 }}
              spaceBetween={70}
              slidesPerView="auto"
              modules={[Autoplay]}
            >
              <SwiperSlide className={classes.slide}>
                <Image
                  src={ZooPicnic}
                  alt="Zoo Picnic"
                  className={classes.image}
                />
                <h3 className={classes.picnicHeader}>Zoo Picnic</h3>
              </SwiperSlide>
              <SwiperSlide className={classes.slide}>
                <Image
                  src={SeaPicnic}
                  alt="Under The Sea"
                  className={classes.image}
                />
                <h3 className={classes.picnicHeader}>Under The Sea</h3>
              </SwiperSlide>
              <SwiperSlide className={classes.slide}>
                <Image
                  src={Romantic}
                  alt="Romantic Getaway"
                  className={classes.image}
                />
                <h3 className={classes.picnicHeader}>Romantic Getaway</h3>
              </SwiperSlide>
              <SwiperSlide className={classes.slide}>
                <Image src={Boho} alt="Boho Picnic" className={classes.image} />
                <h3 className={classes.picnicHeader}>Boho Picnic</h3>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-md-12">
            <h3 data-animate="animate__fadeIn" className={classes.subHeader}>
              Picnic set up includes:
            </h3>
          </div>
          <div className="col-md-12">
            <div data-animate="animate__fadeIn" className={classes.includes}>
              <h4 className={classes.includesItem}>
                <Image
                  src={Plate}
                  alt="Plate Emoji"
                  width="32"
                  height="32"
                  className={classes.image}
                />
                <span className={classes.includesLabel}>tables set up</span>
              </h4>
              <h4 className={classes.includesItem}>
                <Image
                  src={Bouquet}
                  alt="Bouquet Emoji"
                  width="32"
                  height="32"
                  className={classes.image}
                />
                <span className={classes.includesLabel}>
                  flower arrangement
                </span>
              </h4>
              <h4 className={cx(classes.includesItem, classes.noBR)}>
                <Image
                  src={Cheese}
                  alt="Cheese Emoji"
                  width="32"
                  height="32"
                  className={classes.image}
                />
                <span className={classes.includesLabel}>
                  2 big cheese platters{' '}
                  <span className={classes.noMobile}>
                    (each with variety of 4 cheeses, berries,
                  </span>
                </span>
              </h4>
              <div className={classes.divider}></div>
              <h4 className={cx(classes.includesItem, classes.noMobile)}>
                <span className={cx(classes.includesLabel, classes.noPL)}>
                  grapes, crackers, olives, dip, salami)
                </span>
              </h4>
              <h4 className={classes.includesItem}>
                <Image
                  src={TropicalDrink}
                  alt="TropicalDrink Emoji"
                  width="32"
                  height="32"
                  className={classes.image}
                />
                <span className={classes.includesLabel}>
                  2 types of juice (1 gallon each)
                </span>
              </h4>
              <h4 className={classes.includesItem}>
                <Image
                  src={Peach}
                  alt="Peach Emoji"
                  width="32"
                  height="32"
                  className={classes.image}
                />
                <span className={classes.includesLabel}>1 fruit platter</span>
              </h4>
              <h4 className={cx(classes.includesItem, classes.noBR)}>
                <Image
                  src={Broom}
                  alt="Broom Emoji"
                  width="32"
                  height="32"
                  className={classes.image}
                />
                <span className={classes.includesLabel}>clean up</span>
              </h4>
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
