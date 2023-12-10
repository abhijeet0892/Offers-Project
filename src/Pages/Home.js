import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:9000/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ marginTop: "100px" }}>
      <Link to="/addOffer">
        <button className="btn btn-contact">Add Contact</button>
      </Link>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No</th>
            <th style={{ textAlign: "center" }}>Account Id</th>
            <th style={{ textAlign: "center" }}>Sponsor Name</th>
            <th style={{ textAlign: "center" }}>Campaign Id</th>
            <th style={{ textAlign: "center" }}>Seid</th>
            <th style={{ textAlign: "center" }}>Campaign Name</th>
            <th style={{ textAlign: "center" }}>Vertical</th>
            <th style={{ textAlign: "center" }}>Payout</th>
            <th style={{ textAlign: "center" }}>Price Format</th>
            <th style={{ textAlign: "center" }}>Status</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.account_id}</td>
                <td>{item.sponsor_name}</td>
                <td>{item.campaign_id}</td>
                <td>{item.seid}</td>
                <td>{item.campaign_name}</td>
                <td>{item.vertical}</td>
                <td>{item.payout}</td>
                <td>{item.price_format}</td>
                <td>{item.status}</td>
                <td>
                  <Link to={`/update/${item.id}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <button className="btn btn-delete">Delete</button>
                  <Link to={`/view/${item.id}`}>
                    <button className="btn btn-view">View</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
