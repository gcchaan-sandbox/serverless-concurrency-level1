import json
import boto3

my_session = boto3.Session(profile_name='sandbox01')
sqs = my_session.resource('sqs')

queue = sqs.get_queue_by_name(QueueName='serverless-concurrency-level1')
body = {
    "ts": "12345",
    "broadcast_mail_id": "42",
}
response = queue.send_message(MessageBody=json.dumps(body))
