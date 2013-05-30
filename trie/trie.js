(function(win){

	win.Trie=function(){
    	this.holder={};
	};
	// Caching the prototype as its used multiple times.
	var trieProto=win.Trie.prototype; 
	/*
	 * Prints the word to the console.
	 */
	trieProto.print=function(){
		console.log(this.holder);
	}

	/*
	 * Adds the word to the trie.
	 * @param: word (word to be added to the trie)
	 */
	trieProto.addWord=function(word){
	    var l=word.length; obj=this.holder; var ch;
	    for(var i=0;i<l;i++){
	    	ch=word.charAt(i);
	        if(!obj[ch]){
	            obj[ch]={};
	        }
	        obj=obj[ch];
	        if(i==l-1){
	        	obj.count=(obj.count) ? obj.count+1 : 1;
	        }
	    }
	};

	/*
	 * Searchs for the word in the trie.
	 * @params: word (word to be searched)
	 * return : Returns 0 if word not found
	 *          Returns number of occurances of the word. 
  	 */ 
	trieProto.search=function(word){
		var l=word.length; obj=this.holder; var ch;
		var found=true;
		for(var i=0;i<l;i++){
			ch=word.charAt(i);
	        if(obj[ch]){
	        	obj=obj[ch];
	        }else{	
	        	found=false;
	        	break;
	        }
		}
		return (found) ? obj.count : 0;
	}
})(window);
