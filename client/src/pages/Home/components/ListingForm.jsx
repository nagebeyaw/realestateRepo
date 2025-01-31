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

  const [listings, setListings] = useState([]); // State to store created listings
  const [isEditing, setIsEditing] = useState(false); // To track if we're editing
  const [editIndex, setEditIndex] = useState(null); // To track the index of the listing being edited

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
//change
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // Update the listing
      const updatedListings = listings.map((listing, index) =>
        index = editIndex ? values : listing
      );
      setListings(updatedListings);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      // Add a new listing
      setListings((prevListings) => [...prevListings, values]);
    }
    setValues({
      Listing: "",
      buyersInterested: "",
      Price: "",
      squareFeet: "",
      Beds: "",
      Baths: "",
      Type: "",
      Location: "",
      Status: "",
    }); // Reset form
  };

  const handleDelete = (index) => {
    const updatedListings = listings.filter((_, i) => i !== index);
    setListings(updatedListings);
  };

  const handleEdit = (index) => {
    setValues(listings[index]); // Load selected listing into the form
    setIsEditing(true);
    setEditIndex(index);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Listing</label>
          <input
            type="text"
            placeholder="Enter listing name"
            name="Listing"
            value={values.Listing}
            onChange={handleChanges}
          />
        </div>
        <div>
          <label>Buyers Interested</label>
          <input
            type="text"
            placeholder="Number of interested buyers"
            name="buyersInterested"
            value={values.buyersInterested}
            onChange={handleChanges}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="text"
            placeholder="Enter price"
            name="Price"
            value={values.Price}
            onChange={handleChanges}
          />
        </div>
        <div>
          <label>Square Feet</label>
          <input
            type="text"
            placeholder="Enter square footage"
            name="squareFeet"
            value={values.squareFeet}
            onChange={handleChanges}
          />
        </div>
        <div>
          <label>Beds</label>
          <input
            type="text"
            placeholder="Number of bedrooms"
            name="Beds"
            value={values.Beds}
            onChange={handleChanges}
          />
        </div>
        <div>
          <label>Baths</label>
          <input
            type="text"
            placeholder="Number of bathrooms"
            name="Baths"
            value={values.Baths}
            onChange={handleChanges}
          />
        </div>
        <div>
          <label>Type</label>
          <input
            type="text"
            placeholder="Type of property"
            name="Type"
            value={values.Type}
            onChange={handleChanges}
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            placeholder="Enter location"
            name="Location"
            value={values.Location}
            onChange={handleChanges}
          />
        </div>
        <div>
          <label>Status</label>
          <select name="Status" value={values.Status} onChange={handleChanges}>
            <option value="">Select Status</option>
            <option value="available">Available</option>
            <option value="pending">Pending</option>
            <option value="sold">Sold</option>
          </select>
        </div>
        <button type="submit">{isEditing ? "Update Listing" : "Submit"}</button>
      </form>

      {/* Display the list of created listings */}
      <div>
        <h2>Listings</h2>
        <ul>
          {listings.map((listing, index) => (
            <li key={index}>
              <strong>{listing.Listing}</strong> - {listing.Location},{" "}
              {listing.Price} - {listing.Beds} Beds, {listing.Baths} Baths
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
