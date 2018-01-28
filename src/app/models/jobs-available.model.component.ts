import {CompanyEntity} from './comapny.model.component'
import {ShiftEntity} from './shift.model.component'
export interface IJobsAvailableEntity {
    jobId: string;
    title: string;
    company: CompanyEntity;
    wagePerHourInCents: number;
    shifts: Array<ShiftEntity>;
    branch: string;
    branchPhoneNumber: string;
  }
  export class JobsAvailableEntity implements IJobsAvailableEntity{
    jobId: string;
    title: string;
    company: CompanyEntity;
    wagePerHourInCents: number;
    shifts: Array<ShiftEntity>;
    branch: string;
    branchPhoneNumber: string;
    constructor(){}
  }
  