import { Comment } from './comment';

export class Client {
    id: string;
    name: string;
    phone: string;
    type: string;
    address: string;
    comments: Comment[];
}