import { Comment } from './comment';

export class ClientDetails {
    id: string;
    name: string;
    phone: string;
    image: string;
    comments: Comment[];
}
