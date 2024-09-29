class Action {
  id: string;
  title: string;
  createdAt: number;

  constructor(id: string, title: string, createdAt: number) {
    this.id = id;
    this.title = title;
    this.createdAt = createdAt;
  }
}

export { Action };