//反转数组
let array = [1,2,3,4,5];
array.reverse();

//反转链表
//构造链表
//长度为n ，无法通过下标来遍历，只能通过当前节点来访问下一个节点的链式结构
//构造链表节点
function Node(val) {
    this.val = val;
    this.next = null;
}

//定义链表
function List(array) {
    this.head = null;
    let i = 0, temp = null;
    while (i < array.length){
        if( i === 0){
            this.head = new Node(array[i]);
        }else{
            let newNode = new Node(array[i]);
            temp.next = newNode;
            temp = temp.next;
        }
        i++;
    }
}

//遍历链表
function traverseList(listHead) {
    while(listHead){
        console.log(listHead.val);
        listHead = listHead.next;
    }
}

//反转链表
//反转链表的思路：1-2-3-4-5，先将2换到第一个，变为：2-1-3-4-5。然后将3换到第一个，3-2-1-4-5
//head = head.next.
//
var reverseList = function (head) {
    let pre = null;
    while(head){
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre ;
}
