import { Time } from "@angular/common";
import { Category } from "./category";

export interface Task {
    title:       string;
    category:    Category;
    description: string
    date:        Date;
    time:        Time;
}
