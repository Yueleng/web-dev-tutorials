// code in /api only runs in server side, thus credentials can be used here.
// POST /api/new-meetup

import { MongoClient } from "mongodb";

const username = "someuser";
const password = "Zc7HzZapKVGpFAnv";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      `mongodb+srv://${username}:${password}@cluster0.hdxwg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    );

    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log("*************");
    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted successfully!" });
  }
}
