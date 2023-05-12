type Status = 'Done' | 'Pending';

export interface Todo {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    description: string;
    endDate: Date;
    status: Status
}
