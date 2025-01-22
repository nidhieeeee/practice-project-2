import React, { useEffect, useState } from "react";
import "./UserForm.css";
import { Navigate, useNavigate } from "react-router-dom";
 function UserForm({setUserData}){
const navigate = useNavigate();
const [formData , setFormData] = useState({
  name:"",
  age:"",
  email:"",
  phone:"",
  location:"",
  university:"",
  gender:"",
  course:"",
  year:"",
  bio:""
});

const [name , setName] = useState("");
const [age , setAge] = useState("");
const [email , setEmail] = useState("");
const [phone , setPhone] = useState("");
const [location , setLocation] = useState("");
const [university , setUniversity] = useState("");
const [gender , setGender] = useState("");
const [course , setCourse] = useState("");
const [year , setYear] = useState("");
const [bio , setBio] = useState("");

function handleSubmit(e){
  e.preventDefault();
  const data = {
    name:name,
    age:age,
    email:email,
    phone:phone,
    location:location,
    university:university,
    gender:gender,
    course:course,
    year:year,
    bio:bio,
  }
setUserData(data);

navigate("/userprofile");

}


    return(
      <div className="container">
      <h1>Student Survey Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}  required />
        </label>

        <label htmlFor="age">
          Age:
          <input type="number" name="age" id="age" value={age} onChange={(e) => setAge(e.target.value)}  required />
        </label>

        <label htmlFor="email">
          Email:
          <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>

        <label htmlFor="phone">
          Phone:
          <input type="tel" name="phone" id="phone"  value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </label>

        <label htmlFor="location">
          Address:
          <input type="text" name="location" id="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </label>

        <label htmlFor="university">
          Name of the university:
          <input type="text" name="university" id="university" value={university} onChange={(e) => setUniversity(e.target.value)} required />
        </label>

        <label className="radio-group" htmlFor="gender">
        Male
          <input
            type="radio"
            name="gender"
            id="gende"
            value="male"
            onChange={(e) => setGender(e.target.value)}
          />
          
        </label>
        <label className="radio-group">
        Female
          <input
            type="radio"
            name="gender"
            id="gende"
            value="female"
            onChange={(e) => setGender(e.target.value)}
          />
         
        </label>

        <label htmlFor="course">
          Course:
          <input type="text" name="course" id="course" value={course} onChange={(e) => setCourse(e.target.value)} required />
        </label>

        <label htmlFor="years">
          Year of Study:
          <select name="year" required id="years" value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">Select</option>
            <option value="1st">1st Year</option>
            <option value="2nd">2nd Year</option>
            <option value="3rd">3rd Year</option>
            <option value="4th">4th Year</option>
          </select>
        </label>

        <label htmlFor="bio">
          Bio:
          <textarea name="bio" id="bio" required value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
    );
 }
 export default UserForm;