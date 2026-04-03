
import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isNested?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, isNested = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const baseStyles = "w-full text-left font-medium text-xl flex justify-between items-center transition-colors duration-300";
  const headerStyles = isNested
    ? `${baseStyles} px-4 py-3 bg-stone-100 hover:bg-stone-200 text-slate-700 rounded-lg`
    : `${baseStyles} px-6 py-4 bg-stone-50 hover:bg-stone-100 text-slate-800 rounded-xl border border-stone-200`;
    
  const contentStyles = isNested ? "px-4 pt-3 pb-4" : "px-6 pt-4 pb-6";

  return (
    <div className={isNested ? "w-full" : "border border-stone-200 rounded-xl overflow-hidden"}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={headerStyles}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
           <div className={contentStyles}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;