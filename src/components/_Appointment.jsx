import { BiSearch, BiListUl } from "react-icons/bi";
import userData from "../../data/user/db.json";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const _Appointment = () => {
  let [isOpen, setIsOpen] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const jsonDate = date.toJSON()
  console.log(jsonDate);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const doctorList = userData.filter((user) => user.userType === "Doctor");

  const mappedDoctorList = doctorList.map((doctor) => ({
    id: doctor.id,
    referral: doctor.referral,
    userType: doctor.userType,
    userPosition: doctor.userPosition,
    department: doctor.department,
    status: doctor.status,
    org: doctor.org,
    branch: doctor.branch,
    firstName: doctor.firstName,
    lastName: doctor.lastName,
    profilePhoto: doctor.profilePhoto,
    userName: doctor.userName,
    password: doctor.password,
    sits: doctor.sits,
    leaves: doctor.leaves,
    workdays: doctor.workdays,
    room: doctor.room,
  }));
  const [selectedCard, setSelectedCard] = useState(null);

  const handleProfileView = (user) => {
    setSelectedCard(user);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDoctors = mappedDoctorList.filter((doctor) =>
    Object.values(doctor).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // const handleBooking = () => {
  //   const postOptions = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify()
  //   }
  // };
  
  return (
    <main className="flex flex-1 gap-4 h-full">
      <div className="flex flex-col gap-4 w-1/2">
        <header className="p-3 flex items-center justify-between rounded-full h-16 w-full bg-bgDark">
          <div className="flex items-center relative w-1/2">
            <BiSearch
              fontSize={25}
              className="text-textLight absolute top-2 left-3"
            />
            <input
              className="font-Inter pl-11 pr-4 rounded-full h-10 w-full focus:outline-none"
              type="text"
              placeholder="Search..."
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button className="transition ease-in duration-100 border-2 h-10 w-24 justify-center text-textDark hover:text-textLight hover:bg-bgLight rounded-full flex items-center gap-1">
              <span className="text-lg font-Inter">Filter</span>
              <BiListUl fontSize={25} className="hover:text-textLight" />
            </button>
          </div>
        </header>
        <div className="p-4 rounded-3xl flex flex-col h-5/6 bg-bgDark">
          <header className=" font-Inter font-bold text-4xl text-textDark mb-4">
            Doctors
          </header>
          <div className="p-2  flex-wrap gap-2 flex bg-bgLight rounded-2xl overflow-auto scrollbarStyle">
            {filteredDoctors.map((user) => (
              <div
                className={`p-2 gap-2 hover:bg-accentDark transition ease-in-out duration-200 cursor-pointer flex  justify-center flex-row h-72 border-textLight rounded-2xl border-2 w-[227px] ${
                  mappedDoctorList === user ? "bg-green-400" : ""
                }`}
                key={user.id}
              >
                <div
                  id="cardContent"
                  onClick={() => {
                    handleProfileView(user);
                  }}
                  className="flex flex-col justify-evenly items-center "
                >
                  <img
                    className="w-20 h-20 object-cover rounded-full"
                    src={user.profilePhoto}
                    alt=""
                  />
                  <div
                    id="nameContainer"
                    className="flex flex-col items-center justify-center "
                  >
                    <div className="flex gap-1">
                      <span className="font-Inter Tight text-xl font-bold">
                        {user.firstName}
                      </span>
                      <span className="font-Inter Tight text-xl font-bold">
                        {user.lastName}
                      </span>
                    </div>
                    <p id="positionContainer">
                      <span className="text-sm font-Inter">
                        {user.userPosition}
                      </span>
                    </p>
                    <div id="specContainer" className="mt-2">
                      <div className="flex items-center justify-center font-Inter text-sm font-bold h-7 w-full p-3 rounded-full  bg-bgDark text-white">
                        {user.department}
                      </div>
                    </div>
                  </div>
                  <button className="transition ease-in duration-100 border-2 w-48 h-10 rounded-full font-Inter font-bold bg-primaryDark hover:text-white hover:bg-sky-500 hover:border-spacing-2">
                    Message
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/2 min-h-full bg-bgDark rounded-3xl p-4">
        <header className="font-Inter font-bold text-4xl text-textDark mb-4">
          Profile
        </header>
        <div className="p-2 h-full flex-1 bg-bgLight rounded-2xl">
          {selectedCard && (
            <section className="flex-col items-center mt-3">
              <div className="h-1/2  w-full flex justify-center">
                <img
                  src={selectedCard.profilePhoto}
                  className="w-96 h-96 rounded-full object-cover"
                />
                <div className="w-1/2 flex flex-col justify-center items-center gap-2">
                  <div className="flex flex-1 flex-col justify-center items-center">
                    <h1 className="font-Inter font-bold text-4xl">
                      {selectedCard.firstName} {selectedCard.lastName}
                    </h1>
                    <h1 className="font-Inter text-xl">
                      {selectedCard.userPosition}
                    </h1>
                    <h1 className="mt-4 font-Inter font-bold text-lg flex items-center justify-center h-7 w-auto p-5 rounded-full  bg-bgDark text-white">
                      {selectedCard.department}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="h-1/2 flex">
                <div className="p-2 w-1/2 h-full flex flex-col  ">
                  <div className="h-1/3">
                    <span className="h-1/2 font-InterTight font-bold text-2xl">
                      Workdays
                    </span>
                    <div className="font-Inter font-bold h-1/2 p-4 rounded-full text-white  bg-blue-600 w-full flex justify-center items-center text-3xl ">
                      {selectedCard.workdays}
                    </div>
                  </div>
                  <div className="h-1/3">
                    <span className="h-1/2 font-InterTight font-bold text-2xl">
                      Sits at
                    </span>
                    <div className="font-Inter font-bold h-1/2 p-4 rounded-full text-white bg-green-600 w-full flex justify-end items-center text-4xl ">
                      <span>{selectedCard.sits}</span>
                    </div>
                  </div>
                  <div className="h-1/3">
                    <span className="h-1/2 my-1  font-InterTight font-bold text-2xl">
                      Leaves at
                    </span>
                    <div className="font-Inter font-bold h-1/2 p-4 rounded-full text-white bg-red-600 w-full flex justify-end items-center text-4xl ">
                      <span>{selectedCard.leaves}</span>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 h-full flex flex-col mt-1">
                  <div className="h-1/3 ">
                    <span className="h-1/2 my-1  font-InterTight font-bold text-2xl">
                      Branch
                    </span>
                    <div className="font-Inter bg-bgDark font-bold h-1/2 p-4 rounded-full text-white bg-black-600 w-full flex justify-end items-center text-4xl ">
                      <span>{selectedCard.branch}</span>
                    </div>
                  </div>
                  <div className="h-1/3 ">
                    <span className="h-1/2 my-1  font-InterTight font-bold text-2xl">
                      Room
                    </span>
                    <div className="font-Inter bg-bgDark font-bold h-1/2 p-4 rounded-full text-white bg-black-600 w-full flex justify-end items-center text-4xl">
                      <span>{selectedCard.room}</span>
                    </div>
                  </div>
                  <div className="h-1/3">
                    <span className="h-1/2 mt-40 font-InterTight font-bold text-2xl">
                      Appointment
                    </span>
                    <button
                      onClick={openModal}
                      type="button"
                      className="transition ease-in-out duration-300 font-Inter bg-yellow-500 hover:bg-primaryDark hover:text-textDark font-bold h-[70px] p-4 rounded-full text-black bg-black-600 w-full flex justify-center items-center text-3xl "
                    >
                      Book an Appointment
                    </button>
                    <Dialog open={isOpen} onClose={() => closeModal()}>
                      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-gray-700/80">
                        <Dialog.Panel className="p-8 w-full max-w-3xl h-full max-h-2xl rounded-xl bg-white">
                          <Dialog.Title>
                            <h1 className="text-4xl font-InterTight font-bold">
                              Book an Appointment
                            </h1>
                          </Dialog.Title>
                          <div className="flex flex-col">
                            <div className="h-1/3 flex p-4">
                              <img
                                className="object-cover rounded-full w-[300px] h-[300px]"
                                src={selectedCard.profilePhoto}
                                alt=""
                              />

                              <div className="w-1/2 flex flex-col justify-center items-center gap-4 font-Inter">
                                <span className="text-3xl font-bold">
                                  {selectedCard.firstName}{" "}
                                  {selectedCard.lastName}
                                </span>
                                <span className="text-xl">
                                  {selectedCard.userPosition}
                                </span>
                              </div>
                            </div>
                            <form className="flex flex-col justify-center gap-2 p-8">
                              <p className="font-Inter text-2xl font-bold">
                                Pick a Date & Time:{" "}
                              </p>
                              <DatePicker
                                className="flex items-center justify-center text-xl font-bold bg-primaryDark text-white font-Inter focus:outline-none px-5 h-12 w-[52%]  rounded-full cursor-pointer"
                                selected={selectedDate}
                                onChange={handleDateChange}
                                showTimeSelect
                                timeFormat="hh:mm aa"
                                timeIntervals={30}
                                dateFormat="MMMM d, yyyy H:mm aa"
                                timeCaption="Time"
                                placeholderText="Click here"
                                icon="bi biCalendar"
                              />
                              <h1 className="font-Inter text-2xl font-bold">
                                What is your problem?
                              </h1>
                              <textarea
                                className="focus:outline-none p-2 font-Inter text-xl rounded-2xl ring-2 ring-bgDark"
                                name="message"
                                id="messageContainer"
                                cols="30"
                                rows="5"
                              ></textarea>
                              <button className="transition ease-in-out duration-300 font-Inter bg-yellow-500 hover:bg-primaryDark hover:text-textDark font-bold h-[70px] p-4 rounded-full text-black bg-black-600 w-full flex justify-center items-center text-3xl ">
                                Confirm Appointment
                              </button>
                            </form>
                          </div>
                        </Dialog.Panel>
                      </div>
                    </Dialog>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </main>
  );
};

export default _Appointment;

{
  /* <Transition appear show={isOpen} as={Fragment}>
  <Dialog as="div" className="relative z-10" onClose={closeModal}>
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 bg-black/25" />
    </Transition.Child>

    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              Book an appointment
            </Dialog.Title>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Your payment has been successfully submitted. We’ve sent you an
                email with all of the details of your order.
              </p>
            </div>

            <div className="mt-4">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={closeModal}
              >
                Got it, thanks!
              </button>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </div>
  </Dialog>
</Transition>; */
}
