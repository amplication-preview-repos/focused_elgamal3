import { User } from "../user/User";

export type Email = {
  contentHtml: string | null;
  contentMarkdown: string | null;
  createdAt: Date;
  id: string;
  subject: string | null;
  updatedAt: Date;
  user?: User | null;
};
