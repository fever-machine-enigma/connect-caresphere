import splashImage from "../../public/login-register/registerSplash.jpg";
import { useRef, useState, useEffect } from "react";
import { BiCheck, BiErrorCircle } from "react-icons/bi";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EML_REGEX =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;

const _Register = () => {
  const userRef = useRef();
  const emailRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = EML_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.text(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
  };

  return (
    <main className="bg-bgLight dark:bg-bgDark min-h-screen flex flex-col items-center justify-center">
      {/* splash image */}

      {/* register container */}
      <div className="bg-bgDark dark:bg-bgLight flex rounded-3xl shadow-lg min-h-[900px] max-w-6xl p-4">
        <div className="w-1/2 max-h-full relative">
          <img
            className="rounded-2xl h-full object-cover"
            src={splashImage}
            alt="Splash"
          />

          <p className="font-InterTight absolute bottom-2 left-4 text-textDark shadow-sm">
            Photo Credit: Unsplash
          </p>
        </div>
        <div className="w-1/2 px-8 flex flex-col items-center">
          <form
            onSubmit={handleSubmit}
            className="font-Inter flex flex-col justify-center items-center w-3/4 mt-10"
          >
            <h2 className="text-3xl font-InterTight font-bold text-textDark dark:text-textLight">
              Register an account today!
            </h2>
            <div className="flex flex-row gap-2">
              <input
                className="p-2 px-4 focus:outline-none mt-8 rounded-xl w-full shadow "
                type="text"
                autoComplete="off"
                name="firstName"
                placeholder="First Name"
              />
              <input
                className="p-2 px-4 focus:outline-none mt-8 rounded-xl w-full  shadow"
                autoComplete="off"
                type="text"
                name="lastName"
                placeholder="Last Name"
              />
            </div>
            <div className="relative w-full">
              <input
                className="p-2 px-4 focus:outline-none mt-8 rounded-xl w-full shadow"
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onChange={(e) => setUser(e.target.value)}
                required
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                placeholder="User Name"
              />
              <div className="absolute right-0 bottom-1.5 mr-2">
                <span className={validName ? "block" : "hidden"}>
                  <BiCheck fontSize={30} className="text-green-600" />
                </span>
                <span className={validName || !user ? "hidden" : "block"}>
                  <BiErrorCircle fontSize={30} className="text-red-600" />
                </span>
              </div>
            </div>
            <div
              id="uidnote"
              className={
                userFocus && user && !validName
                  ? "rounded-3xl text-sm px-4 py-2 relative -bottom-2 border-2 bg-bgDark text-textDark"
                  : "absolute left-[9999] hidden"
              }
            >
              <ul>
                <li>4 to 24 characters.</li>
                <li>Must begin with a letter.</li>
                <li>Letters, numbers, underscores, hyphens are allowed.</li>
              </ul>
            </div>
            <div className="relative w-full">
              <input
                className="p-2 px-4 focus:outline-none mt-8 rounded-xl w-full shadow"
                type="email"
                id="email"
                ref={emailRef}
                autoComplete="off"
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="uidnote"
                onChange={(e) => setEmail(e.target.value)}
                required
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                placeholder="Email"
              />
              <div className="absolute right-0 bottom-1.5 mr-2">
                <span className={validEmail ? "block" : "hidden"}>
                  <BiCheck fontSize={30} className="text-green-600" />
                </span>
                <span className={validEmail || !email ? "hidden" : "block"}>
                  <BiErrorCircle fontSize={30} className="text-red-600" />
                </span>
              </div>
            </div>
            <div
              id="uidnote"
              className={
                emailFocus && email && !validEmail
                  ? "rounded-3xl text-sm px-4 py-2 relative -bottom-2 border-2 bg-bgDark text-textDark"
                  : "absolute left-[9999] hidden"
              }
            >
              <ul>
                <li>Please write a valid email address.</li>
              </ul>
            </div>
            <div className="relative w-full">
              <input
                className="p-2 px-4 focus:outline-none mt-8 rounded-xl w-full shadow"
                type="password"
                id="password"
                autoComplete="off"
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="uidnote"
                onChange={(e) => setPwd(e.target.value)}
                required
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                placeholder="Password"
              />
              <div className="absolute right-0 bottom-1.5 mr-2">
                <span className={validPwd ? "block" : "hidden"}>
                  <BiCheck fontSize={30} className="text-green-600" />
                </span>
                <span className={validPwd || !pwd ? "hidden" : "block"}>
                  <BiErrorCircle fontSize={30} className="text-red-600" />
                </span>
              </div>
            </div>
            <div
              id="uidnote"
              className={
                pwdFocus && pwd && !validPwd
                  ? "rounded-3xl text-sm px-4 py-2 relative -bottom-2 border-2 bg-bgDark text-textDark"
                  : "absolute left-[9999] hidden"
              }
            >
              <ul>
                <li>8 to 24 characters.</li>
                <li>
                  Must include uppercase and lowercase letters including a
                  number and special character
                </li>
                <li>Allowed special characters: !@#$%</li>
              </ul>
            </div>
            <div className="relative w-full">
              <input
                className="p-2 px-4 focus:outline-none mt-8 rounded-xl w-full shadow"
                type="password"
                id="passwordConfirm"
                autoComplete="off"
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="uidnote"
                onChange={(e) => setMatchPwd(e.target.value)}
                required
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
                placeholder="Confirm Password"
              />
              <div className="absolute right-0 bottom-1.5 mr-2">
                <span className={validMatch && matchPwd ? "block" : "hidden"}>
                  <BiCheck fontSize={30} className="text-green-600" />
                </span>
                <span className={validMatch || !matchPwd ? "hidden" : "block"}>
                  <BiErrorCircle fontSize={30} className="text-red-600" />
                </span>
              </div>
            </div>
            <div
              id="uidnote"
              className={
                matchFocus && matchPwd && !validMatch
                  ? "rounded-3xl text-sm px-4 py-2 relative -bottom-2 border-2 bg-bgDark text-textDark"
                  : "absolute left-[9999] hidden"
              }
            >
              <ul>
                <li>Passwords do not match.</li>
              </ul>
            </div>

            <input
              className="p-2 px-4 focus:outline-none mt-8 rounded-xl w-full shadow"
              type="text"
              name="doctorKey"
              placeholder="Referral Key*"
            />

            <button
              disabled={!validName || !validPwd || !validMatch ? true : false}
              className="transition ease-in-out delay-50 bg-accentLight w-32 h-12 mt-8 rounded-xl text-bgLight py-2 hover:bg-primaryDark hover:scale-110 cursor-pointer"
            >
              Register
            </button>
            <div className="font-Inter relative w-full mt-4">
              <p className="text-xs">
                *If you have partaken any services of a healthcare provider,
                they will have provided you with a referral key to make your
                account on their CareSphere network.
              </p>
              <p className="text-xs mt-2">
                *Use this key to sign up on{" "}
                <span className="font-bold">CareSphere | Connect</span>.
              </p>
            </div>
          </form>
        </div>
      </div>

      <footer className="mt-2 relative bottom-0  left-[400px] font-InterTight text-textLight dark:text-textDark">
        <h1>Coded with ❤️ for CSE347 (4)</h1>
      </footer>
    </main>
  );
};

export default _Register;
