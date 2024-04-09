import config, { IConfig } from "config";
import { connect as mongooseConnect, connection } from "mongoose";

const dbConfig: IConfig = config.get("App.database");

export const connect = async (): Promise<void> => {
  try {
    await mongooseConnect(dbConfig.get("mongoUrl"));
    console.log("Database connected.");
  } catch (error) {
    console.log(error);
  }
};

export const close = (): Promise<void> => connection.close();
