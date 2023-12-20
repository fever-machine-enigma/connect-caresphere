export default function _Feedback() {
  return <main className="flex flex-col gap-2 w-3/4">
    <header className="flex flex-col gap-3">
        <h1 className="font-Inter font-bold text-5xl">Feedback</h1>
        <hr className="w-full border-1 border-gray-500" />
      </header>
      <div className="flex flex-col gap-7">
        <p className="font-Inter text-lg leading-10 ">
        At CareSphere, we understand the importance of continuous improvement and user satisfaction, which is why your feedback is invaluable to us. This platform aims to seamlessly connect you with your healthcare journey, and we are committed to ensuring that your experience is not only efficient but also exceeds your expectations. Share your thoughts, suggestions, and experiences here, as we strive to build a healthcare community that truly cares. Together, let's shape the future of healthcare, one feedback at a time.
        </p>
        <form className="flex flex-col gap-4 flex-1 font-Inter text-md ">
          <div className="flex items-center gap-2">
            <p className="font-bold">Name:</p>
            <input className="w-1/3 p-4 rounded-full focus:ring-2 focus:outline-none" type="text" />
          </div>
          <div className="flex items-center gap-2">
            <p className="font-bold">Email:</p>
            <input className="p-4 rounded-full w-1/3 focus:ring-2 focus:outline-none" type="text" />
          </div>
          <div className="flex flex-col  gap-2">
            <p className="font-bold">Your Message:</p>
            <textarea className="p-4 rounded-xl focus:ring-2 focus:outline-none" name="" id="" cols="30" rows="10"></textarea>
          </div>
          <button className="transition ease-in duration-100 font-InterTight w-1/3 font-bold text-2xl p-4 bg-primaryDark text-black hover:bg-accentLight hover:text-white rounded-full">
            Submit
          </button>
        </form>
      </div>
  </main>;
}
