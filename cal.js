//document.querySelector('#name').innerHTML= 'hello world';
//let negval=document.querySelector('#zero');
//negval.onclick="AT_add(0)"
var val=document.getElementById("inputtext");
        
        function AT_add(v){
        val.value+=v;
        }
        
        
        function cls(){
        val.value="";
        }
        
        function exe(){
        val.value=eval(val.value);
        }
        
        
        function cancel(){
        val.value=val.value.substr(0,val.value.length-1);
        }
//my new js script
//let button=document.getElementById("but");

//button.onclick=function(){
  //alert('get-am active');
//}

//let ValueBut=document.querySelector("#click");
//let InputValue=document.querySelector('#inputtext');
	//ValueBut.onclick=function textdisplay(a){
		//let texter=InputValue.innerHTML;
		//alert(texter);
		//InputValue.innerHTML=bihuiiuhu;
	//}

//let degval=document.querySelector("#inputtext");
//let calval=document.querySelector("#click");
//calval.onclick=function check(){
//	let celc=degval.value;
//	let Result=(celc*9/5)+32
//	alert('this is' +' '+ Result +' '+ 'convert from celsius');
//}
//let varB='20';	
//let ArValue=[]
//let fruits=["orange","banana","apple","pawpaw"];
//let result=typeof(varB); //let num=10;
//alert(result);	          //typeof(num);	  
//array....		  //number.......

//let LastValue=fruits.length;
//alert(fruits[LastValue-1]); 

//let ArValue=[]
//ArValue[0]="favour";
//ArValue[1]="godson";
//ArValue[2]="austine";
//alert(ArValue.length);

//let state=["ebonyi","enugu","imo","abia"];
//state.push=['anambra'];
//state.pop('4');
//state[4]="anambra";
//state[2]="hope uzodinma"
//let result=document.querySelector("#array");
//result.innerHTML=state;

//let Stringer="black brown fox jump";
//"row blown form arc lamp"
//Stringer.indexOf("b");
//let displayer=Stringer.indexOf("p");
//let dispos=Stringer.charAt(12);
//alert(dispos);
//let b=Stringer.charAt(0);
//let l=Stringer.charAt(1);
//let o=Stringer.charAt(8);
//let w=Stringer.charAt(9);
//let n=Stringer.charAt(10);
//let s=Stringer.charAt(5);
//let r=Stringer.charAt(7);
//let f=Stringer.charAt(12);
//let m=Stringer.charAt(18);
//let a=Stringer.charAt(2);
//let c=Stringer.charAt(3);
//let p=Stringer.charAt(19);
//array.innerHTML=r+o+w+s+b+l+o+w+n+s+f+o+r+m+s+a+r+c+s+l+a+m+p;

let nam=document.querySelector("#name");
let age=document.querySelector("age");
let state=document.querySelector("state");
function userinfo(details1, details2, details3){
document.querySelector("#view").innerHTML="hello"+details1+"you are"+details2+"a citizen of"+details3
}
document.querySelector("#suber").onclick=userinfo(nam,age,state);