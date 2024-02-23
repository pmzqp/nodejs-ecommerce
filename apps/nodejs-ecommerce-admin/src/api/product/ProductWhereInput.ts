import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type ProductWhereInput = {
  category?: CategoryWhereUniqueInput;
  id?: StringFilter;
  price?: FloatFilter;
};
