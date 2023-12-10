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
const vehiclesList = [];
app.post("/vehicle/add", (req, res) => {
    //console.log(req.body);
    let newVehicle = {
        model: req.body.model,
        color: req.body.color,
        year: req.body.year,
        power: req.body.power
    };
    if (req.body.bodyType) {
        //console.log("hei")
        newVehicle.bodyType = req.body.bodyType;
        newVehicle.wheelCount = req.body.wheelCount;
    }
    if (req.body.draft) {
        //console.log("hei")
        newVehicle.draft = req.body.draft;
    }
    if (req.body.wingspan) {
        //console.log("hei")
        newVehicle.wingspan = req.body.wingspan;
    }
    vehiclesList.push(newVehicle);
    console.log(newVehicle);
    res.status(201).send("Vehicle added");
});
app.listen(port, () => {
    console.log("server is running at http://localhost:" + port);
});
