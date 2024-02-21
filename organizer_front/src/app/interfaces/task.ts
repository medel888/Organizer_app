import { Category } from "./category";

export interface Task {
    category:    Category;
    completed:   boolean;
    date:        Date;
    description: string;
    id:          number;
    priority:    string;
    title:       string;
}
