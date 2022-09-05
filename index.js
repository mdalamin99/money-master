document.getElementById("Calculte-btn").addEventListener("click",function(){
     const foodField=getEletbyvalu("Food");
     const rentField=getEletbyvalu("Rent");
     const clothsField=getEletbyvalu("cloths");
     const totalexpo=document.getElementById("total-expese");
     const totalExpense=foodField+rentField+clothsField;
     addtotalmoney("total-expese",totalExpense);

     const incomeAdd=getEletbyvalu("income-");
     const balancer=getEletbyvalu("balance");

     const minusIcomoe=incomeAdd-totalExpense;
     addtotalmoney("balance",minusIcomoe);
});

document.getElementById("save-btn").addEventListener("click",function(){
      const parsentinput=getEletbyvalu("parsent-input");
      const parsentIncame=getEletbyvalu("income-");


//       // const savingAmonud=getElementById("saving-amound");
//       const parsetBar=parsentIncame % parsentinput;
//       // // addtotalmoney("saving-amound",parsetBar);
//      console.log(parsetBar);

      
});