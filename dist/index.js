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
    res.send("Hello world!");
});
const vehiclesList = [];
// // post
app.post("/vehicle/add", (req, res) => {
    let newVehicle = {
        model: req.body.model,
        color: req.body.color,
        year: req.body.year,
        power: req.body.power
    };
    // car
    if (req.body.bodyType) {
        //console.log("hei")
        newVehicle.bodyType = req.body.bodyType;
        newVehicle.wheelCount = req.body.wheelCount;
    }
    // boat
    if (req.body.draft) {
        //console.log("hei")
        newVehicle.draft = req.body.draft;
    }
    // plane
    if (req.body.wingspan) {
        //console.log("hei")
        newVehicle.wingspan = req.body.wingspan;
    }
    vehiclesList.push(newVehicle);
    console.log(newVehicle);
    res.status(201).send("Vehicle added");
});
app.get("/vehicle/search/:model", (req, res) => {
    let searchModel = req.params.model;
    // assigning the value to undefined first
    let SearchVehicle = undefined;
    vehiclesList.forEach(vehicle => {
        if (vehicle.model === searchModel) {
            SearchVehicle = vehicle;
        }
    });
    if (SearchVehicle) {
        res.send(SearchVehicle);
    }
    else {
        res.status(404).send("Vehicle not found");
    }
});
app.listen(port, () => {
    console.log("server is running at http://localhost:" + port);
});
