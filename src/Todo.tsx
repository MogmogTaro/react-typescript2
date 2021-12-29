import { Todotype } from "./types/todo";

export const Todo = (
  // props: Pick<Todotype, "userId" | "title" | "completed">
  props: Omit<Todotype, "id">
) => {
  const { title, userId, completed = false } = props;
  const completedMark = completed ? "[完]" : "[未]";
  return <p>{`${completedMark}${title}（ユーザー：${userId}）`}</p>;
};
