import "./utils/module-alias";
import express, { Application } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();
export class App {
  readonly app: Application;
  readonly port: string | number;
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3333;
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }
  public setup(): Application {
    return this.app;
  }
  public async init(): Promise<void> {
    this.setupExpress();
  }
  public async setupExpress() {
    this.app.use(bodyParser.json());
    this.app.use(express.json());
    this.setupRoutes();
  }
  public start(): void {
    this.app.listen(this.port, () => {
      console.log("Server listening on port: " + this.port);
    });
  }
  setupRoutes() {
    //define routes
    this.app.use();
  }

  public async close(): Promise<void> {
    //await database.close()
  }
}
