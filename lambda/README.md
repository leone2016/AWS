# AWS  L A M B D A 

''''js
// Basic structure 

exports.handler = (event, context, callback) => {


}
''''
## event object 
> the event obj holds the input data or input prarameters that we want the lambda function to act on, the structure of this event obj depends on the event source, we have (api gateway, cloudwatch logs,Kinesis, S3 DynamoDB, SNS, SQS...etc )  these different event triggers that can be used to invoke our lambda functions and each of these triggers will send the event data in a particular structure as well'

### Lambda Invocation Types

Synchronous  |  Asynchronous
------------- | -------------
Api gateway, Cognito event, AWS SDK | S3, AWS SDK

### Types of lambda event sources

Push Events  |  Pull/Poll Events
------------- | -------------
S3, Api gateway | DynamoDb, Kinesis, AWS SQS

## context object (opcional argument )
> the context obj provides us with some useful runtime information while the lambda function is executing, for example, **we can use the context object to find how much time is remaining before the lambda function times out**, what cloudwatch log group and log stream associated with lambda function, what is the aws request ID of the current invocation of this lambda fucntion 

[more info](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html)
''''js
// Basic structure 

exports.handler = (event, context, callback) => {

    context.getRemainingTimeInMillis();

    context.functionName(); // we can use this to invoce the same lambds fuction again, programmatically, using the aws SDK, for example.

    context.functionVersion; 

    context.fuctionArn; // will give us the ARN of the currently running lambda function 

    context.awsRequestId; // will give us the request ID of the current invocation, We can use this request ID for any follow up inquire with  AWS support if we need to

    context.memoryLimitInMB; // will give us the memory size allocated to the function

    context.identity; // will give us information about the cognito identity provider

    context.logGroupName; //will give us the name of log group
    context.logStreamName; // associated with our lambda function

    context.clientContext; // if we're using AWS mobile SDK, we can have context DOT client context, and this property can give us additional information about the client application for example: context.clientContext.cliente.app_title, context.clientContext.env.platform_version, context.clientContext.env.make, context.clientContext.env.model

}
''''

## AWS lambda limits 

* memori size: 128mb to 3008Mb, in 64 Mb increments
* Ephemeral Disk Capacity
* TimeOut: 900 seconds or 15 min
* body Payload size: 6mb for synchronous Invocation and 128kb for asynchronous invocation
* Deployment Package Size: 50Mb when compressed and 250Mb when uncompressed, 3Mb for online editing within Aws Lambda console
* Total Package Size within a region 75Gb
* concurrency 1000 Executions


# Amazon API Gateway 

the api gateway is a fully managed serverless service fron aws and it allows us to create, publish and run secure APIs at any scale, with API Gateway we can create API endpoints to integrate frontend applications with its backend, using RESTfull APIs over HTTPS.

API Gateway being a serverless offering, does not require us to provision any servers, It allows us to build APIs that are extremely low cost, highly scaleable, secure, and easy to monitore as well, It's a fully managed service and can handle thousands of concurrent API calls, and being simple to use, we can have our APIs up and running quickly