import profileImg from "../../public/profileimg.jpg"
import { BiEdit } from "react-icons/bi";
import { useState } from "react";

export default function _Profile() {
  const [selectedImage, setSelectedImage] = useState(profileImg);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (readerEvent) => {
        const imageUrl = readerEvent.target.result;
        setSelectedImage(imageUrl);
      };

      reader.readAsDataURL(file);
    }
  };

  const [firstName, setFirstName] = useState('Shafin');
  const [lastName, setLastName] = useState('Rahman');
  
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }
  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }
  

  return (
    <main className="flex flex-col gap-4 h-full w-1/2">
      <header className="flex items-center justify-between gap-24 w-full">
        <div className="relative">
          <div className="h-72 w-72 overflow-hidden  flex items-center justify-center  rounded-full">
            <img id="selectedImage" className="h-auto w-full transition-transform duration-300 hover:scale-110 object-cover" src={selectedImage} alt="Profile Picture" />
          </div>
          <input onChange={handleImageChange} type="file" id="imageInput" accept="image/*" className="hidden">
          </input>
            <label htmlFor="imageInput" className="flex items-center gap-2 absolute bottom-7 left-[70px] text-white text-sm px-2 py-1 bg-primaryLight hover:bg-accentDark hover:text-black rounded-full transition ease-in-out duration-200">
              <BiEdit size={20}/>
              <h1 className="font-Inter">Change Picture</h1>
            </label>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 gap-2" id="name">
          <h1 className="font-Inter font-bold text-4xl">{firstName} {lastName}</h1>
          <h1 className="w-1/2 bg-bgDark rounded-full text-white text-center p-2 font-Inter font-bold text-2xl">
            Patient
          </h1>
        </div>
      </header>
    <section className="flex flex-1 flex-col gap-4 ">
      <div className="flex gap-4 w-full">
        <div className="flex items-center justify-center gap-1 w-1/2">
          <h1 className="font-Inter font-bold w-1/3">First Name: </h1>
          <input value={firstName} onChange={(e) => handleFirstNameChange(e)} className="w-2/3 py-3 px-5 rounded-full focus:outline-none" type="text" />
        </div>
        <div className="flex items-center w-1/2">
          <h1 className="font-Inter font-bold w-1/3">Last Name: </h1>
          <input value={lastName} onChange={(e) => handleLastNameChange(e)}  className="w-2/3 py-3 px-5 rounded-full focus:outline-none" type="text" />
        </div>
      </div>
      <div className="flex items-center gap-4 w-full justify-center">
        <h1 className="font-Inter font-bold w-auto">Address:</h1>
        <input className="w-full py-3 px-5 rounded-full focus:outline-none" type="text" />
      </div>
      <div className="flex items-center w-full justify-center">
        <h1 className="font-Inter font-bold w-40">Address No.2:</h1>
        <input  className="w-full py-3 px-5 rounded-full focus:outline-none" type="text" />
      </div>
      <div className="flex items-center gap-4 w-full justify-center">
        <h1 className="font-Inter font-bold w-auto">Email:</h1>
        <input  className="w-full py-3 px-5 rounded-full focus:outline-none" type="text" />
      </div>
      <div className="flex gap-2">
        <div className="flex items-center gap-2 w-1/5">
          <h1 className="font-Inter font-bold">Blood Type:</h1>
          <input value="AB+"  className="w-1/3 bg-red-500 text-white text-lg text-center p-2  rounded-full focus:outline-none" type="text" />
        </div>
        <div className="flex items-center gap-2 w-1/5">
          <h1 className="font-Inter font-bold">Gender:</h1>
          <input value="Male"  className="w-3/4 bg-green-600 text-white text-lg text-center p-2  rounded-full focus:outline-none" type="text" />
        </div>
      </div>
    </section>
    </main>
  );
}
