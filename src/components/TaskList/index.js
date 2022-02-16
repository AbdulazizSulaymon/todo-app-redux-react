import TaskItem from "@components/TaskItem";

export default function TaskList({ listIndex, tasks, ...props }) {
  return (
    <ul className="mt-4" {...props}>
      {tasks.map((item, index) => (
        <TaskItem listIndex={listIndex} index={index} value={item} />
      ))}
    </ul>
  );
}
