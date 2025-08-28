import React from "react";

export default function Intro() {
  return (
    <div className="h-screen flex items-center justify-center">
      <iframe
        className="w-[85%] h-[620px] md:w-[85%] md:h-[620px] sm:w-full sm:h-[220px] rounded-xl"
        src="https://www.youtube.com/embed/rnVhezZaXdk?controls=0&modestbranding=1&rel=0&showinfo=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
