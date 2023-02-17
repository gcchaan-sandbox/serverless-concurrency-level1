import { SQSHandler } from "aws-lambda";

export const handle: SQSHandler = async (event, _context) => {
  const record = event.Records[0];
  console.log(record.body);
  const {ts, broadcast_mail_id}: Record<string, string> = JSON.parse(record.body);
  console.log(ts);
  console.log(broadcast_mail_id);
  await new Promise(res => setTimeout(res, 5000));
  console.log('end');
}
