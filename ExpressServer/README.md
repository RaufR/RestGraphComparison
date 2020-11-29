### ExpressServer

## Intro

This server using expressJS, nodeJS, mysql, docker.

## DB

MYSQL instance can be implement in docker, and open to port 3306.

## How to run Server

1. Install Docker and setup mysql img into docker.
2. Use seed data from this link "https://github.com/datacharmer/test_db".
3. Clone this repo and navigate to ExpressServer directory.
4. Run `npm install`, this command will install all nodeJS packages.
5. Run `npm start`, this command will start server in port 5000.(port can be change from `app.js`).
6. Routers are specified in Routes section, also can be found in `route/appRoute.js`.

## Trouble shooting

Please create git issue if any runtime problem happened. or send email to `rauf.rahmancz@gmail.com`

Follow this link to setup docker and mysql "https://rauf-rahmancz.medium.com/connect-docker-and-mysql-in-right-way-95602f833cb0"
