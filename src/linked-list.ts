import {ILinkedList} from "./linked-list.interface";
import {Node} from "./node";

export class LinkedList<T> implements ILinkedList<T> {

	private head: Node<T> | null;
	private tail: Node<T> | null;
	private length: number;

	constructor(...data: T[]) {
		this.head = null;
		this.tail = null;
		this.length = 0;
		data.forEach(value => {
			this.appendOne(value);
		});
	}


	public append(...data: T[]) {
		data.forEach(value => {
			this.appendOne(value);
		});
	}

	public remove(data: T): boolean {
		const toRemove = this.get(data);
		if(!toRemove) {
			return false;
		}

		if (toRemove.prev) {
			if (toRemove === this.tail) {
				this.tail = toRemove.prev;
			}
			toRemove.prev.next = toRemove.next;
		}
		if (toRemove.next) {
			toRemove.next.prev = toRemove.prev;
		}

		this.length--;
		return true;
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

	public toArray(): T[] {
		const nodes: T[] = [];
		let current = this.head;
		while (current !== null) {
			nodes.push(current.data);
			current = current.next;
		}
		return nodes;
	}

	public forEach(callbackfn: (node: Node<T>, index?: number) => void): void {
		let current = this.first;
		let index: number = 0;
		while (current !== null) {
			callbackfn(current, index);
			index++;
			current = current.next;
		}
	}

	private appendOne(data: T): void {
		const newNode = new Node<T>(data);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
			this.length++;
			return;
		}

		if (this.tail) {
			this.tail.next = newNode;
		}
		newNode.prev = this.tail;
		this.tail = newNode;
		this.length++;
	}

	get size(): number {
		return this.length;
	}

	get last(): Node<T> | null {
		return this.tail;
	}

	get first(): Node<T> | null {
		return this.head;
	}
}


