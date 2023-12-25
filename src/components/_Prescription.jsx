import { useState } from "react";
import prescriptionData from "../../data/prescription/db.json";
import "react-datepicker/dist/react-datepicker.css";
import { BiSearch, BiListUl } from "react-icons/bi";

export default function _Prescription() {
  
  const [selectedCard, setSelectedCard] = useState(null);

  const handleProfileView = (user) => {
    setSelectedCard(user);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDoctors = prescriptionData.filter((presc) =>
    Object.values(presc).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <main className="flex gap-4 h-full scrollbarStyle">
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
        <div className="p-6 rounded-3xl flex flex-col flex-1 h-full bg-bgDark">
          <header className="font-Inter font-bold text-4xl text-textDark mb-4">
            Prescriptions
          </header>
          <div className="p-2 gap-4 flex flex-1 flex-col bg-bgLight rounded-2xl h-full">
            <div className="overflow-hidden">
              {filteredDoctors.map((user) => (
                <div
                  className="flex flex-col mt-2 hover:border-2 hover:border-black transition ease-in duration-150 cursor-pointer rounded-full  bg-blue-100 hover:bg-blue-300 h-20 p-4"
                  key={user.id}
                  onClick={() => {
                    handleProfileView(user.prescription);
                  }}
                >
                  <div id="cardContent" className="flex gap-4">
                    <div
                      id="nameContainer"
                      className="flex flex-col items-center"
                    >
                      <div>
                        <div className="flex gap-2 items-start justify-center">
                          <span className="font-Inter Tight text-4xl font-bold">
                            {user.shortDesc}
                          </span>

                          <div id="docContainer" className="">
                            <div className="flex items-center justify-center font-Inter text-2xl font-bold h-12 w-full p-3 rounded-full  bg-bgDark text-white">
                              {user.doctor}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full scrollbarStyle  bg-bgDark rounded-xl p-4 overflow-auto">
        <header className="font-Inter font-bold text-4xl text-textDark mb-2">
          Meds
        </header>
        <div className="h-[740px] bg-bgLight rounded-2xl overflow-auto scrollbarStyle">
          {selectedCard && (
            <section className=" flex flex-col gap-2 items-center p-2">
              {selectedCard.map((meds) => (
                <div
                  id="medContainer"
                  key={meds.id}
                  className="overflow-auto bg-bgDark p-2 text-white rounded-2xl  w-full h-1/5"
                >
                  <div className="px-10" id="medContent">
                    <div className="h-1/3 flex items-center gap-6">
                      <div id="medImg">
                        <img
                          className="w-20 h-20 rounded-2xl"
                          src={meds.image}
                          alt=""
                        />
                      </div>
                      <div className="" id="medNameDesc">
                        <h1 className="font-Inter font-bold text-2xl">
                          {meds.medName}
                        </h1>
                        <p className="font-Inter">{meds.longDesc}</p>
                      </div>
                    </div>
                    <div className="h-1/3 flex gap-4 items-center">
                      <h1 className="font-Inter font-bold text-xl">Dosage:</h1>
                      {meds.medMorn && (
                        <div className="p-1 rounded-full font-Inter font-bold text-sm bg-blue-400 text-black">
                          {meds.medMorn && "Morning"}
                          {": "}
                          {meds.medMornBefore && "Before"}
                          {meds.medMornAfter && "After"} Eating
                        </div>
                      )}
                      {meds.medNoon && (
                        <div className="p-1 rounded-full font-Inter font-bold text-sm bg-yellow-400 text-black">
                          {meds.medNoon && "Noon"}
                          {": "}
                          {meds.medNoonBefore && "Before"}
                          {meds.medNoonAfter && "After"} Eating
                        </div>
                      )}
                      {meds.medNight && (
                        <div className="p-1 rounded-full font-Inter font-bold text-sm bg-indigo-400 text-black">
                          {meds.medNight && "Night"}
                          {": "}
                          {meds.medNightBefore && "Before"}
                          {meds.medNightAfter && "After"} Eating
                        </div>
                      )}
                    </div>
                    <div className="h-1/3">
                      <h1 className="font-Inter font-bold text-xl">
                        Doctor's Note:
                      </h1>
                      <div className="rounded-xl p-2 bg-bgLight text-black h-20 overflow-auto scrollbarStyle">
                        <p>{meds.doctorNote}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </main>
  );
}
