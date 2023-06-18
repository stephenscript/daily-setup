// set up express server
const express = require("express");
const app = express();
app.use(express.json());

// helper function
const apiHelper = require("./utils/apiHelper.js");

// LIST ROOMS
// returns room name
app.get("/rooms", async (request, response) => {
  try {
    const rooms = await apiHelper("get", "/rooms");
    response.json(rooms);
  } catch (e) {
    console.log("error: ", e);
    response.status(500).json({ error: e.message });
  }
});

// CREATE ROOM
// specify room name in request body, else random name will be generated
app.post("/rooms/", async (request, response) => {
  try {
    const rooms = await apiHelper("post", "/rooms", request.body);
    response.json(rooms);
  } catch (e) {
    console.log("error: ", e);
    response.status(500).json({ error: e.message });
  }
});

// DELETE ROOM
// specify room name as query parameter
app.delete("/rooms/:room", async (request, response) => {
  try {
    const rooms = await apiHelper("delete", `/rooms/${request.params.room}`, request.body);
    response.json(rooms);
  } catch (e) {
    console.log("error: ", e);
    response.status(500).json({ error: e.message });
  }
});

// tokens - https://docs.daily.co/reference#create-meeting-token

app.post("/meeting-tokens", async (request, response) => {
  try {
    const token = await apiHelper("post", "/meeting-tokens", request.body);
    response.json(token);
  } catch (e) {
    console.log("error: ", e);
    response.status(500).json({ error: e.message });
  }
});

app.get("/meeting-tokens/:token", async (request, response) => {
  try {
    const token = await apiHelper(
      "get",
      `/meeting-tokens/${request.params.token}`
    );
    response.json(token);
  } catch (e) {
    console.log("error: ", e);
    response.status(500).json({ error: e.message });
  }
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
