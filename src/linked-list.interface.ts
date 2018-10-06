import {Item} from "./item";

export interface ILinkedList<T> {
	append(data: T): void;
	remove(data: T): boolean;
	get(data: T): Item<T> | undefined;
}
