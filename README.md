# linked-list-ts
A simple linked list implementation using Typescript

## Installation

```
npm install --save linked-list-ts
```

## API Usage

```typescript
import { LinkedList } from "linked-list-ts";

const numbers: number[] = [1,2,3,4,5,6];
const list = new LinkedList(numbers);
```

```typescript
const list = new LinkedList<string>();
list2.append(1,2,3,4,5); // ERROR
list2.append("Hello", "World"); // OK
```

#### forEach iterator
```typescript
const list = new LinkedList<string>("1","2","4");
list.forEach((node, index) => {
    console.log(node, index);
});
```

#### Retrieve an item from the list

```typescript
const list = new LinkedList(1,2,3,4,5);
const item = list.get(5);
console.log(item.prev); // Node(4);
console.log(item.next); // null
```

#### Remove item from the list

```typescript
const isRemoved: boolean = list.remove(5); // true
```

#### Converting to array from linked list

```typescript
const array = list.toArray(); // [1,2,3,4,5]
```


#### Getting the first item

```typescript
console.log(list.first); // Node(1);
```

#### Getting the last item

```typescript
console.log(list.last); // Node(5);
```

#### Getting the list size

```typescript
console.log(list.size); //5
```





