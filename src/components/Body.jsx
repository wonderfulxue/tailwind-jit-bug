import React from "react";

export function Body() {
  return (
    <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:flex-row sm:space-x-4 sm:space-y-0">
      <button className="btn">Google Search</button>
      <button className="btn">I'm feeling lucky</button>
    </div>
  );
}
