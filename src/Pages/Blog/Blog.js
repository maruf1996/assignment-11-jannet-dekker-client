import React from 'react';
import useTitle from '../../hooks/useTitle';
import './Blog.css';

const Blog = () => {
    useTitle('Blog');
    return (
        <div className='p-3'>
            <h2 className='my-3 fw-bold text-primary'>Necessary Question and Answer for Web Development</h2>
            <div className='blog'>
                <h4>Difference between SQL and NoSQL</h4>
                <p>In an SQL database, a relation is represented as a table, with each tuple in the relation forming a row (usually called a record) in the table. It's like a large, formal Excel spreadsheet for software use. We call the definition of tables and rows a schema.In relational databases, you can (and usually should) normalize your data without storing it redundantly. In the past, storage was expensive and normalizing your data saved storage.</p>
                <p>A common misconception regarding NoSQL databases is that “no” means no SQL is used in the database. As mentioned earlier, “no” means “just not”. You can find some SQL in NoSQL databases. Another source of confusion is that there is no single definition of a NoSQL database. In fact, there are four broad categories of NoSQL databases: 1/Document Stores 2/Graph database 3/Key-value stores 4/Wide-column data store Some databases, such as Cosmos DB, span different categories, but NoSQL databases are rarely interchangeable. One thing they generally have in common is that they sacrifice some robustness to gain speed and scalability.</p>
            </div>
            <div className="blog">
                <h4>What is JWT, and how does it work?</h4>
                <p>JSON Web Token is an open industry standard used to share information between two entities, usually a client (like your app’s frontend) and a server (your app’s backend).They contain JSON objects which have the information that needs to be shared. Each JWT is also signed using cryptography (hashing) to ensure that the JSON contents (also known as JWT claims) cannot be altered by the client or a malicious party.</p>
                <h5>How do they work?</h5>
                <h6>1/ Create a JSON</h6>
                <h6>2/ Create a JWT signing key and decide the signing algorithm</h6>
                <h6>3/ Creating the “Header”</h6>
                <h6>4/ Create a signature</h6>
                <h6>5/ Creating the JWT</h6>
                <h6>6/ Verifying the JWT</h6>
            </div>
            <div className="blog">
                <h4>What is the difference between javascript and NodeJS?</h4>
                <h5>Javascript</h5>
                <p>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
                <h5>Node Js</h5>
                <p>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>
                <h5>Difference between Nodejs and JavaScript : </h5>
                <p>Javascript is a programming language that is used for writing scripts on the website. and NodeJS is a Javascript runtime environment.</p>
                <p>Javascript can only be run in the browsers. and We can run Javascript outside the browser with the help of NodeJS.</p>
                <p>Javascript is basically used on the client-side. and node js is mostly used on the server-side.</p>
                <p>Javascript is capable enough to add HTML and play with the DOM. and Nodejs does not have capability to add HTML tags.</p>
                <p>Javascript is used in frontend development. and Nodejs is used in server-side development.</p>
                <p>Javascript is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. and Nodejs is written in C, C++ and Javascript.</p>
            </div>
            <div className="blog">
                <h4>How does NodeJS handle multiple requests at the same time?</h4>
                <p>We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded.     
                </p>
                <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
            </div>
        </div>
    );
};

export default Blog;