"use client";
import { useState, useEffect } from "react";

export default function DataComponent() {
  const [data, setData] = useState("");
  const [name, setName] = useState("");

  // GET
  // useEffect(() => {
  //   fetch("/api/data")
  //     .then(res => res.json())
  //     .then(json => setData(json));
  // }, []);

  // POST
  async function setname() {
    let name = prompt("enter name");
    const res = await fetch("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name }),
    });
    const json = await res.json();
    console.log(json);
  }

  function loadData() {
    fetch("/api/data")
      .then(res => res.json())
      .then(json =>{
        setData(JSON.stringify(json))
        setName(json.name);
      });
  }

  return (
    <div>
      <button onClick={setname}>set name</button>
      <button className="bg-blue p-5" onClick={loadData}>Load data</button>
      <pre>{data}</pre>
      <div>Hi, {name}</div>
    </div>
  );
}
