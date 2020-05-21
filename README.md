# Pixgram

An Cloud Native Microservice Image Processing Application which allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice. Built using React, NodeJs, Express, Sequelize ORM, Postgres, Docker, Kubernetes, Nginx, AWS S3, and AWS RDS (Postgres).

## Project Overview

The project is split into three parts:

1. [A React Frontend](/pixgram-frontend) A client web application which consumes the RestAPI Backend.
2. [The REST API Feed Backend](/pixgram-restapi-feed), a Node-Express feed microservice.
3. [The REST API User Backend](/pixgram-restapi-user), a Node-Express user microservice.

AWS S3 is comprised of a set of buckets, each with a globally unique name, in which individual files (known as objects) and directories, can be stored.

- A file is selected for upload by the user using the React Client.
- The React Client makes a request to the REST API Feed application, which produces a temporary signature with which to sign the upload request.
- The temporary signed request is returned to the React Client in JSON format.
- The React Client then uploads the file directly to Amazon S3 using the signed request supplied by the REST API Feed application.

## Getting Setup

> _tip_: this frontend is designed to work with the RestAPI backends). It is recommended you stand up the backend first, test using Postman, and then the frontend should integrate.

### Installing project dependencies

This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the root of this repository. After cloning, open your terminal and run:

```bash
npm install
```

> _tip_: **npm i** is shorthand for **npm install**

### Setup Backend Node Environment

You'll need to create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm init`
2. Install express: `npm i express --save`
3. Install typescript dependencies: `npm i ts-node-dev tslint typescript @types/bluebird @types/express @types/node --save-dev`
4. Look at the `package.json` file from the RestAPI repo and copy the `scripts` block into the auto-generated `package.json` in this project. This will allow you to use shorthand commands like `npm run dev`

---
