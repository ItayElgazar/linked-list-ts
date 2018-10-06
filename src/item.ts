export class Item<T> {

	next: Item<T> = null;
	public data: T;
	constructor(data: T) {
		this.data = data;
	}

}
