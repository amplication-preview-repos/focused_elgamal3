import { SortOrder } from "../../util/SortOrder";

export type EmailOrderByInput = {
  contentHtml?: SortOrder;
  contentMarkdown?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  subject?: SortOrder;
  updatedAt?: SortOrder;
  user?: SortOrder;
};
