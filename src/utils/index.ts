import { compareDesc, parseISO } from "date-fns";

interface Blog {
  publisedhAt: string;
  updatedAt: string;
}

export const cx = (...className: string[]) =>
  className.filter(Boolean).join("");

export const sortBlogs = (blogs: Blog[]) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publisedhAt), parseISO(b.updatedAt))
    );
};
