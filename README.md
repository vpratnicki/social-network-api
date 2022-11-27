# Social Network API

## Description

For this challenge I build the backend API for a social network web application. Users can share their thoughts, react to friends’ thoughts, and create a friend list. To do this I used Express.js for routing, a MongoDB database and the Mongoose ODM.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Walkthrough Videos](#walkthrough-videos)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

The following steps are how to install and set up the application: 
1. Clone the repo: 
2. Install mongoDB
2. Install the following npm packages: 
     - express
     - mongoose

## Usage

To use this app, install the list of packages above, and run 'npm start' to start the server from the comand line. 

Test the routes using Inomnia Core: 

``/api/users``
- `GET` all users.
- `GET` a single user by its _id and populated thought and friend data.
- `POST` a new user.
- `PUT` to update a user by its `id`.
- `DELETE` to remove user by its `id`.

`/api/users/:userId/friends/:friendId`
- `POST` to add a new friend to a user's friend list.
- `DELETE` to remove a friend from a user's friend list.

`/api/thoughts`
- `GET` to get all thoughts.
- `GET` to get a single thought by its `_id`.
- `POST` to create a new thought.
- `PUT` to update a thought by its `_id`.
- `DELETE` to remove a thought by its `_id`.

`/api/thoughts/:thoughtId/reactions`
- `POST` to create a reaction stored in a single thought's reactions array field.
- `DELETE` to pull and remove a reaction by the reaction's reactionId value.

## Walkthrough Videos
- User Routes
- Friend Routes
- Thought Routes
- Reaction Routes

## Contributing 

Contributions are greatly appreciated! In fact, they are what makes this open source community such a wonderful place to learn, develop, and create. I welcome all suggestions that would make this project better, please fork the repo and create a pull request. Additionally you can open an issue with the tag "enhancement". 

Fork the Project: 
1. Create your feature branch (git checkout -b feature/awesome-feature). 
2. Commit your changes (git commit -m 'Add some awesome feature'). 
3. Push to the branch (git push origin feature/awesome-feature). 
4. Open a pull request.

## Questions

Have any questions about this project? Please reach out! 

- GutHub username: vpratnicki
- Link: [https://github.com/vpratnicki](https://github.com/vpratnicki)
- Email: vanessa@pratnicki.net

