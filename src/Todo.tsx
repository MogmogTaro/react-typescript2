import { Todotype } from "./types/todo";
import { VFC } from "react";

export const Todo: VFC<Omit<Todotype, "id">> = (
  // props: Pick<Todotype, "userId" | "title" | "completed">
  props
) => {
  const { title, userId, completed = false } = props;
  const completedMark = completed ? "[完]" : "[未]";
  return <p>{`${completedMark}${title}（ユーザー：${userId}）`}</p>;
};
