import { Popover, Transition, Menu } from "@headlessui/react";
import { BiChat, BiBell } from "react-icons/bi";
import { Fragment } from "react";
import classNames from "classnames";
import profileimg from "../../../public/profileimg.jpg";
import hospitalImage from "../../../public/placeholder.png";
import userData from "../../../data/user/db.json";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function _Header() {
  const [formattedTime, setFormattedTime] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("active");

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  setInterval(updateClock, 1000);
  const navigate = useNavigate();

  function updateClock() {
    let currentDate = new Date();

    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();

    let year = currentDate.getFullYear();
    let month = currentDate.toLocaleString("en-US", { month: "long" });
    let day = currentDate.getDate();

    const newFormattedDate = `${day < 10 ? "0" + day : day} ${month}, ${year}`;

    let formattedHours = hours < 10 ? "0" + hours : hours;
    let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    let ampm = hours >= 12 ? "PM" : "AM";

    const newFormattedTime = `${
      formattedHours % 12 ? formattedHours % 12 : formattedHours
    }:${formattedMinutes} ${ampm}`;

    setFormattedTime(newFormattedTime);
    setFormattedDate(newFormattedDate);
  }

  useEffect(() => {
    const timerInterval = setInterval(updateClock, 1000);

    return () => clearInterval(timerInterval);
  });

  const [lat, setLat] = useState(23.04);
  const [lon, setLon] = useState(90.04);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLat(latitude);
          setLon(longitude);
        },
        (error) => {
          setError("Error getting location: " + error.message);
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const apiKey = "93149e46c20b7f29803c7a1c2ad9e638";

    const baseURL =
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
      `lon=${lon}&appid=${apiKey}`;

    axios
      .get(baseURL)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        setError("Error: " + error.message);
        setLoading(false);
      });
  }, [lat, lon]);

  const kelvin = 273;
  return (
    <div className="bg-bgDark h-16 px-2 flex justify-between items-center rounded-3xl ">
      <div className=" flex items-center gap-4">
        <img
          className="rounded-2xl h-12"
          src={hospitalImage}
          alt="Hospital Log"
        />
        <div>
          <h1 className=" font-InterTight font-bold text-3xl text-textDark">
            Houston General Hospital
          </h1>
        </div>
      </div>

      <div>
        <h1 className="px-4 font-InterTight font-bold text-3xl text-textDark">
          {formattedTime}
        </h1>
      </div>
      <div>
        <h1 className="px-4 font-InterTight font-bold text-3xl text-textDark">
          {formattedDate}
        </h1>
      </div>
      <div>
        <div className="px-4 font-InterTight font-bold text-3xl text-textDark">
          <div>
            {/* {weatherData
              ? `${weatherData.weather[0].description}
            ${Math.floor(weatherData.main.temp - kelvin) + "°C"}`
              : "Loading..."} */}
            {loading ? (
              <p>Loading..</p>
            ) : error ? (
              <p>{error}</p>
            ) : location && weatherData ? (
              `${weatherData.weather[0].description} ${
                Math.floor(weatherData.main.temp - kelvin) + "°C"
              }`
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mr-2">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-bgLight",
                  "p-1.5 rounded-full inline-flex items-center hover:bg-textDark   focus:outline-none "
                )}
              >
                <BiChat
                  fontSize={30}
                  className={classNames(
                    open && "text-textLight",
                    "text-textDark hover:text-textLight"
                  )}
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Popover.Panel className="absolute right-0 z-10 w-80 bg-bgLight text-textLight top-14">
                  <div className="font-Inter bg-bgLight rounded-2xl shadow-lg ring- ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className=" text-textLight font-bold">
                      Messages
                    </strong>
                    <div className="mt-2 py-1">This is the messages panel.</div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-bgLight",
                  "p-1.5 rounded-full inline-flex items-center hover:bg-textDark   focus:outline-none "
                )}
              >
                <BiBell
                  fontSize={30}
                  className={classNames(
                    open && "text-textLight",
                    "text-textDark hover:text-textLight"
                  )}
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Popover.Panel className="absolute right-0 z-10 w-80 bg-bgLight text-textLight top-14">
                  <div className="font-Inter bg-bgLight rounded-2xl shadow-lg ring- ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className=" text-textLight font-bold mt-2">
                      Notifications
                    </strong>
                    <div className="mt-2 py-1">
                      This is the notifications panel.
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Menu as="div" className="relative">
          <div>
            <Menu.Button className="mt-1 inline-flex rounded-3xl focus:outline-none ">
              <span className="sr-only">Open user menu</span>
              <div
                className={`h-10 w-10 rounded-full bg-cover bg-no-repeat ring-2 ${
                  selectedStatus === "active" ? "ring-green-400" : ""
                } 
                ${selectedStatus === "away" ? "ring-yellow-400" : ""} 
                ${selectedStatus === "ignore" ? "ring-red-400" : ""} ${
                  selectedStatus === "dnd" ? "ring-gray-400" : ""
                }  bg-center`}
                style={{
                  backgroundImage: `url(${profileimg})`,
                }}
              >
                <span className="sr-only">Shafin Rahman</span>
              </div>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right z-10 absolute right-0 mt-4 w-48 rounded-xl shadow-lg p-1 bg-bgLight ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col items-start font-Inter">
              <span className="font-bold px-4 pt-2">Shafin Rahman</span>
              <span className="px-4 mb-4">Developer</span>
              <hr className="px-4 w-full border-1 border-bgDark" />
              <Menu.Item className="mt-2">
                {({ active }) => (
                  <div
                    className={classNames(
                      active && "bg-bgDark text-textDark",
                      "bg-bgLight text-textLight focus:bg-bgDark focus:text-textDark  cursor-pointer rounded-2xl px-4 py-2 w-full"
                    )}
                  >
                    Set Status
                    <Menu.Items>
                      <Menu.Item className="mt-2">
                        {({ active }) => (
                          <div
                            className={classNames(
                              active && "bg-bgDark text-textDark",
                              "bg-bgLight text-textLight focus:bg-bgDark focus:text-textDark hover:bg-green-400 cursor-pointer rounded-2xl px-4 py-2 w-full"
                            )}
                            onClick={() => handleStatusChange("active")}
                          >
                            🟢 Active
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item className="">
                        {({ active }) => (
                          <div
                            className={classNames(
                              active && "bg-bgDark text-textDark",
                              "bg-bgLight text-textLight focus:bg-bgDark focus:text-textDark hover:bg-yellow-400 cursor-pointer rounded-2xl px-4 py-2 w-full"
                            )}
                            onClick={() => handleStatusChange("away")}
                          >
                            🟡 Away
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item className="mb-2">
                        {({ active }) => (
                          <div
                            className={classNames(
                              active && "bg-bgDark text-textDark",
                              "bg-bgLight text-textLight focus:bg-bgDark focus:text-textDark hover:bg-red-400 cursor-pointer rounded-2xl px-4 py-2 w-full"
                            )}
                            onClick={() => handleStatusChange("ignore")}
                          >
                            🔴 Ignore
                          </div>
                        )}
                      </Menu.Item>
                      <hr className="px-4 w-full border-1 border-bgDark" />
                      <Menu.Item className="mt-2">
                        {({ active }) => (
                          <div
                            className={classNames(
                              active && "text-md bg-bgDark text-textDark",
                              "bg-bgLight text-textLight focus:bg-bgDark focus:text-textDark hover:bg-gray-400 cursor-pointer rounded-2xl px-4 py-2 w-full"
                            )}
                            onClick={() => handleStatusChange("dnd")}
                          >
                            ⚫ DND
                          </div>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item className="">
                {({ active }) => (
                  <div
                    className={classNames(
                      active && "bg-bgDark text-textDark",
                      "bg-bgLight text-textLight focus:bg-bgDark focus:text-textDark hover:bg-green-400 cursor-pointer rounded-2xl px-4 py-2 w-full"
                    )}
                    onClick={() => navigate("/profile")}
                  >
                    Your Profile
                  </div>
                )}
              </Menu.Item>
              <Menu.Item className="">
                {({ active }) => (
                  <div
                    className={classNames(
                      active && "bg-bgDark text-textDark",
                      "bg-bgLight text-textLight focus:bg-bgDark focus:text-textDark hover:bg-green-400 cursor-pointer rounded-2xl px-4 py-2 w-full"
                    )}
                    onClick={() => navigate("/settings")}
                  >
                    Settings
                  </div>
                )}
              </Menu.Item>
              <Menu.Item className="">
                {({ active }) => (
                  <div
                    className={classNames(
                      active && "bg-bgDark text-textDark",
                      "bg-bgLight text-textLight focus:bg-bgDark focus:text-textDark hover:bg-red-400 cursor-pointer rounded-2xl px-4 py-2 w-full"
                    )}
                    onClick={() => navigate("/login")}
                  >
                    Logout
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
