import {Item} from "./item";
import {ILinkedList} from "./linked-list.interface";

export class LinkedList<T> implements ILinkedList<T> {

	public head: Item<T>;

	public append(data: T): void {
		if (!this.head) {
			this.head = new Item<T>(data);
			return;
		}

		let current: Item<T> = this.head;
		while (current.next !== null) {
			current = current.next;
		}
		current.next = new Item(data);
	}

	public remove(data: T): boolean {
		let current: Item<T> = this.head;
		if (!current) {
			return false;
		} else if (this.head.data === data) {
			if (this.head.next) {
				this.head = this.head.next;
			} else {
				this.head = null;
			}
		} else {
			while (current.next !== null) {
				if (current.next.data === data) {
					current.next = null;
					return true;
				}
				current = current.next;
			}
			return false;
		}
	}

	public get(data: T): Item<T> | undefined {
		let current: Item<T> = this.head;
		if (!current) {
			return undefined;
		} else if (this.head.data === data) {
			return this.head;
		}

		while (current.next !== null) {
			if (current.next.data === data) {
				return current.next;
			}
			current = current.next;
		}
	}
}


