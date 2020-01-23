# Amazon  DynamoDB
In the recent years data has acquired an all new meaning, with the advent of social media, mobility and data science, the amount of data that's being generated is huge, Just to give you a perspective, over 300 hours of video content gets uploaded to .
every single minute.

Almost 5 billion videos are watched on YouTube every single day, and this trend is only moving upwards.

To keep pace with these challenges, the database technology has also evolved enormously in the recent years.

Traditional relational databases can no longer support the speed, scale, and performance levels demanded by new applications that transact with this huge amount of data.

This is where NoSQL databases come in to play. Amazon DynamoDB is a fully-managed NoSQL database service that can scale on-demand to support

virtually unlimited concurrent read/write operations, with response times in single-digit milliseconds.

And these response times can be further brought down from milliseconds to microseconds with caching services like DAX or DynamoDB Accelerator.

With DynamoDB, you are able create your own serverless database tables with just a few clicks on the DyanmoDB console and instantly you have high-performance tables ready to scale to your needs.

DynamoDB provides seamless scaling and predictable performance.

It’s a serverless cloud database, meaning, you don’t have to specify how many servers you need or what backend infrastructure you need.

All you must tell DynamoDB is how many table reads and how many tables writes your application will perform per second.

That’s it and you are good to go.

DynamoDB has little to no learning curve involved.

So, you can learn DynamoDB real fast and start leveraging it in your applications.

Having said that, there are some best practices of working with DynamoDB that we’ll explore later in this course.

And these are very crucial to ensure that you get the best bang for the buck.

I've seen many projects and came across many stories and blogs from people who have had mixed experiences with DynamoDB.

And all I can say that this is mostly due to their ignorance of the DynamoDB best practices.

If you follow the best practices while designing or modeling your DynamoDB tables and while interacting with DynamoDB, DynamoDB will work like a charm for you.

This section is all about DynamoDB and before we dive into hands-on with DynamoDB, let’s go through some concepts so you’ll have more clarity when we do the hands on.


Curso de AWS


### Terminology comparison with SQL

SQL  | DynamoDB
------------- | -------------
Tablas | Tablas
Rows | Items
Columns | Attribute
PrimaryKeys - Multicolumn and Optional | PrimaryKeys - Mandatory, Minimun one and Maximun Two attributes
indexes | Local secondary indexes
views| global secondary Indexes

### Data Types in dynamoDB

#### Scalar types
* Exactly one value
* e.g. string, number, binary, boolean, and null
* keys or index attibutes only support string, number and binary scalar types

String
* stores text data UTF-8 encoded
* Only non-empty values
* e.g "Jhon", "California"

Number
* store all numeric types
* e.g. 123, 100.88, -5

#### Set types
* Multiple scalar 
* unordered collection of string, number or binary
* only non-empty values
* no duplicates allowed
* no empty sets allowed
* all values must be of same scalar
* e.g. string set, number set and binary set

example
* ["apples", "oranges", "grapes"]
* [1, 2.6, -28, 88, 51]
* ["SGVsdG8=", "V29ghGQ="]


#### Document Types
* Complex structure with nested attibutes
* e.g list and map


### Query and Scan Operations

* 1MB / request (Limit for AWS)
* Limit Parameter 
* lastEvaluedKey, ExclusiveStartKey  - paginated reads


