import TaskItem from "@components/TaskItem";

export default function TaskList({ tasks, ...props }) {
  return (
    <ul className="mt-4" {...props}>
      {tasks.map((item, index) => (
        <TaskItem index={index} value={item} />
      ))}
    </ul>
  );
}
