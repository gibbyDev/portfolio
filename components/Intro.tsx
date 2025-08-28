import React from "react";

export default function Intro() {
  return (
    <div className='h-[100vh] flex items-center justify-center'>
      <iframe
        width="85%"
        height="620"
        src="https://www.youtube.com/embed/rnVhezZaXdk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
