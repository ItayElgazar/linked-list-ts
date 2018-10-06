import {ILinkedList} from "./linked-list.interface";
import {Node} from "./node";

export class LinkedList<T> implements ILinkedList<T> {

	private head: Node<T> | null = null;
	private length: number = 0;

	public append(data: T): void {
		if (!this.head) {
			this.head = new Node<T>(data);
			return;
		}

		let current: Node<T> = this.head;
		while (current.next) {
			current = current.next;
		}

		current.next = new Node(data);
		current.prev = current;

		this.length++;
	}

	public remove(data: T): boolean {
		let current = this.head;
		if (!current) {
			return false;
		} else if (this.head && this.head.data === data) {
			if (this.head.next) {
				this.head = this.head.next;
			} else {
				this.head = null;
			}
			this.length--;
			return true;
		} else {
			while (current.next !== null) {
				if (current.next.data === data) {
					current.next = null;
					return true;
				}
				current = current.next;
				this.length--;
			}
			return false;
		}
	}

	public get(data: T): Node<T> | null {
		let current = this.head;
		let selectedItem: Node<T> | null = null;

		if (!current) {
			return null;
		} else if (this.head && this.head.data === data) {
			selectedItem = this.head;
		}

		while (current.next !== null) {
			if (current.next.data === data) {
				selectedItem = current.next;
			}
			current = current.next;
		}

		return selectedItem;
	}

	get size(): number {
		return this.length;
	}

}


