
import React from 'react';

const createIcon = (d: string): React.ReactElement => (
  React.createElement(
    'svg',
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-8 w-8",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      strokeWidth: 1.5
    },
    React.createElement('path', {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: d
    })
  )
);

const PhoneIcon = createIcon("M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z");
const MobileIcon = createIcon("M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z");
const EmailIcon = createIcon("M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z");
const OrcidIcon = createIcon("M12 6.253v11.494m-9-11.494v11.494H3v-11.494A2.25 2.25 0 015.25 4h13.5A2.25 2.25 0 0121 6.253v11.494h-2.25V6.253h-2.25v11.494H9.75V6.253H7.5v11.494H5.25V6.253H3z");
const WebIcon = createIcon("M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1");
const LineIcon = createIcon("M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z");
const DownloadIcon = createIcon("M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4");


export const profileData = {
    name: {
        zh: '陳靜君',
        en: 'Ching-Chun Chen'
    },
    titles: {
        zh: [
            '國防大學新聞學系副教授',
            '國立陽明交通大學應用藝術所傳播藝術與科技組 博士候選人'
        ],
        en: [
            'Associate Professor, Department of Journalism, National Defense University',
            'Ph.D. Candidate, Department of Communication and Technology, Institute of Applied Arts, National Yang Ming Chiao Tung University'
        ]
    },
    researchAreas: {
        zh: ['新聞效果研究', '政治傳播', '軍事傳播', '社群媒體使用與影響'],
        en: ['News Effects Research', 'Political Communication', 'Military Communication', 'Social Media Use and Influence']
    },
    profileImageUrl: 'https://lh3.googleusercontent.com/d/1QfnOgG3AZK4um6XRnccWgd16v-TWLpdE',
    contacts: {
        zh: [
            { icon: DownloadIcon, label: '儲存聯絡人', value: 'vCard', isVCard: true },
            { icon: PhoneIcon, label: 'Phone', value: '02-2892-1461', href: 'tel:02-2892-1461' },
            { icon: MobileIcon, label: '手機', value: '0984-204-003', href: 'tel:0984-204-003' },
            { icon: EmailIcon, label: 'Email', value: 'ilovejinbo@gmail.com', href: 'mailto:ilovejinbo@gmail.com' },
            { icon: OrcidIcon, label: 'ORCID', value: 'ORCID Profile', href: 'https://orcid.org/0000-0003-1991-2440' },
            { icon: WebIcon, label: '國防大學', value: 'Official Website', href: 'https://www.fhk.ndu.edu.tw/nss/s/jour/T3' },
            { icon: LineIcon, label: 'Line', value: 'Add on Line', href: 'https://line.me/ti/p/p7u73BJ5fI' },
        ],
        en: [
            { icon: DownloadIcon, label: 'Save Contact', value: 'vCard', isVCard: true },
            { icon: PhoneIcon, label: 'Phone', value: '02-2892-1461', href: 'tel:02-2892-1461' },
            { icon: MobileIcon, label: 'Mobile', value: '0984-204-003', href: 'tel:0984-204-003' },
            { icon: EmailIcon, label: 'Email', value: 'ilovejinbo@gmail.com', href: 'mailto:ilovejinbo@gmail.com' },
            { icon: OrcidIcon, label: 'ORCID', value: 'ORCID Profile', href: 'https://orcid.org/0000-0003-1991-2440' },
            { icon: WebIcon, label: 'NDU Website', value: 'Official Website', href: 'https://www.fhk.ndu.edu.tw/nss/s/jour/T3' },
            { icon: LineIcon, label: 'Line', value: 'Add on Line', href: 'https://line.me/ti/p/p7u73BJ5fI' },
        ]
    },
    sectionTitles: {
        zh: {
            education: '學歷 EDUCATION',
            experience: '經歷 ACADEMIC POSITION',
            research: '研究 RESEARCH',
            specialties: '專長領域 SPECIALIZED AREA',
            teaching: '教學 TEACHING',
            honors: '榮譽獎項 HONOR',
            researchAreas: '研究領域',
            qrCode: {
                title: '掃描QR Code',
                instruction: '掃描此代碼以在其他設備上打開此數位名片。'
            }
        },
        en: {
            education: 'EDUCATION',
            experience: 'ACADEMIC POSITION',
            research: 'RESEARCH',
            specialties: 'SPECIALIZED AREA',
            teaching: 'TEACHING',
            honors: 'HONORS & AWARDS',
            researchAreas: 'Research Areas',
            qrCode: {
                title: 'Scan QR Code',
                instruction: 'Scan this code to open this digital business card on another device.'
            }
        }
    },
    education: {
        zh: [
            '2016-迄今 國立陽明交通大學應用藝術系傳播藝術與科技組博士班（博士候選人）',
            '2009-2011 國防大學新聞研究所碩士',
            '2003-2007 國防大學新聞學系學士',
        ],
        en: [
            '2016-Present Ph.D. Candidate, Department of Communication and Technology, Institute of Applied Arts, National Yang Ming Chiao Tung University',
            '2009-2011 M.A., Graduate Institute of Journalism, National Defense University',
            '2003-2007 B.A., Department of Journalism, National Defense University',
        ]
    },
    experience: {
        zh: [
            '2025.02.01-迄今 國防大學新聞學系副教授',
            '2022.02.01-2025.02.01 國防大學新聞學系助理教授',
            '2016.02.01-2022.02.01 國防大學新聞學系講師',
            '2014-2016 國防部政治作戰教育訓練中心',
        ],
        en: [
            '2025.02.01-Present Associate Professor, Department of Journalism, National Defense University',
            '2022.02.01-2025.02.01 Assistant Professor, Department of Journalism, National Defense University',
            '2016.02.01-2022.02.01 Lecturer, Department of Journalism, National Defense University',
            '2014-2016 Political Warfare Education and Training Center, Ministry of National Defense',
        ]
    },
    research: {
        zh: [
            {
                title: '期刊 JOURNAL',
                items: [
                    { zh: '陳靜君、鄭中堂（2025）。〈紅色社群媒體來襲！中國數位威權主義的假訊息操弄如何影響臺灣Z世代〉，《臺灣傳播學刊》，47：111-149。（TSSCI）' },
                    { en: 'Chen, C.-C., & Tao, C.-C. (2025). Identity-Driven News Authentication Strategy in Echo Chambers. <i>Journalism Practice</i>. https://doi.org/10.1080/17512786.2025.2464209 (SSCI期刊 Q1)' },
                    { zh: '孫復威、陳靜君（2023）。〈國防資訊來源對國防支持度與再傳播行為之影響〉，《東吳政治學報》，41(2)：189-235。https://www.airitilibrary.com/Article/Detail?DocID=10198636-N202403140003-00004（TSSCI）' },
                    { zh: '陳靜君、沈宏杰（2023）。〈社群編輯如何架構第四次臺海危機？從情緒─認知框架觀點出發〉，《傳播研究與實踐》，13(2)：73-110。（TSSCI）' },
                    { zh: '陳靜君（2023）。〈從調節焦點理論檢視人們面對即時通訊軟體政治不一致的回應策略〉，《資訊社會研究》，44：27-70。DOI: 10.29843/JCCIS.202301_(44).0002' },
                    { zh: '陳靜君（2022）。〈探討COVID-19期間影響軍校緊急遠距教學的學習滿意度與感知學習成效之因素〉，《復興崗學報》，121：27-60。' },
                    { zh: '陳靜君、陶振超（2022）。〈活在資訊孤島中？以社會網絡分析探討政黨驅動的閱聽人區隔化現象〉，《資訊社會研究》，43：25-66。DOI: 10.29843/JCCIS.202207_(43).0003' },
                    { zh: '陳靜君、陶振超（2018）。〈偏見同化效果：網路新聞不文明留言對態度極化的影響〉，《中華傳播學刊》，33：137-179。（TSSCI）http://cjc.nccu.edu.tw/word/31586222018.pdf' },
                    { zh: '傅文成、陳靜君（2017）。〈募兵政策之媒體議題的媒體信任感與民眾風險感知與媒介使用關聯性研究〉，《復興崗學報》，110：25-55。' },
                ]
            },
            {
                title: '個人專書及文章 BOOKS & BOOK CHAPTERS',
                items: [
                    { zh: '鄭珈儀、陳靜君（2024）。〈網紅評估模型探討國軍網紅行銷之成效〉，孫懋嘉（編）《軍事新聞論壇第十二集》，頁31-73。台北市：國防大學政治作戰學院。ISBN：978-626-7423-40-0' },
                    { zh: '汪奕廷、陳靜君（2024）。〈生成式AI短影音形式的澄清訊息對不實訊息的澄清效果研究——以國防議題為例〉，茆家麒、董慧明（編）《國防安全新機遇：政治作戰與人工智慧的應用與展望》，頁96-124。台北市：國防大學政治作戰學院。ISBN：978-626-7423-41-7' },
                    { zh: '陳靜君、蔡明朗（2019）。〈真假難辨？運用語意網絡探討真、假謠言的認知圖像〉，劉大華（編）《新媒體時代下的軍事傳播與輿論戰》，頁45-58。台北市：國防大學。ISBN：9789865446178' },
                    { zh: '陳靜君、蔡明朗（2018）。〈社會網絡分析與社群媒體〉，傅文成（編）《軍事傳播向運算轉》，頁37-52。台北市：國防大學。ISBN：9789860574425' },
                    { zh: '陳靜君、江佩珊（2017）。〈政策行銷與社群媒體：以國防部發言人Facebook粉絲專頁研究為例〉，傅文成（編）《社群媒體與軍事傳播》，頁71-86。台北市：國防大學。ISBN：978-986-05-3822-9' },
                ]
            },
            {
                title: '研討會論文 CONFERENCE PAPERS',
                items: [
                    { en: `Chen, C.-C., & Cheng C.-T. (2025, June 15). <i>Red Social Media on the Rise! How China’s Digital Authoritarianism’s Manipulation of Disinformation Affects Taiwan’s Generation Z</i>. Paper presented at the 75th Annual Conference of the International Communication Association, Denver, USA.`},
                    { zh: '陳靜君、陶振超（2024.11）。〈結合AI自動化內容分析數位足跡與歷時性調查：2024臺灣總統大選民眾的中國新聞暴露與影響〉，「2024 年台灣資訊社會研究學會年會」論文。台灣，台北。' },
                    { zh: '汪奕廷、陳靜君（2024.11）。〈生成式短影音形式的澄清訊息對不實訊息的澄清效果研究—以國防議題為例〉，「第27屆國軍軍事社會科學學術研討會」論文。台灣，台北。' },
                    { zh: '陳靜君（2023.10）。〈戰爭新聞框架背後的外交戰略─比較俄烏戰爭期間臺灣和中國在臉書上的公共外交〉，「第26屆國軍軍事社會科學學術研討會」論文。台灣，台北。' },
                    { zh: '陳靜君、沈宏杰（2022.11）。〈從情緒─認知框架觀點檢視臉書新聞小編如何形塑第四次台海危機〉，「第十六屆軍事新聞暨計算傳播研討會」論文。台灣，台北。' },
                    { zh: '陳靜君（2022.11）。〈即時通訊軟體的好友與我意見不合？探討討論對象對意見衝突處置策略的影響〉，「2022 年台灣資訊社會研究學會年會」論文。台灣，台北。' },
                    { zh: '孫復威、陳靜君（2022.10）。〈國防資訊來源對國防支持度與再傳播行為之影響〉，「與「民意」對話:國防民意變與常研討會」論文。台灣，台北。' },
                    { en: `Chen, C.-C., & Tao, C.-C. (2022, Aug). <i>The Mix of Media Use and Personal Communication Matters: The Political Implications of Masspersonal Political Information Seeking Repertoires</i>. Paper presented at the 2022 Annual Conference of the Association for Education in Journalism and Mass Communication, virtual conference.`},
                    { zh: '陳靜君、陶振超（2022.06）。〈誰在出征？檢視回聲室效應對網路論戰的影響〉，「2022中華傳播學會年會」論文。台灣，線上會議。' },
                    { en: `Chen, C.-C., & Tao, C.-C. (2022, May). <i>Partisan Corrective strategies Model: Examining the Mediating Role of Hostile Media Perception and Like-Minded Political Discussion</i>. Paper presented at the 72th Annual Conference of the International Communication Association, virtual conference.`},
                    { en: `Chen, C.-C., & Tao, C.-C. (2022, May). <i>Identity-Driven News Authentication Strategy in Echo Chambers</i>. Paper presented at the 72th Annual Conference of the International Communication Association, virtual conference.`},
                    { zh: '陳靜君（2021.11）。〈即時通訊軟體的同溫層現象〉，「2021台灣資訊社會研究學會年會暨論文研討會」專題論壇。線上會議。' },
                    { en: `Chen, C.-C., & Tao, C.-C. (2021, May). <i>Social Media and Online News Media in Motivating Political Discussion: Influence on Homogenous and Heterogeneous Strong-Ties</i>. Paper presented at the 71th Annual Conference of the International Communication Association, virtual conference.`},
                    { en: `Chen, C.-C., & Tao, C.-C. (2020, Aug). <i>Partisan News Repertoire and Echo Chamber in High-Choice Media Environment</i>. Paper presented at the 2020 Annual Conference of the Association for Education in Journalism and Mass Communication, virtual conference.`},
                    { en: `Chen, C.-C., & Tao, C.-C. (2020, May). <i>Information foraging, not feeding: Message utility overrides curated cues for incidental consumption</i>. Paper presented at the 70th Annual Conference of the International Communication Association, virtual conference.`},
                    { en: `Chen, C.-C. (2019, December). <i>How political news pop up in our newsfeed? Examining echo-chamber effects on information seeking</i>. Paper presented at the 10th Honors Symposium for Asian Ph.D. Students in Communication Research, Seoul, Korea.`},
                    { en: `Chen, C.-C., Tao, C.-C., Liu, M.T., & LaRose, R. (2018, May). <i>Automatic Processes in Selective News Exposure Among Habitual Facebook Users in Taiwan</i>. Paper presented at 68th Annual Conference of the International Communication Association, Prague, Czech.`},
                    { en: `Chen, C. C. (2017.10). <i>How Does Mobile Social Media Use Influence Political Engagement Concerning National Defense Policy? Examining the Mediating Role of Social Capital</i>. Paper presented at the 59th annual conference of American Association for Chinese Studies, University of South Carolina, Columbia.`},
                    { zh: '陳靜君、陶振超（2017.06）。〈偏見同化效果：網路新聞不文明留言對態度極化的影響〉，「中華傳播學會 2017 年年會」論文。台灣，台北。' },
                    { zh: '傅文成、陳靜君（2016.09）。〈募兵政策之媒體議題的媒體信任感與民眾風險感知與媒介使用關聯性研究〉，「第十屆軍事新聞學術研討會」論文。台灣，台北。' },
                ]
            },
            {
                title: '網路文章 ONLINE ARTICLE',
                items: [
                    { zh: '陳靜君（2025年 6月）。〈不只是傳遞新聞：社群小編如何影響你對臺海危機的印象與情緒？〉，《媒體素養教育資源網》。取自https://mlearn.moe.gov.tw/TopicArticle/PartData?key=11593' },
                ]
            },
            {
                title: '展集 COLLECTION',
                items: [
                    { zh: '陳靜君（2022 年 11 月）。〈傳播調查資料庫展集第十六期：社群媒體使用大不同！從不同取徑檢視社群媒體的長期影響〉，《傳播調查資料庫》。取自https://crctaiwan.dcat.nycu.edu.tw/ResultsShow_detail2.asp?RS_ID=154' },
                    { zh: '陳靜君（2022 年 1 月）。〈傳播調查資料庫展集第十五期：網路與社群媒體使用如何促進政治參與？解析背後的心理機制與歷史因素〉，《傳播調查資料庫》。取自https://crctaiwan.dcat.nycu.edu.tw/ResultsShow_detail2.asp?RS_ID=143' },
                ]
            },
            {
                title: '研究計畫 RESEARCH PLAN',
                items: [
                    { zh: '國防部計畫：以認知作戰觀點檢視假訊息認知對信任態度與假新聞處置策略之影響（2023.10.25-2024.07.31）補助金額：218,000' },
                    { zh: '國防部計畫：國防部青年日報社112年報紙讀者滿意度調查（2023.03.01-2023.11.30）補助金額：100,000' },
                    { zh: '台灣網路資訊中心計畫：2021台灣網路報告（2021.08.01-2022.08.01）' },
                    { zh: '國防大學計畫：以線上學習系統成功模型檢視影響軍校緊急遠距教學成功的關鍵因素（2021.07.01-2021.11.30）' },
                    { zh: '交通大學計畫：社群媒體環境下新聞選擇性暴露的自動處理機制 （2017.05-2019.12）。' },
                    { zh: '國防大學計畫：感動行銷當道─廣告內容與社會影響對國軍線上影音廣告態度與分享意圖之效果研究 （2016.02-2016.10）。' },
                ]
            }
        ],
        en: [
            {
                title: 'JOURNAL',
                items: [
                    { en: "Chen, C.-C., & Cheng C.-T. (2025). Red Social Media on the Rise! How China’s Digital Authoritarianism’s Manipulation of Disinformation Affects Taiwan’s Generation Z. *Taiwan Journal of Communication*, 47, 111-149. (TSSCI)" },
                    { en: 'Chen, C.-C., & Tao, C.-C. (2025). Identity-Driven News Authentication Strategy in Echo Chambers. <i>Journalism Practice</i>. https://doi.org/10.1080/17512786.2025.2464209 (SSCI Journal Q1)' },
                    { en: "Sun, F.-W., & Chen, C.-C. (2023). The Influence of National Defense Information Sources on Support for National Defense and Retransmission Behavior. *Soochow Journal of Political Science*, 41(2), 189-235. (TSSCI)" },
                    { en: "Chen, C.-C., & Shen, H.-C. (2023). How Do Social Media Editors Frame the Fourth Taiwan Strait Crisis? An Emotion-Cognition Framework Perspective. *Communication Research and Practice*, 13(2), 73-110. (TSSCI)" },
                    { en: "Chen, C.-C. (2023). Examining People's Response Strategies to Political Disagreement on Instant Messaging Apps from a Regulatory Focus Theory Perspective. *Journal of Cyber Culture and Information Society*, 44, 27-70." },
                    { en: "Chen, C.-C. (2022). Exploring Factors Affecting Learning Satisfaction and Perceived Learning Outcomes of Emergency Remote Teaching in Military Academies during COVID-19. *Fuh Hsing Kang Academic Journal*, 121, 27-60." },
                    { en: "Chen, C.-C., & Tao, C.-C. (2022). Living in an Information Silo? A Social Network Analysis of Partisan-Driven Audience Segmentation. *Journal of Cyber Culture and Information Society*, 43, 25-66." },
                    { en: "Chen, C.-C., & Tao, C.-C. (2018). The Biased Assimilation Effect: The Impact of Uncivil Online News Comments on Attitude Polarization. *Chinese Journal of Communication*, 33, 137-179. (TSSCI)" },
                    { en: "Fu, W.-C., & Chen, C.-C. (2017). A Study on the Relationship between Media Trust, Public Risk Perception, and Media Use Regarding Media Issues of All-Volunteer Force Policy. *Fuh Hsing Kang Academic Journal*, 110, 25-55." },
                ]
            },
            {
                title: 'BOOKS & BOOK CHAPTERS',
                items: [
                    { en: "Cheng, C.-Y., & Chen, C.-C. (2024). A Study on the Effectiveness of the R.O.C. Armed Forces' Influencer Marketing Using an Influencer Evaluation Model. In S. Mao-Chia (Ed.), *Military Journalism Forum Vol. 12* (pp. 31-73). Taipei: Fu Hsing Kang College, National Defense University. ISBN: 978-626-7423-40-0" },
                    { en: "Wang, I.-T., & Chen, C.-C. (2024). A Study on the Clarification Effect of Generative AI Short Video Clarification Messages on Disinformation—Taking National Defense Issues as an Example. In M. Chia-Chi & T. Hui-Ming (Eds.), *New Opportunities for National Defense Security: Applications and Prospects of Political Warfare and Artificial Intelligence* (pp. 96-124). Taipei: Fu Hsing Kang College, National Defense University. ISBN: 978-626-7423-41-7" },
                    { en: "Chen, C.-C., & Tsai, M.-L. (2019). True or False? Using Semantic Network to Explore the Cognitive Images of True and False Rumors. In L. Ta-Hua (Ed.), *Military Communication and Public Opinion Warfare in the New Media Era* (pp. 45-58). Taipei: National Defense University. ISBN: 9789865446178" },
                    { en: "Chen, C.-C., & Tsai, M.-L. (2018). Social Network Analysis and Social Media. In F. Wen-Cheng (Ed.), *Military Communication Towards Computation* (pp. 37-52). Taipei: National Defense University. ISBN: 9789860574425" },
                    { en: "Chen, C.-C., & Chiang, P.-S. (2017). Policy Marketing and Social Media: A Case Study of the Ministry of National Defense Spokesperson's Facebook Fan Page. In F. Wen-Cheng (Ed.), *Social Media and Military Communication* (pp. 71-86). Taipei: National Defense University. ISBN: 978-986-05-3822-9" },
                ]
            },
            {
                title: 'CONFERENCE PAPERS',
                items: [
                    { en: `Chen, C.-C., & Cheng C.-T. (2025, June 15). <i>Red Social Media on the Rise! How China’s Digital Authoritarianism’s Manipulation of Disinformation Affects Taiwan’s Generation Z</i>. Paper presented at the 75th Annual Conference of the International Communication Association, Denver, USA.` },
                    { en: "Chen, C.-C., & Tao, C.-C. (2024.11). Combining AI-automated content analysis of digital footprints with longitudinal surveys: The exposure to and impact of Chinese news on the Taiwanese public in the 2024 presidential election. Paper presented at the 2024 Annual Conference of the Taiwan Association for Information Society Research, Taipei, Taiwan." },
                    { en: "Wang, I.-T., & Chen, C.-C. (2024.11). A study on the clarification effect of generative short video messages on misinformation—A case study of national defense issues. Paper presented at the 27th R.O.C. Armed Forces Military Social Science Academic Conference, Taipei, Taiwan." },
                    { en: "Chen, C.-C. (2023.10). Diplomatic strategies behind war news frames—Comparing public diplomacy of Taiwan and China on Facebook during the Russo-Ukrainian War. Paper presented at the 26th R.O.C. Armed Forces Military Social Science Academic Conference, Taipei, Taiwan." },
                    { en: "Chen, C.-C., & Shen, H.-C. (2022.11). Viewing how Facebook news editors shape the Fourth Taiwan Strait Crisis from an emotion-cognition framework perspective. Paper presented at the 16th Military Journalism and Computational Communication Conference, Taipei, Taiwan." },
                    { en: "Chen, C.-C. (2022.11). My friends on instant messaging apps disagree with me? Exploring the influence of discussion partners on opinion conflict management strategies. Paper presented at the 2022 Annual Conference of the Taiwan Association for Information Society Research, Taipei, Taiwan." },
                    { en: "Sun, F.-W., & Chen, C.-C. (2022.10). The impact of defense information sources on defense support and redistribution behavior. Paper presented at the 'Dialogue with Public Opinion: Change and Constancy in National Defense Public Opinion' Conference, Taipei, Taiwan." },
                    { en: `Chen, C.-C., & Tao, C.-C. (2022, Aug). <i>The Mix of Media Use and Personal Communication Matters: The Political Implications of Masspersonal Political Information Seeking Repertoires</i>. Paper presented at the 2022 Annual Conference of the Association for Education in Journalism and Mass Communication, virtual conference.` },
                    { en: "Chen, C.-C., & Tao, C.-C. (2022.06). Who is on the attack? Examining the impact of the echo chamber effect on online debates. Paper presented at the 2022 Annual Conference of the Chinese Communication Society, online conference." },
                    { en: `Chen, C.-C., & Tao, C.-C. (2022, May). <i>Partisan Corrective strategies Model: Examining the Mediating Role of Hostile Media Perception and Like-Minded Political Discussion</i>. Paper presented at the 72th Annual Conference of the International Communication Association, virtual conference.` },
                    { en: `Chen, C.-C., & Tao, C.-C. (2022, May). <i>Identity-Driven News Authentication Strategy in Echo Chambers</i>. Paper presented at the 72th Annual Conference of the International Communication Association, virtual conference.` },
                    { en: "Chen, C.-C. (2021.11). The filter bubble phenomenon in instant messaging software. Panel at the 2021 Taiwan Association for Information Society Research Annual Conference and Symposium, online conference." },
                    { en: `Chen, C.-C., & Tao, C.-C. (2021, May). <i>Social Media and Online News Media in Motivating Political Discussion: Influence on Homogenous and Heterogeneous Strong-Ties</i>. Paper presented at the 71th Annual Conference of the International Communication Association, virtual conference.` },
                    { en: `Chen, C.-C., & Tao, C.-C. (2020, Aug). <i>Partisan News Repertoire and Echo Chamber in High-Choice Media Environment</i>. Paper presented at the 2020 Annual Conference of the Association for Education in Journalism and Mass Communication, virtual conference.` },
                    { en: `Chen, C.-C., & Tao, C.-C. (2020, May). <i>Information foraging, not feeding: Message utility overrides curated cues for incidental consumption</i>. Paper presented at the 70th Annual Conference of the International Communication Association, virtual conference.` },
                    { en: `Chen, C.-C. (2019, December). <i>How political news pop up in our newsfeed? Examining echo-chamber effects on information seeking</i>. Paper presented at the 10th Honors Symposium for Asian Ph.D. Students in Communication Research, Seoul, Korea.` },
                    { en: `Chen, C.-C., Tao, C.-C., Liu, M.T., & LaRose, R. (2018, May). <i>Automatic Processes in Selective News Exposure Among Habitual Facebook Users in Taiwan</i>. Paper presented at 68th Annual Conference of the International Communication Association, Prague, Czech.` },
                    { en: `Chen, C. C. (2017.10). <i>How Does Mobile Social Media Use Influence Political Engagement Concerning National Defense Policy? Examining the Mediating Role of Social Capital</i>. Paper presented at the 59th annual conference of American Association for Chinese Studies, University of South Carolina, Columbia.` },
                    { en: "Chen, C.-C., & Tao, C.-C. (2017.06). The biased assimilation effect: The influence of uncivil comments in online news on attitude polarization. Paper presented at the 2017 Annual Conference of the Chinese Communication Society, Taipei, Taiwan." },
                    { en: "Fu, W.-C., & Chen, C.-C. (2016.09). A study on media trust, public risk perception, and media use related to the media issues of the all-volunteer military policy. Paper presented at the 10th Military Journalism Academic Conference, Taipei, Taiwan." },
                ]
            },
            {
                title: 'ONLINE ARTICLE',
                items: [
                    { en: "Chen, C.-C. (June 2025). More Than Just Delivering News: How Social Media Editors Influence Your Impressions and Emotions about the Taiwan Strait Crisis? *Media Literacy Education Resource Network*. Retrieved from https://mlearn.moe.gov.tw/TopicArticle/PartData?key=11593" },
                ]
            },
            {
                title: 'COLLECTION',
                items: [
                    { en: "Chen, C.-C. (November 2022). Communication Research Database Collection Issue 16: Social Media Use is Vastly Different! Examining the Long-Term Effects of Social Media from Different Approaches. *Communication Research Database*. Retrieved from https://crctaiwan.dcat.nycu.edu.tw/ResultsShow_detail2.asp?RS_ID=154" },
                    { en: "Chen, C.-C. (January 2022). Communication Research Database Collection Issue 15: How Do Internet and Social Media Use Promote Political Participation? Analyzing the Underlying Psychological Mechanisms and Historical Factors. *Communication Research Database*. Retrieved from https://crctaiwan.dcat.nycu.edu.tw/ResultsShow_detail2.asp?RS_ID=143" },
                ]
            },
            {
                title: 'RESEARCH PLAN',
                items: [
                    { en: "Ministry of National Defense Project: Examining the Impact of Disinformation Cognition on Trust Attitudes and Fake News Disposal Strategies from a Cognitive Warfare Perspective (2023.10.25-2024.07.31) Grant Amount: 218,000" },
                    { en: "Ministry of National Defense Project: 2023 Newspaper Reader Satisfaction Survey for Youth Daily News, Ministry of National Defense (2023.03.01-2023.11.30) Grant Amount: 100,000" },
                    { en: "Taiwan Network Information Center Project: 2021 Taiwan Internet Report (2021.08.01-2022.08.01)" },
                    { en: "National Defense University Project: Examining Key Factors for Successful Emergency Remote Teaching in Military Academies Using an Online Learning System Success Model (2021.07.01-2021.11.30)" },
                    { en: "National Chiao Tung University Project: Automatic Processing Mechanisms of Selective News Exposure in a Social Media Environment (2017.05-2019.12)." },
                    { en: "National Defense University Project: The Rise of Emotional Marketing—A Study on the Effects of Advertising Content and Social Influence on Attitudes and Sharing Intentions for R.O.C. Armed Forces Online Video Advertisements (2016.02-2016.10)." },
                ]
            }
        ],
    },
    specialties: {
        zh: '軍事新聞、新聞學、社會網絡、政治傳播、社群媒體使用與影響',
        en: 'Military Journalism, Journalism, Social Networks, Political Communication, Social Media Use and Influence'
    },
    teaching: {
        zh: [
            '新聞學、媒體心理學、媒體實務課程（廣播電台）、新聞傳播史、媒體素養、文化創意與傳播、傳播倫理與法規、軍隊公共事務、公共關係與危機處理、資料科學與數位敘事',
            '2021 獲得國際高等教育教學認證HEA Fellowship（2020-2021參加培訓）',
            '2023 獲得TKT劍橋英語教學知識認證Module 1、Module 2、Module 3（2023參加培訓）',
            '2025 獲得亞威AI智能商務應用學院修業證書',
            '2025 獲得ISO17024 AI 導師 提示工程師證書（TW0005196）',
            '2025 獲得Gemini 認證教師證書（Gemini Certification for Educators）',
        ],
        en: [
            'Journalism, Media Psychology, Media Practice (Radio), History of Mass Communication, Media Literacy, Cultural and Creative Industries, Communication Ethics and Law, Military Public Affairs, Public Relations and Crisis Management, Data Science and Digital Storytelling',
            '2021 HEA Fellowship (International Higher Education Teaching Certification) (Training 2020-2021)',
            '2023 TKT (Teaching Knowledge Test) Cambridge English Teaching Certification Modules 1, 2, 3 (Training 2023)',
            '2025 Certificate of Completion, YAYAV AI Intelligent Business Application Institute',
            '2025 ISO17024 AI Mentor Prompt Engineer Certificate (TW0005196)',
            '2025 Gemini Certification for Educators',
        ]
    },
    honors: {
        zh: [
            '2024年獲得113年國防大學政治作戰學院院部優良教師',
            '2024年獲得113年國防大學政治作戰學院院部優良導師',
            '指導學生參加 2024第八屆全球華文永續報導獎 獲得音頻類入圍',
            '指導學生參加 2024國立中正大學第21屆新傳獎 獲得最佳廣播新聞報導獎',
            '2023年獲得TKT劍橋英語教師證書Module 1、Module 2、Module 3',
            '指導學生參加 2023校園公關提案競賽 獲得佳作',
            '指導學生參加 2023國立中正大學第20屆新傳獎 獲得最佳廣播專題新聞獎',
            '指導學生參加 2022國立中正大學第19屆新傳獎 獲得最佳廣播新聞報導獎',
            '指導學生參加 2021國立教育廣播電台第18屆金聲獎 獲得音樂節目獎首獎',
            '指導學生參加 2021校園公關提案競賽 獲得佳作',
            '2021年5月獲得國際高等教育專業認證 （HEA Fellowship）',
            '指導學生參加 2021國立中正大學第18屆新傳獎 獲得最佳廣播專題新聞獎入圍',
            '指導學生參加 2020國立教育廣播電台第17屆金聲獎 獲得媒體素養特別獎入圍',
            '指導學生參加 2020國立中正大學第17屆新傳獎 獲得最佳廣播專題新聞獎入圍',
            '指導學生參加 2019國立教育廣播電台第16屆金聲獎 獲得社會關懷節目獎入圍',
        ],
        en: [
            '2024 Outstanding Teacher Award, Fu Hsing Kang College, National Defense University',
            '2024 Outstanding Mentor Award, Fu Hsing Kang College, National Defense University',
            'Mentored students to become finalists in the Audio category at the 8th Global Chinese Sustainable Reporting Awards 2024',
            'Mentored students to win the Best Radio News Reporting Award at the 21st Hsin Chuan Awards, National Chung Cheng University 2024',
            '2023 TKT Cambridge English Teacher Certificates for Modules 1, 2, and 3',
            'Mentored students to win Honorable Mention at the 2023 Campus Public Relations Proposal Competition',
            'Mentored students to win the Best Radio Feature News Award at the 20th Hsin Chuan Awards, National Chung Cheng University 2023',
            'Mentored students to win the Best Radio News Reporting Award at the 19th Hsin Chuan Awards, National Chung Cheng University 2022',
            'Mentored students to win the First Prize for Music Program at the 18th Golden Bell Awards, National Education Radio 2021',
            'Mentored students to win Honorable Mention at the 2021 Campus Public Relations Proposal Competition',
            'May 2021, Received HEA Fellowship (International Higher Education Professional Certification)',
            'Mentored students to become finalists for the Best Radio Feature News Award at the 18th Hsin Chuan Awards, National Chung Cheng University 2021',
            'Mentored students to become finalists for the Media Literacy Special Award at the 17th Golden Bell Awards, National Education Radio 2020',
            'Mentored students to become finalists for the Best Radio Feature News Award at the 17th Hsin Chuan Awards, National Chung Cheng University 2020',
            'Mentored students to become finalists for the Social Concern Program Award at the 16th Golden Bell Awards, National Education Radio 2019',
        ]
    },
};
