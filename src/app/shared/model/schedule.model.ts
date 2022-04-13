import { Org } from "./org.model";

export interface Schedule{
  id: number,
  name: string,
  description: string,
  active: boolean,
  data: Date,
  org: Org
}
