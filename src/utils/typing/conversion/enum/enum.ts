import { Obj } from "../obj";
import { ArrayTotuples } from "../tuples";

export type Enum<T extends string[]> = Obj<ArrayTotuples<T>>;
