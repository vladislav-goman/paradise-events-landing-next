/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import classes from './Packages.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SeaPicnic from '../../../images/picnic-under-sea.png';
import ZooPicnic from '../../../images/picnic-zoo.png';
import Romantic from '../../../images/picnic-zoo.png';
import Boho from '../../../images/picnic-zoo.png';

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
            <Swiper spaceBetween={70} slidesPerView="auto">
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
        </div>
      </div>
    </section>
  );
};
