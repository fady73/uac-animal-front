import { Comment } from './comment';

export class Client {
    id: string;
    name: string;
    phone: string;
    type: string;
    address: string;
    image: string;
    rate: string;
    visit: boolean;
    comments: Comment[];
}