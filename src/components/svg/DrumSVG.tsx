// import * as React from "react";
// const DrumSVG = ({ stickHit }: any) => (
//   <svg
//     width={250}
//     height={250}
//     viewBox="0 0 64 64"
//     xmlns="http://www.w3.org/2000/svg"
//     aria-hidden="true"
//     className="iconify iconify--emojione"
//     transform="scale(-1 1)"
//   >
//     <path fill="#ed4c5c" d="M60.1 52.1 32 58.5 3.9 52.1V34.2h56.2z" />
//     <path
//       d="M32 37.7S8.6 37.1 2 27.3V33s3.2 8.5 30 8.5S62 33 62 33v-5.7c-6.6 9.8-30 10.4-30 10.4"
//       fill="#b2c1c0"
//     />
//     <path
//       d="M32 16.9c-16.6 0-30 4.7-30 10.4s13.4 10.4 30 10.4S62 33 62 27.3 48.6 16.9 32 16.9"
//       fill="#e8e8e8"
//     />
//     <path
//       d="M32 56.6S8.6 56 2 46.2v5.7s3.2 8.5 30 8.5 30-8.5 30-8.5v-5.7C55.4 56 32 56.6 32 56.6"
//       fill="#b2c1c0"
//     />
//     <path
//       d="M60.1 42.6v3.6c0 5.2-12.6 9.5-28.1 9.5S3.9 51.5 3.9 46.2v-3.6C2.7 43.7 2 44.9 2 46.2c0 5.7 13.4 10.4 30 10.4s30-4.7 30-10.4c0-1.3-.7-2.5-1.9-3.6"
//       fill="#e8e8e8"
//     />
//     <path
//       d="M32 21.6c13.7 0 25.1 3.3 27.6 7.6.4-.6.6-1.3.6-1.9 0-5.2-12.1-9.5-28.2-9.5S3.9 22.2 3.9 27.3c0 .6.2 1.3.5 1.9 2.6-4.3 14-7.6 27.6-7.6"
//       fill="#b2c1c0"
//     />
//     <path
//       d="M32 36.4c14 0 25-3 27.6-7.1-2.5-4.4-13.9-7.6-27.6-7.6-13.6 0-25 3.3-27.6 7.6 2.5 4.1 13.5 7.1 27.6 7.1"
//       fill="#fff"
//     />
//     {/* drum stick */}
//     <path
//       d="M46.5 23.4c-.6-.3-1.2-.5-1.7-.5L8.6 2c-.5-.2-1.9 2.1-1.4 2.4l36.7 20.2c.2.4.7.9 1.2 1.2 3.5 2 4.9-.4 1.4-2.4"
//       fill="#d3976e"
//       style={{
//         transform: stickHit ? "rotateZ(350deg)" : "rotateZ(8deg)",
//       }}
//     />
//     <path d="M3.9 53.3v3.8c0 1.5 5.6 1.5 5.6 0v-3.8z" fill="#b2c1c0" />
//     <ellipse cx={6.7} cy={53.3} rx={2.8} ry={0.9} fill="#e8e8e8" />
//     <path d="M5.8 38.6v14.6c0 .3.4.5.9.5s.9-.2.9-.5V38.6z" fill="#8a8e91" />
//     <path d="M3.9 34.4v3.8c0 1.5 5.6 1.5 5.6 0v-3.8z" fill="#b2c1c0" />
//     <ellipse cx={6.7} cy={34.4} rx={2.8} ry={0.9} fill="#e8e8e8" />
//     <path d="M54.5 53.3v3.8c0 1.5 5.6 1.5 5.6 0v-3.8z" fill="#b2c1c0" />
//     <ellipse cx={57.3} cy={53.3} rx={2.8} ry={0.9} fill="#e8e8e8" />
//     <path d="M56.4 38.6v14.6c0 .3.4.5.9.5s.9-.2.9-.5V38.6z" fill="#8a8e91" />
//     <path d="M54.5 34.4v3.8c0 1.5 5.6 1.5 5.6 0v-3.8z" fill="#b2c1c0" />
//     <ellipse cx={57.3} cy={34.4} rx={2.8} ry={0.9} fill="#e8e8e8" />
//     <path d="M38.6 57.1v3.8c0 1.5 5.6 1.5 5.6 0v-3.8z" fill="#b2c1c0" />
//     <ellipse cx={41.4} cy={57.1} rx={2.8} ry={0.9} fill="#e8e8e8" />
//     <path d="M40.4 42.4V57c0 .3.4.5.9.5s.9-.2.9-.5V42.4z" fill="#8a8e91" />
//     <path d="M38.6 38.2V42c0 1.5 5.6 1.5 5.6 0v-3.8z" fill="#b2c1c0" />
//     <ellipse cx={41.4} cy={38.2} rx={2.8} ry={0.9} fill="#e8e8e8" />
//     <path d="M19.8 57.1v3.8c0 1.5 5.6 1.5 5.6 0v-3.8z" fill="#b2c1c0" />
//     <ellipse cx={22.6} cy={57.1} rx={2.8} ry={0.9} fill="#e8e8e8" />
//     <path d="M21.7 42.4V57c0 .3.4.5.9.5s.9-.2.9-.5V42.4z" fill="#8a8e91" />
//     <path d="M19.8 38.2V42c0 1.5 5.6 1.5 5.6 0v-3.8z" fill="#b2c1c0" />
//     <ellipse cx={22.6} cy={38.2} rx={2.8} ry={0.9} fill="#e8e8e8" />
//   </svg>
// );
// export default DrumSVG;

import * as React from "react";
import { useState, useEffect } from "react";

const DrumSVG = () => {
  const [stickHit, setStickPosition] = useState(false);
  const [stickClickTimes, setStickClickTimes] = useState<string[]>([]);
  const startTime = Date.now();

  useEffect(() => {
    const interval = setInterval(() => {
      setStickPosition((prevPosition) => !prevPosition);
      const currTime = Date.now();
      const elapsedTimeInSeconds = ((currTime - startTime) / 1000).toFixed(2);
      setStickClickTimes((prev) => [...prev, elapsedTimeInSeconds]);
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);
  console.log(stickClickTimes);

  return (
    <svg
      width={250}
      height={250}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="iconify iconify--emojione"
      transform="scale(-1 1)"
    >
      <path fill="#ed4c5c" d="M60.1 52.1 32 58.5 3.9 52.1V34.2h56.2z" />
      <path
        d="M32 37.7S8.6 37.1 2 27.3V33s3.2 8.5 30 8.5S62 33 62 33v-5.7c-6.6 9.8-30 10.4-30 10.4"
        fill="#b2c1c0"
      />
      <path
        d="M32 16.9c-16.6 0-30 4.7-30 10.4s13.4 10.4 30 10.4S62 33 62 27.3 48.6 16.9 32 16.9"
        fill="#e8e8e8"
      />
      <path
        d="M32 56.6S8.6 56 2 46.2v5.7s3.2 8.5 30 8.5 30-8.5 30-8.5v-5.7C55.4 56 32 56.6 32 56.6"
        fill="#b2c1c0"
      />
      <path
        d="M60.1 42.6v3.6c0 5.2-12.6 9.5-28.1 9.5S3.9 51.5 3.9 46.2v-3.6C2.7 43.7 2 44.9 2 46.2c0 5.7 13.4 10.4 30 10.4s30-4.7 30-10.4c0-1.3-.7-2.5-1.9-3.6"
        fill="#e8e8e8"
      />
      <path
        d="M32 21.6c13.7 0 25.1 3.3 27.6 7.6.4-.6.6-1.3.6-1.9 0-5.2-12.1-9.5-28.2-9.5S3.9 22.2 3.9 27.3c0 .6.2 1.3.5 1.9 2.6-4.3 14-7.6 27.6-7.6"
        fill="#b2c1c0"
      />
      {/* drum pad */}
      <path
        d="M32 36.4c14 0 25-3 27.6-7.1-2.5-4.4-13.9-7.6-27.6-7.6-13.6 0-25 3.3-27.6 7.6 2.5 4.1 13.5 7.1 27.6 7.1"
        fill={stickHit ? "yellow" : "#fff"}
      />
      {/* drum stick */}
      <path
        d="M46.5 23.4c-.6-.3-1.2-.5-1.7-.5L8.6 2c-.5-.2-1.9 2.1-1.4 2.4l36.7 20.2c.2.4.7.9 1.2 1.2 3.5 2 4.9-.4 1.4-2.4"
        fill="#d3976e"
        style={{
          transform: stickHit ? "rotateZ(8deg)" : "rotateZ(350deg)",
        }}
      />
      <path d="M3.9 53.3v3.8c0 1.5 5.6 1.5 5.6 0v-3.8z" fill="#b2c1c0" />
      <ellipse cx={6.7} cy={53.3} rx={2.8} ry={0.9} fill="#e8e8e8" />
      <path d="M5.8 38.6v14.6c0 .3.4.5.9.5s.9-.2.9-.5V38.6z" fill="#8a8e91" />
      <path d="M3.9 34.4v3.8c0 1.5 5.6 1.5 5.6 0v-3.8z" fill="#b2c1c0" />
      <ellipse cx={6.7} cy={34.4} rx={2.8} ry={0.9} fill="#e8e8e8" />
      <path d="M54.5 53.3v3.8c0 1.5 5.6 1.5 5.6 0v-3.8z" fill="#b2c1c0" />
      <ellipse cx={57.3} cy={53.3} rx={2.8} ry={0.9} fill="#e8e8e8" />
      <path d="M56.4 38.6v14.6c0 .3.4.5.9.5s.9-.2.9-.5V38.6z" fill="#8a8e91" />
      <path d="M54.5 34.4v3.8c0 1.5 5.6 1.5 5.6 0v-3.8z" fill="#b2c1c0" />
      <ellipse cx={57.3} cy={34.4} rx={2.8} ry={0.9} fill="#e8e8e8" />
      <path d="M38.6 57.1v3.8c0 1.5 5.6 1.5 5.6 0v-3.8z" fill="#b2c1c0" />
      <ellipse cx={41.4} cy={57.1} rx={2.8} ry={0.9} fill="#e8e8e8" />
      <path d="M40.4 42.4V57c0 .3.4.5.9.5s.9-.2.9-.5V42.4z" fill="#8a8e91" />
      <path d="M38.6 38.2V42c0 1.5 5.6 1.5 5.6 0v-3.8z" fill="#b2c1c0" />
      <ellipse cx={41.4} cy={38.2} rx={2.8} ry={0.9} fill="#e8e8e8" />
      <path d="M19.8 57.1v3.8c0 1.5 5.6 1.5 5.6 0v-3.8z" fill="#b2c1c0" />
      <ellipse cx={22.6} cy={57.1} rx={2.8} ry={0.9} fill="#e8e8e8" />
      <path d="M21.7 42.4V57c0 .3.4.5.9.5s.9-.2.9-.5V42.4z" fill="#8a8e91" />
      <path d="M19.8 38.2V42c0 1.5 5.6 1.5 5.6 0v-3.8z" fill="#b2c1c0" />
      <ellipse cx={22.6} cy={38.2} rx={2.8} ry={0.9} fill="#e8e8e8" />
    </svg>
  );
};

export default DrumSVG;