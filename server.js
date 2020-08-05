const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/config", (req,res) => {
    res.json({
        success:true
    });
});

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project-3", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() =>   {
    console.log("Successfully connected to database.");
})
.catch((err) => {
    console.log("Unable to connect to database");
    console.log(err);
});


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});