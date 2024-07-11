"use client";

import { useState } from "react";
import ButtonRight from "./BottomBar/ButtonsRight";
import MetaData from "./BottomBar/MetaData";

import("./Buttons.css");

export default function BottomBar() {
  const [microActive, setMicroActive] = useState(false);

  return (
    <div
      id="control-bar"
      className="fixed bottom-0 left-0 w-full text-white p-4"
    >
      <MetaData />
      <div id="control-middle">
        <button
          className={microActive && `!bg-[#3c4043]`}
          id="mic"
          onclick="checkMute()"
        >
          <div
            onClick={() => {
              setMicroActive(!microActive);
            }}
          >
            {microActive && (
              <svg
                focusable="false"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="Hdh4hc cIGbvc NMm5M"
                fill="white"
              >
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"></path>
                <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"></path>
              </svg>
            )}

            {!microActive && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="white"
                class="Hdh4hc cIGbvc"
              >
                <path d="M0 0h24v24H0zm0 0h24v24H0z" fill="none"></path>
                <path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"></path>
              </svg>
            )}
          </div>

          <div className="hint">lorem (Strg + D)</div>
        </button>
        <button id="cam" className="" onclick="checkCam()">
          <svg width="24" height="24" viewBox="0 0 48 48" fill="white">
            <path d="m44.75 34.25-8-8v5.85l-4-3.95v-16.9h-16.9l-3.95-4h20.85q1.65 0 2.825 1.175Q36.75 9.6 36.75 11.25v10.5l8-8Zm-2.05 12.8L1.55 5.85l2.3-2.35L45.1 44.75ZM24.4 19.8Zm-4.6 4.35ZM7.65 7.25l3.95 4H7.25v25.5h25.5V32.4l3.95 3.95v.95q-.2 1.4-1.325 2.4t-2.625 1H7.25q-1.6 0-2.775-1.175Q3.3 38.35 3.3 36.75v-25.5q0-1.5 1-2.625T6.7 7.3Z"></path>
          </svg>
          <span className="hint">lorem (Strg + E)</span>
        </button>
        <button>
          <svg height="24" width="24" viewBox="0 0 48 48" fill="white">
            <path d="M26 48.4q-6.2 0-10.4-2.675T9.4 37.9L4.15 24.55q-.2-.45-.225-.85-.025-.4-.025-.95 0-1.55 1.1-2.7 1.1-1.15 2.65-1.15.3 0 .625.025t.675.125l1.5.4q.85.25 1.425.675.575.425 1.275 1.525V9q0-2.3 1.45-3.675t3.6-1.375q.45 0 .9.15t.65.45v-.4q0-1.9 1.35-3.2 1.35-1.3 3.5-1.3 1.5 0 2.6.9t1.4 2.1q.25-.2.925-.4t1.325-.2q2.05 0 3.4 1.475T35.6 6.75v1.6q.25-.3.7-.4.45-.1.9-.1 2.15 0 3.6 1.475 1.45 1.475 1.45 3.625V32.5q0 7.2-4.525 11.55Q33.2 48.4 26 48.4Zm0-3.85q5.6 0 9.025-3.25 3.425-3.25 3.425-8.8V12.95q0-.5-.375-.875T37.2 11.7q-.55 0-.9.375t-.35.875v11.7H32.1V7.15q0-.5-.375-.875T30.85 5.9q-.55 0-.875.375-.325.375-.325.875v17.5h-3.9V4.75q0-.5-.35-.875t-.85-.375q-.55 0-.9.375t-.35.875v19.9h-3.85V9.05q0-.5-.375-.875T18.2 7.8q-.55 0-.875.375Q17 8.55 17 9.05V29.9h-2.6l-2.65-5q-.6-1.2-1.375-1.55Q9.6 23 8.55 22.7q-.5-.1-.675.1-.175.2.025.65L13 36.5q1.55 3.9 4.725 5.975Q20.9 44.55 26 44.55Z"></path>
          </svg>
          <span className="hint">lorem</span>
        </button>
        <button>
          <svg height="24" width="24" viewBox="0 0 44 44" fill="white">
            <path d="M22.3 32.05h3.45v-9.6l3.75 3.85 2.5-2.45-8-7.95-8 7.95 2.45 2.45 3.85-3.85ZM7.25 40.7q-1.6 0-2.775-1.175Q3.3 38.35 3.3 36.75v-25.5q0-1.65 1.175-2.825Q5.65 7.25 7.25 7.25h33.5q1.65 0 2.825 1.175Q44.75 9.6 44.75 11.25v25.5q0 1.6-1.175 2.775Q42.4 40.7 40.75 40.7Zm0-3.95h33.5v-25.5H7.25v25.5Zm0 0v-25.5 25.5Z"></path>
          </svg>
          <span className="hint">lorem</span>
        </button>
        <button>
          <svg height="24" width="24" viewBox="0 0 48 48" fill="white">
            <path d="M24.05 41.7q-1.25 0-2.125-.875t-.875-2.075q0-1.2.875-2.1.875-.9 2.075-.9 1.25 0 2.1.9.85.9.85 2.1 0 1.2-.85 2.075-.85.875-2.05.875Zm0-14.75q-1.25 0-2.125-.875T21.05 24q0-1.25.875-2.1.875-.85 2.075-.85 1.25 0 2.1.85.85.85.85 2.05 0 1.25-.85 2.125t-2.05.875Zm0-14.7q-1.25 0-2.125-.875T21.05 9.25q0-1.25.875-2.125T24 6.25q1.25 0 2.1.875.85.875.85 2.125t-.85 2.125q-.85.875-2.05.875Z"></path>
          </svg>
          <div className="hint">lorem</div>
        </button>
        <button id="end">
          <svg height="24" width="24" viewBox="0 0 48 48" fill="white">
            <path d="M24 15.55q6.6 0 12.225 2.45t9.875 7.2q.65.7.65 1.75t-.65 1.75l-4.75 4.65q-.5.6-1.525.6t-1.725-.5l-5.4-4.05q-.5-.25-.675-.725-.175-.475-.175-.925v-7.1q-1.95-.7-3.9-1-1.95-.3-3.95-.3-1.95 0-3.925.3-1.975.3-3.875 1v7.1q0 .45-.2.925-.2.475-.6.725l-5.5 4.05q-.7.6-1.675.55-.975-.05-1.575-.65l-4.7-4.65q-.65-.7-.65-1.75t.65-1.75q4.3-4.7 9.875-7.175Q17.4 15.55 24 15.55Z"></path>
          </svg>
          <span className="hint">Microphone mute</span>
        </button>
      </div>
      <ButtonRight />
    </div>
  );
}
