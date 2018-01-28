
export interface ICompanyEntity {
  name: string;
  address: string;  
  logo: string;
  reportTo: string;
}

export class CompanyEntity implements ICompanyEntity{
  name: string;
  address: string;  
  logo: string;
  reportTo: string;
  constractor(){}
}
