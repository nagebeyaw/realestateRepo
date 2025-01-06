import { useState } from "react";

export const ListingForm = () => {
  const [values, setValues] = useState({
    Listing: "",
    buyersInterested: "",
    Price: "",
    squareFeet: "",
    Beds: "",
    Baths: "",
    Type: "",
    Location: "",
    Status: "",
  });

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Listing</label>
        <input
          type="text"
          placeholder="Enter listing name"
          name="Listing"
          onChange={(e) => handleChanges(e)}
        />
      </div>
      <div>
        <label>Buyers Interested</label>
        <input
          type="text"
          placeholder="Number of interested buyers"
          name="buyersInterested"
          onChange={(e) => handleChanges(e)}
        />
      </div>
      <div>
        <label>Price</label>
        <input
          type="text"
          placeholder="Enter price"
          name="Price"
          onChange={(e) => handleChanges(e)}
        />
      </div>
      <div>
        <label>Square Feet</label>
        <input
          type="text"
          placeholder="Enter square footage"
          name="squareFeet"
          onChange={(e) => handleChanges(e)}
        />
      </div>
      <div>
        <label>Beds</label>
        <input
          type="text"
          placeholder="Number of bedrooms"
          name="Beds"
          onChange={(e) => handleChanges(e)}
        />
      </div>
      <div>
        <label>Baths</label>
        <input
          type="text"
          placeholder="Number of bathrooms"
          name="Baths"
          onChange={(e) => handleChanges(e)}
        />
      </div>
      <div>
        <label>Type</label>
        <input
          type="text"
          placeholder="Type of property"
          name="Type"
          onChange={(e) => handleChanges(e)}
        />
      </div>
      <div>
        <label>Location</label>
        <input
          type="text"
          placeholder="Enter location"
          name="Location"
          onChange={(e) => handleChanges(e)}
        />
      </div>
      <div>
        <label>Status</label>
        <select name="Status" onChange={(e) => handleChanges(e)}>
          <option value="available">Available</option>
          <option value="pending">Pending</option>
          <option value="sold">Sold</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
