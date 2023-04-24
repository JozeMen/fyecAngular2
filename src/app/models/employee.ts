import {Operation} from "./operation";

export interface Employee {
  id : number;
  fio : string;
  phoneNumber: string;
  operations: Operation[];
}
