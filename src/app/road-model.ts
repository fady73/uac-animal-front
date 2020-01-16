import { Company } from "./shared/company"

export class RoadModel {
    id: number
employee_id: string
company_id: string
date: string
companies:Company=new Company();
}
