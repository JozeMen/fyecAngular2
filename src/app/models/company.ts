import {Department} from "./department";

export interface Company {
  companyId: number;
  name: string;
  departments: Department[];
}
