import vacData from "../../data/vaccination/db.json"
import { BiSearch, BiListUl } from "react-icons/bi";
import { useState } from "react";

export default function _Vaccination() {
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCard, setSelectedCard] = useState(null);

  const handleProfileView = (vac) => {
    setSelectedCard(vac);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredVacs = vacData.filter((vac) =>
    Object.values(vac).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return <main className="flex gap-4 h-full scrollbarStyle">
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
            Vaccines
          </header>
          <div className="p-2 gap-4 flex flex-1 flex-col bg-bgLight rounded-2xl h-full">
            <div className="overflow-hidden">
              {filteredVacs.map((vac) => (
                <div
                  className="flex flex-col mt-2 hover:border-2 hover:border-black transition ease-in duration-150 cursor-pointer rounded-full  bg-blue-100 hover:bg-blue-300 h-20 p-4"
                  key={vac.id}
                  onClick={() => {
                    handleProfileView(vac);
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
                            {vac.vacName}
                          </span>

                          <div id="docContainer" className="">
                            <div className="flex items-center justify-center font-Inter text-2xl font-bold h-12 w-full p-3 rounded-full  bg-bgDark text-white">
                              {vac.vacDesc}
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
      <div className="w-1/2 h-full scrollbarStyle bg-bgDark rounded-xl p-4 overflow-auto">
        <header className="flex items-center justify-between font-Inter font-bold text-4xl text-textDark mb-2 h-14">
          <h1>Details</h1>
          <button className="px-3 py-1 bg-green-600 text-2xl rounded-full">
            Book
          </button>
        </header>
        <div className="h-[91%] p-2 bg-bgLight rounded-2xl overflow-auto scrollbarStyle">
            {selectedCard && (
              <section className="flex flex-col gap-4">
                  <div className="h-96 relative flex items-center overflow-hidden rounded-2xl">
                    <img className="rounded-2xl w-full h-auto object-cover transition-transform duration-300 hover:scale-110" src={selectedCard.vacImg} alt={selectedCard.vacName} />
                      <div className="absolute inset-0 bg-black opacity-70 "></div>
                        <h1 className="absolute inset-0 flex flex-col gap-4 items-center justify-center font-InterTight font-bold text-5xl text-white">
                          {selectedCard.vacName}
                          <span className="font-normal text-2xl px-3 py-1 bg-primaryDark rounded-full">
                            {selectedCard.vacDesc}
                          </span>
                        </h1>
                  </div>
                  <div className="h-1/2 flex flex-col gap-2">
                    <h1 className="text-3xl font-Inter font-bold">Dosage:</h1>
                    <p className="text-xl font-Inter">{selectedCard.dosage}</p>
                  </div>
              </section>
            )}
        </div>
      </div>
  </main>;
}
