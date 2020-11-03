let tasks=['a','b','c','d'];
let dependencies= [{'dependent':'a','dependency':'b'},{'dependent':'b','dependency':'c'},{'dependent':'c','dependency':'d'}];
let fulfilled=[], consideration=[], pending=[],index=0, task;

//while(fulfilled!==tasks){
    task=tasks[index];
    consideration.push(task);
    console.log("consideration",consideration);
    let dependencyT=dependencies.filter(x=>x['dependent']==task)
    // dependencyT=dependencyT.map(x=>x[])
    console.log("dependencyT : ",dependencyT);
    while(dependencyT && dependencyT !==[]){
        dependencyT=dependencyT[0];
        console.log("dependencyT : ",dependencyT);
        task=dependencyT['dependency'];
        consideration.push(task);
        dependencyT=dependencies.filter(x=>x['dependent']==task) 

        if(!dependencyT){
            consideration.push(dependencyT['dependency']);
        }
    }
    fulfilled=consideration.reverse();
    console.log(fulfilled);
//}



// tasks.forEach(task=>{
//     //pending.push(task);
//     let dependents=dependencies.filter(x=>x['dependent']==task)
//     consideration.push(task);
//     dependents=dependents.map(y=>y['dependency'])

//     console.log("*****",task,dependents);
// })

