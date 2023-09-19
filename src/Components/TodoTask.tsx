import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  CompleteTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, CompleteTask }: Props) => {
  return (
    <div className="task ">
      <div className="content">
        <span> {task.taskName} </span>
        <span> {task.deadline} </span>
      </div>
      <button
        onClick={() => {
          CompleteTask(task.taskName);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoTask;
