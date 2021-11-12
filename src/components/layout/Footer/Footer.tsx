import React from 'react';
import classes from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className={classes.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={classes.inner}>
              <h2 className={classes.header}>
                © Paradise Events Planner <br /> 2021
              </h2>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
