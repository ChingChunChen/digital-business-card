
import React, { useState, useEffect } from 'react';
import { profileData } from './data/profileData';
import Accordion from './components/Accordion';
import ContactLink from './components/ContactLink';

const QrCodeIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 15.75h4.5a1.125 1.125 0 0 1 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125V16.5a1.125 1.125 0 0 1 1.125-1.125z" />
    </svg>
);


const App: React.FC = () => {
  const [language, setLanguage] = useState<'zh' | 'en'>('zh');
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const currentData = {
    name: profileData.name[language],
    titles: profileData.titles[language],
    researchAreas: profileData.researchAreas[language],
    profileImageUrl: profileData.profileImageUrl,
    contacts: profileData.contacts[language],
    education: profileData.education[language],
    experience: profileData.experience[language],
    specialties: profileData.specialties[language],
    teaching: profileData.teaching[language],
    honors: profileData.honors[language],
    sectionTitles: profileData.sectionTitles[language],
    research: profileData.research[language],
  };

  const [vCardUri, setVCardUri] = useState<string | null>(null);

  useEffect(() => {
    if (isQrModalOpen) {
        const timer = setTimeout(() => setIsModalVisible(true), 10);
        return () => clearTimeout(timer);
    }
  }, [isQrModalOpen]);

  useEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    if (isQrModalOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isQrModalOpen]);


  const handleCloseModal = () => {
    setIsModalVisible(false);
    setTimeout(() => {
        setIsQrModalOpen(false);
    }, 300); // Corresponds to transition duration
  };

  useEffect(() => {
    let objectUrl: string | undefined;

    const generateVCard = async () => {
      let photoBase64 = '';
      let photoType = '';
      try {
        const response = await fetch(currentData.profileImageUrl);
        if (!response.ok) throw new Error(`Image fetch failed: ${response.statusText}`);
        const blob = await response.blob();
        
        photoType = blob.type.split('/')[1]?.toUpperCase();
        if (!photoType || !['JPEG', 'PNG', 'GIF'].includes(photoType)) {
            console.warn(`Unsupported vCard image type: ${blob.type}, defaulting to JPEG.`);
            photoType = 'JPEG';
        }

        photoBase64 = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onerror = reject;
          reader.onload = () => {
            const dataUrl = reader.result as string;
            resolve(dataUrl.substring(dataUrl.indexOf(',') + 1));
          };
          reader.readAsDataURL(blob);
        });
      } catch (error) {
        console.error('Error processing vCard photo:', error);
      }
      
      const { name, titles, contacts } = currentData;
      const phone = contacts.find(c => c.label.includes('Phone'))?.value || '';
      const mobile = contacts.find(c => c.label.includes('手機') || c.label.includes('Mobile'))?.value || '';
      const email = contacts.find(c => c.label.includes('Email'))?.value || '';
      const website = profileData.contacts.zh.find(c => c.label === '國防大學')?.href || '';
      
      let familyName, givenName;
      if (language === 'en') {
          const nameParts = name.split(' ');
          familyName = nameParts[nameParts.length - 1];
          givenName = nameParts.slice(0, nameParts.length - 1).join(' ');
      } else {
          familyName = name.substring(0, 1);
          givenName = name.substring(1);
      }

      const vCardContent = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `N;CHARSET=UTF-8:${familyName};${givenName};;;`,
        `FN;CHARSET=UTF-8:${name}`,
        `ORG;CHARSET=UTF-8:${language === 'zh' ? '國防大學' : 'National Defense University'}`,
        `TITLE;CHARSET=UTF-8:${titles[0] || ''}`,
        `TEL;TYPE=WORK,VOICE:${phone}`,
        `TEL;TYPE=CELL,VOICE:${mobile}`,
        `EMAIL;TYPE=PREF,INTERNET:${email}`,
        `URL:${website}`,
      ];
      
      if (photoBase64 && photoType) {
        vCardContent.push(`PHOTO;ENCODING=b;TYPE=${photoType}:${photoBase64}`);
      }
      
      vCardContent.push('END:VCARD');

      const vCardString = vCardContent.join('\r\n');
      const vCardBlob = new Blob([vCardString], { type: 'text/vcard;charset=utf-8' });
      objectUrl = URL.createObjectURL(vCardBlob);
      setVCardUri(objectUrl);
    };

    generateVCard();

    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [language, currentData.profileImageUrl, currentData.name, currentData.titles, currentData.contacts]);

  const researchContent = language === 'en'
    ? profileData.research.en.map((section, sectionIndex) => ({
        ...section,
        items: profileData.research.zh[sectionIndex].items.map((item, itemIndex) => {
            const enItem = profileData.research.en[sectionIndex].items[itemIndex];
            if (item.zh) {
                return `${item.zh}<br/><i class="text-slate-500/90">${enItem.en}</i>`;
            }
            return enItem.en;
        })
      }))
    : currentData.research.map(section => ({...section, items: section.items.map(item => item.zh || item.en) }));

  const detailSections = [
    { title: currentData.sectionTitles.education, content: currentData.education, isList: true },
    { title: currentData.sectionTitles.experience, content: currentData.experience, isList: true },
    { title: currentData.sectionTitles.research, content: researchContent, isList: false, isNested: true },
    { title: currentData.sectionTitles.specialties, content: currentData.specialties, isList: false, isText: true },
    { title: currentData.sectionTitles.teaching, content: currentData.teaching, isList: true },
    { title: currentData.sectionTitles.honors, content: currentData.honors, isList: true }
  ];

  const qrCodeImageUrl = 'https://lh3.googleusercontent.com/d/1vR9v4A-wGrp4U56AGxq-S-LiTPoDBKaz';

  return (
    <div className="min-h-screen bg-stone-100/50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <main className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 relative">
        {/* QR Code Button */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
          <button
            onClick={() => setIsQrModalOpen(true)}
            className="flex items-center justify-center w-11 h-11 bg-stone-200/80 backdrop-blur-sm rounded-full p-1 shadow-inner text-slate-600 hover:bg-stone-300/60 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label={currentData.sectionTitles.qrCode.title}
          >
            <QrCodeIcon />
          </button>
        </div>

        {/* Language Switcher */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
          <div className="flex items-center bg-stone-200/80 backdrop-blur-sm rounded-full p-1 shadow-inner">
            <button
              onClick={() => setLanguage('zh')}
              className={`px-4 py-1 text-sm font-semibold rounded-full transition-all duration-300 ${language === 'zh' ? 'bg-amber-700 text-white shadow' : 'text-slate-600 hover:bg-stone-300/60'}`}
              aria-pressed={language === 'zh'}
            >
              中
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-4 py-1 text-sm font-semibold rounded-full transition-all duration-300 ${language === 'en' ? 'bg-amber-700 text-white shadow' : 'text-slate-600 hover:bg-stone-300/60'}`}
              aria-pressed={language === 'en'}
            >
              EN
            </button>
          </div>
        </div>
        
        <div className="p-6 sm:p-12">
          {/* Header Section */}
          <header className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-6 sm:space-y-0 sm:space-x-8">
            <img 
              src={currentData.profileImageUrl}
              alt={`Profile of ${currentData.name}`}
              className="w-44 h-44 sm:w-52 sm:h-52 rounded-full object-cover shadow-lg border-4 border-white flex-shrink-0"
            />
            <div className="flex-grow">
              <h1 className="text-[2.75rem] leading-tight sm:text-5xl font-bold text-slate-800">{currentData.name}</h1>
              <div className="mt-3 space-y-1">
                {currentData.titles.map((title, index) => (
                    <p key={index} className={`${index === 0 ? 'text-xl' : 'text-lg'} text-amber-800 font-medium`}>{title}</p>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-stone-200">
                  <h2 className="text-base font-semibold text-slate-500 uppercase tracking-wider mb-2">{currentData.sectionTitles.researchAreas}</h2>
                  <p className="text-xl text-slate-600 leading-relaxed">{currentData.researchAreas.join('、')}</p>
              </div>
            </div>
          </header>

          {/* Contact Section */}
          <section className="mt-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {currentData.contacts.map((contact, index) => (
                <ContactLink 
                  key={contact.label + index} 
                  {...contact} 
                  vCardUri={contact.isVCard ? vCardUri : undefined}
                  vCardName={contact.isVCard ? currentData.name : undefined}
                  className={contact.isVCard ? 'col-span-2' : ''}
                />
              ))}
            </div>
          </section>

          {/* Details Section */}
          <section className="mt-10 space-y-4">
            {detailSections.map((section, index) => (
              <Accordion key={index} title={section.title}>
                {section.isList && Array.isArray(section.content) && (
                  <ul className="space-y-3 list-disc list-inside text-slate-700 text-lg">
                    {section.content.map((item, idx) => typeof item === 'string' && <li key={idx} className="pl-2">{item}</li>)}
                  </ul>
                )}
                  {section.isNested && Array.isArray(section.content) && (
                    <div className="space-y-4">
                      {section.content.map((nested, idx) => (
                        typeof nested === 'object' && nested !== null && 'title' in nested && 'items' in nested && Array.isArray(nested.items) && (
                          <Accordion key={idx} title={nested.title as string} isNested>
                            <ul className="space-y-3 list-disc list-inside text-slate-700 text-lg">
                                {nested.items.map((item, itemIdx) => (
                                    <li key={itemIdx} className="pl-2" dangerouslySetInnerHTML={{ __html: item }}></li>
                                ))}
                            </ul>
                          </Accordion>
                        )
                      ))}
                    </div>
                  )}
                  {section.isText && typeof section.content === 'string' && (
                     <p className="text-slate-700 text-lg">{section.content}</p>
                  )}
              </Accordion>
            ))}
          </section>
        </div>
      </main>

      {/* QR Code Modal */}
      {isQrModalOpen && (
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${isModalVisible ? 'opacity-100' : 'opacity-0'}`}
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="qr-modal-title"
        >
          <div
            className={`bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-center max-w-sm w-full transition-all transform duration-300 ${isModalVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={handleCloseModal}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-stone-200 hover:text-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              <h2 id="qr-modal-title" className="text-2xl font-bold text-slate-800 mb-4">{currentData.sectionTitles.qrCode.title}</h2>
              <p className="text-slate-600 mb-6">{currentData.sectionTitles.qrCode.instruction}</p>

              <div className="p-2 border-4 border-stone-200 rounded-xl inline-block">
                <img
                  src={qrCodeImageUrl}
                  alt="QR Code to this digital business card"
                  className="w-64 h-64 object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
