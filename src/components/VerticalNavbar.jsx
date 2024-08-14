import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useNavigate } from "react-router-dom";

const VerticalNavbar = ({setSelected, selected, isDarkMode}) => {

    const handleClick = (value) => {
      setSelected(value);
    };

    const navigate = useNavigate();

    return (
      <div className="w-[56px] h-[760px] p-[0px_4px] gap-0 border-r border-navBorder bg-verNavBackground flex flex-col">
        
        {/* Logo Holder */}
        <div className="w-[48px] h-[70px] flex items-center justify-center pt-[8px] cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-[32px] h-[32px] p-[4px_3px_4px_3px] gap-[10px] flex justify-center items-center">
            <img
              src={`https://s3-alpha-sig.figma.com/img/ed94/738a/0d9ad817b731bfaf9a4a7d8bf7a8a637?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lm25TDf7Z7Zx19bEBiObXF46C0tF37QZXNKTjjGK8oTHnZCOvtbHIO~CLOClQ0XTvU3r37VTb2dkaVVWQdXDuJYlIf88dn27vyWkptXX5xSFvBDrjpuNdQYVa487mpRUKHziYZWcaLUBtMrnOjxecgI08EAaGFKOLmiC~w~e3WzlkJq3GzEBXh~n-p55fDLbFFwkYdwlMK5SyXyvK00bIfI6E7pMS9DTsHBiU0u7jNF4shqbYZc3Xe6MxFc65i75Kilhu-rGvq0e8CneyVqrw06JDw9a4JcBLNG7oJpM2yRmesazvqC1fDlST4-Wh8f6T~yJQua83clUF02jUIwFcQ__`}
              alt="Logo"
              className="w-[26px] h-[24px] rounded-tl-[2px]"
            />
          </div>
        </div>
        
        <div className="w-[48px] max-h-[634px] py-[16px] px-[8px]">

          <div className="w-[48px] h-[645px] mt-[32px] flex flex-col">

            <div className="w-[28px] h-[546px] gap-[32px] flex flex-col">
              
              {/* Icon Panel 1 */}
              <div className={`w-[30px] h-[30px] p-[1px_1px_1px_1px] rounded-tl-[4px] flex justify-center items-center hover:bg-gray-100 cursor-pointer`} onClick={()=>{handleClick('noMail')}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.30783 6.75731C4 7.4266 4 8.18802 4 9.71085V14.4668C4 16.5817 4 17.6391 4.65701 18.2961C5.26684 18.906 6.22167 18.9497 8.04689 18.9529C8.04688 18.9513 8.04688 18.9498 8.04688 18.9482V13.3403C8.04688 12.1686 8.99674 11.2188 10.1685 11.2188H13.5332C14.7049 11.2188 15.6548 12.1686 15.6548 13.3403V18.9482C15.6548 18.9498 15.6548 18.9513 15.6548 18.9529C17.4803 18.9497 18.4352 18.906 19.0451 18.2961C19.7021 17.6391 19.7021 16.5817 19.7021 14.4668V9.71085C19.7021 8.18802 19.7021 7.4266 19.3943 6.75731C19.0865 6.08802 18.5084 5.59249 17.3521 4.60145L16.2306 3.64009C14.1407 1.84878 13.0958 0.953125 11.8511 0.953125C10.6064 0.953125 9.56144 1.84878 7.47158 3.64009L7.47158 3.64009L6.35 4.60145C5.19377 5.59249 4.61566 6.08802 4.30783 6.75731ZM13.6548 18.9531C13.6548 18.9515 13.6548 18.9499 13.6548 18.9482V13.3403C13.6548 13.2732 13.6003 13.2188 13.5332 13.2188H10.1685C10.1013 13.2188 10.0469 13.2732 10.0469 13.3403V18.9482C10.0469 18.9499 10.0469 18.9515 10.0469 18.9531H13.6548Z" fill={selected == 'noMail' ? '#595A5B' : '#919EAB'}/>
                </svg>
              </div>

              {/* Icon Panel 2 */}
              <div className="w-[30px] h-[30px] p-[1px_1px_1px_1px] rounded-tl-[4px] flex justify-center items-center hover:bg-gray-100 cursor-pointer" onClick={()=>{handleClick('allMail')}}>
                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.2 0.5H1.8C0.81 0.5 0.00899999 1.31 0.00899999 2.3L0 13.1C0 14.09 0.81 14.9 1.8 14.9H16.2C17.19 14.9 18 14.09 18 13.1V2.3C18 1.31 17.19 0.5 16.2 0.5ZM16.2 4.1L9 8.6L1.8 4.1V2.3L9 6.8L16.2 2.3V4.1Z" fill={selected == 'allMail' ? '#595A5B' : '#919EAB'} />
                </svg>
              </div>

              {/* Icon Panel 3 */}
              <div className="w-[30px] h-[30px] p-[1px_1px_1px_1px] rounded-tl-[4px] flex justify-center items-center hover:bg-gray-100 cursor-pointer" onClick={()=>{handleClick('sent')}}>
                <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7379 23.5C16.0665 23.5 16.3469 23.3754 16.5792 23.1261C16.8115 22.8824 17.007 22.5567 17.1656 22.1487L22.7662 7.48867C22.8398 7.29603 22.8965 7.11756 22.9362 6.95326C22.9758 6.78895 22.9956 6.63314 22.9956 6.48584C22.9956 6.18555 22.9078 5.94759 22.7322 5.77195C22.5566 5.59065 22.3186 5.5 22.0183 5.5C21.8767 5.5 21.7209 5.52266 21.5509 5.56799C21.3809 5.60765 21.1996 5.66147 21.007 5.72946L6.29593 11.364C5.92766 11.5057 5.61888 11.6926 5.36959 11.9249C5.12596 12.1572 5.00415 12.4377 5.00415 12.7663C5.00415 13.1686 5.14013 13.466 5.41208 13.6586C5.68404 13.8456 6.02681 14.0014 6.44041 14.1261L10.8512 15.4773C11.1458 15.568 11.3923 15.6048 11.5906 15.5878C11.7889 15.5652 11.9928 15.4575 12.2024 15.2649L21.6614 6.49433C21.718 6.44334 21.7775 6.41785 21.8398 6.41785C21.9078 6.41785 21.9673 6.44051 22.0183 6.48584C22.0636 6.53116 22.0863 6.58782 22.0863 6.65581C22.0863 6.71813 22.058 6.77762 22.0013 6.83428L13.2648 16.3187C13.0835 16.5113 12.9787 16.7096 12.9503 16.9136C12.9277 17.1176 12.9588 17.3697 13.0438 17.67L14.3526 21.9873C14.4829 22.4235 14.6444 22.7833 14.837 23.0666C15.0296 23.3555 15.3299 23.5 15.7379 23.5Z" fill={selected == 'sent' ? '#595A5B' : '#919EAB'}/>
                </svg>
              </div>

              {/* Icon Panel 4 */}
              <div className="w-[30px] h-[30px] p-[1px_1px_1px_1px] rounded-tl-[4px] flex justify-center items-center hover:bg-gray-100 cursor-pointer" onClick={()=>{handleClick('noMail')}}>
                <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 17H9V13H5V17ZM5 22H9V18H5V22ZM5 12H9V8H5V12ZM10 17H23V13H10V17ZM10 22H23V18H10V22ZM10 8V12H23V8H10Z" fill={selected == 'noMail' ? '#595A5B' : '#919EAB'}/>
                </svg>
              </div>

              {/* Icon Panel 5 */}
              <div className="w-[30px] h-[30px] p-[1px_1px_1px_1px] rounded-tl-[4px] flex justify-center items-center hover:bg-gray-100 cursor-pointer" onClick={()=>{handleClick('inbox')}}>
                <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.7691 21.7857H21.2225C22.1399 21.7857 22.8321 21.5619 23.2993 21.1144C23.7664 20.6669 24 20.0038 24 19.1251V14.5487C24 14.2485 23.9803 13.9947 23.9409 13.7874C23.9071 13.58 23.848 13.3944 23.7636 13.2307C23.6848 13.0669 23.5751 12.8923 23.4344 12.7067L20.6568 9.11277C20.3304 8.68707 20.0349 8.3596 19.7704 8.13037C19.5058 7.89569 19.2104 7.73196 18.8839 7.63917C18.5575 7.54639 18.141 7.5 17.6344 7.5H10.3656C9.85338 7.5 9.43408 7.54639 9.10764 7.63917C8.78683 7.73196 8.49416 7.89569 8.22963 8.13037C7.9651 8.3596 7.66962 8.68707 7.34318 9.11277L4.56564 12.7067C4.42493 12.8923 4.31237 13.0669 4.22794 13.2307C4.14352 13.3944 4.08442 13.58 4.05065 13.7874C4.01688 13.9947 4 14.2485 4 14.5487V19.1251C4 20.0038 4.23357 20.6669 4.70072 21.1144C5.16786 21.5619 5.85732 21.7857 6.7691 21.7857ZM13.9958 16.7755C13.5737 16.7755 13.205 16.68 12.8898 16.4889C12.5803 16.2925 12.3411 16.0414 12.1722 15.7358C12.0034 15.4247 11.919 15.0972 11.919 14.7534V14.6961C11.919 14.5105 11.8599 14.344 11.7417 14.1967C11.6235 14.0439 11.4434 13.9675 11.2014 13.9675H6.09371C5.94175 13.9675 5.84888 13.9183 5.81511 13.8201C5.78134 13.7219 5.80386 13.6209 5.88265 13.5172L8.95568 9.50573C9.14141 9.26559 9.34684 9.0964 9.57197 8.99816C9.80273 8.89446 10.0588 8.84261 10.3402 8.84261H17.6513C17.944 8.84261 18.2029 8.89446 18.428 8.99816C18.6532 9.0964 18.8558 9.26559 19.0359 9.50573L22.1173 13.5172C22.1849 13.6209 22.2018 13.7219 22.168 13.8201C22.1399 13.9183 22.0498 13.9675 21.8978 13.9675H16.7986C16.5566 13.9675 16.3765 14.0439 16.2583 14.1967C16.1458 14.344 16.0895 14.5105 16.0895 14.6961V14.7534C16.0895 15.0972 16.0023 15.4247 15.8278 15.7358C15.6589 16.0414 15.4169 16.2925 15.1017 16.4889C14.7922 16.68 14.4235 16.7755 13.9958 16.7755Z" fill={selected == 'inbox' ? '#595A5B' : '#919EAB'}/>
                </svg>
              </div>

              {/* Icon Panel 6 */}
              <div className="w-[30px] h-[30px] p-[1px_1px_1px_1px] rounded-tl-[4px] flex justify-center items-center hover:bg-gray-100 cursor-pointer">
                <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.33342 11.2855H4.66675V24.1188H9.33342V11.2855Z" fill="#919EAB"/>
                <path d="M23.3334 15.9521H18.6667V24.1188H23.3334V15.9521Z" fill="#919EAB"/>
                <path d="M16.3334 5.45215H11.6667V24.1188H16.3334V5.45215Z" fill="#919EAB"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

      {/* User Avatar Frame */}
      <div className="w-[48px] h-[70px] p-[8px] gap-0 rounded-bl-[2px]">
      <div className="w-[32px] h-[32px] flex justify-center items-center">
        <Avatar className="w-[32px] h-[32px] bg-green-900 text-white flex justify-center items-center text-sm font-bold rounded-full">
          {/* <AvatarImage 
            src="https://s3-alpha-sig.figma.com/img/ed94/738a/0d9ad817b731bfaf9a4a7d8bf7a8a637?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lm25TDf7Z7Zx19bEBiObXF46C0tF37QZXNKTjjGK8oTHnZCOvtbHIO~CLOClQ0XTvU3r37VTb2dkaVVWQdXDuJYlIf88dn27vyWkptXX5xSFvBDrjpuNdQYVa487mpRUKHziYZWcaLUBtMrnOjxecgI08EAaGFKOLmiC~w~e3WzlkJq3GzEBXh~n-p55fDLbFFwkYdwlMK5SyXyvK00bIfI6E7pMS9DTsHBiU0u7jNF4shqbYZc3Xe6MxFc65i75Kilhu-rGvq0e8CneyVqrw06JDw9a4JcBLNG7oJpM2yRmesazvqC1fDlST4-Wh8f6T~yJQua83clUF02jUIwFcQ__" 
            alt="User Avatar"
          /> */}
          <AvatarFallback className="bg-green-900 text-white flex justify-center items-center text-sm cursor-pointer">
            NS
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
      </div>
    )
};
export default VerticalNavbar;