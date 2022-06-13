import React from "react";

function MobileFooter() {
  return (
    <div>
      <div className="bg-#fff flex items-center justify-between px-7 md:hidden">
        <a
          className="text-center py-1 text-[#2b2b2b] text-xs leading-tight"
          href=""
        >
            <span className="w-[7vw]">
          <svg
            set="nav"
            name="daily"
            theme="gray"
            class="w-[7vw] Icon--icon--3wCKh Icon--grayTheme--3wIXj Navigation--icon--8Tw0l"
            data-testid="Icon"
            aria-hidden="true"
            role="img"
            viewBox="0 0 24 24"
           
          >
            <title>Daily</title>
            <path
              d="M17.682 2c.627 0 1.136.509 1.136 1.136v1.591h1.637c.853 0 1.545.692 1.545 1.545v14.183c0 .853-.692 1.545-1.545 1.545H3.545A1.545 1.545 0 012 20.455V6.272c0-.853.692-1.545 1.545-1.545h2.091v-1.59a1.136 1.136 0 112.273 0v1.59h8.636v-1.59c0-.628.51-1.137 1.137-1.137zm2.5 8.182H3.818v9.227c0 .427.346.773.773.773h14.818a.773.773 0 00.773-.773v-9.227z"
              fill="#757575" width="30px"
            ></path>
          </svg>
          </span>
          {/* <span>12</span> */}
          <span>Today</span>
        </a>
        <a
          className="text-center py-1 text-[#2b2b2b] text-xs leading-tight"
          href=""
        >
          <svg
            set="nav"
            name="hourly"
            theme="gray"
            class="w-[7vw] Icon--icon--3wCKh Icon--grayTheme--3wIXj Navigation--icon--8Tw0l"
            data-testid="Icon"
            aria-hidden="true"
            role="img"
            viewBox="0 0 24 24"
          >
            <title>Hourly</title>
            <path
              d="M12.556 12.278V7.244c0-.444-.356-.8-.8-.8h-.067c-.445 0-.8.356-.8.8v5.245c0 .389.2.755.544.955l4.056 2.434a.792.792 0 001.089-.267.8.8 0 00-.278-1.111l-3.744-2.222zM12 2C6.478 2 2 6.478 2 12s4.478 10 10 10 10-4.478 10-10S17.522 2 12 2zm0 17.778c-4.289 0-7.778-3.49-7.778-7.778 0-4.289 3.49-7.778 7.778-7.778 4.289 0 7.778 3.49 7.778 7.778 0 4.289-3.49 7.778-7.778 7.778z"
              fill="#757575"
            ></path>
          </svg>
          <div>Hourly</div>
        </a>
        <a
          className="text-center py-1 text-[#2b2b2b] text-xs leading-tight"
          href=""
        >
          <svg
            set="nav"
            name="daily"
            theme="gray"
            class=" w-[7vw] Icon--icon--3wCKh Icon--grayTheme--3wIXj Navigation--icon--8Tw0l"
            data-testid="Icon"
            aria-hidden="true"
            role="img"
            viewBox="0 0 24 24"
          >
            <title>Daily</title>
            <path
              d="M17.682 2c.627 0 1.136.509 1.136 1.136v1.591h1.637c.853 0 1.545.692 1.545 1.545v14.183c0 .853-.692 1.545-1.545 1.545H3.545A1.545 1.545 0 012 20.455V6.272c0-.853.692-1.545 1.545-1.545h2.091v-1.59a1.136 1.136 0 112.273 0v1.59h8.636v-1.59c0-.628.51-1.137 1.137-1.137zm2.5 8.182H3.818v9.227c0 .427.346.773.773.773h14.818a.773.773 0 00.773-.773v-9.227z"
              fill="#757575"
            ></path>
          </svg>
          <div>10 Day</div>
        </a>
        <a
          className="text-center py-1 text-[#2b2b2b] text-xs leading-tight"
          href=""
        >
          <svg
            set="nav"
            name="radar"
            theme="gray"
            class="w-[7vw] Icon--icon--3wCKh Icon--grayTheme--3wIXj Navigation--icon--8Tw0l"
            data-testid="Icon"
            aria-hidden="true"
            role="img"
            viewBox="0 0 24 24"
          >
            <title>Radar</title>
            <path
              d="M20.985 12.004c.595 0 1.069.517.998 1.111-.31 2.815-1.786 5.58-4.522 7.311a10.069 10.069 0 01-10.907-.062C.879 16.697.52 8.888 5.406 4.512c3.98-3.57 10.262-3.311 13.914.623a.713.713 0 010 1.005L13.97 11.49c.184.665.015 1.4-.509 1.924a2.006 2.006 0 01-2.829-.002 2.006 2.006 0 01-.001-2.829 1.979 1.979 0 011.923-.508l1.513-1.513c-1.535-.9-3.537-.71-4.852.606a4.002 4.002 0 00.71 6.224 3.99 3.99 0 004.04.123 3.992 3.992 0 002-2.694c.099-.467.495-.82.976-.82h.014c.601.007 1.096.545.984 1.14a5.952 5.952 0 01-1.647 3.104 6.002 6.002 0 01-8.983-.571c-1.628-2.08-1.68-5.1-.11-7.222a5.997 5.997 0 018.317-1.34l1.428-1.427c-3.142-2.45-7.675-2.232-10.56.652C2.898 9.823 3.276 15.772 7.6 18.667c2.575 1.713 5.878 1.793 8.594.196 2.326-1.364 3.548-3.662 3.809-5.975a.982.982 0 01.982-.884z"
              fill="#757575"
            ></path>
          </svg>
          <div>Radar</div>
        </a>
        <a
          className="text-center py-1 text-[#2b2b2b] text-xs leading-tight"
          href=""
        >
          <svg
            set="nav"
            name="video"
            theme="gray"
            class="w-[7vw] Icon--icon--3wCKh Icon--grayTheme--3wIXj Navigation--icon--8Tw0l"
            data-testid="Icon"
            aria-hidden="true"
            role="img"
            viewBox="0 0 24 24"
          >
            <title>Video</title>
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 13.5v-7a.5.5 0 01.8-.4l4.67 3.5c.27.2.27.6 0 .8l-4.67 3.5a.5.5 0 01-.8-.4z"
              fill="#757575"
            ></path>
          </svg>
          <div>Video</div>
        </a>
      </div>
    </div>
  );
}

export default MobileFooter;
