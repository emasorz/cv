export class GroupItem{
    data:string;
    className:string;
    value:number;

    constructor(data:string, className:string, value?:number){
        this.data = data;
        this.className = className;
        this.value = value;
    }
}