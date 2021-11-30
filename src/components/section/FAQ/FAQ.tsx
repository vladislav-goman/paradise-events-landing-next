import React, { useState } from 'react';
import cx from 'classnames';
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
  const [isOpen, setIsOpen] = useState(false);
  const onExpandClick = () => setIsOpen(true);

  return (
    <section className={classes.faq} id="faq">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 data-animate="animate__fadeIn" className={classes.header}>
              FAQ
            </h2>
            <div className={cx(classes.inner, { [classes.open]: isOpen })}>
              <div className={classes.expand}>
                <button
                  onClick={onExpandClick}
                  className={classes.expandButton}
                >
                  <div className={classes.label}>Read</div>
                </button>
              </div>
              <Accordion.Root type="single" collapsible>
                <Accordion.Item
                  data-animate="animate__fadeIn"
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
                      picnic reservation ends. If you need us during your
                      picnic, you can call or text your Luxury Picnic of Atlanta
                      concierge (whose number is provided in your confirmation
                      email) and they can be on site within minutes.
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item
                  data-animate="animate__fadeIn"
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
                      reservation. After that, there is a 50% rescheduling fee
                      to move your reservation.
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item
                  data-animate="animate__fadeIn"
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
                <Accordion.Item
                  data-animate="animate__fadeIn"
                  className={classes.item}
                  value="item-4"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className={classes.trigger}>
                      <h3 className={classes.acc__header}>
                        Do I need to pay a deposit?
                      </h3>
                      <PlusSign />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className={classes.content}>
                    <p>
                      A nonrefundable deposit must be paid when booking to hold
                      the scheduled dates. An invoice with remaining balance
                      will be emailed and must be paid in full 24 hours prior
                      the event. The event setup will not occur without full
                      payment.
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item
                  data-animate="animate__fadeIn"
                  className={classes.item}
                  value="item-5"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className={classes.trigger}>
                      <h3 className={classes.acc__header}>
                        Can I cancel the payment?
                      </h3>
                      <PlusSign />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className={classes.content}>
                    <p>
                      In the case of rain/wet weather for picnics, the Client
                      has up to 48 hours prior to the scheduled date to decide
                      if they want to make alternate arrangements at an indoor
                      location or reschedule the event.
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item
                  data-animate="animate__fadeIn"
                  className={classes.item}
                  value="item-6"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className={classes.trigger}>
                      <h3 className={classes.acc__header}>
                        Can I refund the funds?
                      </h3>
                      <PlusSign />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className={classes.content}>
                    <p>
                      We don’t offer refunds for deposits once payment has been
                      received. Refunds will not be offered in the event of
                      inclement weather. If there’s bad weather in the forecast
                      contact us before the picnic and we can reschedule your
                      picnic or we will offer a home set up.
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item
                  data-animate="animate__fadeIn"
                  className={classes.item}
                  value="item-7"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className={classes.trigger}>
                      <h3 className={classes.acc__header}>
                        What about the alcohol?
                      </h3>
                      <PlusSign />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className={classes.content}>
                    <p>
                      It is the responsibility of the customer to check alcohol
                      laws of any venue or public space being used for our
                      pop-up picnics. Public parks and beaches are prohibited
                      from drinking and a fine can be issued. We take no
                      responsibility for any alcohol consumption or penalties.
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item
                  data-animate="animate__fadeIn"
                  className={classes.item}
                  value="item-8"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className={classes.trigger}>
                      <h3 className={classes.acc__header}>
                        What about the food?
                      </h3>
                      <PlusSign />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className={classes.content}>
                    <p>
                      We are not responsible for any food allergies or any
                      issues or illness caused from foods that were consumed or
                      purchased through us or from third party vendors.
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item
                  data-animate="animate__fadeIn"
                  className={classes.item}
                  value="item-9"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className={classes.trigger}>
                      <h3 className={classes.acc__header}>Photos</h3>
                      <PlusSign />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className={classes.content}>
                    <p>
                      In the event that photographs of your picnic has been
                      taken by us or shared either on social media by anyone,
                      ParadiseEventsPlanner reserves the right to use such
                      photographs in its promotional materials.
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
