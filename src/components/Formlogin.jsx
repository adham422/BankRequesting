import React, { useState } from "react";
import Swal from "sweetalert2";

const Formlogin = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    phone: "",
    age: "",
    employee: false,
    salary: "",
  });

  const btnSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Success!",
      text: "The Form Was Submitted",
      icon: "success",
      confirmButtonText: "OK",
      showConfirmButton: true,
      timer: 5000,
    });
    setFormInput({name:"",age:"",phone:"",employee:false})
    console.log(formInput);
  };

  const btnisdisapled =
    formInput.name == "" ||
    formInput.phone == "" ||
    formInput.age == "" ||
    formInput.employee == false
      ? true
      : false;

      let classname= ""
        if(btnisdisapled == true){
          classname="btnstyle"
        }
      
  return (
    <div>
      <form id="formstyle">
        <p id="formtitle" style={{ fontSize: "2em", color: "#fff" }}>
          Requesting a loan
        </p>
        <hr
          style={{
            color: "#fff",
            fontSize: "50px",
            width: "100%",
            margin: "10px",
          }}
        />

        <label className="labeltitle">Name</label>
        <br />
        <input
          id="nameinput"
          name="name"
          value={formInput.name}
          onChange={(e) => {
            setFormInput({ ...formInput, name: e.target.value });
          }}
          type="text"
          placeholder="Enter Your Name"
          className="inpstyle"
        />
        <br />

        <label className="labeltitle">Phone Number</label>
        <br />
        <input
          id="phoneinput"
          name="phone"
          value={formInput.phone}
          onChange={(e) => {
            setFormInput({ ...formInput, phone: e.target.value });
          }}
          type="tel"
          placeholder="Enter Your Phone Number"
          className="inpstyle"
        />
        <br />

        <label className="labeltitle">Age</label>
        <br />
        <input
          id="ageinput"
          name="age"
          value={formInput.age}
          onChange={(e) => {
            setFormInput({ ...formInput, age: e.target.value });
          }}
          type="number"
          placeholder="Enter Your Age"
          className="inpstyle"
        />
        <br />

        <label className="labeltitle">Are you an Employee?</label>
        <br />
        <input
          id="checkinput"
          name="employee"
          checked={formInput.employee}
          onChange={(e) => {
            setFormInput({ ...formInput, employee: e.target.checked });
          }}
          type="checkbox"
        />
        <br />
        <br />

        <label className="labeltitle">Salary</label>
        <br />
        <select
          id="salaryinput"
          name="salary"
          value={formInput.salary}
          onChange={(e) => {
            setFormInput({ ...formInput, salary: e.target.value });
          }}
        >
          <option value="less than 500$">less than 500$</option>
          <option value="between 500$ and 2000$">between 500$ and 2000$</option>
          <option value="above 2000$">above 2000$</option>
        </select>
        <br />

        <button
        className={classname}
          type="button"
          id="btn"
          disabled={btnisdisapled}
          onClick={btnSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Formlogin;
