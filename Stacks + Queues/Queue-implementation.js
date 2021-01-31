class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class Queue {
	constructor() {
		this.first = null
		this.last = null
		this.length = 0
	}

	peek() {
		return this.first
	}

	enqueue() {
		// 先創造一個節點
		const newNode = new Node()
		// 假如本來 Queue 是空的狀況
		if (this.length === 0) {
			this.first = newNode
			this.last = newNode
		} else {
			this.last.next = newNode
			this.last = newNode
		}
		this.length++
		return this
	}

	dequeue() {
		// 假如 Queue 沒有東西
		if (!this.first) {
			return null
		}

		if (this.first === this.last) {
			this.last = null
		}

		//可用來保留第一個移除的節點 if we need it
		const holdingPointer = this.first
		// 移除第一個節點，第二個節點成為 Queue 中第一個元素
		this.fiirst = this.first.next
		this.length--
		return this
	}
}

const myQueue = new Queue()
myQueue.enqueue('Happy')
