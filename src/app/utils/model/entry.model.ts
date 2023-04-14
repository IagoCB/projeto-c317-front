export interface Entry {
  id?: number;
  name: string;
  date: Date;
  value: number | null;
  classification: string;
  description: string;
}
