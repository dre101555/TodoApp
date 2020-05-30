import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

    stuff: service('todo-list'),
    value:'',
    classNames: ['show-list'],
    actions:{ 
        remove(item){
            this.stuff.remove(item)
        },
        addItem(value){
            this.stuff.add(value)
            this.set('value','')
        }
    }

});
