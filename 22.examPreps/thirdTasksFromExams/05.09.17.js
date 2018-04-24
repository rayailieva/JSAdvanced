class Repository {
   constructor(props){
       this.props = props;
       this.data = new Map();
       let id = 0;
       this.nextId = function () {
           return id++;
       }
   }

   add(entity){
       this._vrfyEntity(entity);
       let id = this.nextId();
       this.data.set(id,entity);
       return id;
   }

   get(id){
       if (!this.data.has(id)) {
           throw new Error(`Entity with id: ${id} does not exist!`);
       }
      return this.data.get(id);
   }

   update(id, newEntity){
       if(!this.data.has(id)){
           throw new Error(`Entity with id: ${id} does not exist!`);
       }
       this._vrfyEntity(newEntity);
       this.data.set(id,newEntity);
   }

   del(id){
       if(!this.data.has(id)){
           throw new Error(`Entity with id: ${id} does not exist!`);
       }
       this.data.delete(id);
   }

   get count(){
       return this.data.size;
   }

    _vrfyEntity(entity) {
        for (let propName in this.props) {
            if (!entity.hasOwnProperty(propName)) {
                throw new Error(`Property ${propName} is missing from the entity!`);
            }
        }

        for (let propName in entity) {
            if (typeof entity[propName] !== this.props[propName]) {
                throw new TypeError(`Property ${propName} is not of correct type!`);
            }
        }
    }

}
