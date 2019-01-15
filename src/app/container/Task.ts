import {TaskStatus} from "./TaskStatus";

export class Task {
  id: number;
  userId: number;
  title: string;
  description: string;
  creationDate: Date;
  status: TaskStatus;
}
