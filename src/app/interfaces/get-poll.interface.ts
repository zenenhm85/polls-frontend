import {Poll} from '../models/poll.model';

export interface GetPolls {
    total: number;
    polls:Poll[] 
}
