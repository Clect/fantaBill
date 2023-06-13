import { mock_bills } from "../mock/list";


export interface IFantaBill {
  id?: string;
  code?: string;
  billType?: string;
  billStatus?: string;
  applyUser?: string;
  nextApproveUser?: string;
  ApprovedUser?: string[];
  amount?: number;
  originAmount?: number;
  currency?: string;
  billItems?: IFantaBillItem[];
  tags?: string[]
}

export interface IFantaBillItem {
  amount?: number;
  originAmount?: number;
  reason?: string;
  description?: string;
}

export class FantaPresenter {
  public list: IFantaBill[] = mock_bills
}