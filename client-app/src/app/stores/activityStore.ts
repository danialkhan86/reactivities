import { action, makeAutoObservable } from "mobx";

export default class ActivityStore {
    title ='Hello from MobX, this is from Danial khan';


    constructor(){
        makeAutoObservable(this)
    }

    setTitle=()=>{
        this.title=this.title + '!';
    }
}