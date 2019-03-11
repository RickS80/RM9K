import React from 'react';  


const TimesRow = (props) => {

    const times = ["12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00"]
    

    const data = [] 
    
    for(var z=0; z < times.length; z++){
        data.push(
        <th>{times[z]}</th>
        )
    }
    return(
      data  
    )
    
}


export default TimesRow;