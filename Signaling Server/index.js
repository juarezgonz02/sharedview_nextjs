import express from 'express';
import { createServer } from 'http';
import { Server as socketIO } from 'socket.io'; // Import 'Server' from socket.io as 'socketIO'
import cors from 'cors'; // Import the 'cors' middleware
import { createAdapter } from "@socket.io/cluster-adapter";
import { setupWorker } from "@socket.io/sticky";

const app = express();

const server = createServer(app);

const io = new socketIO(server, { 
  cors: {
    origin: ["http://localhost:3000", "https://www.sharedview.live", "https://sharedview.live"]
}}); 

io.adapter(createAdapter());

setupWorker(io);

app.use(cors({ origin: ['http://localhost:3000', "https://sharedview.live", "https://www.sharedview.live"] }));

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('newMessage', (data) => {
    console.log(data)
    io.in(data.room).except(socket.id).emit("incoming-message", data)
  })
  
  socket.on('received', (data) => {

    console.log("received", data)
    
    io.to(data.toSocketId).emit("know-me", data.myUserId)

  })

  socket.on('offerToRoom', (data) => {

    console.log("offerToRoom", data)

    io.in(data.room).except(socket.id).emit("new-peer", data)

    socket.join(data.room)

  });

  socket.on('disconnecting', () => {

    socket.rooms.forEach(
      (room) => {
        io.in(room).emit("user-disconnected", socket.id)
      })

    console.log("User Disconnected", socket.id)
  });


});

server.listen(8880, () => {
  console.log('Listening on *:80');
});