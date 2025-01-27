import express, { Application } from "express";
import morgan from "morgan"
import router from "./routes/taskRouter";


const app: Application= express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use('api/task/v1', router );

app.listen(port, () => {
  console.log("Server is running...");
});
