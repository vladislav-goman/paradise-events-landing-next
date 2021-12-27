import React from 'react';
import Image from 'next/image';
import cx from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import classes from './Gallery.module.scss';

import galleryBig from '../../../images/gallery/gallery1.jpg';
import galleryHalf1 from '../../../images/gallery/gallery2.jpg';
import galleryHalf2 from '../../../images/gallery/gallery3.jpg';
import galleryThird from '../../../images/gallery/gallery4.jpg';
import gallerySmall from '../../../images/gallery/gallery5.jpg';
import galleryBig1 from '../../../images/gallery/gallery6.jpg';

export const Gallery: React.FC = () => {
  return (
    <section className={classes.gallery} id="gallery">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 data-animate="animate__fadeIn" className={classes.header}>
              Gallery
            </h2>
          </div>
          <div className="col-md-12"></div>
        </div>
      </div>
      <div className={classes.carousel}>
        <Swiper
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            560: {
              slidesPerView: 'auto',
            },
          }}
        >
          <SwiperSlide className={classes.slide}>
            <div className={classes.container}>
              <div
                data-animate="animate__fadeIn"
                className={classes.imageContainer}
              >
                <Image
                  // quality={25}

                  priority={true}
                  layout="fill"
                  placeholder="blur"
                  src={galleryBig}
                  alt="Zoo Picnic"
                  className={classes.image}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={cx(classes.slide, classes.half)}>
            <div className={classes.container}>
              <div
                data-animate="animate__fadeIn"
                className={classes.imageContainer}
              >
                <Image
                  // quality={25}

                  priority={true}
                  layout="fill"
                  placeholder="blur"
                  src={galleryHalf1}
                  alt="Zoo Picnic"
                  className={classes.image}
                />
              </div>
              <div
                data-animate="animate__fadeIn"
                className={classes.imageContainer}
              >
                <Image
                  // quality={25}

                  priority={true}
                  layout="fill"
                  placeholder="blur"
                  src={galleryHalf2}
                  alt="Zoo Picnic"
                  className={classes.image}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={cx(classes.slide, classes.two_thirds)}>
            <div className={classes.container}>
              <div
                data-animate="animate__fadeIn"
                className={classes.imageContainer}
              >
                <Image
                  // quality={25}

                  priority={true}
                  layout="fill"
                  placeholder="blur"
                  src={galleryThird}
                  alt="Zoo Picnic"
                  className={classes.image}
                />
              </div>
              <div
                data-animate="animate__fadeIn"
                className={classes.imageContainer}
              >
                <Image
                  // quality={25}

                  priority={true}
                  layout="fill"
                  placeholder="blur"
                  src={gallerySmall}
                  alt="Zoo Picnic"
                  className={classes.image}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.slide}>
            <div className={classes.container}>
              <div
                data-animate="animate__fadeIn"
                className={classes.imageContainer}
              >
                <Image
                  // quality={25}

                  priority={true}
                  layout="fill"
                  placeholder="blur"
                  src={galleryBig1}
                  alt="Zoo Picnic"
                  className={classes.image}
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
