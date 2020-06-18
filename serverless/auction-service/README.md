# Codingly.io: Base Serverless Framework Template

https://codingly.io

## What's included
* Folder structure used consistently across our projects.
* [serverless-pseudo-parameters plugin](https://www.npmjs.com/package/serverless-pseudo-parameters): Allows you to take advantage of CloudFormation Pseudo Parameters.
* [serverless-bundle plugin](https://www.npmjs.com/package/serverless-pseudo-parameters): Bundler based on the serverless-webpack plugin - requires zero configuration and fully compatible with ES6/ES7 features.

## Getting started
```
sls create --name YOUR_PROJECT_NAME --template-url https://github.com/codingly-io/sls-base
cd YOUR_PROJECT_NAME
npm install
```
## Deploy serverles
```
sls deploy -v //after we update or create serverles.yml
sls deploy -f NameHandler -v //after we update or create a handler
sls remove -v

```

## installed packages
* npm install uuid
* npm install --save @middy/core
* npm install --save @middy/http-event-normalizer 
* npm install --save @middy/http-error-handler py/http-json-parser@latest


#### Schedule

* Similar to search lambda or DynamoDb, find EventBridge
* click left menu
* Select **Rules** Amazon EventBridge **>** Events **>** Rules (here you can find the schedule and validate that this work every minute )
```
sls deploy -v //after we update or create serverles.yml
sls logs -f processAuction //see all the logs about this schedule
sls logs -f processAuction --startTime 1m //see all the logs about this schedule 1min ago (it's possible with 1h)
sls invoke -f processAuction  -l // call a function manually and param (l) is for logs 
```

### AUTH service
```
sls deploy -v --stage dev
```
## Validation JsonSchema
* first read JsonSchema
* $ npm install @middy/validator
## Documentation
* [AWS DynamoDB Document Client](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html)
* [Serverless - offline](https://www.npmjs.com/package/serverless-offline)
* [Middy](https://github.com/middyjs/middy)
* [Json schema](https://json-schema.org/)
* [Git serverless-auth0](https://github.com/codingly-io/serverless-auth0-authorizer)
