import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import asgarLogo from "../../public/asgar-ali-hospital.webp";
import doc1 from "../../public/doctor-img/doc1.jpg";
import hepB from "../../public/vaccine-img/hepb.jpg";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

import announceData from "../../data/announcement/db.json";
import prescriptionData from "../../data/prescription/db.json";
import appointmentData from "../../data/appointment/db.json";

const _Dashboard = () => {
  const [selectedPresc, setSelectedPresc] = useState(prescriptionData[0]);
  const [read, setRead] = useState(false);
  const [isMarkedAllRead, setIsMarkedAllRead] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
  };
  const handleCloseEventDetails = () => {
    // Close the event details component
    setSelectedEvent(null);
  };

  const handleReadClick = () => {
    setRead(!read);
    if (!isMarkedAllRead) {
      setIsMarkedAllRead(true);
    }
  };

  const uniquePrescriptionData = prescriptionData.filter(
    (presc, index, self) =>
      self.findIndex((p) => p.shortDesc === presc.shortDesc) === index
  );

  console.log(uniquePrescriptionData);

  return (
    <main className="min-h-full flex">
      <div className="flex flex-col gap-2 p-2 h-full w-1/2 ">
        <FullCalendar
          className="flex-1"
          events={appointmentData}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          eventClick={handleEventClick}
        />
        {selectedEvent && (
          <EventDetails
            event={selectedEvent}
            onClose={handleCloseEventDetails}
          />
        )}
      </div>
      <div className="w-1/2 flex flex-col gap-3">
        <div className="flex flex-col p-4 h-1/3 border bg-bgDark rounded-3xl">
          <div className="flex justify-between items-center mb-3 ">
            <span className="text-2xl font-Inter font-bold text-white ">
              Announcements
            </span>
            <button
              disabled={isMarkedAllRead}
              onClick={handleReadClick}
              className={`transition ease-in-out duration-150  bg-primaryDark border-2 rounded-3xl h-10 w-60 font-Inter font-bold text-textDark mr-5 ${
                isMarkedAllRead ? "bg-red-500" : "hover:bg-blue-600"
              }`}
            >
              {isMarkedAllRead ? "No New Announcements" : "Mark all as Read"}
            </button>
          </div>
          <div className="p-2 flex rounded-3xl flex-col gap-2 flex-1 bg-bgLight overflow-auto scrollbarStyle">
            {announceData.map((post) => (
              <div
                key={post.id}
                className={`font-Inter h-20 rounded-full w-full p-2 ${
                  post.read
                    ? "bg-bgDark"
                    : read
                    ? "bg-bgDark"
                    : "bg-primaryDark"
                } flex justify-between items-center`}
              >
                <div className="flex gap-2">
                  <img
                    className="h-14 w-14 rounded-full"
                    src={asgarLogo}
                    alt=""
                  />
                  <div className="flex flex-col items-start gap-2">
                    <h1 className="text-white font-Inter font-bold text-xl">
                      {post.subject}
                    </h1>
                    <p className="text-white font-Inter text-sm line-clamp-1">
                      {post.post}
                    </p>
                  </div>
                </div>
                <button className="mr-2 text-textDark">
                  <BiDotsVerticalRounded fontSize={30} />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col p-4 h-1/3  bg-bgDark rounded-3xl">
          <div className="flex justify-between items-center mb-3 ">
            <span className="text-2xl font-Inter font-bold text-white ">
              Prescriptions
            </span>
            <Listbox value={selectedPresc} onChange={setSelectedPresc}>
              <div className="relative mt-1">
                <Listbox.Button className="font-InterTight relative cursor-default rounded-full bg-primaryDark border-2 border-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="text-white font-Inter block truncate">
                    {selectedPresc.shortDesc}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute right-0 mt-1 max-h-60 w-60 overflow-auto rounded-3xl bg-white py-1 text-base shadow-lg ring-1 ring-white/5 focus:outline-none sm:text-sm">
                    {uniquePrescriptionData.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-5 ${
                            active
                              ? "font-Inter bg-bgDark text-textDark"
                              : "font-Inter text-textLight"
                          }`
                        }
                        value={person}
                      >
                        {({ selectedPresc }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selectedPresc ? "font-bold" : "font-normal"
                              }`}
                            >
                              {person.shortDesc}
                            </span>
                            {selectedPresc ? (
                              <span className="absolute inset-y-0 left-4 flex items-center pr-3 text-black">
                                <CheckIcon
                                  className="h-5 w-5 text-amber-600"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
          <div
            id="prescContainer"
            className="scrollbarStyle p-2 rounded-3xl gap-2 flex flex-col flex-1 bg-bgLight overflow-auto"
          >
            {selectedPresc && (
              <div className="flex flex-col gap-2 rounded-full">
                {prescriptionData
                  .filter(
                    (presc) => presc.shortDesc === selectedPresc.shortDesc
                  )
                  .map((filteredPresc) => (
                    <div
                      className="font-Inter h-40 rounded-full w-full flex flex-col gap-2"
                      key={filteredPresc.prescription.id}
                    >
                      {filteredPresc.prescription.map((meds) => (
                        <div
                          className=" bg-bgDark hover:bg-primaryDark w-full flex flex-col justify-center rounded-full"
                          key={meds.id}
                        >
                          <div className="flex flex-col px-10 py-4">
                            <div className="rounded-full flex gap-2 text-white font-Inter font-bold text-xl">
                              {meds.medName}
                              {meds.medMorn && (
                                <div className="flex items-center justify-center bg-sky-300 rounded-xl w-20 text-sm font-InterTight text-black">
                                  <h1>Morning</h1>
                                </div>
                              )}
                              {meds.medNoon && (
                                <div className="flex items-center justify-center bg-yellow-300 rounded-xl w-20 text-sm font-InterTight text-black">
                                  <h1>Noon</h1>
                                </div>
                              )}
                              {meds.medNight && (
                                <div className="flex items-center justify-center bg-indigo-300 rounded-xl w-20 text-sm font-InterTight text-black">
                                  <h1>Night</h1>
                                </div>
                              )}
                            </div>
                            <div>
                              {meds.longDesc && (
                                <div className="text-white font-Inter text-md mt-1">
                                  <h1>{meds.longDesc}</h1>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col p-4 h-1/3 border bg-bgDark rounded-3xl">
          <div className="flex justify-between items-center mb-3 ">
            <span className="text-xl font-Inter font-bold text-textDark ">
              Vaccinations
            </span>
          </div>
          <div className="p-2 rounded-xl flex-1 bg-bgLight">
            <div className="font-Inter-border h-20 rounded-xl w-full p-2  bg-bgDark  flex justify-between items-center">
              <div className="flex gap-4">
                <img
                  className="h-14 w-14 rounded-lg object-cover"
                  src={hepB}
                  alt=""
                />
                <div className="flex flex-col">
                  <h1 className="flex gap-2 text-white font-Inter font-bold text-xl">
                    Hepatitis -B
                  </h1>
                  <p className="text-white font-Inter text-md">
                    Date: 08 December, 2023
                  </p>
                </div>
              </div>

              <div className="">
                <img
                  className="h-14 w-14 rounded-lg object-cover"
                  src={doc1}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default _Dashboard;

const EventDetails = ({ event, onClose }) => {
  return (
    <>
      <div className="flex-1 gap-4 flex flex-col justify-between rounded-3xl bg-bgDark  p-4">
        <div className="text-white">
          <div>
            <h1 className="font-InterTight font-bold text-3xl">
              {event.title}
            </h1>
            <h1 className="font-Inter text-2xl">
              Time: {event.start.toLocaleString("en-US")}
            </h1>
          </div>
        </div>
        <button
          className="transition ease-in-out duration-150 hover: rounded-full p-2 text-white bg-primaryDark font-Inter font-bold text-md"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </>
  );
};

{
  /* ${
                  selectedPresc?.shortDesc === presc.shortDesc
                    ? "hidden"
                    : "block"
                } */
}

{
  /*  */
}
{
}
