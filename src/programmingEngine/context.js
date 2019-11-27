"use strict"


const context = (function(){

    let names = new Map() 
    let generateIndex = function(){
        if ( typeof generateIndex.counter == 'undefined' ) {
            generateIndex.counter = 0
        }
        return (++generateIndex.counter)
    }

    return{

        name : function(objectName){ //returns the index of objectName in the name store
            let newID

            if(names.has(objectName)){
                newID =  names.get(objectName).ID
            }
            else{
                newID = generateIndex() 
                names.set(objectName, {ID:newID})
            }
            return newID 
        }
    }
})()

module.exports = {
    context
}