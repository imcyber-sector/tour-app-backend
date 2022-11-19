require('dotenv').config();
const express = require("express");
const cors = require('cors');

import ProductRouter from './routes/Products';
import CONSTANT from './constants/constant';

export class Server {
  public app = express();
  
  public port:string | Number = CONSTANT.PORT || 3000;

  constructor() {
    console.log("CONSTANT", CONSTANT)
    this.setCors();
    this.configureBodyParser();
    this.setRoutes();
  }

  setCors() {
    const corsOptions = {
      origin: '*',
      methods: ["GET", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
    };
    this.app.use(cors(corsOptions));
  }

  configureBodyParser() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  setRoutes() {
    this.app.use("/products", ProductRouter);
    // this.app.use("/bookings", BookingRouter);
  }
}