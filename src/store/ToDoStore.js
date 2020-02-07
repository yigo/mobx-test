import { observable, action, decorate } from 'mobx';

const TodoStore = {
    list: [
        {
            title: 'Write me a tests',
        }
    ],
    add: function (newItem){
        this.list.push({ title: newItem });
    },
}

export default decorate(TodoStore, {
   list: observable, 
   add: action,
});