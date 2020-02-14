var list = [
	{
		title:"未完成任务",
		isChecked:false //状态为false，为不选中  任务未完成
	},
	{
		title:"已完成任务",
		isChecked:true   //状态为true，为选中    任务完成
	}
];


new Vue({
	el:'.main',
	data:{
		list:list,
		todo:"",
		
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
		}
	}
});
