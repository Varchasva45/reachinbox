import React, { useEffect, useRef, useState } from "react";
import { Dialog,   
    DialogPortal,
    DialogOverlay,
    DialogClose,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription, } from "./ui/dialog";
import { Button } from "./ui/button";

export const HeroTopSection = ({isDarkMode, threadId}) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const token = import.meta.env.VITE_TOKEN;

    const handleDelete = async () => {
        try {
            const response = await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            })
    
            console.log(response);
        } catch (error) {   
            console.log('Error', error);
        }   
    }

    const handleKeyDownDelete = (e) => {
        if (e.key === 'd' || e.key === 'D') {
            e.preventDefault();
            const button = document.getElementById('deleteButton');
            if (button) {
                button.click();
            } else {
                console.error('Button not found');
            }
        }
    }

    useEffect(() => {    
        document.addEventListener('keydown', handleKeyDownDelete);
    }, [])

    return (
        <div className="absolute p-[16px] top-[69px] left-[361px] w-[801px] h-[70px] border-b border-navBorder bg-verNavBackground flex items-center justify-between">
            <div className="w-[422px] h-[46px] rounded-[8px] pb-[8px] pt-[4px] flex flex-col justify-between">
                <p className="font-inter text-[14px] font-semibold leading-5 text-left text-navText">Oriandio</p>
                <p className="font-inter text-[12px] leading-[18px] text-left text-gray-500/70">orladom@gmail.com</p>
            </div>
        
            <div className=" relative w-[328px] h-[33px] flex items-center justify-between">
                <div className=" w-[180px] h-[33px] rounded-[4px] border border-navBorder bg-navbackground flex items-center text-[#172B4D] py-[6px] px-[8px]">
                    <div className="flex items-center gap-[8px]"> 
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#FBF5D9"/>
                            <rect x="4" y="4" width="12" height="12" rx="6" fill="#E6D162"/>
                        </svg>


                        <div className="w-[114px] h-[21px] py-[1px]">
                            <p className="font-sans text-xs font-semibold leading-[18.6px] text-inboxText">Meeting Completed</p>
                        </div>
                    </div>
                    
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_6_19332)">
                        <path d="M2.5799 4.32645L1.3999 5.51311L7.9999 12.1064L14.5999 5.50645L13.4199 4.32645L7.9999 9.74645L2.5799 4.32645Z" fill={isDarkMode ? `#FFFFFF` : `#000000`}/>
                        </g>
                        <defs>
                        <clipPath id="clip0_6_19332">
                        <rect width="16" height="16" fill="white" transform="matrix(0 -1 1 0 0 16)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>

                    <div className={`${dropdownOpen ? '' : 'hidden'} absolute top-[calc(100%+4px)] left-[70px] w-[213px] bg-[#1E1F22] shadow-lg rounded-lg py-2 z-10`}>
                        <button className="w-full text-left px-4 py-2 text-[12px] font-[600] leading-[18.6px] font-sans text-[#D3D7DB]  flex items-center gap-[5px]">
                            <span className="mr-[5px]">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.6641 6.3335H8.33073V8.00016H16.6641V18.0002H3.33073V8.00016H4.9974V11.3335H6.66406V4.66683H11.6641V1.3335H4.9974V6.3335H3.33073C2.41406 6.3335 1.66406 7.0835 1.66406 8.00016V18.0002C1.66406 18.9168 2.41406 19.6668 3.33073 19.6668H16.6641C17.5807 19.6668 18.3307 18.9168 18.3307 18.0002V8.00016C18.3307 7.0835 17.5807 6.3335 16.6641 6.3335Z" fill="#EBEBEB"/>
                                </svg>
                            </span>
                            Mark as unread
                        </button>
                        <button className="w-full text-left px-4 py-2 text-[12px] font-[600] leading-[18.6px] font-sans text-[#D3D7DB]  flex items-center gap-[5px]">
                            <span className="mr-[5px]">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 12.8751V16.0001H3.625L12.8417 6.78345L9.71667 3.65845L0.5 12.8751ZM15.8417 3.78345L12.7167 0.658447L10.6083 2.77511L13.7333 5.90011L15.8417 3.78345Z" fill="#EBEBEB"/>
                                </svg>
                            </span>
                            Edit the Lead
                        </button>
                        <button className="w-full text-left px-4 py-2 text-[12px] font-[600] leading-[18.6px] font-sans text-[#D3D7DB]  flex items-center gap-[5px]">
                            <span className="mr-[5px]">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.25 7.16659C11.25 5.32492 9.75833 3.83325 7.91667 3.83325C6.075 3.83325 4.58333 5.32492 4.58333 7.16659C4.58333 9.00825 6.075 10.4999 7.91667 10.4999C9.75833 10.4999 11.25 9.00825 11.25 7.16659ZM9.58333 7.16659C9.58333 8.08325 8.83333 8.83325 7.91667 8.83325C7 8.83325 6.25 8.08325 6.25 7.16659C6.25 6.24992 7 5.49992 7.91667 5.49992C8.83333 5.49992 9.58333 6.24992 9.58333 7.16659Z" fill="#EBEBEB"/>
                            <path d="M1.25 15.4999V17.1666H14.5833V15.4999C14.5833 13.2833 10.1417 12.1666 7.91667 12.1666C5.69167 12.1666 1.25 13.2833 1.25 15.4999ZM2.91667 15.4999C3.08333 14.9083 5.66667 13.8333 7.91667 13.8333C10.1583 13.8333 12.725 14.8999 12.9167 15.4999H2.91667Z" fill="#EBEBEB"/>
                            <path d="M18.75 8.83325H13.75V10.4999H18.75V8.83325Z" fill="#EBEBEB"/>
                            </svg>

                            </span>
                            Remove the lead
                        </button>
                        <button className="w-full text-left px-4 py-2 text-[12px] font-[600] leading-[18.6px] font-sans text-[#D3D7DB]  flex items-center gap-[5px]">
                            <span className="mr-[5px]">
                                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.9974 0.166504C4.41406 0.166504 0.664062 3.9165 0.664062 8.49984C0.664062 13.0832 4.41406 16.8332 8.9974 16.8332C13.5807 16.8332 17.3307 13.0832 17.3307 8.49984C17.3307 3.9165 13.5807 0.166504 8.9974 0.166504ZM8.9974 15.1665C5.3224 15.1665 2.33073 12.1748 2.33073 8.49984C2.33073 4.82484 5.3224 1.83317 8.9974 1.83317C12.6724 1.83317 15.6641 4.82484 15.6641 8.49984C15.6641 12.1748 12.6724 15.1665 8.9974 15.1665ZM9.41406 4.33317H8.16406V9.33317L12.4974 11.9998L13.1641 10.9165L9.41406 8.6665V4.33317Z" fill="#EBEBEB"/>
                                </svg>
                            </span>
                            Set Reminder
                        </button>

                        <Dialog>
                            <DialogTrigger asChild>
                                <button id='deleteButton' className="w-full text-left px-4 py-2 text-[12px] font-[600] leading-[18.6px] font-sans text-[#D3D7DB]  flex items-center gap-[5px]">
                                    <span className="mr-[7px] ml-[3px]">
                                        <svg width="12" height="17" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.33317 5V13.3333H2.6665V5H9.33317ZM8.08317 0H3.9165L3.08317 0.833333H0.166504V2.5H11.8332V0.833333H8.9165L8.08317 0ZM10.9998 3.33333H0.999837V13.3333C0.999837 14.25 1.74984 15 2.6665 15H9.33317C10.2498 15 10.9998 14.25 10.9998 13.3333V3.33333Z" fill="#DBDBDB"/>
                                        </svg>
                                    </span>
                                    Delete
                                </button>
                            </DialogTrigger>
                            <DialogTrigger onKeyDown={handleKeyDownDelete}></DialogTrigger>
                        <DialogContent>
                        <DialogHeader>
                        <DialogTitle className="text-white text-center text-[24px] font-sans font-[700]">Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            <div className="flex flex-col items-center justify-between gap-14">
                            <p className="text-[#E8E8E8] text-center text-[13px] font-sans font-[400]"> Your selected Email will be deleted</p>
                            <div className="flex items-center justify-center gap-6">
                            <DialogClose asChild>
                                <Button className="w-[119px] h-[48px]  gap-[10px] rounded-md bg-[#25262B]"> <p className="font-[600] text-[14px]">Cancel</p></Button>
                            </DialogClose>

                            <DialogClose asChild>
                                <Button className="w-[152px] h-[48px]  gap-[10px] rounded-md relative bg-gradient-to-r from-[#FA5252] via-[#FA5252] to-[#A91919] bg-[linear-gradient(91.73deg,_#FA5252_-2.99%,_#A91919_95.8%)]" onClick={handleDelete}><p className="font-[600] text-white text-[14px]">Delete</p></Button>
                            </DialogClose>
                            </div>
                            </div>
                        </DialogDescription>
                        </DialogHeader>
                        </DialogContent>
                        </Dialog>
                    </div>

                {dropdownOpen2 && (
                    <div className="absolute top-[calc(100%+4px)] left-[120px] w-[213px] bg-[#1E1F22] shadow-lg rounded-lg py-2 z-10" onMouseEnter={() => setDropdownOpen2(true)} onMouseLeave={() => setDropdownOpen2(false)}>
                        <button className="w-full text-left px-4 py-2 text-[12px] font-[600] leading-[18.6px] font-sans text-[#D3D7DB]  flex items-center gap-[5px]">
                            <span className="mr-[5px]">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.5224 6.75016H15.6891C15.6391 6.3585 15.3891 5.96683 15.0307 5.77516L8.74739 2.5835L2.33073 5.77516C1.93073 5.99183 1.66406 6.45016 1.66406 6.89183V13.4168C1.66406 14.3335 2.41406 15.0835 3.33073 15.0835V7.0835L8.74739 4.25016L13.5224 6.75016Z" fill="#DBDBDB"/>
                                <path d="M16.6641 7.5835H5.83073C4.91406 7.5835 4.16406 8.3335 4.16406 9.25016V16.7502C4.16406 17.6668 4.91406 18.4168 5.83073 18.4168H16.6641C17.5807 18.4168 18.3307 17.6668 18.3307 16.7502V9.25016C18.3307 8.3335 17.5807 7.5835 16.6641 7.5835ZM16.6641 16.7502H5.83073V10.9168L11.2474 13.6918L16.6641 10.9168V16.7502ZM11.2474 12.0252L5.83073 9.25016H16.6641L11.2474 12.0252Z" fill="#DBDBDB"/>
                                </svg>
                            </span>
                            Mark as unread
                        </button>
                        <button className="w-full text-left px-4 py-2 text-[12px] font-[600] leading-[18.6px] font-sans text-[#D3D7DB]  flex items-center gap-[5px]">
                            <span className="mr-[5px]">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.6665 5.49992H9.99984L8.33317 3.83325H3.33317C2.4165 3.83325 1.6665 4.58325 1.6665 5.49992V15.4999C1.6665 16.4166 2.4165 17.1666 3.33317 17.1666H16.6665C17.5832 17.1666 18.3332 16.4166 18.3332 15.4999V7.16659C18.3332 6.24992 17.5832 5.49992 16.6665 5.49992ZM16.6665 15.4999H3.33317V5.49992H7.6415L9.30817 7.16659H16.6665V15.4999ZM10.1332 10.4999H6.6665V12.1666H10.1332L8.80817 13.4916L9.9915 14.6666L13.3332 11.3416L9.9915 7.99992L8.8165 9.17492L10.1332 10.4999Z" fill="#DBDBDB"/>
                                </svg>
                            </span>
                            Edit the Lead
                        </button>
                    </div>
                )}

                <div className="w-[86px] h-[33px] select-none rounded-[4px] border border-navBorder flex items-center justify-center py-[8px] px-[16px] gap-[6px] text-inboxText bg-navbackground cursor-pointer"  onClick={() => setDropdownOpen(!dropdownOpen)}>
                    <p className="font-sans text-xs font-semibold leading-[18.6px] text-inboxText">Move</p>

                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_6_19332)">
                        <path d="M2.5799 4.32645L1.3999 5.51311L7.9999 12.1064L14.5999 5.50645L13.4199 4.32645L7.9999 9.74645L2.5799 4.32645Z" fill={isDarkMode ? `#FFFFFF` : `#000000`}/>
                        </g>
                        <defs>
                        <clipPath id="clip0_6_19332">
                        <rect width="16" height="16" fill="white" transform="matrix(0 -1 1 0 0 16)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>

                <div className="w-[33px] h-[33px] rounded-[4px] border border-navBorder flex items-center justify-center text-inboxText bg-navbackground" 
                    onMouseEnter={() => setDropdownOpen2(true)} 
                    onMouseLeave={() => setDropdownOpen2(false)}
                > 
                    <svg width="12" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.99984 0.166748C1.2665 0.166748 0.666504 0.766748 0.666504 1.50008C0.666504 2.23341 1.2665 2.83341 1.99984 2.83341C2.73317 2.83341 3.33317 2.23341 3.33317 1.50008C3.33317 0.766748 2.73317 0.166748 1.99984 0.166748ZM9.99984 0.166748C9.2665 0.166748 8.6665 0.766748 8.6665 1.50008C8.6665 2.23341 9.2665 2.83341 9.99984 2.83341C10.7332 2.83341 11.3332 2.23341 11.3332 1.50008C11.3332 0.766748 10.7332 0.166748 9.99984 0.166748ZM5.99984 0.166748C5.2665 0.166748 4.6665 0.766748 4.6665 1.50008C4.6665 2.23341 5.2665 2.83341 5.99984 2.83341C6.73317 2.83341 7.33317 2.23341 7.33317 1.50008C7.33317 0.766748 6.73317 0.166748 5.99984 0.166748Z" fill={isDarkMode ? `#FFFFFF` : `#000000`}/>
                    </svg>
                </div>
            </div>
        </div>
    ); 
}