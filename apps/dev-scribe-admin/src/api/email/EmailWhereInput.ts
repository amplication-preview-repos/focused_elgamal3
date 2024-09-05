import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmailWhereInput = {
  contentHtml?: StringNullableFilter;
  contentMarkdown?: StringNullableFilter;
  id?: StringFilter;
  subject?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
