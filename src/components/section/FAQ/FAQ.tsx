import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classes from './FAQ.module.scss';

const PlusSign: React.FC = () => {
  return (
    <div className={classes.plus}>
      <div className={classes.vertical}></div>
      <div className={classes.horizontal}></div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  return (
    <section className={classes.faq} id="faq">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 data-animate="animate__fadeIn" className={classes.header}>
              FAQ
            </h2>
            <Accordion.Root type="single" collapsible>
              <Accordion.Item
                data-animate="animate__fadeInRight"
                className={classes.item}
                value="item-1"
              >
                <Accordion.Header>
                  <Accordion.Trigger className={classes.trigger}>
                    <h3 className={classes.acc__header}>
                      Doest the Paradise Events Planner staff stay during my
                      picnic?
                    </h3>
                    <PlusSign />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className={classes.content}>
                  <p>
                    No, we leave after you’re settled and return once your
                    picnic reservation ends. If you need us during your picnic,
                    you can call or text your Luxury Picnic of Atlanta concierge
                    (whose number is provided in your confirmation email) and
                    they can be on site within minutes.
                  </p>
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item
                data-animate="animate__fadeInLeft"
                className={classes.item}
                value="item-2"
              >
                <Accordion.Header>
                  <Accordion.Trigger className={classes.trigger}>
                    <h3 className={classes.acc__header}>
                      What is your cancellation policy?
                    </h3>
                    <PlusSign />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className={classes.content}>
                  <p>
                    Sorry, we do not offer any refunds. If you need to
                    reschedule, please contact us within 72 hours of your
                    reservation. After that, there is a 50% rescheduling fee to
                    move your reservation.
                  </p>
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item
                data-animate="animate__fadeInRight"
                className={classes.item}
                value="item-3"
              >
                <Accordion.Header>
                  <Accordion.Trigger className={classes.trigger}>
                    <h3 className={classes.acc__header}>
                      Can we leave whenever we want?
                    </h3>
                    <PlusSign />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className={classes.content}>
                  <p>
                    If you would like to leave earlier than the arranged time,
                    please provide us a 30 min notice via phone call or text.
                    You are responsible for the picnic items until we are able
                    to return and pack up
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </div>
        </div>
      </div>
    </section>
  );
};
