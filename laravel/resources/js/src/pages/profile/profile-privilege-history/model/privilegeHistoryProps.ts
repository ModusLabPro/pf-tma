export interface IHistoryNotification {
  id: number;
  amount: number;
  type: 'Начисление' | 'Списание';
  status: string;
  active_date: string;
  end_date: string;
}

export interface IProfilePrivilegeHistoryPageProps {
  bonusHistory: IHistoryNotification[];
  processingHistory: IHistoryNotification[];
  withdrawalHistory: IHistoryNotification[];
  accrualHistory: IHistoryNotification[];
}
