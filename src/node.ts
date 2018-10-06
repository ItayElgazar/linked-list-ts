export class Node<T> {

	public data: T;
	public next: Node<T> | null;
	public prev: Node<T> | null;

	constructor(data: T) {
		this.data = data;
		this.next = null;
		this.prev = null;
	}
}
