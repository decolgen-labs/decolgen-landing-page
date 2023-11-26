import React from "react";
interface IProps {
  label?: string;
  link: string;
}
const ButtonView = ({ label = "View Project", link }: IProps) => {
  return (
    <a href={link} target="_blank">
      <button className=" group inline-flex items-center gap-2 rounded-3xl bg-title px-8 py-4 text-white duration-300 ease-in-out  hover:bg-white hover:text-black hover:outline hover:outline-2 hover:outline-black">
        <span className="text-sm font-bold">{label}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5 12C5 12 7.545 7 12 7C16.454 7 19 12 19 12C19 12 16.454 17 12 17C7.545 17 5 12 5 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 17V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V17M21 7V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V7M12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </a>
  );
};

export default ButtonView;
