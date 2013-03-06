var Queue = function(){
	var queue = [];
	return {
		enqueue:function(obj){
			queue.push(obj)
		},
		dequeue:function(){
			if(queue.length == 0) throw Exception("Queue is empty");
			return queue.shift();
		},
		size:function(){
			return queue.length;
		}
	}
}
