

function mergesort(list){
	var listLen=list.length;
	if(listLen == 1){
		return list;
	}else{
		var leftIndex=parseInt(listLen/2,10);
		var leftList=mergesort(list.slice(0,leftIndex));
		var rightList=mergesort(list.slice(leftIndex));
		return merge(leftList,rightList);
	}	
}

function merge(leftList,rightList){
	var finalList=[];
	var rightLen=rightList.length;var leftLen=leftList.length;
	var leftPt=0,rightPt=0;
	while(rightPt < rightLen && leftPt < leftLen){
		if(leftList[leftPt] < rightList[rightPt]){
			finalList.push(leftList[leftPt])
			leftPt++;
		}else{
			finalList.push(rightList[rightPt]);
			rightPt++;
		}
	}
	if(rightPt==rightLen){
		for(leftPt;leftPt<leftLen;leftPt++){
			finalList.push(leftList[leftPt]);
		}
	}else{
		for(rightPt;rightPt<rightLen;rightPt++){
			finalList.push(rightList[rightPt]);
		}
	}
	return finalList;
}

var list=[1,5,2,9,6,12,45,87,42,1,83,19,20];
console.log(mergesort(list));
