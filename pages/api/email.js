import { SNSClient, PublishCommand } from '@aws-sdk/client-sns';

const snsClient = new SNSClient({ region: process.env.AWS_REGION });

const emailHandler = async (req, res) => {
  if (req.method === 'POST') {
    const { name, tel } = req.body;

    const params = {
      Message: `Hello, dear administrator!
  Somebody has just submitted contact form on www.paradiseeventsplanner.com.
  Contact details:
  Name: ${name}
  Telephone number: ${tel}
  
  Kindest regards,
  paradiseeventsplanner web site`,
      TopicArn: process.env.AWS_SNS_ARN, // TOPIC_ARN
    };

    try {
      const data = await snsClient.send(new PublishCommand(params));
      console.log('Success.', data);
    } catch (err) {
      console.log('Error', err.stack);
    }

    res.status(200);
    return res.end();
  }
};

export default emailHandler;
