# Amazon  A P I gateway

> the api gateway is a fullu managed serverless services from aws and it allows us to create, publish and run secure API at any scale.
> With api gateway we can create api endpoints to integrate frontend applications with its backend, using RESTfull apis over HTTPS, api Gateway being a serverless offering, does not require us to provision any servers. It allowa us to build APIs that are extremely low cost, highly scalable, secure, and easy to monotor as well.
It's a fully managed services and can handle thousands of concurrent API calls and being simple to use, we can have our APIs up and running quickly

### Api gateway mapping template 

**Apache VTL (velocity template lenguage)**

[Documentation](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html#input-variable-reference)

#### steps to configure body mapping template with example math operations

1. create a lambda function with basic math operations
2. create a resource called math
3. create a resource into math called calculate with name {operation} and add method POST
4. focus on POST through integration request 
    * open maping templete and select **when is not defined any template (recomended)** 
    * fill **CONTENT-TYPE**
    * click on **add mapping templete**
    * add a same code like this
    ````js
    {
        "operation": "$input.params('operation')",
        "input": {
            "op1": $input.json('$.num1'),
            "op2": $input.params('$.num2')
        }
    }
    ````
