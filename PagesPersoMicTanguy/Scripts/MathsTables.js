function MathsTables(myName,myTerme,myOperateur){
	this.name=myName;
	this.terme1=myTerme;
	this.operateur=myOperateur;
	this.getName=getName;
	this.tBody=tBody;
	this.tHead=tHead;
	 function getName(){
		alert(this.name);
	}
	 function tHead(){
		 var tHeadStr="<thead><tr><th id=\"tableauAdditionName\" colspan=10>"+this.name+"</th></tr></thead>";
		 return tHeadStr;
	 }
	 function tBody(){
		 var tBodyStr="";		
		 for(i=0; i<11; i++){
		 		
		 			
		 			for(j=0; j<11; j++){
		 			
		 			if(this.operateur=="+"){opertion=i+j;}
		 			if(this.operateur=="X"){opertion=i*j;}
		 			if(i+j==0){operationStr=this.operateur;}
		 			else {operationStr=i+this.operateur+j+"="+opertion}
		 			tBodyStr=tBodyStr+"<td>"+operationStr+"</td>";
		 			
		 			}
		 			tBodyStr="<tr id=table"+i+"_"+j+">"+tBodyStr+"</tr>";	
		 		}
		 
		 		tBodyStr="<tbody id=tbodyBox"+this.name+">"+tBodyStr+"</tbody>";
		 		alert("** "+tBodyStr);
		 		return tBodyStr;
	 }
}
