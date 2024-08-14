import React, { useEffect, useState } from "react";

export const Messages = ({threadId, thread, setThread, isEmailModalOpen, setIsEmailModalOpen}) => {
    const [mails, setMails] = useState([]);
    const [len, setLen] = useState(0);
    const [viewAll, setViewAll] = useState(false);
    const token = import.meta.env.VITE_TOKEN;
    
    const getMails = async () => {
        try {
            const response = await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`,{
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }})
            const data = await response.json();
            console.log(data);
            setMails(data.data);
            setLen(data.data.length);
            setThread(data.data[0]);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getMails();
    }, []);
    
    const dateFormater = (dateStr) => {
        const date = new Date(dateStr);
        const options = { month: 'short', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        return formattedDate;
     }

     const timeFormater = (dateStr) => {
        const date = new Date(dateStr);
        const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
        const formattedTime = date.toLocaleTimeString('en-US', timeOptions);
        return formattedTime
     }

     const handleView = () => {
        setViewAll (prevState => !prevState);
     }

    const handleEmailModalOpen = () => {
        setIsEmailModalOpen(true);
    };
 
    const handleKeyDown = (e) => {
        if(isEmailModalOpen){
            return;
        }
        if (e.key === 'r' || e.key === 'R') {
            handleEmailModalOpen();
        }
    }

    useEffect(() => {document.addEventListener('keydown', handleKeyDown)}, [])

    return (
        <>
            <div className="absolute top-[145px] left-[384px] h-[610px] space-y-[6px] overflow-auto">
                    <div className="relative">
                        <div className="h-[22px] w-[754px] flex items-center justify-center">
                            <div className="h-[1px] w-[754px] bg-[#77777733]"></div>
                        </div>

                    <div className="absolute top-0 left-[47%]  h-[22px] bg-timeLineBackground p-[4px] px-[12px] rounded-[4px] flex items-center justify-center">
                        <p className="font-sans font-custom-semibold text-[10px] leading-[13.62px] text-inboxText/40">Recent</p>
                    </div>

                    <div className="w-[753px] h-[236px] mt-[8px] border border-navBorder rounded-[4px] bg-navbackground">
                        <div className="w-[752px] h-[99px] rounded-t-[4px] rounded-r-[4px] py-[12px] px-[16px] flex flex-col gap-[10px]"> 
                            <div className="flex items-center justify-between">
                                <p className="font-sans font-custom-semibold text-[14px] text-activitySubtext leading-[19.07px]">{thread?.subject}</p>
                                <p className="font-sf font-custom-light text-[14px] leading-[16.71px] text-inboxText/40">{dateFormater(thread?.sentAt)} : {timeFormater(thread?.sentAt)} </p>
                            </div>

                            <p className="font-sf font-custom-light text-[14px] leading-[16.71px] text-inboxText/40">from : {thread?.fromEmail}</p>
                        <p className="font-sf font-custom-light text-[14px] leading-[16.71px] text-inboxText/40">to : {thread?.toEmail}</p>
                        </div>
                        
                        <div className="mt-[20px] ml-[20px] w-[500px] h-[114px] truncate ">
                            <p className="font-sans text-[14px] leading-[19.07px] text-navText tracking-[-0.02em]">
                                Hi {'{First_Name}'},

                                    <br></br>
                                    <br></br>

                                <div className="font-sans text-[14px] leading-[19.07px] text-navText tracking-[-0.02em]" dangerouslySetInnerHTML={{ __html: thread?.body }}></div>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="h-[22px] w-[754px] flex items-center justify-center">
                        <div className="h-[1px] w-[754px] bg-[#77777733]"></div>
                    </div>

                    <div className="absolute top-0 left-[42%]  h-[22px] bg-timeLineBackground p-[4px] px-[12px] rounded-[4px] flex items-center justify-between gap-[4px] cursor-pointer" onClick={handleView}>
                        <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.36 12.8H4.76001V14H14.36V12.8Z" fill="#454F5B"/>
                        <path d="M14.36 2H4.76001V3.2H14.36V2Z" fill="#454F5B"/>
                        <path d="M8.00601 8.954L7.16001 9.8L9.56001 12.2L11.96 9.8L11.114 8.954L10.16 9.902V6.098L11.114 7.046L11.96 6.2L9.56001 3.8L7.16001 6.2L8.00601 7.046L8.96001 6.098V9.902L8.00601 8.954Z" fill="#454F5B"/>
                        </svg>
                        
                        <p className="font-sans font-custom-semibold text-[10px] leading-[13.62px] text-inboxText/40">View all <span>{len}</span> replies</p>
                    </div>

                    {viewAll && mails.map((mail, index) => (
                        <div className="w-[753px] h-[236px] mt-[8px] border border-navBorder rounded-[4px] bg-navbackground">
                        <div className="w-[752px] h-[99px] rounded-t-[4px] rounded-r-[4px] py-[12px] px-[16px] flex flex-col gap-[10px]"> 
                            <div className="flex items-center justify-between">
                                <p className="font-sans font-custom-semibold text-[14px] text-activitySubtext leading-[19.07px]">{mail.subject}</p>
                                <p className="font-sf font-custom-light text-[14px] leading-[16.71px] text-inboxText/40">{dateFormater(mail.sentAt)} : {timeFormater(mail.sentAt)} </p>
                            </div>

                            <p className="font-sf font-custom-light text-[14px] leading-[16.71px] text-inboxText/40">from : {mail.fromEmail}</p>
                        <p className="font-sf font-custom-light text-[14px] leading-[16.71px] text-inboxText/40">to : {mail.toEmail}</p>
                        </div>
                        
                        <div className="mt-[20px] ml-[20px] w-[500px] h-[114px] truncate ">
                            <p className="font-sans text-[14px] leading-[19.07px] text-navText tracking-[-0.02em]">
                                Hi {'{First_Name}'},

                                    <br></br>
                                    <br></br>

                                <div className="font-sans text-[14px] leading-[19.07px] text-navText tracking-[-0.02em]" dangerouslySetInnerHTML={{ __html: mail.body }}></div>
                            </p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

            <div className="absolute top-[696px] left-[403px] inline-flex items-center w-auto h-auto px-5 py-2 gap-[16px] rounded-md bg-gradient-to-r from-[#4B63DD] to-[rgba(5,36,191,0.99)] cursor-pointer"onKeyDown={handleKeyDown} onClick={handleEmailModalOpen}>
                <div className="w-auto h-auto flex items-center justify-between gap-[8px] px-[16px]">
                    <div className="w-[24px] h-[24px] -ml-3 flex items-center justify-center">
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 4.5V0.5L0 7.5L7 14.5V10.4C12 10.4 15.5 12 18 15.5C17 10.5 14 5.5 7 4.5Z" fill="#F7F7F7"/>
                        </svg>
                    </div>
                        
                    <div className="w-[34px] h-[22px]  gap-0 text-left text-white font-open-sans text-[14px] font-semibold leading-[21.7px]">
                        Reply
                    </div>
                </div>
            </div>
        </>
    );
}
