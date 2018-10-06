export class Item<T> {

	public next: Item<T> | null = null;
	public data: T;

	constructor(data: T) {
		this.data = data;
	}

}
