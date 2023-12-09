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

app.post("/vehicle/add", (req: Request, res: Response) => {
    //console.log(req.body);
    type Vehicle = {
        model: string,
        color: string,
        year: number,
        power: number
    }

    let vehicle: Vehicle = {
        model: req.body.model,
        color: req.body.color,
        year: req.body.year,
        power: req.body.power
    }

    console.log(vehicle);

    res.send("Vehicle added");
})

app.listen(port, () => {
    console.log("server is running at http://localhost:"+port);
})