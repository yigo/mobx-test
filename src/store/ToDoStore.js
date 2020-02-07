import { observable, action, decorate, runInAction } from 'mobx';

const TodoStore = {
    list: [
        {
            title: 'Write me a tests',
        }
    ],
    add: function (newItem){
        this.list.push({ title: newItem });
    },
    addAsync: async function(newItem) {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const data = await response.json();
            runInAction(() => {
                this.add(newItem);
            })
        }
        catch (error) {

        }
    }
}

export default decorate(TodoStore, {
   list: observable, 
   add: action.bound,
});