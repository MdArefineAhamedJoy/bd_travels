import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const WatchTour = () => {
  const [vd, setVd] = useState([]);
  useEffect(() => {
    fetch("vd.json")
      .then((response) => response.json())
      .then((data) => setVd(data));
  }, []);
  console.log(vd);
  return (
    <div className="h-screen my-32">
      {vd.map((v) => (
        <div className="h-[470px] w-full relative">
          <ReactPlayer
            url={v.vd}
            controls
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 20, left: 0 }}
          />
        </div>
      ))}
    </div>
  );
};

export default WatchTour;
