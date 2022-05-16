import { makeObservable, observable } from "mobx";

export default class ActivityStore {
    title ='Hello from MobX, this is from Danial khan';


    constructor(){
        makeObservable(this,{
            title:observable
        })
    }
}