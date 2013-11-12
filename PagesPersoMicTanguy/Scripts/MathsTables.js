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
	 function tHead(colSpan){
		 var tHeadStr="<thead><tr><th id=\"tableauAdditionName\" colspan="+colSpan +">"+this.name+"</th></tr></thead>";
		 return tHeadStr;
	 }
	 function tBody(){
		 var tBodyStr="",i=0,j=0;
		 if(this.operateur=="+"){operation=i+j;}
		 if(this.operateur=="X"){operation=i*j;}
		 if(this.terme1=="terme1"){for(i=0; i<11; i++){
			 
		 		for(j=0; j<11; j++){
		 			 if(this.operateur=="+"){operation=i+j;}
		 			 if(this.operateur=="X"){operation=i*j;}
		 			if(i+j==0){operationStr=this.operateur;}
		 			else {operationStr=i+this.operateur+j+"="+operation}
		 			tBodyStr=tBodyStr+"<td>"+operationStr+"</td>";
		 			
		 			}
		 			tBodyStr="<tr id=table"+i+"_"+j+">"+tBodyStr+"</tr>";	
		 		}
		 }else{
			 for(j=0; j<11; j++){
	 			 if(this.operateur=="+"){operation=this.terme1+j;}
	 			 if(this.operateur=="X"){operation=this.terme1*j;}
	 			if(i+j==0){operationStr=this.operateur;}
	 			else {operationStr=i+this.operateur+j+"="+operation}
	 			tBodyStr=tBodyStr+"<td>"+operationStr+"</td>";
	 			
	 			}
	 			tBodyStr="<tr id=table"+i+"_"+j+">"+tBodyStr+"</tr>";
		 }
		 
		 		tBodyStr="<tbody id=tbodyBox"+this.name+">"+tBodyStr+"</tbody>";
		 		
		 		return tBodyStr;
	 }
}
