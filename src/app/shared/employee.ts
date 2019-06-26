import { Comment } from './comment';
export class Employee {
    id: string;
    name: string;
    phone: string;
    area: string;
    image: string;
    moderator: string;
    comments: Comment[];
}