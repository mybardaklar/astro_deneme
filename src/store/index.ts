import { atom, computed } from 'nanostores';

interface IUser {
	username: String;
	email: String;
	age: Number;
}

export const users = atom<IUser[]>([]);

export function addUser(user: IUser) {
	users.set([...users.get(), user]);
}

export const getUsers = computed(users, (list: any) => list);
