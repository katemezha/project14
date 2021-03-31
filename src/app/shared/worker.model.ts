export interface MyWorker {
  id?: number;
  name: string;
  surname: string;
  phone: number;
  type: number;
}

export enum MyWorkerType {
  programmer,
  designer,
  copywriter,
  manager,
}

export let MyWorkersDatabase: MyWorker[] = [
  { id: 1, name: 'Иван', surname: 'Иванов', phone: 79140007865, type: 0 },
  { id: 2, name: 'Петр', surname: 'Петров', phone: 7978975867, type: 1 },
  { id: 3, name: 'Сидор', surname: 'Сидоров', phone: 79147444444, type: 2 },
  { id: 4, name: 'Василий', surname: 'Васильев', phone: 79147444345, type: 3 },
];
