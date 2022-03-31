export interface Duck{
    name:string;
    numLegs:number;
    makeSound:(Sound:string)=>void;

}
const duck1: Duck ={
    name:'huey',
    numLegs:2,
    makeSound:(sound:any)=>console.log(sound)
}


const duck2:Duck ={
    name:'dewey',
    numLegs:2,
    makeSound:(sound:any)=>console.log(sound) 
}

 


export const ducks=[duck1,duck2];