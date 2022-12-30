import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Data.css";
const Data = () => {
  const [response, setResponse] = useState([]);

  const [search, setSearch] = useState("");
  const [filtered,setFiltered] = useState([])
  const handleView = (id) => {
    console.log("this is your", id);
  };

  const handleChange = (e) => {
    setSearch(e.target.value)
  }


  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },

    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Actions",
      selector: (row) => (
        <Link
          to="/viewData"
          state={{ Row_id: row.id, Row_title: row.title, Row_body: row.body }}
          onClick={() => handleView(row.id)}
        >
          View
        </Link>
      ),
    },
  ];


  const getData = async () => {
    const fetch_api = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setResponse(fetch_api.data);
    setFiltered (fetch_api.data)
  };

  useEffect(() => {
    getData();
  }, []);
  console.log("data ", response);

  //Search feild logic
  //this useEffect will render when we will search on input feild
  useEffect(() => {
    const result= response.filter(item => {
      return (
        item.title.toLowerCase().match(search.toLowerCase())
        )
    }) 
    setFiltered(result)

  },[search])

  return (
    <>
      <div>
        <div className="parent">
          <h1>Main Data</h1>
          <input
            className="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Type to search..."
            onChange={handleChange}
            value={search}
          />
        </div>
        <DataTable columns={columns} data={filtered} />
      </div>
    </>
  );
};

export default Data;
