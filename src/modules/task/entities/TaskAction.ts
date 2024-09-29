class TaskAction {
   id: string;
   taskId: string;
   actionId: string;
   description: string | null;
   file: string | null;
   initialDate: number | null;
   finishDate: number | null;
   totalHours: number | null;

   constructor(id: string, taskId: string, actionId: string, description: string,
               file: string, initialDate: number | null, finishDate: number | null,
                totalHours: number | null
   ) {
      this.id = id;
      this.taskId = taskId;
      this.actionId = actionId;
      this.description = description;
      this.file = file;
      this.initialDate = initialDate;
      this.finishDate = finishDate;
      this.totalHours = totalHours;
   }
}

export { TaskAction };