s="mom and madam become nun"
s=s+""
word=""
revword=""
for(k of s){
	if(k!=""){
    word=word+k
	revword=k+revword
   }
    else{
		if(word==revword){
	    console.log(word)
		}
		word=""
		revword=""
		}
}
