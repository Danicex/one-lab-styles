import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/GLobalContext'
import PaymentBtn from './Checkout';
import { useLocation } from 'react-router-dom';

export default function UserDetails({setActive,  setActive1}) {
  const [status, setStatus] = useState("");
  const { user, setUser } = useContext(AppContext);
  const [shirtInput, setShirtInput] = useState('');
  const [shirtM, setShirtM] = useState([]);
  const [shirtI, setShirtI] = useState(-1);
  const [trouserInput, setTrouserInput] = useState('');
  const [trouserM, setTrouserM] = useState([]);
  const [trouserI, setTrouserI] = useState(-1);
  const [userData, setUserData] = useState({
    email: '',
    phone: '',
    name: '',
    address: '',
    country: '',
    state: '',
  } || null);
  const  [x, setX] = useState(0);

  const sData = [
    "Neck Circumference",
    "Shoulder Width",
    "Chest Circumference",
    "Waist Circumference",
    "Shirt Length",
    "Sleeve Length",
    "Bicep Circumference",
    "Wrist Circumference"
  ];
  const tData = [
    "Waist Circumference",
    "Hip Circumference",
    "Thigh Circumference",
    "Knee Circumference",
    "Ankle Circumference",
    "Outseam",
    "Crotch Depth"
  ];


  const handleChangeUser = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }
  useEffect(() => {
    if (shirtInput.endsWith("/")) {
      setShirtM((prev) => [...prev, shirtInput.slice(0, -1)]);
      setShirtI(shirtI + 1)
      setShirtInput("")
    }
  }, [shirtInput]);
  useEffect(()=>{
    if (trouserInput.endsWith("/")) {
      setTrouserM((prev) => [...prev, trouserInput.slice(0, -1)]);
      setTrouserI(trouserI + 1)
      setTrouserInput("")
    }
  },[trouserInput])

  const handleSubmit = async (e) => {
    e.preventDefault();
    //setoring user in localstorage
    setUser(`
      ${userData.email}
      ${userData.name}
      ${userData.phone}
      ${userData.country}
      ${userData.address}`);

    localStorage.setItem('user', `
      user information
      ${userData.email}
      ${userData.name}
      ${userData.phone}
      ${userData.country}
      ${userData.address}`);

    //form data  strings
    const formData = {
      userInfo: `user information
      ${userData.email}
      ${userData.name}
      ${userData.phone}
      ${userData.country}
      ${userData.address}`,
      shirtMesh: shirtM,
      trouserMesh: trouserM,
    };
    console.log(formData);
    //post the formdata to formspree
    const response = await fetch("https://formspree.io/f/xeoaqdyk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setActive1(true);
      setActive(false)
      setStatus("Message sent successfully!");
    } else {
      setStatus("Error sending message. Please try again.");
    }
  };
  const renderSection = (title, fields) => (
    <div className="mb-6 shadow-sm ">
      <div className=" py-4 ">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <div className="py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{fields}</div>
      </div>
    </div>
  )
  const renderInputU = (name, label, placeholder, type = "text" ) => (
    <div className="flex flex-col space-y-1.5">
      <label htmlFor={name} className="text-sm font-medium ">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={userData[name]}
        placeholder={placeholder}
        onChange={handleChangeUser}
        className="border  rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )

  
  return (
    <div className='w-3/4 absolute top-0 z-10 left-0 right-0 m-auto max-sm:w-full py-5 px-5' id='trans-bg'>
      <p className='float-end' onClick={() => setActive(false)}>✖</p>
  <form >
    <div className='section1'>
      {renderSection("User Information", [
        renderInputU("email", "Email", 'Email'),
        renderInputU("name", "Full Name", 'Full Name'),
        renderInputU("address", "Address", "Address"),
        renderInputU("state", "State/City","state and city"),
        renderInputU("country", "Country", "country"),
      ])}
    </div>

    <div className="section2 flex flex-col space-y-1.5">
      <label htmlFor="shirtinput" className='text-sm font-medium py-2'>Shirt Measurements</label>
      <div className="copy-guide flex flex-wrap p-4 rounded-md gap-4" id='trans-bg2'>
        {sData.map((item, index) => (
          <p key={index} style={{ color: index <= shirtI ? "#1ff51f" : "gray" }} className='text-nowrap font-medium'>
            {item}
          </p>
        ))}
      </div>
      <textarea
        name="shirtinput"
        id="shirtinput"
        value={shirtInput}
        onChange={(e) => setShirtInput(e.target.value)}
        className='border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
        placeholder="Please end your input with ' / ' to submit."
      ></textarea>
    </div>

    <div className="section3 flex flex-col space-y-1.5">
      <label htmlFor="trouserinput" className='text-sm font-medium py-2 mt-5'>Trouser Measurements</label>
      <div className="copy-guide flex flex-wrap p-4 rounded-md gap-4" id='trans-bg2'>
        {tData.map((item, index) => (
          <p key={index} style={{ color: index <= trouserI ? "#1ff51f" : "gray" }} className='text-nowrap font-medium'>
            {item}
          </p>
        ))}
      </div>
      <textarea
        name="trouserinput"
        id="trouserinput"
        value={trouserInput}
        onChange={(e) => setTrouserInput(e.target.value)}
        className='border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
        placeholder="Please end your input with ' / ' to submit."
      ></textarea>
    </div>

    <button onClick={handleSubmit} className='mt-5'>Save</button>
  </form>
    </div>
  )
}
