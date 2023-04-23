import {Employee} from "./employee";

export interface Department {
  departmentName: string;
  phoneNumber: string;
  departmentAddress: string;
  company: string;
  employees: Employee[]
}
