export interface ITransaction {
  id: number;
  title: string;
  type: "thu" | "chi";
  amount: number;
  description: string;
}
export type TTransaction = Omit<ITransaction,"id">