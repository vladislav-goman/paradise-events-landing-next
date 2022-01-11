import AWS from 'aws-sdk';

AWS.config.update({
  region: process.env.AWS_REGION_CUSTOM,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID_CUSTOM,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_CUSTOM,
});

const emailHandler = async (req, res) => {
  if (req.method === 'POST') {
    const { name, tel } = req.body;

    const params = {
      Message: `Hello, dear administrator!
      Somebody has just submitted contact form on www.paradiseeventsplanner.com.
      Contact details:
      Name: ${name};
      Telephone number: ${tel}.

      Kindest regards,
      paradiseeventsplanner web site`,
      TopicArn: process.env.AWS_SNS_ARN_CUSTOM, // TOPIC_ARN
    };

    try {
      const data = await new AWS.SNS({ apiVersion: '2010-03-31' })
        .publish(params)
        .promise();
      console.log('Success.', data);
    } catch (err) {
      console.log('Error', err.stack);
    }

    res.status(200);
    return res.end();
  }
};

export default emailHandler;
