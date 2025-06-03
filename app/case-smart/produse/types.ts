export interface FilterValueObject {
  [key: string]: FilterValue;
}

export type FilterValue = string | number | FilterValueObject;
