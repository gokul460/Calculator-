let currentNumber="";
let save="";
let token=[];
let Cclicked = 0;

const cal = document.getElementById("cal");

function calculate(val){
   if(!isNaN(val)){

      currentNumber+=val;
      save+=val;   
      cal.textContent = save;
      return;
      
   }

   if(['+','-','*','/'].includes(val)){
      
      
      if(currentNumber!=""){

            token.push(Number(currentNumber));   
            currentNumber="";
         
      }
      token.push(String(val));
      save+=`${val}`;
      cal.textContent = save;
      Cclicked = 0;
      return;
   }

   



   if(val === '='){

      token.push(Number(currentNumber)); 

      let result = evaluate(token);

      cal.textContent = result ;

      token = [];
      currentNumber= String(result);
      save = String(result);

      return;

   }

   if(val == 'AC'){
       currentNumber="";
       token=[];
       save= "";
       cal.textContent = "";

   }


  

}

function evaluate(token){
   let temp = [...token];

   //first evaluate the * and /

   for(let i=0;i<temp.length;i++){
      if(temp[i]== '*'|| temp[i]== '/'){

         let left = temp[i-1];
         let right = temp[i+1];
         let result;

         if(temp[i]=='*'){
             result = right * left;
         }
         else if(temp[i]=='/'){
             result = left/right;
         }

         temp.splice(i-1, 3, result);

         i--;
      }
   }


   let result = temp[0];

   for(let i=1;i<temp.length;i+=2){

      let operator =temp[i];
      let number = Number(temp[i+1]);

      if(operator === '+'){
         result +=number;
      }
      else if(operator === '-'){
         result -= number;
      }

   }

   return result;

}

