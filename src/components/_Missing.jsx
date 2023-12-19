import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import notFound from "../../public/404.jpg";

export default function _Missing() {
  const [countDown, setCountDown] = useState(10);

  const navigate = useNavigate();

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountDown((prevCountdown) =>
        prevCountdown > 0 ? prevCountdown - 1 : 0
      );
    }, 1000);
    return () => clearInterval(countdownInterval);
  }, []);
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => clearTimeout(redirectTimeout);
  }, [navigate]);

  return (
    <div className="min-h-screen flex ">
      <div className="p-32 w-1/2 flex flex-col bg-bgLight">
        <div className=" ">
          <h1 className="font-InterTight font-bold text-5xl">
            ERROR 404: Page Not Found
          </h1>
        </div>
        <hr className="border-2 w-1/2 my-10 border-bgDark" />
        <div className="text-textLight">
          <h1 className="font-Inter text-2xl">
            The route you are trying to access is not available.
          </h1>
          <h1 className="font-Inter text-accentLight text-2xl mt-10">
            Redirecting you to the home page in {countDown + "..."}
          </h1>
        </div>
      </div>
      <div className="w-1/2  ">
        <img src={notFound} className="object-cover h-screen" />
      </div>
    </div>
  );
}
