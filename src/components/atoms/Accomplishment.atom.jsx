import React from "react";

function Accomplishment({ icon: Icon, number, text }) {
  return (
    <div className="flex flex-row items-center gap-3 flex-nowrap p-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-200">
      <div className="flex items-center justify-center bg-brand-primary/10 text-brand-primary rounded-full p-3 min-w-[3rem] min-h-[3rem]">
        <Icon size={24} />
      </div>
      <div>
        <p className="m-0 font-extrabold text-2xl text-neutral-900 dark:text-neutral-100 leading-tight">
          {number}
        </p>
        <p className="m-0 text-sm text-neutral-500 dark:text-neutral-400 font-medium">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Accomplishment;
