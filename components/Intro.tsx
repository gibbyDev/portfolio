import React from "react";

export default function Intro() {
  return (
    <div className="h-full w-full flex items-center justify-center m-0 p-0">
      <iframe
        className="w-full h-[220px] md:w-[85vw] md:h-[520px] lg:w-[85%] lg:h-[620px] rounded-xl"
        src="https://www.youtube.com/embed/rnVhezZaXdk?"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}
