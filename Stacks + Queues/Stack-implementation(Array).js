class Node {
	constructor(value) {
		this.value = value
		this.next = next
	}
}

class Stack {
	constructor() {
		this.array = []
	}

	peek() {
		return this.array[this.array.length - 1]
	}

	push(value) {
		this.array.push(value)
	}

	pop() {
		this.array.pop()
		return this
	}

}
