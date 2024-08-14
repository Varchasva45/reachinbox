import { useEffect, useState } from "react";
import "react-markdown-editor-lite/lib/index.css";
import { Textarea } from "./ui/textarea";
import { toast } from "react-toastify";

const Email = ({threadId, isEmailModalOpen, setIsEmailModalOpen}) => {

    const [loading, setLoading] = useState(false);
    const [to, setTo] = useState('');
    const [from, setFrom] = useState('');
    const [subject, setSubject] = useState('');
    const [markdown, setMarkdown] = useState('');
    const token = import.meta.env.VITE_TOKEN;

    const handleEmailModalOpen = () => {
      setIsEmailModalOpen(false);
    }

    const sendReply = () => {
      console.log('Send reply');
      if(loading) {
        return; 
      }

      handleSendReply();
    } 
    
    const handleSendReply = async () => {
      try {
        console.log('Sending reply');
        setLoading(true);
        const response = await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
          body: JSON.stringify({
            toName: "",
            to: to,
            from: from,
            fromName: "",
            subject: subject,
            body: markdown,
            references: [],
            inReplyTo: ""
          })
        });
        console.log(response);
        if(response.status === 200) {
          console.log('Reply sent successfully');
          toast.success('Reply sent successfully');
          const data = await response.json();
          console.log(data);
        }else{
          toast.error('Internal server error');
        }
      } catch (error) {
        toast.error('Internal server error');
        setLoading(false);
      }
    }

    return (
        <div className={`${isEmailModalOpen ? '' : 'hidden'} w-[752px] h-[534px] gap-0 rounded-[8px] border-t border-l border-solid bg-[#141517] border-[1px] border-image-[linear-gradient(180deg, #4A5055 0%, #2A2F32 100%)] border-image-slice-[1] relative`}>
          <div className="w-[751px] h-[54px] absolute  top-[479px] left-[1px] px-[12px] gap-[20px] border-t border-solid border-t-[#2E3236]">
            <div className="inline-flex w-auto h-auto gap-[16px] p-[3px_0px_0px_0px]">
              <div className="inline-flex items-center w-auto h-auto px-5 py-2 gap-[16px] rounded-md bg-gradient-to-r from-[#4B63DD] to-[rgba(5,36,191,0.99)]">
                <div className="inline-flex items-center w-auto h-auto gap-[16px]">
                  <div className="w-[34px] h-[22px] gap-0 text-left text-white font-open-sans text-[14px] font-semibold leading-[21.7px] cursor-pointer" onClick={handleSendReply}>
                    Send
                  </div>
                  <div className="w-[24px] h-[24px]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_29_807)">
                      <path d="M7 10L12 15L17 10H7Z" fill="white"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_29_807">
                      <rect width="24" height="24" fill="white"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-auto h-auto p-[8px_0px] gap-16 rounded-tl-[4px]">
                <div className="inline-flex items-center w-auto h-auto gap-[16px]">
                  <div className="w-[24px] h-[24px]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 2V13H10V22L17 10H13L16 2H7Z" fill="#ADADAD"/>
                    </svg>

                  </div>
                  <div className="w-[63px] h-[22px] gap-0 text-left text-[14px] font-semibold leading-[21.7px] text-[#ADADAD]">
                    Variables
                  </div>
                </div>
              </div>
              <div className="w-auto h-auto p-[8px_0px] gap-16 rounded-tl-[4px]">
                <div className="inline-flex items-center w-auto h-auto gap-[16px]">
                  <div className="max-w-[127px] h-[24px]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6.5C15.79 6.5 19.17 8.63 20.82 12C19.17 15.37 15.8 17.5 12 17.5C8.2 17.5 4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 9.5C13.38 9.5 14.5 10.62 14.5 12C14.5 13.38 13.38 14.5 12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 10.62 10.62 9.5 12 9.5ZM12 7.5C9.52 7.5 7.5 9.52 7.5 12C7.5 14.48 9.52 16.5 12 16.5C14.48 16.5 16.5 14.48 16.5 12C16.5 9.52 14.48 7.5 12 7.5Z" fill="#ADADAD"/>
                  </svg>
                  </div>
                  <div className="w-[95px] h-[22px] gap-0 text-left text-[14px] font-semibold leading-[21.7px] text-[#ADADAD]">
                    Preview Email
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center w-auto h-auto gap-[16px]">
                <div className="w-auto h-auto gap-[12px] flex">
                  <div className="w-[24px] h-[24px]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_5_1294)">
                  <path d="M12.9121 18C13.7147 18 14.2497 17.2038 13.9589 16.4769L9.01571 4.00385C8.77146 3.39231 8.18991 3 7.53857 3C6.88723 3 6.30567 3.39231 6.06142 4.00385L1.11822 16.4769C0.82744 17.2038 1.3741 18 2.16501 18C2.63026 18 3.04897 17.7115 3.22344 17.2731L4.24697 14.5385H10.8069L11.8537 17.2846C12.0282 17.7115 12.4469 18 12.9121 18ZM5.13094 12.2308L7.53857 5.86154L9.9462 12.2308H5.13094Z" fill="#ADADAD"/>
                  <path d="M17.0391 17.3346C17.0391 18.068 17.6391 18.668 18.3724 18.668C19.1057 18.668 19.7057 18.068 19.7057 17.3346C19.7057 16.6013 19.1057 16.0013 18.3724 16.0013C17.6391 16.0013 17.0391 16.6013 17.0391 17.3346ZM17.0391 9.33464C17.0391 10.068 17.6391 10.668 18.3724 10.668C19.1057 10.668 19.7057 10.068 19.7057 9.33464C19.7057 8.6013 19.1057 8.0013 18.3724 8.0013C17.6391 8.0013 17.0391 8.6013 17.0391 9.33464ZM17.0391 13.3346C17.0391 14.068 17.6391 14.668 18.3724 14.668C19.1057 14.668 19.7057 14.068 19.7057 13.3346C19.7057 12.6013 19.1057 12.0013 18.3724 12.0013C17.6391 12.0013 17.0391 12.6013 17.0391 13.3346Z" fill="#ADADAD"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_5_1294">
                  <rect width="24" height="24" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>
                  </div>
                </div>
                <div className="w-[168px] h-[24px] gap-[12px] flex">
                  <div className="w-[24px] h-[24px]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_5_1307)">
                    <path opacity="0.87" d="M17 7H13V9H17C18.65 9 20 10.35 20 12C20 13.65 18.65 15 17 15H13V17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7ZM11 15H7C5.35 15 4 13.65 4 12C4 10.35 5.35 9 7 9H11V7H7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17H11V15ZM8 11H16V13H8V11Z" fill="#ADADAD"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_5_1307">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                  </div>
                  <div className="w-[24px] h-[24px]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM14.14 11.86L11.14 15.73L9 13.14L6 17H18L14.14 11.86Z" fill="#ADADAD"/>
                    </svg>
                  </div>
                  <div className="w-[24px] h-[24px]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#ADADAD"/>
                    <path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#ADADAD"/>
                    <path d="M12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.75 15.19 13.48 16 12 16ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#ADADAD"/>
                    </svg>
                  </div>
                  <div className="w-[24px] h-[24px]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 8C13.5 5.79 11.71 4 9.5 4C7.29 4 5.5 5.79 5.5 8C5.5 10.21 7.29 12 9.5 12C11.71 12 13.5 10.21 13.5 8ZM11.5 8C11.5 9.1 10.6 10 9.5 10C8.4 10 7.5 9.1 7.5 8C7.5 6.9 8.4 6 9.5 6C10.6 6 11.5 6.9 11.5 8Z" fill="#ADADAD"/>
                    <path d="M1.5 18V20H17.5V18C17.5 15.34 12.17 14 9.5 14C6.83 14 1.5 15.34 1.5 18ZM3.5 18C3.7 17.29 6.8 16 9.5 16C12.19 16 15.27 17.28 15.5 18H3.5Z" fill="#ADADAD"/>
                    <path d="M22.5 10H16.5V12H22.5V10Z" fill="#ADADAD"/>
                    </svg>
                  </div>
                  <div className="w-[24px] h-[24px]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_5_1312)">
                    <path d="M5.82997 12.0001L8.28997 9.54011C8.67997 9.15011 8.67997 8.52011 8.28997 8.13011C7.89997 7.74011 7.26997 7.74011 6.87997 8.13011L3.69997 11.3001C3.30997 11.6901 3.30997 12.3201 3.69997 12.7101L6.87997 15.8801C7.26997 16.2701 7.89997 16.2701 8.28997 15.8801C8.67997 15.4901 8.67997 14.8601 8.28997 14.4701L5.82997 12.0001ZM18.17 12.0001L15.71 14.4601C15.32 14.8501 15.32 15.4801 15.71 15.8701C16.1 16.2601 16.73 16.2601 17.12 15.8701L20.3 12.7001C20.69 12.3101 20.69 11.6801 20.3 11.2901L17.13 8.12011C16.74 7.73011 16.11 7.73011 15.72 8.12011C15.33 8.51011 15.33 9.14011 15.72 9.53011L18.17 12.0001Z" fill="#ADADAD"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_5_1312">
                    <rect width="24" height="24" fill="white" transform="matrix(0 -1 1 0 0 24)"/>
                    </clipPath>
                    </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          

          <div class="w-[750px] h-[38px] p-[20px_32px_20px_32px] gap-[10px] rounded-t-lg border border-[#41464B] bg-[#23272C] flex items-center justify-between">
            <div class="w-[682px] h-[16px] gap-[8px]">
              <div class="w-auto h-[16px] gap-[8px]">
              <div class="w-[33px] h-[16px] gap-0 font-sans text-[12px] font-bold leading-[16.34px] tracking[-0.02em] text-[#BAB9BD]">
                Reply
              </div>
              </div>
            </div>
            <div className="w-[20px] h-[20px] pl-10 cursor-pointer" onClick={handleEmailModalOpen}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.8307 5.34297L14.6557 4.16797L9.9974 8.8263L5.33906 4.16797L4.16406 5.34297L8.8224 10.0013L4.16406 14.6596L5.33906 15.8346L9.9974 11.1763L14.6557 15.8346L15.8307 14.6596L11.1724 10.0013L15.8307 5.34297Z" fill="white"/>
              </svg>
            </div>
          </div>


          <div className="w-[752px] h-[24px] p-[0px_32px_8px_32px] border-b border-[#34383D]  gap-[8px] top-[46px]">
            <div className="w-auto h-auto gap-[8px]">
              <div className="inline-flex gap-[10px]">
                  <div className="w-[21px] h-[16px] text-[12px] font-normal leading-[16.34px] text-[#BAB9BD]">
                    To :
                  </div>
                  <input className="w-[500px] h-[16px] bg-transparent text-[#E7E7E7] text-[12px] border-none outline-none" placeholder={to} onChange={(e)=>setTo(e.target.value)}/>
              </div>
            </div>
          </div>
          
          <div className="w-[752px] h-[24px] pt-[0px] px-[32px] pb-[8px] gap-[8px] border-b-[1px] border-b-[#34383D] top-[78px]">
            <div className="inline-flex gap-[10px]">
              <div className="w-[36px] h-[16px] gap-[8px]">
                <div className="w-[36px] h-[16px] text-[#BAB9BD] text-[12px] font-light leading-[16.34px] text-left">
                  From:
                </div>
              </div>
              
              <input className="w-[500px] h-[16px] bg-transparent text-[#E7E7E7] text-[12px] border-none outline-none" placeholder={from} onChange={(e)=>setFrom(e.target.value)}/>
            </div>
          </div>

          <div className="w-[752px] h-[24px] pt-[0px] px-[32px] pb-[8px] gap-[8px] border-b border-[#34383D] top-[110px]">
            <div className="w-auto h-[16px] gap-[8px]">
              <div className="inline-flex gap-[10px]">
              <div className="w-[48px] h-[16px] text-[12px] font-normal leading-[16.34px] text-[#BAB9BD]">
                Subject:
              </div>
              <input className="w-[600px] h-[16px] bg-transparent text-[#E7E7E7] text-[12px] border-none outline-none"  placeholder={subject} onChange={(e)=>setSubject(e.target.value)}/>
              
              </div>
            </div>
          </div>
         <textarea className="w-[752px] h-[400px] p-[20px_32px_20px_32px] bg-transparent border-none outline-none text-[#E7E7E7] text-[12px]" value={markdown} onChange={(e) => setMarkdown(e.target.value)} />
        </div>
    );
};

export default Email;