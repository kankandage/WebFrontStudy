
//链表：无法通过下标遍历，只能通过当前节点查找下一节点的链式结构

//构造链表节点
//this.val代表当前节点的值，this.next指向下一个节点，若this.next为null(对象)，则说明该节点为链表的最后一个节点。
function Node(val) {
        this.val = val;
        this.next = null;
}

//定义链表
function list(arr) {
     this.head = null;
     var i,temp = null;
     while(i < arr.length){
         if(i === 0){
             //头节点
             this.head = new Node(arr[i]);
         }else{
             //
             let newNode = new Node(arr[i]);
             temp.next = newNode;
             temp = temp.next;
         }
         i++;
     }

}

//链表反转
var reverseList = function (head) {
    //pre结点可以用来反转方向，为了避免反转之后链表断开
    let pre = null;
    while(head){
       //先用next保存head的下一个结点信息，保证单链表不会断裂；
        next = head.next;
        //让head从指向next变成指向pre；
        head.next = pre;
        //到此，完成了pre到head的反转，即pre<--head;

        //将pre，head，next依次向后移动一个结点。
        pre = head;
        head = next;
    }
    //如果head为null的时候，pre就为最后一个节点了，但是链表已经反转完毕，pre就是反转后链表的第一个节点
    //直接输出pre就是我们想要得到的反转后的链表
    return pre ;
}