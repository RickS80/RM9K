import React from 'react';

const Table = (props) => {

  const bookingsDataForList = props.bookingsData.map((booking) => {
     return <ul>
            <li>{"Name"} : {booking.customer.customerName}</li>
            <li>{"Number"} {booking.customer.customerNumber}</li>
            <li>{"Table Number"} : {booking.restaurantTable.tableNumber} </li>
            </ul>
  })


    const tables = [1,2,3,4,5,6,7,8,9,10]
    const tablesData = tables.map((table) =>{
      return <tr><td value={table} key={table}>Table{table}</td></tr>
    })
    
    const times = ["12.00","12.30","13.00","13.30","14.00","14.30","15.00","15.30","16.00","16.30","17.00","17.30","18.00"]
    const timesData = times.map((time) =>{
      return <th>{time}</th>
    })


    const dataForTabella = []

      function makeData(){
      var data = []
      for(var i=0; i < tables.length; i++){
         for(var j=0; j < props.bookingsData.length; j++){
            if (tables[i] === props.bookingsData[j].restaurantTable.tableNumber){
              let number = props.bookingsData[j].id
               data.push(
                <tr>  
                <td>{tables[i]}</td>
                <td id={props.bookingsData[j].id} onClick={evt => {props.clickEditBooking(number)}}>{props.bookingsData[j].customer.customerName}</td>   
                </tr>)
            }
      }
     }
     dataForTabella.push(...data)
    }


    return(

      // <div>
      //   {bookingsDataForList}
      // </div>



      <div>
      <table>
          <thead>
          <tr>
            <th>Table</th>
            {timesData}
          </tr>
          </thead>
            <tbody>
          {dataForTabella}
          {}
          {makeData()}
          </tbody>
      </table>
      </div>

      // <div>
      // <table>
      //     <thead>
      //     <tr>
      //       <th></th>
      //       {tablesData}
      //     </tr>
      //     </thead>
      //       <tbody>
      //     <tr>
      //       <td >12.00</td>
      //     </tr>
      //     <tr>
      //       <td>12.30</td>
      //     </tr>
      //     <tr>
      //       <td>13.00</td>
      //     </tr>
      //     <tr>
      //       <td>13.30</td>
      //     </tr>
      //     <tr>
      //       <td>14.00</td>  
      //     </tr>
      //     <tr>
      //       <td>14.30</td>
      //     </tr>
      //     <tr>
      //       <td>15.00</td>
      //     </tr>
      //     <tr>
      //       <td>15.30</td>
      //     </tr>
      //     <tr>
      //       <td>16.00</td>
      //     </tr>
      //     <tr>
      //       <td>16.30</td>
      //     </tr>
      //     <tr>
      //       <td>17.00</td>
      //     </tr>
      //     <tr>
      //       <td>17.30</td>
      //     </tr>
      //     </tbody>
      // </table>
      // </div>

    )
}

export default Table;