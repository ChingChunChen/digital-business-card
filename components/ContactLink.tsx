
import React, { useState, useCallback } from 'react';

interface ContactLinkProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  isCopyable?: boolean;
  isVCard?: boolean;
  vCardUri?: string | null;
  vCardName?: string;
  className?: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({ icon, label, value, href, isCopyable, isVCard, vCardUri, vCardName, className }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [value]);

  const commonClasses = "group relative flex flex-col items-center justify-center p-4 bg-stone-50 hover:bg-amber-100/50 rounded-xl border border-stone-200 text-center transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2";
  const disabledClasses = "opacity-75 cursor-wait hover:bg-stone-50";

  const content = (
    <>
      <div className="text-amber-700 group-hover:text-amber-800 transition-colors duration-300">{icon}</div>
      <span className="mt-2 text-base font-semibold text-slate-700">{label}</span>
      <div className={`absolute -bottom-3 transition-all duration-300 ease-out ${copied ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
        <span className="text-xs bg-slate-800 text-white rounded-md px-2 py-1">Copied!</span>
      </div>
    </>
  );

  const loadingContent = (
     <>
      <svg className="animate-spin h-8 w-8 text-amber-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span className="mt-2 text-base font-semibold text-slate-700">處理中...</span>
    </>
  );

  if (isVCard) {
    const isReady = !!vCardUri;
    const combinedClasses = `${commonClasses} h-28 ${!isReady ? disabledClasses : ''} ${className || ''}`.trim();

    if (!isReady) {
      return (
        <div className={combinedClasses} role="status" aria-live="polite" aria-label="正在準備聯絡人檔案">
          {loadingContent}
        </div>
      );
    }

    return (
      <a
        href={vCardUri}
        download={`${vCardName || 'contact'}.vcf`}
        className={combinedClasses}
        aria-label={`儲存 ${vCardName} 的聯絡資訊`}
      >
        {content}
      </a>
    );
  }

  const combinedClasses = `${commonClasses} h-28 ${className || ''}`.trim();

  if (href) {
    const isExternalLink = href.startsWith('http');
    return (
      <a 
        href={href} 
        target={isExternalLink ? '_blank' : '_self'} 
        rel={isExternalLink ? 'noopener noreferrer' : undefined} 
        className={combinedClasses}
      >
        {content}
        {isCopyable && (
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 p-1.5 bg-white/50 backdrop-blur-sm rounded-full text-slate-500 hover:bg-white hover:text-slate-800 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label={`Copy ${label}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
          </button>
        )}
      </a>
    );
  }

  // Fallback for items that are only copyable
  return (
    <button onClick={() => handleCopy()} className={combinedClasses}>
      {content}
    </button>
  );
};

export default ContactLink;