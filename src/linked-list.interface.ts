import {Node} from "./node";

export interface ILinkedList<T> {
	append(data: T): void;
	remove(data: T): boolean;
	get(data: T): Node<T> | null;
}
