class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class Stack {
	constructor() {
		this.top = null
		this.bottom = null
		this.length = 0
	}

	peek() {
		return this.top
	}

	push(value) {
		const newNode = Node(value)
		if (this.length === 0) {
			this.top = newNode
			this.bottom = newNode
		} else {
			// 本來本來最上方的元素，待會會被置換成 push 近來的元素
			const holdingPointer = this.top
			this.top = newNode
			this.top.next = holdingPointer
		}
		this.length++
		return this
	}

	pop() {
		if (!this.top) {
			return null
		}
		// 本來只有一個元素存在
		if (this.top === this.bottom) {
			this.bottom = null
		}
		const holdingPointer = this.top
		this.top = this.top.next
		this.length--
		return this
		// return holdingPointer
		// 可能拿到 pop 出來的值
	}

}

const myStack = new Stack()
myStack.peek()
myStack.push('google')
myStack.push('Discord')
myStack.pop()
