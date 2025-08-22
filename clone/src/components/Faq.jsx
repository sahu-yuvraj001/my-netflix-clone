import React, { useState } from "react";

function Faq() {
  const [isopen, SetisOpen] = useState(false);
  const [isopen2, SetisOpen2] = useState(false);
  const [isopen3, SetisOpen3] = useState(false);
  const [isopen4, SetisOpen4] = useState(false);
  const [isopen5, SetisOpen5] = useState(false);
  const [isopen6, SetisOpen6] = useState(false);
  return (
    <div className="ml-40 w-300">
      <h1 className="text-white text-2xl ml-0  max-w-md mx-auto mt-10">
        Frequently Asked Questions
      </h1>
      <div className="border bg-gray-700 mt-5  text-white">
        <button
          className="w-full  flex justify-between items-center px-4 py-3 text-left"
          onClick={() => SetisOpen(!isopen)}
        >
          {" "}
          <span className="font-medium text-2xl">What is Netflix?</span>
          <span className="text-white text-6xl">{isopen ? "-" : "+"}</span>
        </button>
        {isopen && (
          <div className="px-4 pb-4 text-gray-300">
            <p>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries and more – on
              thousands of internet-connected devices. You can watch as much as
              you want, whenever you want, without a single ad – all for one low
              monthly price. There's always something new to discover, and new
              TV shows and movies are added every week!
            </p>
          </div>
        )}
      </div>
      <div className="border bg-gray-700  mt-5 text-white">
        <button
          className="w-full  flex justify-between items-center px-4 py-3 text-left"
          onClick={() => SetisOpen2(!isopen2)}
        >
          {" "}
          <span className="font-medium text-2xl">
            How much does Netflix cost?
          </span>
          <span className="text-white text-6xl">{isopen2 ? "-" : "+"}</span>
        </button>
        {isopen2 && (
          <div className="px-4 pb-4 text-gray-300">
            <p>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              ₹149 to ₹649 a month. No extra costs, no contracts.
            </p>
          </div>
        )}
      </div>
      <div className="border bg-gray-700  mt-5 text-white">
        <button
          className="w-full  flex justify-between items-center px-4 py-3 text-left"
          onClick={() => SetisOpen3(!isopen3)}
        >
          {" "}
          <span className="font-medium text-2xl">Where can I watch?</span>
          <span className="text-white text-6xl">{isopen3 ? "-" : "+"}</span>
        </button>
        {isopen3 && (
          <div className="px-4 pb-4 text-gray-300">
            <p>
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles. You can also download your
              favourite shows with the iOS or Android app. Use downloads to
              watch while you're on the go and without an internet connection.
              Take Netflix with you anywhere.{" "}
            </p>
          </div>
        )}
      </div>
      <div className="border bg-gray-700  mt-5 text-white">
        <button
          className="w-full  flex justify-between items-center px-4 py-3 text-left"
          onClick={() => SetisOpen4(!isopen4)}
        >
          {" "}
          <span className="font-medium text-2xl">How do I cancel?</span>
          <span className="text-white text-6xl">{isopen4 ? "-" : "+"}</span>
        </button>
        {isopen4 && (
          <div className="px-4 pb-4 text-gray-300">
            <p>
              Netflix is flexible. There are no annoying contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime. .{" "}
            </p>
          </div>
        )}
      </div>
      <div className="border bg-gray-700  mt-5 text-white">
        <button
          className="w-full  flex justify-between items-center px-4 py-3 text-left"
          onClick={() => SetisOpen5(!isopen5)}
        >
          {" "}
          <span className="font-medium text-2xl">
            What can I watch on Netflix?
          </span>
          <span className="text-white text-6xl">{isopen5 ? "-" : "+"}</span>
        </button>
        {isopen5 && (
          <div className="px-4 pb-4 text-gray-300">
            <p>
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </p>
          </div>
        )}
      </div>

      <div className="border bg-gray-700  mt-5 text-white">
        <button
          className="w-full  flex justify-between items-center px-4 py-3 text-left"
          onClick={() => SetisOpen6(!isopen6)}
        >
          {" "}
          <span className="font-medium text-2xl">Is Netflix good for kids?</span>
          <span className="text-white text-6xl">{isopen6 ? "-" : "+"}</span>
        </button>
        {isopen6 && (
          <div className="px-4 pb-4 text-gray-300">
            <p>
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              films in their own space. Kids profiles come with PIN-protected
              parental controls that let you restrict the maturity rating of
              content kids can watch and block specific titles you don’t want
              kids to see.
            </p>
          </div>
        )}
      </div>
      <div className="mt-10 ml-80">
        <p className="text-white mb-3">Ready to watch? Enter your email to create or restart your membership.</p>
          <input
            placeholder="Email Address"
            className="text-white border border-white mr-5 h-14 w-90 rounded bg-transparent outline-0 pl-2 font-[10px]"
          />
          <button className="text-white bg-red-700 p-4 px-12 py-3.5  rounded  font-bold text-[20px]">
            Get started
          </button>
        </div>
    </div>
  );
}

export default Faq;
