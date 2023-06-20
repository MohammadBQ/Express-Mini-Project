const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv")
dotenv.config()
const multer = require("multer");
const moviesRoutes = require("./api/movies/movies.routes");
const connectDb = require("./database");
const notFoundHandler = require("./middleware/notfound");
const errorHandler = require("./middleware/errorhandler");
const app = express();
connectDb()
app.use(express.json())


// Routes 
app.use("/movies", moviesRoutes)


// Middlewares
app.use("/media/", express.static(path.join(__dirname, "media")))
app.use(cors());
app.use(morgan("dev"));
app.use(notFoundHandler);
app.use(errorHandler);








const PORT = process.env.PORT || 8000



app.listen(PORT, () => {
    console.log("The application is running on localhost:8000");
  });