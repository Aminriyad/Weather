class calculator{
    constructor(previousoperandtextelement, currentoperandtextelement){
    this.previousoperandtextelement = currentoperandtextelement
    this.previousoperandtextelement = currentoperandtextelement
}

clear(){
    this.currentoperand='';
    thispreviousoperand='';
    this.operation = undefined
}

remove(){}
appendnumber(){}
chooseoperation(operation){}
compute(){}
updatedisplay(){}
}



const numberButton = document.querySelector(`[data-number]`);
const operationButton = document.querySelector(`[data-operation]`);
const equalsButton = document.querySelector(`[data-equals]`);
const allclearButton = document.querySelector(`[data-allclear]`);
const previousoperandButton = document.querySelector(`[data-prervious-operand]`);
const currentoperandButton = document.querySelector(`[data-current-operand]`)
const deleteButton = document.querySelector(`[data-delete]`);


