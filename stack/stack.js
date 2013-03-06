var Stack = function(){
	var stack = [];
	return {
		push:function(obj){
			stack.push(obj)
		},
		pop:function(){
			if(stack.length == 0) throw Error("Stack is empty");
			return stack.pop();
		},
		size:function(){
			return stack.length;
		}
	}
}
