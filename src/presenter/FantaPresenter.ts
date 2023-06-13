

export interface IFantaBill {
  id?: string;
  code?: string;
  billType?: string;
  billStatus?: string;
  applyUser?: string;
  nextApproveUser?: string;
  ApprovedUser?: string[];
  billItems?: IFantaBillItem[];
  tags?: string[]
}

export interface IFantaBillItem {
  amount?: number;
  originAmount?: number;
  currency?: string;
  reason?: string;
  description?: string;
}

export class FantaPresenter {
  public list: IFantaBill[] = []
}