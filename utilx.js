function addtotalmoney(oldmoney,newemoney){
      const textElemt=document.getElementById(oldmoney);
      textElemt.innerText=newemoney;
}
function getEletbyvalu(inputField){
      const field=document.getElementById(inputField);
      const fieldString=field.value;
      const fieldParse=parseFloat(fieldString);
      // field.value='';
      return fieldParse;
}

// function income(deposit){
//       const totalAmount=document.getElementById(deposit);
//       const totalAmountString=totalAmount.innerText;
//       const newdepositAmound=parseFloat(totalAmountString);
//       return newdepositAmound;
// }