"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import bodyParser from 'body-parser';
const app = (0, express_1.default)();
const port = 3000;
// Use body-parser middleware to parse JSON bodies
app.use(express_1.default.json());
app.get("/hello", (req, res) => {
    res.send("Hello world!####");
});
// post
app.post("/vehicle/add", (req, res) => {
    let vehicle = {
        model: req.body.model,
        color: req.body.color,
        year: req.body.year,
        power: req.body.power
    };
    console.log(vehicle);
    res.send("Vehicle added");
});
app.listen(port, () => {
    console.log("server is running at http://localhost:" + port);
});
