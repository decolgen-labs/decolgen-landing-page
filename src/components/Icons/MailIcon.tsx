import React from "react";
interface IProps {
  className?: string;
}
const MailIcon = ({ className }: IProps) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        className={`transform transition-transform ${className}`}
      >
        <path
          d="M26.6667 5.33337H5.33332C3.86666 5.33337 2.67999 6.53337 2.67999 8.00004L2.66666 24C2.66666 25.4667 3.86666 26.6667 5.33332 26.6667H26.6667C28.1333 26.6667 29.3333 25.4667 29.3333 24V8.00004C29.3333 6.53337 28.1333 5.33337 26.6667 5.33337ZM26.1333 11L16.7067 16.8934C16.28 17.16 15.72 17.16 15.2933 16.8934L5.86666 11C5.73296 10.925 5.61588 10.8236 5.52251 10.702C5.42913 10.5804 5.36141 10.4411 5.32342 10.2925C5.28544 10.144 5.27799 9.98929 5.30153 9.83778C5.32507 9.68628 5.3791 9.54113 5.46037 9.41111C5.54163 9.28109 5.64842 9.16892 5.77429 9.08137C5.90016 8.99382 6.04248 8.93272 6.19265 8.90177C6.34282 8.87082 6.4977 8.87066 6.64793 8.9013C6.79816 8.93195 6.94061 8.99275 7.06666 9.08004L16 14.6667L24.9333 9.08004C25.0594 8.99275 25.2018 8.93195 25.352 8.9013C25.5023 8.87066 25.6572 8.87082 25.8073 8.90177C25.9575 8.93272 26.0998 8.99382 26.2257 9.08137C26.3516 9.16892 26.4584 9.28109 26.5396 9.41111C26.6209 9.54113 26.6749 9.68628 26.6984 9.83778C26.722 9.98929 26.7145 10.144 26.6766 10.2925C26.6386 10.4411 26.5708 10.5804 26.4775 10.702C26.3841 10.8236 26.267 10.925 26.1333 11Z"
          fill="currentColor"
          className={`group-hover:fill-[url('#paint0_linear_401_2609')]`}
        />
        <defs>
          <linearGradient
            id="paint0_linear_401_2609"
            x1="-11.1578"
            y1="29.9205"
            x2="28.6157"
            y2="-5.098"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E900A9" />
            <stop offset="0.13" stopColor="#E502AC" />
            <stop offset="0.27" stopColor="#D806B5" />
            <stop offset="0.42" stopColor="#C20EC5" />
            <stop offset="0.58" stopColor="#A318DA" />
            <stop offset="0.73" stopColor="#7D25F5" />
            <stop offset="0.78" stopColor="#6F2AFF" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default MailIcon;
