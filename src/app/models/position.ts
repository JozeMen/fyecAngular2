import {Operation} from "./operation";

export interface Position {

  position_number: number;
  position_name: string;
  operations: Operation[];
}
