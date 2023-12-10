import express, {Express, Request, Response} from "express"
//import bodyParser from 'body-parser';

const app: Express = express();
const port: number = 3000;

// Use body-parser middleware to parse JSON bodies
app.use(express.json());

app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello world!####");
})

// post

interface Vehicle {
    model: string;
    color: string;
    year: number;
    power: number;
    bodyType?: string;
    wheelCount?: number;
    draft?: number;
    wingspan?: number;
  }

const vehiclesList: Vehicle[] = [];  

app.post("/vehicle/add", (req: Request, res: Response) => {
    //console.log(req.body);
   

    let newVehicle: Vehicle = {
        model: req.body.model,
        color: req.body.color,
        year: req.body.year,
        power: req.body.power
    }
    if(req.body.bodyType){
        //console.log("hei")
        newVehicle.bodyType = req.body.bodyType;
        newVehicle.wheelCount = req.body.wheelCount;
    }

    if(req.body.draft){
        //console.log("hei")
        newVehicle.draft = req.body.draft;
        
    }

    if(req.body.wingspan){
        //console.log("hei")
        newVehicle.wingspan = req.body.wingspan;
        
    }
    
    vehiclesList.push(newVehicle);
    console.log(newVehicle);

    res.status(201).send("Vehicle added");
})

app.listen(port, () => {
    console.log("server is running at http://localhost:"+port);
})