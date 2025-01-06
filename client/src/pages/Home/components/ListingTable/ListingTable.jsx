import "./ListingTable.css";
export const ListingTable = () => {
  return (
    <div>
      Table
      <h1>Client Information</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Listing</th>
            <th>Buyers Interested</th>
            <th>price</th>
            <th>sqrft</th>
            <th>beds</th>
            <th>baths</th>
            <th>type</th>
            <th>location</th>
           <th>dateListed</th> 
           {/* date listed is done in database setting */}
            <th>status</th>
            <th>interestedPpl</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <th>1</th>
            <th>"2016-01-03"</th>
            <th>?</th>
            <th>"203k"</th>
            <th>1</th>
            <th>3</th>
            <th>2</th>
            <th>Single Family Home</th>
            <th>123 Maple St, Springfield</th>
            <th>"2018-01-03"</th>
            <th>Available</th>
            <th>32</th>
          </tr>
          <tr>
            <th>2</th>
            <th>"2018-03-03"</th>
            <th>?</th>
            <th>"150k"</th>
            <th>1</th>
            <th>3</th>
            <th>?</th>
            <th>Condo</th>
            <th>456 Oak St, Springfield</th>
            <th>"2016-01-03"</th>
            <th>Pending</th>
            <th>25</th>
          </tr>
          <tr>
            <th>3</th>
            <th>"2017-01-03"</th>
            <th>?</th>
            <th>1</th>
            <th>"5"</th>
            <th>?</th>
            <th>"203k"</th>
            <th>Townhouse</th>
            <th>789 Peach St, Springfield</th>
            <th>2017-01-03</th>
            <th>Available</th>
            <th>29</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};






// use forms to add on to the listing data 
{/* 
  all text fields
    <th>Listing</th>
    <th>Buyers Interested</th>
    <th>price</th>
    <th>sqrft</th>
    <th>beds</th>
    <th>baths</th>
    <th>type</th>
    <th>location</th>
    <th>status</th> could be a dropped down, or simple textfield
    then button at the end to submit
*/}


//connect the frontend with Nate's backend with his routes