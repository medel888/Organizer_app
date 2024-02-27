import { Category } from "./category";

export interface Task {
    title:       string;
    description: string;
    category:    Category;
    completed:   boolean;
    date:        Date;
    priority:    string;
}
