//存取localStorage中的数据
var store ={
	save(key,value){
		localStorage.setItem(key,JSON.stringify(value));
	},
	fetch(key){
		return JSON.parse (localStorage.getItem(key)) || [];
	}
}


//
// var list = [
// 	{
// 		title:"未完成任务",
// 		isChecked:false //状态为false，为不选中  任务未完成
// 	},
// 	{
// 		title:"已完成任务",
// 		isChecked:true   //状态为true，为选中    任务完成
// 	}
// ];

//取出所有的值
var list = store.fetch('class');

var vm = new Vue({
	el:'.main',
	data:{
		list:list,
		todo:"",
		edtorTodos:'',//记录正在编辑的任务
		beforeTitle:'',//记录正编辑数据的title
		visibility:'all', //同属性变化，对数据进行筛选
		
	},
	watch:{
		// list:function(){ //监控list 属性，当这个属性对应的发生变化行就会执行函数
		// 	store.save('class',this.list);
		// }
		list:{
			handler:function(){
				store.save('class',this.list);
			},
			deep:true,
		}
	},
	methods:{
		//逻辑加事件
		// addTodo(ev){
		// 	//添加任务
		//1 	//向list中添加任务
		// 	/*
		// 	{
		// 		title：
		// 	}
		// 	 */
		// 	//事件处理函数中的this指向的是，当前的这个根实例
		// 	if(ev.keyCode === 13){
		// 		this.list.push({
		// 			title:ev.target.value
		// 		});
		// 	}
		// },

		//事件2. 用事件处理函数 v-on:eventName 修饰符
		//4.传参的方法
		addTodo(data,ev){
			this.list.push({
				//3.todo
				title:this.todo,
				isChecked:false,
			});
			this.todo='';
		},

		//删除任务
		deleteTodo(todo){//删除任务
			var index = this.list.indexOf(todo);
			this.list.splice(index,1);
		},

		//编辑任务
		edtorTodo(todo){
			//编辑任务的时候，记录下编辑任务title，方面取消的时候的使用
			this.beforeTitle = todo.title;
			this.edtorTodos = todo;
		},

		edtorTodoed(todo){//编辑任务成功
			this.edtorTodo = '';
		},

		cancelTodo(todo){//取消编辑
			//
			todo.title = this.beforeTitle;
			this.beforeTitle = '';
			this.edtorTodos = '';
		},
	},
	//计算属性
	computed:{
		noCheckedLength:function(){
			return this.list.filter(function(item){
				return !item.isChecked;
			}).length
		},


		//
		filterList:function(){
			//过滤的时候三种情况 all unfinished finished 
			var filter = {
				all:function(list){
					return list;
				},
				finished:function(list){
					return list.filter(function(item){
						return item.isChecked;
					})
				},
				unfinished:function(){
					return list.filter(function(item){
						return !item.isChecked;
					})
				}
			}
			//找到过滤数据，就返回过滤后的数据 没有就返回所有的数据
			return filter[this.visibility](list)? filter[this.visibility](list):list;
		},
	},
	//自定义函数
	directive:{
		// "foucs":{
		// 	update(el,binding){
		// 		//el 绑定的元素
		// 		//binding 
		// 		if(binding.value){
		// 			el.focus();//？？？？
		// 		};
		// 	},
		// },
	},
});



function watchHashchange(){
	var hash = window.location.hash.slice(1);
	vm.visibility = hash;
	console.log(hash);
}


watchHashchange();

window.addEventListener('hashchange',watchHashchange)
 