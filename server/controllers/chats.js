import { dummyUsers, dummyMessages } from "../sockets/users.js";
import connection from "../db/db.js";
const users = {};
export const getChats = (req, res) => {
    
    // console.log(dummyUsers.filter( user => user.id !== req.query.id), "dummyUsers");
    const query = 'SELECT * FROM Users';
    const users = dummyUsers.filter(user => user.id.includes('6c84fb90-12c4') );
    console.log(users, "dummyUsers includes");

    return res.json(users);
}
export const getMessages = (req, res) => {
    // console.log("id", req.query)
    const { s_id, r_id } = req.query;
    const messages = dummyMessages.filter(message => (message.senderId === s_id && message.receiverId === r_id) || (message.senderId === r_id && message.receiverId === s_id));
    console.log(messages, "current chat messages");
    return res.json(messages);
}
export const postMessage = (req, res) => {
    // const { sender, receiver, message, time } = req.body;
    dummyMessages.push(req.body);
    console.log(dummyMessages, "dummyMessages");
    // console.log(dummyMessages, "dummyMessages");
    return res.json({ message: 'Message sent' });
}