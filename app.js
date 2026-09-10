const { MongoClient } = require("mongodb");

const client = new MongoClient(
  "mongodb://127.0.0.1:27017/nodemongo"
);

client.connect()
  .then(async () => {
    const dbo = client.db("nodemongo");

    const myquery = { address: "Valley 345" };

    const newvalues = {
      $set: {
        name: "Mickey",
        address: "Canyon 123"
      }
    };

    const result = await dbo
      .collection("customers")
      .updateOne(myquery, newvalues);

    console.log(result.modifiedCount + " document updated");

    await client.close();
  })
  .catch(error => {
    console.log("Failed to connect", error);
  });