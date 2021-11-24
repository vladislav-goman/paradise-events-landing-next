import React, { useEffect, useState, useCallback, EventHandler } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import cx from 'classnames';
import classes from './Header.module.scss';
import PhoneIcon from '../../../images/telephone-icon.png';
import { HamburgerMenu } from '../../common/HamburgerMenu';
import Logo from '../../../images/logo.svg';

export const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const onClickHandler = () => setShowMobileMenu((showMenu) => !showMenu);
  const onLinkClickHandler = () => setShowMobileMenu(false);

  const tweakHeader = useCallback(() => {
    if (window.scrollY >= 20 && !isActive) {
      setIsActive(true);
    } else if (window.scrollY < 20 && isActive) {
      setIsActive(false);
    }
  }, [isActive]);

  useEffect(() => {
    tweakHeader();
    document.addEventListener('scroll', tweakHeader);

    return () => document.removeEventListener('scroll', tweakHeader);
  }, [tweakHeader]);

  return (
    <header
      className={cx(
        classes.header,
        { [classes.active]: isActive },
        'animate__animated',
        'animate__fadeIn'
      )}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={classes.inner}>
              <div className={classes.logo__container}>
                <Image
                  src={Logo}
                  quality={100}
                  width="58px"
                  height="58px"
                  alt="Paradise Events Planner Logo"
                  className={classes.logo}
                />
                <span className={classes.label__group}>
                  <h1 className={classes.label}>Paradise</h1>
                  <p className={classes.description}>events planner</p>
                </span>
              </div>

              <Link href="tel:+18184046994">
                <a className={classes.phone}>
                  <Image
                    src={PhoneIcon}
                    width="20"
                    height="20"
                    alt="Telephone icon"
                  />
                  <span className={classes.phone__number}>+18184046994</span>
                </a>
              </Link>

              <nav className={classes.nav}>
                <AnchorLink offset="94" href="#about" className={classes.link}>
                  About us
                </AnchorLink>
                <AnchorLink
                  offset="94"
                  href="#packages"
                  className={classes.link}
                >
                  Picnic packages
                </AnchorLink>
                <AnchorLink
                  offset="94"
                  href="#gallery"
                  className={classes.link}
                >
                  Gallery
                </AnchorLink>
                <AnchorLink
                  offset="94"
                  href="#contact"
                  className={classes.link}
                >
                  Contact us
                </AnchorLink>
                <AnchorLink offset="94" href="#faq" className={classes.link}>
                  FAQ
                </AnchorLink>
              </nav>

              <nav
                className={cx(classes.mobileMenu, {
                  [classes.visible]: showMobileMenu,
                })}
              >
                <div className={classes.mobileNav}>
                  <AnchorLink
                    offset="94"
                    href="#about"
                    className={classes.link}
                    onClick={onLinkClickHandler}
                  >
                    About us
                  </AnchorLink>
                  <AnchorLink
                    offset="94"
                    href="#packages"
                    className={classes.link}
                    onClick={onLinkClickHandler}
                  >
                    Picnic packages
                  </AnchorLink>
                  <AnchorLink
                    offset="94"
                    href="#gallery"
                    className={classes.link}
                    onClick={onLinkClickHandler}
                  >
                    Gallery
                  </AnchorLink>
                  <AnchorLink
                    offset="94"
                    href="#contact"
                    className={classes.link}
                    onClick={onLinkClickHandler}
                  >
                    Contact us
                  </AnchorLink>
                  <AnchorLink
                    offset="94"
                    href="#faq"
                    className={classes.link}
                    onClick={onLinkClickHandler}
                  >
                    FAQ
                  </AnchorLink>
                </div>
                <Link href="tel:+18184046994">
                  <a className={classes.phoneMobile}>
                    <Image
                      src={PhoneIcon}
                      width="20"
                      height="20"
                      alt="Telephone icon"
                    />
                    <span className={classes.phone__number}>+18184046994</span>
                  </a>
                </Link>
              </nav>

              <HamburgerMenu
                onClick={onClickHandler}
                isOpen={showMobileMenu}
                className={classes.hamburger}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
