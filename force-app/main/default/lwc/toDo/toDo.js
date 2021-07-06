import { LightningElement, track } from 'lwc';

export default class Todo extends LightningElement {
    newTask='';
    @track
    taskList =[];
    //Hello There
    handleChangeTextEvent(event){
        this.newTask = event.target.value;
        console.log(this.newTask);
    }

    addTaskHandler(event){
        this.taskList.push({
            id : this.taskList.length + 1,
            name : this.newTask
        })
        this.newTask = '';
    }
    removeTaskHandler(event){
        let tempList = this.taskList;
        let idToDelete = event.target.name;
        let indexToDelete;
        //Methot 1
        /*for(let i=0; i<tempList.length; i++){
            if(tempList[i].Id === idToDelete){
                indexToDelete = i;
                break;
            }
        }
        tempList.splice(indexToDelete, 1);*/

        //Method 2
        /*this.taskList.splice(
            this.taskList.findIndex(function(task) {
                return task.id === idToDelete;
            })
            , 1
        );*/

        //Method 3
        this.taskList.splice(
            this.taskList.findIndex(task => task.id === idToDelete)
            , 1
        );
        //console.log(idToRemove);
    }
}