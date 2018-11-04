export interface IQuestion {
  id?: string; // generated by backend
  description: string;
  options: string[];
  answer: number;
  order?: number;
}
