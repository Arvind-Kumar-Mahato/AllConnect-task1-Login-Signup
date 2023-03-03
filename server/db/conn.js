const mongoose = require("mongoose");
const DB =
  "mongodb+srv://arvind:arvind88@cluster0.ckgx3fq.mongodb.net/Authusers?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection start to DB"))
  .catch((error) => console.log(error.messsage));
