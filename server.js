const express = require('express');

const app = express();
app.use("/",express.static("public"));
const PORT = process.env.PORT || 3000;
//app.get("/", (req, res) => res.send("server is working"));

app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
