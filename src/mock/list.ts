import { IFantaBill } from "../presenter/FantaPresenter";

export const mock_bills: IFantaBill[] = [
  {
    id: '1',
    code: 'JTSQ00001',
    billType: '1',
    billStatus: '0',
    applyUser: 'me',
    nextApproveUser: 'me',
    ApprovedUser: ['me'],
    tags: ["家庭耗材"],
    currency: 'RMB',
    amount: 99,
    originAmount: 99,
    billItems: [
      {
        amount: 99,
        originAmount: 99,
        reason: '卫生纸',
        description: '卫生纸'
      }
    ]
  },
  {
    id: '2',
    code: 'JTSQ00002',
    billType: '1',
    billStatus: '0',
    applyUser: 'me',
    nextApproveUser: 'me',
    ApprovedUser: ['me'],
    tags: ["奢侈品", "老公威胁"],
    currency: 'RMB',
    amount: 5999,
    originAmount: 5999,
    billItems: [
      {
        amount: 5999,
        originAmount: 5999,
        reason: '苹果14',
        description: '苹果14'
      }
    ]
  }
]