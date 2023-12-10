import React, { useState } from "react";
import "./AddEdit.css";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  account_id: "",
  sponsor_name: "",
  campaign_id: "",
  seid: "",
  campaign_name: "",
  vertical: "",
  payout: "",
  price_format: "",
  status: "",
};

function AddEdit() {
  const [state, setState] = useState("initialState");

  const navigate = useNavigate();

  const {
    account_id,
    sponsor_name,
    campaign_id,
    seid,
    campaign_name,
    vertical,
    payout,
    price_format,
    status,
  } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !account_id ||
      !sponsor_name ||
      !campaign_id ||
      !seid ||
      !campaign_name ||
      !vertical ||
      !payout ||
      !price_format ||
      !status
    ) {
      toast.error("Please provide value into each input field");
    } else {
      axios
        .post("http://localhost:9000/api/post", {
          account_id,
          sponsor_name,
          campaign_id,
          seid,
          campaign_name,
          vertical,
          payout,
          price_format,
          status,
        })
        .then(() => {
          setState({
            account_id: "",
            sponsor_name: "",
            campaign_id: "",
            seid: "",
            campaign_name: "",
            vertical: "",
            payout: "",
            price_format: "",
            status: "",
          });
        })
        .catch((error) => toast.error(error.response.data));
      toast.success("Offer Added Successfully");
      setTimeout(() => navigate("/"), 500);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <form className="addEditFrm" onSubmit={handleSubmit}>
        <input
          type="number"
          id="account_id"
          name="account_id"
          placeholder="Account Id"
          value={account_id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          id="sponsor_name"
          name="sponsor_name"
          placeholder="Sponsor Name"
          value={sponsor_name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          id="campaign_id"
          name="campaign_id"
          placeholder="Campaign Id"
          value={campaign_id}
          onChange={handleInputChange}
        />
        <input
          type="number"
          id="seid"
          name="seid"
          placeholder="Seid"
          value={seid}
          onChange={handleInputChange}
        />
        <input
          type="text"
          id="campaign_name"
          name="campaign_name"
          placeholder="Campaign Name"
          value={campaign_name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          id="vertical"
          name="vertical"
          placeholder="Vertical"
          value={vertical}
          onChange={handleInputChange}
        />
        <input
          type="text"
          id="payout"
          name="payout"
          placeholder="Payout"
          value={payout}
          onChange={handleInputChange}
        />
        <input
          type="text"
          id="price_format"
          name="price_format"
          placeholder="Price Format"
          value={price_format}
          onChange={handleInputChange}
        />
        <input
          type="text"
          id="status"
          name="status"
          placeholder="Status"
          value={status}
          onChange={handleInputChange}
        />
        <input type="submit" value={"Save"} />
        <Link to="/">
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  );
}

export default AddEdit;
