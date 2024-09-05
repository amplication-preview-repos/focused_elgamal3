import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmailWhereUniqueInput } from "../email/EmailWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  emails?: EmailWhereUniqueInput;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
