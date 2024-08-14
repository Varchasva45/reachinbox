import { useNavigate } from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            // const response = await fetch('/https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://nextlink.vercel.app');
            // console.log(response);
            // const data = await response.json();
            // console.log(data);

            navigate('/onebox')
        } catch (error) {
            console.log(error);
        }   
    }

    return (
        <div className="bg-black h-[100vh] max-w-[1440px] mx-auto"> 
            <header className="h-[63px] border-b border-[#25262B] flex items-center justify-center">
                <img 
                    src={'https://s3-alpha-sig.figma.com/img/37f3/2626/1680d9613629542a2474f79f92f7c022?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZAGtbGL6Qv8LYLcjFORlUynJtjloBlZEZRMYe~3gB-FSwEbFBapCOuWb45F8~HcfobaWIJyLjsOKcWlqCnMTdgT00yCX5w6S5G7ZMODDm4ogvUVejfQnNJZlgvWtBuRqU2dDV9z4hXpuyCo4IcBuMk6AK9aNpk9h25B9l8V7Y3TcNfTdL-PlHZX6u~PsYeZi-6bJnM43Vue4OoSkv9ezBMlhNGvWo5yrP3lfc0KEckHhtC8XVn5G1EoZh8IEdWNPnRkriFembYNOvH45RLtkRRCfSh8jjZtarC~NUZRU91IhEWVfcSCCVtx4eM~A2Q7ppwMAy8dtg6RBkI9~VTcVoQ__'}    
                    alt={'header-image'}
                    width={'156.77px'}
                    height={'24px'}
                >
                </img>
            </header>

            <main className="h-[663px] py-[59px] px-[29px] flex items-center justify-center text-white">
                <div className="w-[460px] h-[312px] rounded-[17px] border border-[#343A40] bg-gradient-to-br from-[#111214] to-[#121212] flex flex-col gap-[48px] px-[40px] pt-[24px] pb-[40x]">
                    <div className="w-[380px] h-[103px] flex flex-col gap-[16px] items-center">
                        <p className="font-sans text-[20px] font-semibold leading-[31px] text-center text-[#FFFFFF]">
                            Create a New Account
                        </p>
                        <div className="flex w-full gap-[10px] py-[8px] px-[16px] items-center justify-center text-[#CCCCCC] border border-[#707172] rounded-[4px]">
                            <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5008 11.1808C16.5008 10.6226 16.4488 10.0857 16.3524 9.57031H8.66406V12.616H13.0574C12.8681 13.6002 12.293 14.4341 11.4284 14.9924V16.9678H14.0667C15.6103 15.5971 16.5008 13.5786 16.5008 11.1808Z" fill="#4285F4"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.66206 18.8697C10.8661 18.8697 12.714 18.1647 14.0647 16.9622L11.4264 14.9866C10.6954 15.459 9.76038 15.7382 8.66206 15.7382C6.53599 15.7382 4.73626 14.3531 4.09426 12.4922H1.36719V14.5321C2.71032 17.1053 5.47095 18.8697 8.66206 18.8697Z" fill="#34A853"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.09547 12.4929C3.9322 12.0205 3.8395 11.5158 3.8395 10.9969C3.8395 10.478 3.93229 9.97339 4.09556 9.50098V7.46094H1.3683C0.796853 8.55814 0.499502 9.76911 0.500001 10.9969C0.500001 12.2674 0.815375 13.4699 1.3683 14.5329L4.09547 12.4929Z" fill="#FBBC05"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.66217 6.25648C9.86072 6.25648 10.9367 6.65374 11.7828 7.43401L14.1241 5.1757C12.7104 3.90518 10.8625 3.125 8.66217 3.125C5.47104 3.125 2.71041 4.88937 1.36719 7.46261L4.09435 9.50256C4.73635 7.64152 6.53599 6.25648 8.66217 6.25648Z" fill="#EA4335"/>
                            </svg>

                            <p className="font-sans text-[16px] font-normal leading-[26.1px] tracking-custom cursor-pointer" onClick={handleLogin}>
                                Sign up with google
                            </p>
                        </div>
                    </div> 
                    
                    <div className="w-[380px] h-[103px] gap-[16px] flex flex-col justify-center items-center">   
                        <div className="w-[195px] h-[48px] rounded-[4px] bg-gradient-to-br from-[#4B63DD] to-[#0523BF] flex items-center justify-center">
                            Create an Account
                        </div>
                        <div className="font-sans text-[16px] font-normal leading-[24.8px] text-center">
                            <span className="text-[#909296]">Already have an account?</span> <span className="#C1C2C5">Sign In</span>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="h-[32px] border-t border-[#25262B] bg-[#121212] text-[#5C5F66] flex items-center justify-center">
                <div className="max-w-[1240px] h-[19px] font-sans font-normal text-[12px] leading-[18.6px] mx-auto">
                    © 2023 Reachinbox. All rights reserved.
                </div>
            </footer>
        </div>
    );
}