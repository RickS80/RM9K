import React from 'react';

const Table = (props) => {

  const bookingsDataForList = props.bookingsData.map((booking) => {
     return <ul>
            <li>{"Name"} : {booking.customer.customerName}</li>
            <li>{"Number"} {booking.customer.customerNumber}</li>
            <li>{"Table Number"} : {booking.restaurantTable.tableNumber} </li>
            </ul>
  })

  const bookingsDataForTable = props.bookingsData.map((booking) => {
    console.log(booking)
     return <td value={booking.restaurantTable.tableNumber}>{booking.customer.customerName}</td>
  })

    const tables = [1,2,3,4,5,6,7,8,9,10]
    const tablesData = tables.map((table) =>{
      return <tr><td value={table} key={table}>Table{table}</td></tr>
    })
    
    const times = ["12.00","12.30","13.00","13.30","14.00","14.30","15.00","15.30","16.00","16.30"]
    const timesData = times.map((time) =>{
      return <th>{time}</th>
    })

    function createTable(){
      
    }


    return(

      // <div>
      //   {bookingsDataForList}
      // </div>



      <div>
      <table>
          <thead>
          <tr>
            <th></th>
            {timesData}
          </tr>
          </thead>
            <tbody>
          {tablesData}
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



      // <table>
      //     <thead>
      //     <tr>
      //       <th>Time</th>
      //       <th>Name</th>
      //       <th>Covers</th>
      //       <th>Table</th>
      //       <th>Contact details</th>
      //     </tr>
      //     </thead>
      //       <tbody>
      //     <tr>
      //       <td>8</td>
      //       <td>Mark Davidson</td>
      //       <td>4</td>
      //       <td>35</td>
      //       <td>07928989892</td>
      //     </tr>
      //     <tr>
      //       <td>8.30</td>
      //       <td>Albert Smith</td>
      //       <td>2</td>
      //       <td>19</td>
      //       <td>Albert@sas.com</td>
      //     </tr>
      //     <tr>
      //       <td>9</td>
      //       <td>Larry</td>
      //       <td>2</td>
      //       <td>101</td>
      //       <td>No contacts</td>
      //     </tr>
      //     </tbody>
      // </table>
    )
}

export default Table;