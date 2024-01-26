export type Obj<K extends string> = {
  [P in K]: P;
};
