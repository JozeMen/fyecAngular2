import {Operation} from "./operation";

export interface Employee {
  id : number;
  FIO : string;
  phoneNumber: string;
  operations: Operation[];

}
