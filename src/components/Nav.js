import React from "react";
import DarkModeButton from "./DarkModeButton.js";
import { useTreatments, SplitContext } from "@splitsoftware/splitio-react";
// import { SplitContext } from "@splitsoftware/splitio-react";

function SiteLogo(props) {
  return (
    <svg viewBox="0 0 777.05 128.44" aria-hidden="true" {...props}>
      <path
        className="st0"
        d="M456.93,36.57c-1.88,0.58-3.76,1.15-5.64,1.73c1.68-3.92,3.3-7.88,4.77-11.91c0.93-2.54,5.19-14.48-1.25-12.24
	c-1.65,0.57-3.45,2.94-4.81,4.17c-2.73,2.48-5.49,4.92-8.24,7.36c-7.06,6.24-14.14,12.44-21.23,18.62
	c-3.95,3.45-7.9,6.89-11.86,10.33c-10.03-8.71-20.05-17.45-30.03-26.25c-4.83-4.26-9.54-8.82-14.43-12.96
	c-1.69-1.43-4.01-2.46-5.13,0.55c-0.86,2.32,0.5,5.52,1.21,7.62c1.69,5.01,3.67,9.9,5.75,14.71c-1.87-0.57-3.75-1.15-5.62-1.72
	c-1.75-0.53-3.46,1.41-2.95,3.61c2.77,11.88,6.47,24.05,8.12,36.25c0.77,5.71,0.95,15.24,1.42,22.18c0.43,6.3,0.87,12.59,1.31,18.89
	c0.11,1.58,1.01,2.94,2.39,2.94c2.17,0,4.35,0,6.52,0c1.29,0,2.39-1.35,2.39-2.94c0-9.76,0-19.52,0-29.28
	c9.68,0,19.36,18.45,29.04,18.45c9.68,0,19.36-18.45,29.04-18.45c0,9.76,0,19.52,0,29.28c0,1.59,1.1,2.94,2.39,2.94
	c2.17,0,4.35,0,6.52,0c1.38,0,2.28-1.35,2.39-2.94c0.43-6.08,0.85-12.15,1.27-18.23c0.49-7.18,0.68-16.88,1.47-22.83
	c1.61-12.19,5.35-24.38,8.12-36.25C460.38,37.99,458.67,36.04,456.93,36.57z M378.25,60.67c0-1.27,0.55-2.11,1.27-2.52
	c0.15-0.12,0.31-0.22,0.49-0.31c8.85-4.21,18.23,0.29,23.31,9.73c1,1.85-0.31,4.47-2.07,4.42c-6.87-0.21-13.74-0.43-20.61-0.64
	c-1.3-0.04-2.39-1.32-2.39-2.94C378.25,65.82,378.25,63.25,378.25,60.67z M439.09,68.4c0,1.62-1.1,2.9-2.39,2.94
	c-6.87,0.21-13.74,0.43-20.61,0.64c-1.76,0.06-3.07-2.56-2.07-4.42c5.08-9.44,14.47-13.93,23.31-9.73c0.18,0.09,0.35,0.19,0.5,0.31
	c0.72,0.42,1.26,1.25,1.26,2.52C439.09,63.25,439.09,65.82,439.09,68.4z"
      />
      <g>
        <path
          className="st0"
          d="M46.86,87.83h-3.4h-0.74v26.74h-22.6V31.84h30.43c18.02,0,27.03,11.67,27.03,28.36
		c0,10.78-3.99,18.61-10.19,22.01l12.41,32.35H55.58L46.86,87.83z M48.49,69.81c4.14,0,5.91-3.4,5.91-7.98
		c0-5.47-1.77-8.27-5.91-8.27h-5.61v16.25H48.49z"
        />
        <path
          className="st0"
          d="M105.8,102.16l-1.92,12.41H81.72l16.4-82.72h32.94l16.54,82.72h-23.19l-1.92-12.41H105.8z M117.32,69.22
		c-2.07-13.3-2.95-19.79-3.1-20.24h-0.59c-0.15,0.44-1.03,7.09-2.95,20.39l-2.07,13.15h10.78L117.32,69.22z"
        />
        <path
          className="st0"
          d="M193.54,114.57l-18.91-40.18h-0.59c0,0.15,0.15,9.16,0.15,16.84v23.34h-21.57V31.84h23.49l18.76,38.11h0.59
		c0-0.15,0-7.53,0-15.36V31.84h21.57v82.72H193.54z"
        />
        <path
          className="st0"
          d="M253.37,31.84c22.6,0,33.68,15.21,33.68,41.66c0,25.7-10.19,41.07-33.24,41.07H225.6V31.84H253.37z
		 M252.63,92.56c8.13,0,11.08-3.4,11.08-18.76c0-16.99-2.66-19.94-10.49-19.94h-4.58v38.7H252.63z"
        />
        <path
          className="st0"
          d="M324.72,30.22c20.39,0,32.65,10.78,32.65,42.84c0,31.61-12.26,43.43-32.65,43.43
		c-20.53,0-32.79-11.82-32.79-43.43C291.92,41,304.18,30.22,324.72,30.22z M324.72,94.92c6.35,0,9.01-4.58,9.01-21.57
		s-2.66-21.57-9.01-21.57c-6.5,0-9.16,4.58-9.16,21.57C315.56,90.93,318.22,94.92,324.72,94.92z"
        />
        <path
          className="st0"
          d="M478.49,102.16l-1.92,12.41h-22.16l16.4-82.72h32.94l16.55,82.72h-23.19l-1.92-12.41H478.49z M490.02,69.22
		c-2.07-13.3-2.95-19.79-3.1-20.24h-0.59c-0.15,0.44-1.03,7.09-2.95,20.39l-2.07,13.15h10.78L490.02,69.22z"
        />
        <path
          className="st0"
          d="M552.06,87.83h-3.4h-0.74v26.74h-22.6V31.84h30.43c18.02,0,27.03,11.67,27.03,28.36
		c0,10.78-3.99,18.61-10.19,22.01L585,114.57h-24.23L552.06,87.83z M553.68,69.81c4.14,0,5.91-3.4,5.91-7.98
		c0-5.47-1.77-8.27-5.91-8.27h-5.61v16.25H553.68z"
        />
        <path
          className="st0"
          d="M601.1,114.57l-16.99-82.72h25.11l5.17,34.86l3.99,26.59h0.59l3.84-26.59l5.02-34.72h22.9l-16.55,82.58H601.1z
		"
        />
        <path
          className="st0"
          d="M655.76,31.84h50.82v22.01H678.8v9.31h18.91v19.5H678.8v9.9h28.51v22.01h-51.56V31.84z"
        />
        <path
          className="st0"
          d="M714.84,31.84h23.04v60.71H763v22.01h-48.16V31.84z"
        />
      </g>
    </svg>
  );
}

function Nav({ handlePageChange }) {
  // split io
  // access status properties via the SplitContext
  const featureName = "darkmode_split";
  const { isReady } = React.useContext(SplitContext); // eslint-disable-line

  const treatments = useTreatments([featureName]);
  const { treatment, config } = treatments[featureName]; // eslint-disable-line

  function toggleMode() {
    let darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    let isSystemDarkMode = darkModeMediaQuery.matches;
    let isDarkMode = document.documentElement.classList.toggle("dark");

    // determine dark mode status and set iphone notch color accordingly
    if (document.documentElement.classList.contains("dark")) {
      document
        .querySelector('meta[name="theme-color"]')
        .setAttribute("content", "#1e293b");
    } else {
      document
        .querySelector('meta[name="theme-color"]')
        .setAttribute("content", "#CC0300");
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.colortheme;
    } else {
      window.localStorage.colortheme = "dark";
    }
  }

  return (
    <>
      <div className="flex flex-col-reverse items-center pt-6 md:flex-row md:pt-0">
        <div className="flex-1 lg:px-32"></div>
        <div className="flex-3 self-center pt-11 pb-2 md:pb-8">
          <nav data-testid="logo">
            <button
              type="button"
              name="Logo"
              className="w-64 cursor-pointer"
              onClick={handlePageChange}
            >
              <SiteLogo className=" fill-marvel-500 dark:fill-zinc-100" />
            </button>
          </nav>
        </div>
        {isReady && treatment === "on" ? (
          <DarkModeButton showhidedark={toggleMode} />
        ) : (
          <div className="flex-1 lg:px-32"></div>
        )}
      </div>
    </>
  );
}

export default Nav;
