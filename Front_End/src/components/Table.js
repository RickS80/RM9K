import React from 'react';
import TimesRow from './TimesRow';
import BookingRow from './BookingRow';

const Table = (props) => {


    const tables = [1,2,3,4,5,6,7,8,9,10]
    
    const times = ["12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00"]
    
    


    //const dataForTabella = []
    var data = []
    
    
      function makeData(){
        // console.log(props.bookingsData)
      //var data = []
      for(var i=0; i < tables.length; i++){
        console.log("aaoihsaoihdaoih")
               data.push(
                <tr>  
                <td>{tables[i]}</td>
                {/* <BookingRow bookings={props.bookingsData}/> */}
                </tr>
                )    
     }
    //  console.log(data.length)
     //dataForTabella.push(...data) 
   }

    
    
    return(



      <div>
      <table>
        <thead>
        <tr>
        <th>Table</th>
        <TimesRow times={props.bookingsData}/>
        </tr>
        </thead> 
        <tbody>
        {makeData()}
        {data}
        </tbody>
      </table>
      </div>

    )
}

export default Table;