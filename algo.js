let tasks=['a','b','c','d'];
let dependencies= [{'dependent':'a','dependency':'b'},{'dependent':'b','dependency':'c'},{'dependent':'c','dependency':'d'}];
let fulfilled=[], consideration=[], pending=[],index=0, task;

//while(fulfilled!==tasks){
    task=tasks[index];
    consideration.push(task);
    console.log("consideration",consideration);
    let dependencyT=dependencies.filter(x=>x['dependent']==task)
    // dependencyT=dependencyT.map(x=>x[])
    while(dependencyT != null || dependencyT != undefined || dependencyT == []){
        dependencyT=dependencyT[0];
        console.log("1. dependencyT : ",dependencyT);
        task=dependencyT['dependency'];
        consideration.push(task);
        if(dependencies.filter(x=>x['dependent']==task)!=[])
            dependencyT=dependencies.filter(x=>x['dependent']==task) 

        console.log("2. dependencyT : ",dependencyT);
        console.log("task : ",task );
        console.log("consideration : ",consideration );
        if(!dependencyT || dependencyT==[]){
            break;
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

