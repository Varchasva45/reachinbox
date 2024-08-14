import React, { useEffect, useState } from "react";


const Sent = ({thread, setThread}) => {
  const [inboxes , setInboxes] = useState([]);
  const token = import.meta.env.VITE_TOKEN;
  const getData = async () => {
    try{
      const response = await fetch("https://hiring.reachinbox.xyz/api/v1/onebox/list",{
        method: "GET",
        headers: {
          "Content-Type": "application",
          "Authorization": `Bearer ${token}`
      }});
      const data = await response.json();
      console.log(data);
      setInboxes(data.data);
      console.log(inboxes);
    }catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);


 const dateFormater = (dateStr) => {
    const date = new Date(dateStr);
    const options = { month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    // console.log(formattedDate);
    return formattedDate;
 }

 const handleClick = (inbox) => {
  setThread(inbox);
 };


  return (
    <div className="w-[304px] h-[693px] top-[67px] left-[57px] gap-0 bg-verNavBackground absolute border-t border-r border-navBorder overflow-hidden">
      <div className="w-[278px] h-[693px] absolute top-0 left-[14px] gap-[8x]  border-navBorder">
        <div className="w-[171px] h-[71px] p-[7px_0px_0px_0px] gap-[45px] flex">
          <div className="w-[171px] h-[64px]">
            <div className="w-[160px] h-[47px] top-[7px] left-[2px] p-[10px_0px_0px_10px] gap-[4px] flex items-center">
              <div className="w-[112px] h-[27px] text-[#4285F4] text-[20px] font-[700] leading-[27.24px] text-left font-sans">
                All Sent(s)
              </div>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.7998 17.3105C11.5719 17.3105 11.3646 17.2194 11.1777 17.0371L5.97559 11.7119C5.89811 11.639 5.83887 11.557 5.79785 11.4658C5.76139 11.3701 5.74316 11.2676 5.74316 11.1582C5.74316 11.0078 5.77734 10.8711 5.8457 10.748C5.91862 10.625 6.01432 10.5293 6.13281 10.4609C6.2513 10.388 6.38574 10.3516 6.53613 10.3516C6.75488 10.3516 6.94629 10.4336 7.11035 10.5977L12.1348 15.7451H11.4717L16.4893 10.5977C16.6533 10.4336 16.8447 10.3516 17.0635 10.3516C17.2139 10.3516 17.3483 10.388 17.4668 10.4609C17.5853 10.5293 17.6787 10.625 17.7471 10.748C17.82 10.8711 17.8564 11.0078 17.8564 11.1582C17.8564 11.3724 17.779 11.557 17.624 11.7119L12.4219 17.0371C12.3353 17.1283 12.2396 17.1966 12.1348 17.2422C12.0299 17.2878 11.9183 17.3105 11.7998 17.3105Z" fill="#4285F4"/>
              </svg>
            </div>
            <div className="w-[171px] h-[23px] top-[48px] p-[2px_10px_2px_10px] gap-[10px]">
              <div className="w-[151px] h-[19px] font-[700] text-[14px] leading-[19.07px]">
                <span className="text-navText">25/25</span> <span className="font-[400] text-[14px] leading-[19.07px] text-gray-500"> Sent selected</span>
              </div>
            </div>
          </div>
          <div className="p-[10px] text-navText " >
            <svg className="bg-navbackground rounded-lg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="navBorder"/>
            <path d="M19.7633 12.2332C18.7966 11.2665 17.4699 10.6665 15.9966 10.6665C13.0499 10.6665 10.6699 13.0532 10.6699 15.9998C10.6699 18.9465 13.0499 21.3332 15.9966 21.3332C18.4833 21.3332 20.5566 19.6332 21.1499 17.3332H19.7633C19.2166 18.8865 17.7366 19.9998 15.9966 19.9998C13.7899 19.9998 11.9966 18.2065 11.9966 15.9998C11.9966 13.7932 13.7899 11.9998 15.9966 11.9998C17.1033 11.9998 18.0899 12.4598 18.8099 13.1865L16.6633 15.3332H21.3299V10.6665L19.7633 12.2332Z" fill="#FEFEFE"/>
            </svg>
          </div>
        </div>
        <div className="w-[275px] h-[76px] p-[12px_0px_0px_0px]">
          <div className="w-[275px] h-[44px] p-[8px_8px_8px_8px] gap-[16px]">
            <div className="w-[259px] h-[28px] p-[4px_6px] gap-[8px] rounded-[4px] border bg-searchBackground border-navBorder flex items-center">
              <div className="w-[13.02px] h-[13.02px] top-[1.48px] left-[1.48px]">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3501 13.3563C13.2568 13.4483 13.1311 13.4999 13.0001 13.5001C12.8673 13.4995 12.7398 13.4481 12.6438 13.3563L9.94385 10.6501C8.80671 11.6052 7.34474 12.0845 5.86285 11.9879C4.38095 11.8913 2.99355 11.2264 1.99 10.1317C0.986453 9.0371 0.444243 7.59729 0.476455 6.1126C0.508667 4.62791 1.11282 3.21298 2.1629 2.1629C3.21298 1.11282 4.62791 0.508667 6.1126 0.476455C7.59729 0.444243 9.0371 0.986453 10.1317 1.99C11.2264 2.99355 11.8913 4.38095 11.9879 5.86285C12.0845 7.34474 11.6052 8.80671 10.6501 9.94385L13.3501 12.6438C13.3973 12.6904 13.4349 12.7458 13.4605 12.807C13.4861 12.8681 13.4993 12.9338 13.4993 13.0001C13.4993 13.0664 13.4861 13.132 13.4605 13.1932C13.4349 13.2544 13.3973 13.3098 13.3501 13.3563ZM6.2501 11.0001C7.18956 11.0001 8.10792 10.7215 8.88906 10.1996C9.67019 9.67764 10.279 8.93579 10.6385 8.06784C10.998 7.19989 11.0921 6.24483 10.9088 5.32342C10.7255 4.40201 10.2732 3.55564 9.60885 2.89134C8.94455 2.22704 8.09819 1.77465 7.17678 1.59137C6.25537 1.40809 5.3003 1.50215 4.43235 1.86167C3.5644 2.22119 2.82255 2.83001 2.30062 3.61114C1.77868 4.39227 1.5001 5.31064 1.5001 6.2501C1.50175 7.50937 2.00273 8.71659 2.89317 9.60703C3.78361 10.4975 4.99083 10.9984 6.2501 11.0001Z" fill="#FFFFFF33"/>
                </svg>
              </div>
              <div className="font-inter text-[16px] font-normal leading-[20px] text-left w-[47px] h-[20px] gap-0 text-navText/20" >
                Search
              </div>
            </div>
            <div className="w-full max-w-[275px] h-[32px] p-[15px_8px_3px_8px] gap-[16px] flex items-center">
              <div className="w-[256px] h-auto min-h-[26px]  flex justify-between items-center">
                <div className="flex items-center gap-[10px]">
                  <div className="w-[34px] h-[26px] p-[3px_8px] gap-[8px] rounded-[17px] bg-navbackground">
                    <div className="w-[18px] h-[20px] flex items-center justify-center text-[#5C7CFA] text-[14px] font-custom-semibold leading-[20px]">
                      {inboxes.length}
                    </div>
                  </div>
                  <div className="w-[91px] h-[20px] text-inboxText text-[14px] font-custom-semibold leading-[20px] text-left">
                    Latest Sents
                  </div>
                </div>
                <div className="w-auto min-w-[79px] h-auto min-h-[20px] gap-[16px] flex">
                  <div className="w-[53px] h-[20px] flex items-center justify-start gap-[25px] text-inboxText font-inter text-[14px] font-custom-semibold leading-[20px]">
                    Newest
                    <div className="w-[10px] h-[6.17px]">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.825 0.912598L5 4.72926L1.175 0.912598L0 2.0876L5 7.0876L10 2.0876L8.825 0.912598Z" fill="#FEFEFE"/>
                      </svg>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
        <div className="w-[275px] h-[693px] overflow-y-auto p-[15px]">
        {inboxes.map((inbox, index) => {
        return(
        <div>
          
          <div className="w-[255px] h-[100px] p-[12px_8px] gap-[8px] border-b border-navBorder cursor-pointer" onClick={()=>handleClick(inbox)}>
          
            <div className="w-[247px] h-[76px] pt-[4px] gap-[8px] rounded-tl-[8px]">
              
              <div className="w-[243px] h-[68px] flex flex-col gap-[8px]">
                
              <div className="w-[243px] h-[40px] gap-[2px]">
              
                <div className="w-[243px] h-[20px] flex justify-evenly items-center">
                
                    <div className="w-[200px] h-[20px] gap-[10px] flex items-center">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="8" height="8" rx="4" fill="#5C7CFA"/>
                    </svg>
                      <span className="text-[14px] font-medium leading-[20px] text-emailTitle">
                        
                        {inbox?.fromEmail}
                      </span>
                    </div>
                  
                  <div className="w-[33px] h-[18px] gap-0 flex items-center">
                    <span className="text-[12px] font-normal leading-[18px] text-[#919EAB]">
                      {dateFormater(inbox.sentAt)}
                    </span>
                  </div>
                </div>
                <div className="w-[154px] h-[18px] gap-0 flex items-center p-[0px_0px_0px_23px] truncate">
                  <span className="text-[12px] font-normal leading-[18px] text-inboxText/50">
                    {inbox?.subject}
                  </span>
                </div>
              </div>
              
              <div className="w-[202.99px] h-[20px] gap-[8px] p-[0px_0px_0px_23px] flex items-center justify-start">
                <div className="w-[83px] h-[20px] px-[8px] py-[3px] gap-[8px] rounded-[17px] bg-tagBackground flex items-center">
                  <div className="w-auto min-w-[67px] h-auto min-h-[14px] gap-[4px] flex items-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" fill="#C4ECDA"/>
                    <rect x="2" y="2" width="8" height="8" rx="4" fill="#46C18D"/>
                    </svg>
                    <div className="w-[51px] h-[14px] gap-0 flex items-center justify-start">
                      <span className="text-[10px] font-custom-semibold leading-[13.62px] text-[#46C18D] font-open-sans">
                        Interested
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-[83px] h-[20px] px-[8px] py-[3px] gap-[8px] rounded-[17px] bg-tagBackground flex items-center">
                  <div className="w-auto min-w-[67px] h-auto min-h-[14px] gap-[4px] flex items-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.15581 12C7.37488 12 7.56185 11.9169 7.71671 11.7507C7.87158 11.5883 8.00189 11.3711 8.10765 11.0991L11.8414 1.32578C11.8905 1.19736 11.9282 1.07838 11.9547 0.968839C11.9811 0.859301 11.9943 0.75543 11.9943 0.657224C11.9943 0.457035 11.9358 0.298395 11.8187 0.181303C11.7016 0.0604344 11.543 0 11.3428 0C11.2483 0 11.1445 0.0151086 11.0312 0.0453258C10.9178 0.0717658 10.797 0.107649 10.6686 0.152975L0.86119 3.90935C0.615675 4.00378 0.409821 4.12842 0.243626 4.28329C0.0812087 4.43815 0 4.62512 0 4.84419C0 5.11237 0.0906515 5.31067 0.271955 5.43909C0.453258 5.56374 0.681775 5.66761 0.957507 5.75071L3.89802 6.65156C4.09443 6.71199 4.25873 6.73654 4.39093 6.72521C4.52313 6.7101 4.65911 6.63834 4.79887 6.50991L11.1048 0.662889C11.1426 0.628895 11.1822 0.611898 11.2238 0.611898C11.2691 0.611898 11.3088 0.627007 11.3428 0.657224C11.373 0.687441 11.3881 0.725212 11.3881 0.770538C11.3881 0.812087 11.3692 0.851747 11.3314 0.889518L5.50708 7.21246C5.38621 7.34089 5.31634 7.47309 5.29745 7.60907C5.28234 7.74504 5.30312 7.91313 5.35977 8.11331L6.23229 10.9915C6.31917 11.2823 6.42682 11.5222 6.55524 11.711C6.68366 11.9037 6.88385 12 7.15581 12Z" fill="#888C95"/>
                  </svg>
                  <div className="w-[51px] h-[14px] gap-0 flex items-center justify-start">
                    <span className="text-[10px] font-custom-semibold leading-[13.62px] text-tagText font-open-sans">
                      Campaign
                    </span>
                  </div>
                  </div>
                </div>
              </div>
              </div>
              
            </div>
          
          </div>
          
        </div>
        )
        })}
        </div>
       
      </div>
    </div>
    
  );
};

export default Sent;