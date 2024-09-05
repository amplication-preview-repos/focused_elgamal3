import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmailCreateInput = {
  contentHtml?: string | null;
  contentMarkdown?: string | null;
  subject?: string | null;
  user?: UserWhereUniqueInput | null;
};
