# Daily Video Setup

## Getting Started

- This guide will help you get a Node.js Daily server set up for video conferencing in no time
- For security purposes, be sure to host the REST server components of this guide on an isolated server, and not embedded in an html script tag
- Before moving forward, you'll need to grab an account at [daily.co](https://www.daily.co/) to get your API key from the [dashboard](https://dashboard.daily.co/)

### Setup

- You will need to create a .env file in the root directory with two variables:
  
  ```js
  DAILY_API_KEY=YOUR_API_KEY
  PORT=YOUR_FAVORITE_PORT_NUMBER
  ```

- Don't forget to create a .gitignore file to exclude .env!
- Next, update index.html to reflect your Daily.co domain and the room name of your live conference
- A video player can now be seen in index.html, but you will have to create a room first, either on the dashboard or through the REST server

## Using the server

```js
// install required node modules
npm i
// start the server
node server.js
```

- The server is set up to create, delete, and retrieve video conference rooms by using various endpoints:

- **GET /rooms**
  - returns a list of live rooms
- **POST /rooms**
  - creates a room with a random name
  - accepts a JSON in request body, where a room name can instead be specified (recommended):
  
  ```JSON
    {
      "name":"your_name_here"
    }
  ```

  - See additional parameters that can be used to customize a new room [here](https://docs.daily.co/reference/rest-api/rooms/create-room)

- **DELETE /rooms/:room_name**
  - deletes a room with the name specified as query parameter

## Meeting Tokens

- Used for providing authentication and limiting access to specified channels
- Reference [the docs](https://docs.daily.co/reference/rest-api/meeting-tokens) for more detail on accepted parameters
- **POST /meeting-tokens**
  - creates a new meeting token for a user
  - be sure to specify room_name on the request JSON, or all rooms in your domain will be accessible
- **GET /meeting-tokens/:meeting_token**
  - validates a meeting token creating for your domain

## Next Steps

- With the server up and running, front-end requests to the various endpoints can be used to create and join rooms hosted on your Daily.co domain
- The endpoints provided in server.js are merely a suggestion, and a full list of endpoints can be explored [here](https://docs.daily.co/reference/rest-api)
- If you would like to customize the layout of the player, check out the docs on the topic [here](https://docs.daily.co/reference/vcs/layout-api)

## About

- My name is [Stephen Rivas](https://linkedin.com/in/stephenpharmd), and I'm a software engineer who loves exploring new technologies and sharing them with the world 
- If you appreciated this guide and would like to see more, please star the repo and feel free to connect on LinkedIn
- If you have any questions, feel free to e-mail me at stephen.anthony.rivas@gmail.com