import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const emailHandler = async (req, res) => {
  if (req.method === 'POST') {
    const { name, tel } = req.body;

    let info = await transporter.sendMail({
      from: '"ParadiseEventsPlanner"', // sender address
      to: process.env.TARGET_EMAIL, // list of receivers
      subject: 'Contact form filled on paradiseeventsplanner.com', // Subject line
      html: `<h3>Hello, dear administrator!</h3> 
      <p>Somebody has just submitted contact form on <a href="www.paradiseeventsplanner.com">www.paradiseeventsplanner.com</a>.</p>
      <p> Contact details: </p>
      <p>Name: ${name} </p>
      <p>Telephone number: ${tel} </p>
      <p>Kindest regards, </p>
      <p> paradiseeventsplanner web site </p>`, // html body
    });

    console.log(info);

    res.status(200);
    return res.end();
  }
};

export default emailHandler;
