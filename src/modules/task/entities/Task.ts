class Task {
  id: string;
  title: string;
  description: string;
  createdAt: number;
  updatedAt: number | null;
  finishedAt: number | null;

  constructor(id: string, title: string, description: string, 
    createdAt: number, updatedAd: number, finishedAt: number) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.createdAt = createdAt;
    this.updatedAt = updatedAd;
    this.finishedAt = finishedAt;
  }
}

export { Task };