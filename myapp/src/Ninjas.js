import React from 'react';

const Ninjas = (props) => {
        const {ninjas, deleteNinja} = props;
        // const ninjaList = ninjas.map(ninja => {
        //     if(ninja.age > 27){
        //     return (
        //         <div className = "ninja" key={ninja.id}>
        //         <div>Name : {ninja.name}</div>
        //         <div>Age  :  {ninja.age}</div>
        //         <div>Belt : {ninja.belt}</div>
        //     </div>
        //     )
        // }else{
        //     return null
        // }
        // })

        const ninjaList = ninjas.map(ninja => {
            return ninja.age > 10 ? (
                <div className = "ninja" key={ninja.id}>
                         <div>Name : {ninja.name}</div>
                         <div>Age  :  {ninja.age}</div>
                         <div>Belt : {ninja.belt}</div>
                         <button onClick={() => {deleteNinja(ninja.id)}}>Delete</button>
                </div>        
            ) : null;
        })
        return(
         <div className = "ninja-list">
            { ninjaList }
         </div>
        )
    }
    
  export default Ninjas;