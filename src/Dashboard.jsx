import React, { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Steph from '/steph.png'
import CryptoChart from './components/Chart'
function Dashboard() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check for user's theme preference in local storage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        }
    };

    return (
        <div>
            <Sidebar />
            <div className={`p-1 grid gap-3 md:p-4 ml-2 sm:ml-64 lg:ml-62 mt-14 md:mt-0  ${isDarkMode ? "bg-[#0F0C19]" : "bg-[#41435a]"} `}>
                <nav className="flex gap-[70px] mt-3 md:justify-between items-center">
                    <div className="nav-left flex gap-3 text-white   items-center">
                        <h1 className="text-[30px] flex justify-start items-baseline text-[#CB3CFF] font-semibold text">Welcome<b className="text-[30px] text-white">,</b><span className="text-[18px] ml-2 text-white font-light flex">  Stephanie</span></h1>
                    </div>
                    <div className="nav-right flex justify-center items-center">
                        <div className={`hidden  ${isDarkMode ? "bg-[#0F0C19]" : "bg-[#41435a]"} lg:flex gap-2 p-2 `}>
                            <svg className="" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9ZM7.95856 2.9442C8.02336 3.35331 7.74423 3.73749 7.33512 3.80229C5.51658 4.09032 4.09032 5.51658 3.80229 7.33512C3.73749 7.74423 3.35331 8.02336 2.9442 7.95856C2.53508 7.89376 2.25596 7.50958 2.32076 7.10047C2.71044 4.64008 4.64008 2.71044 7.10047 2.32076C7.50958 2.25596 7.89376 2.53508 7.95856 2.9442Z" fill="#6F6C99" />
                                <path d="M16.4697 16.4697C16.7626 16.1768 17.2374 16.1768 17.5303 16.4697L21.5302 20.4696C21.8231 20.7625 21.8231 21.2374 21.5302 21.5303C21.2373 21.8232 20.7625 21.8232 20.4696 21.5303L16.4697 17.5303C16.1768 17.2374 16.1768 16.7626 16.4697 16.4697Z" fill="#6F6C99" />
                            </svg>


                            <input type='text' placeholder='Search..' className="bg-transparent  placeholder-[#6F6C99] text-[18px]" />
                        </div>
                        <div className="flex justify-between items-center gap-6">
                            <p className="text-white hidden md:flex  font-extralight text-[18px]">EN</p>
                            <svg width="12" className="hidden md:flex" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5327 1.52796C11.8243 1.23376 11.8222 0.758893 11.528 0.467309C11.2338 0.175726 10.7589 0.177844 10.4673 0.472041L8.72 2.23501C8.01086 2.9505 7.52282 3.44131 7.1093 3.77341C6.7076 4.096 6.44958 4.20668 6.2185 4.23613C6.07341 4.25462 5.92659 4.25462 5.7815 4.23613C5.55042 4.20668 5.2924 4.09601 4.89071 3.77341C4.47718 3.44131 3.98914 2.95051 3.28 2.23501L1.53269 0.472042C1.24111 0.177845 0.766238 0.175726 0.472041 0.46731C0.177844 0.758894 0.175726 1.23376 0.467309 1.52796L2.24609 3.32269C2.91604 3.99866 3.46359 4.55114 3.95146 4.94294C4.45879 5.35037 4.97373 5.64531 5.59184 5.72409C5.86287 5.75864 6.13714 5.75864 6.40816 5.72409C7.02628 5.64531 7.54122 5.35037 8.04854 4.94294C8.53641 4.55114 9.08396 3.99867 9.7539 3.32269L11.5327 1.52796Z" fill="white" />
                            </svg>
                            <svg width={17} height={20} viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.4123 5.60976C15.4123 6.68739 14.5462 7.56098 13.4777 7.56098C12.4093 7.56098 11.5431 6.68739 11.5431 5.60976C11.5431 4.53213 12.4093 3.65854 13.4777 3.65854C14.5462 3.65854 15.4123 4.53213 15.4123 5.60976Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.59335 0C4.3088 0 1.7675 2.90344 2.1749 6.1906L2.25166 6.80996C2.36399 7.71626 2.03575 8.62152 1.37023 9.24092C-0.00883787 10.5244 -0.391984 12.5673 0.426988 14.2702L0.52696 14.478C1.24872 15.9788 2.71425 16.9616 4.35026 17.0643L4.53238 17.3791C5.51206 19.073 7.03848 20 8.64135 20C10.2442 20 11.7706 19.073 12.7503 17.3791L12.9353 17.0593C14.3095 16.9497 15.5625 16.1964 16.3098 15.012C17.4533 13.1999 17.1505 10.8226 15.5899 9.36094L15.5475 9.32118C15.1931 8.98922 14.9279 8.58202 14.7654 8.13681C14.3355 8.39092 13.8348 8.53659 13.3005 8.53659C11.6978 8.53659 10.3986 7.2262 10.3986 5.60976C10.3986 3.99331 11.6978 2.68293 13.3005 2.68293C13.5343 2.68293 13.7617 2.71082 13.9795 2.76349C13.0409 1.12313 11.2845 0 9.24059 0H7.59335ZM8.64135 18.5366C7.75032 18.5366 6.79967 18.0855 6.06515 17.0732H11.2175C10.483 18.0855 9.53237 18.5366 8.64135 18.5366Z" fill="white" />
                            </svg>
                            <div>
                                <img src={Steph} className="w-10 h-10 md:w-auto md:h-auto" />
                            </div>



                        </div>
                    </div>
                </nav>
                <div className="hero w-[100%] flex flex-col gap-20 md:flex-row">
                    <div className="w-full lg:w-[60%] grid gap-5">
                        <div className="task flex  flex-col gap-3 justify-start md:flex-row md:justify-between items-start ml-2">
                            <div className="w-[90%] bg-slate-800 md:bg-transparent p-2 rounded justify-between md:justify-start  md:w-auto flex gap-4 items-center jus">
                                <div className="bg-[#392156c3]  p-2 md:p-3 rounded-xl text-white">
                                    <div>
                                        <svg width={32} height={32} viewBox="0 0 32 32" fill="none" className="w-7 h-7 " xmlns="http://www.w3.org/2000/svg">
                                            <path d="M25.7327 10.56V17.4267C25.7327 21.5333 23.386 23.2933 19.866 23.2933H8.14595C7.54595 23.2933 6.97263 23.24 6.4393 23.12C6.10596 23.0667 5.78596 22.9733 5.49263 22.8667C3.49263 22.12 2.2793 20.3867 2.2793 17.4267V10.56C2.2793 6.45331 4.62595 4.69336 8.14595 4.69336H19.866C22.8527 4.69336 24.9994 5.96001 25.5727 8.85335C25.666 9.38668 25.7327 9.93331 25.7327 10.56Z" stroke="white" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M29.7348 14.5601V21.4268C29.7348 25.5335 27.3881 27.2935 23.8681 27.2935H12.1481C11.1614 27.2935 10.2681 27.1601 9.49475 26.8668C7.90809 26.2801 6.82807 25.0668 6.44141 23.1201C6.97474 23.2401 7.54807 23.2935 8.14807 23.2935H19.8681C23.3881 23.2935 25.7348 21.5335 25.7348 17.4268V10.5601C25.7348 9.93346 25.6815 9.37352 25.5748 8.85352C28.1081 9.38685 29.7348 11.1735 29.7348 14.5601Z" stroke="white" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M13.9985 17.5199C15.9425 17.5199 17.5185 15.9439 17.5185 13.9999C17.5185 12.0558 15.9425 10.4798 13.9985 10.4798C12.0545 10.4798 10.4785 12.0558 10.4785 13.9999C10.4785 15.9439 12.0545 17.5199 13.9985 17.5199Z" stroke="white" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6.37305 11.0667V16.9335" stroke="white" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M21.6289 11.0671V16.9337" stroke="white" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="text-white">

                                    <h6 className="text-[12px] font-extralight uppercase">Total assets</h6>
                                    <h1 className="text-[19px] md:text-[22px] font-semibold">$ 87.743</h1>
                                </div>
                            </div>
                            <div className="w-[90%] bg-slate-800  md:bg-transparent p-2 justify-between md:justify-start  md:w-auto flex gap-4 items-center">
                                <div className="bg-[#392156c3] p-2 md:p-3 rounded-xl text-white">
                                    <div>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.9945 8.64243C23.3813 8.44913 22.6921 8.35528 21.896 8.30615C20.986 8.25 19.8801 8.25 18.5233 8.25H15.4607C13.8573 8.24999 12.6004 8.24999 11.5962 8.34547C10.5727 8.44279 9.73455 8.64457 8.99573 9.09732C8.22203 9.57144 7.57153 10.2219 7.09741 10.9956C7.08062 11.023 7.06416 11.0506 7.04805 11.0783C7.12534 9.63513 7.32723 8.67932 7.85454 7.92267C8.13049 7.5267 8.46451 7.17848 8.84432 6.89079C10.0204 6 11.698 6 15.0532 6H20.4219C22.1091 6 22.9527 6 23.4769 6.54645C23.8794 6.96614 23.9728 7.58228 23.9945 8.64243Z" fill="white" />
                                            <path d="M7.7368 11.3875C7 12.5899 7 14.2266 7 17.5C7 20.7734 7 22.4101 7.7368 23.6125C8.14908 24.2853 8.71473 24.8509 9.38751 25.2632C10.5899 26 12.2266 26 15.5 26H18.5C21.7734 26 23.4101 26 24.6125 25.2632C25.2853 24.8509 25.8509 24.2853 26.2632 23.6125C26.7471 22.8229 26.9132 21.8459 26.9702 20.3409H20.6365C18.716 20.3409 17.1592 18.7841 17.1592 16.8637C17.1592 14.9432 18.716 13.3864 20.6365 13.3864H26.8777C26.7775 12.5587 26.5951 11.9291 26.2632 11.3875C25.8509 10.7147 25.2853 10.1491 24.6125 9.7368C24.421 9.61943 24.2184 9.52076 24 9.43781C22.8472 9 21.252 9 18.5 9H15.5C12.2266 9 10.5899 9 9.38751 9.7368C8.71473 10.1491 8.14908 10.7147 7.7368 11.3875Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.9779 14.8864H20.6365C19.5444 14.8864 18.6592 15.7716 18.6592 16.8637C18.6592 17.9557 19.5444 18.8409 20.6365 18.8409H26.9977C27 18.4268 27 17.9811 27 17.5C27 16.4828 27 15.6236 26.9779 14.8864ZM20.6365 16.1137C20.2222 16.1137 19.8865 16.4494 19.8865 16.8637C19.8865 17.2779 20.2222 17.6137 20.6365 17.6137H23.3637C23.7779 17.6137 24.1137 17.2779 24.1137 16.8637C24.1137 16.4494 23.7779 16.1137 23.3637 16.1137H20.6365Z" fill="white" />
                                        </svg>

                                    </div>
                                </div>
                                <div className="text-white">

                                    <h6 className="text-[12px] font-extralight uppercase">Total deposits</h6>
                                    <h1 className="text-[19px] md:text-[22px]font-semibold">$ 78,743</h1>
                                </div>
                            </div>
                            <div className="w-[90%] bg-slate-800 md:bg-transparent p-2  justify-between md:justify-start md:w-auto flex gap-4 items-center">
                                <div className="bg-[#392156c3] p-2 md:p-3 rounded-xl text-white">
                                    <div>
                                        <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M16.0453 6.25C17.8818 6.24999 19.3214 6.24999 20.4635 6.37373C21.6291 6.50001 22.5734 6.76232 23.3798 7.34815C23.8679 7.70281 24.2972 8.13209 24.6518 8.62024C25.2377 9.42656 25.5 10.3709 25.6263 11.5365C25.75 12.6786 25.75 14.1182 25.75 15.9547V16.0453C25.75 17.8818 25.75 19.3214 25.6263 20.4635C25.5 21.6291 25.2377 22.5734 24.6518 23.3798C24.2972 23.8679 23.8679 24.2972 23.3798 24.6518C22.5734 25.2377 21.6291 25.5 20.4635 25.6263C19.3214 25.75 17.8818 25.75 16.0453 25.75H15.9547C14.1182 25.75 12.6786 25.75 11.5365 25.6263C10.3709 25.5 9.42656 25.2377 8.62024 24.6518C8.13209 24.2972 7.70281 23.8679 7.34815 23.3798C6.76232 22.5734 6.50001 21.6291 6.37373 20.4635C6.24999 19.3214 6.24999 17.8818 6.25 16.0453V15.9548C6.24999 14.1182 6.24999 12.6786 6.37373 11.5365C6.50001 10.3709 6.76232 9.42656 7.34815 8.62024C7.70281 8.13209 8.13209 7.70281 8.62024 7.34815C9.42656 6.76232 10.3709 6.50001 11.5365 6.37373C12.6786 6.24999 14.1182 6.24999 15.9547 6.25H16.0453ZM16.75 11C16.75 10.5858 16.4142 10.25 16 10.25C15.5858 10.25 15.25 10.5858 15.25 11V21C15.25 21.4142 15.5858 21.75 16 21.75C16.4142 21.75 16.75 21.4142 16.75 21V11ZM20.75 15C20.75 14.5858 20.4142 14.25 20 14.25C19.5858 14.25 19.25 14.5858 19.25 15V21C19.25 21.4142 19.5858 21.75 20 21.75C20.4142 21.75 20.75 21.4142 20.75 21V15ZM12.75 17C12.75 16.5858 12.4142 16.25 12 16.25C11.5858 16.25 11.25 16.5858 11.25 17V21C11.25 21.4142 11.5858 21.75 12 21.75C12.4142 21.75 12.75 21.4142 12.75 21V17Z" fill="#FAFAFA" />
                                        </svg>


                                    </div>
                                </div>
                                <div className="text-white">

                                    <h6 className="text-[12px] font-extralight uppercase">APY</h6>
                                    <h1 className="text-[19px] md:text-[22px] font-semibold">+ 12.3%</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <CryptoChart />
                        </div>

                        <div className={` p-4 rounded-lg ${isDarkMode ? "bg-[#0F0C19] text-white" : ""}`}>
                            <div>
                                <h1 className={`text-[18px] ${isDarkMode? "" : "text-white"}`}>Tokens</h1></div>
                            <table className={`w-full ${isDarkMode? "" : "!text-white"} overflow-x-auto`}>
                                <tr className="mt-5 flex justify-between items-center">
                                    <th>Name</th>
                                    <th>Balance</th>
                                    <th>Total Value</th>
                                    <th>Trade</th>
                                </tr>

                                <tr className=" mb-2 flex justify-between w-full items-center">
                                    <td className="flex gap-2 items-center">
                                        <svg width={33} height={32} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.400391" width={32} height={32} rx={16} fill="#F7931A" />
                                            <g clipPath="url(#clip0_248_765)">
                                                <path d="M28.0406 18.9029C26.4379 25.3315 19.9268 29.2438 13.4974 27.6407C7.07068 26.038 3.15834 19.5265 4.76173 13.0984C6.36371 6.66903 12.8749 2.75639 19.3023 4.35908C25.7312 5.96177 29.6433 12.474 28.0404 18.903L28.0406 18.9029H28.0406Z" fill="#F7931A" />
                                                <path d="M21.6934 14.2903C21.9322 12.6934 20.7164 11.835 19.0539 11.2623L19.5932 9.09911L18.2764 8.771L17.7514 10.8772C17.4052 10.7909 17.0497 10.7095 16.6964 10.6289L17.2252 8.50875L15.9092 8.18063L15.3696 10.3431C15.0832 10.2779 14.8018 10.2134 14.5288 10.1455L14.5303 10.1387L12.7144 9.68525L12.3641 11.0917C12.3641 11.0917 13.3411 11.3156 13.3205 11.3294C13.8537 11.4625 13.9502 11.8155 13.9342 12.0953L13.3198 14.5596C13.3565 14.569 13.4042 14.5825 13.4567 14.6036C13.4128 14.5927 13.366 14.5808 13.3175 14.5691L12.4564 18.0214C12.3912 18.1834 12.2258 18.4265 11.853 18.3342C11.8662 18.3533 10.896 18.0954 10.896 18.0954L10.2422 19.6027L11.9558 20.0299C12.2746 20.1098 12.587 20.1934 12.8946 20.2721L12.3497 22.4601L13.665 22.7882L14.2046 20.6234C14.5639 20.721 14.9126 20.811 15.254 20.8958L14.7162 23.0504L16.0331 23.3785L16.5779 21.1946C18.8233 21.6195 20.5117 21.4482 21.2224 19.4172C21.795 17.782 21.1939 16.8389 20.0126 16.2238C20.873 16.0254 21.5211 15.4595 21.6939 14.2905L21.6934 14.2902L21.6934 14.2903ZM18.6848 18.5091C18.2779 20.1443 15.5247 19.2604 14.6321 19.0387L15.3552 16.14C16.2477 16.3628 19.1101 16.8038 18.6849 18.5091H18.6848ZM19.092 14.2666C18.7208 15.754 16.4293 14.9983 15.686 14.813L16.3416 12.1841C17.0849 12.3694 19.4788 12.7152 19.0922 14.2666H19.092Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_248_765">
                                                    <rect width={24} height={24} fill="white" transform="translate(4.40039 4)" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                        <span className="font-extralight uppercase">Bitcon</span>
                                    </td>
                                    <td className="ml-[-50px] font-extralight text-[16px]">00.4321</td>
                                    <td className="font-extralight text-[16px]">$2,340.78</td>
                                    <td className="p-1 font-semibold bg-[#CB3CFF] rounded">Trade</td>
                                </tr>
                                <tr className="mb-2 flex justify-between w-full items-center">
                                    <td className="flex gap-2 items-center">
                                        <svg width={35} height={34} viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.400391" width={34} height={34} rx={17} fill="url(#paint0_linear_248_774)" />
                                            <g clipPath="url(#clip0_248_774)">
                                                <path d="M17.3973 5L17.2363 5.54693V21.4161L17.3973 21.5767L24.7635 17.2225L17.3973 5Z" fill="#343434" />
                                                <path d="M17.3976 5L10.0312 17.2225L17.3976 21.5767V13.8743V5Z" fill="#8C8C8C" />
                                                <path d="M17.3974 22.9714L17.3066 23.082V28.7349L17.3974 28.9998L24.768 18.6194L17.3974 22.9714Z" fill="#3C3C3B" />
                                                <path d="M17.3976 28.9998V22.9714L10.0312 18.6194L17.3976 28.9998Z" fill="#8C8C8C" />
                                                <path d="M17.3984 21.5767L24.7646 17.2225L17.3984 13.8743V21.5767Z" fill="#141414" />
                                                <path d="M10.0312 17.2225L17.3976 21.5767V13.8743L10.0312 17.2225Z" fill="#393939" />
                                            </g>
                                            <defs>
                                                <linearGradient id="paint0_linear_248_774" x1="5.42312" y1="3.71736e-07" x2="30.9231" y2="35.9318" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="white" />
                                                    <stop offset={1} stopColor="#D9D9D9" stopOpacity="0.71" />
                                                </linearGradient>
                                                <clipPath id="clip0_248_774">
                                                    <rect width={24} height={24} fill="white" transform="translate(5.40039 5)" />
                                                </clipPath>
                                            </defs>
                                        </svg>




                                        <span className="font-extralight uppercase">Ethereum</span>
                                    </td>
                                    <td className="ml-[-75px] font-extralight text-[16px]">32.2034</td>
                                    <td className="font-extralight text-[16px]">$5,340.00</td>
                                    <td className="p-1 font-semibold bg-[#CB3CFF] rounded">Trade</td>
                                </tr>
                                <tr className="mb-2 flex justify-between w-full items-center">
                                    <td className="flex gap-2 items-center">
                                        <svg width={34} height={33} viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.9004" cy="16.5" r="16.5" fill="#50AF95" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.0936 8.60616L7.74937 15.6293C7.736 15.6547 7.73139 15.6839 7.73627 15.7122C7.74114 15.7405 7.75523 15.7665 7.77634 15.786L16.8038 24.4408C16.8298 24.4642 16.8636 24.4772 16.8985 24.4772C16.9335 24.4772 16.9672 24.4642 16.9932 24.4408L26.0261 15.786C26.047 15.7663 26.0609 15.7404 26.0658 15.7122C26.0707 15.6839 26.0662 15.6548 26.0531 15.6293L22.7088 8.60616C22.7 8.58173 22.6836 8.56073 22.6621 8.54615C22.6405 8.53157 22.615 8.52415 22.589 8.52496H11.2122C11.1866 8.52566 11.1617 8.53368 11.1405 8.54806C11.1192 8.56245 11.1026 8.58261 11.0924 8.60616H11.0936Z" fill="#FDFDFF" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M18.0637 16.3479C17.999 16.3533 17.664 16.3748 16.9183 16.3748C16.3242 16.3748 15.9026 16.3587 15.7513 16.3479C13.4554 16.2454 11.7429 15.8454 11.7429 15.37C11.7429 14.8945 13.4554 14.4894 15.7513 14.3869V15.9482C15.9011 15.959 16.3296 15.986 16.9237 15.986C17.6368 15.986 17.9933 15.9536 18.0583 15.9482V14.3869C20.3488 14.4894 22.0614 14.8894 22.0614 15.3646C22.0614 15.8397 20.3536 16.2454 18.0637 16.3479ZM18.0637 14.2302V12.8308H21.262V10.697H12.5533V12.8308H15.7513V14.2302C13.1528 14.3501 11.1973 14.8621 11.1973 15.4835C11.1973 16.1049 13.1528 16.6127 15.7513 16.7368V21.2156H18.0637V16.7368C20.6568 16.6169 22.6073 16.1046 22.6073 15.4889C22.6073 14.8732 20.6568 14.3489 18.0637 14.2305V14.2302Z" fill="#50AF95" />
                                        </svg>




                                        <span className="font-extralight uppercase">Tether</span>
                                    </td>
                                    <td className="ml-[-50px] font-extralight text-[16px]">102.9860</td>
                                    <td className="font-extralight text-[16px]">$$4,890.32</td>
                                    <td className="p-1 font-semibold bg-[#CB3CFF] rounded">Trade</td>
                                </tr>

                            </table>
                        </div>
                    </div>
                    <div className="grid gap-5 lg:w-[30%] content-start rounded-xl p-3 ">
                        <div className={`${isDarkMode ? "bg-[#0F0C19]" : "bg-[#4b4d69]"} bg-[#0F0C19] w-full lg:w-[80%] p-4`}>
                            <div><h1 className="text-white text-[18px]"> Chain Allocation</h1></div>
                            <div className="mt-4">
                                <div className="grid gap-2">
                                    <div className="flex justify-between">
                                        <div className="flex items-center gap-2">
                                            <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width={32} height={32} rx={16} fill="#F7931A" />
                                                <g clipPath="url(#clip0_248_797)">
                                                    <path d="M27.6402 18.9029C26.0375 25.3315 19.5264 29.2438 13.097 27.6407C6.67028 26.038 2.75795 19.5265 4.36134 13.0984C5.96332 6.66903 12.4745 2.75639 18.9019 4.35908C25.3308 5.96177 29.2429 12.474 27.6401 18.903L27.6402 18.9029H27.6402Z" fill="#F7931A" />
                                                    <path d="M21.293 14.2903C21.5318 12.6933 20.316 11.8349 18.6535 11.2623L19.1929 9.0991L17.8761 8.77098L17.351 10.8772C17.0049 10.7909 16.6493 10.7095 16.296 10.6289L16.8248 8.50873L15.5089 8.18062L14.9692 10.3431C14.6828 10.2779 14.4014 10.2134 14.1284 10.1455L14.1299 10.1387L12.314 9.68523L11.9638 11.0917C11.9638 11.0917 12.9407 11.3156 12.9201 11.3294C13.4534 11.4625 13.5498 11.8155 13.5338 12.0952L12.9194 14.5596C12.9561 14.569 13.0038 14.5824 13.0563 14.6036C13.0124 14.5927 12.9656 14.5807 12.9171 14.5691L12.056 18.0214C11.9909 18.1834 11.8254 18.4265 11.4526 18.3342C11.4658 18.3533 10.4956 18.0953 10.4956 18.0953L9.8418 19.6027L11.5554 20.0298C11.8742 20.1098 12.1866 20.1934 12.4942 20.2721L11.9493 22.4601L13.2646 22.7882L13.8042 20.6234C14.1635 20.721 14.5123 20.811 14.8536 20.8958L14.3158 23.0503L15.6327 23.3785L16.1775 21.1946C18.423 21.6195 20.1113 21.4482 20.822 19.4172C21.3946 17.782 20.7935 16.8388 19.6122 16.2238C20.4726 16.0254 21.1207 15.4595 21.2935 14.2905L21.2931 14.2902L21.293 14.2903ZM18.2844 18.5091C17.8775 20.1443 15.1243 19.2604 14.2317 19.0387L14.9548 16.14C15.8474 16.3628 18.7097 16.8038 18.2845 18.5091H18.2844ZM18.6916 14.2666C18.3204 15.754 16.029 14.9983 15.2856 14.813L15.9412 12.184C16.6845 12.3693 19.0784 12.7152 18.6918 14.2666H18.6916Z" fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_248_797">
                                                        <rect width={24} height={24} fill="white" transform="translate(4 4)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span className="font-extralight uppercase text-[12px] text-white">Bitcoin</span>


                                        </div>
                                        <p className="text-[14px] text-white">$ 23,3B</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <svg width={115} height={6} viewBox="0 0 115 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width={115} height={6} rx={3} fill="#0A0714" />
                                            <rect width={55} height={6} rx={3} fill="url(#paint0_linear_248_802)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_248_802" x1="5.52916" y1="0.603181" x2="6.64789" y2="9.86583" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#CB3CFF" />
                                                    <stop offset={1} stopColor="#F7931A" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <span className="text-[14px] text-white">71.68%</span>

                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="grid gap-2">
                                    <div className="flex justify-between">
                                        <div className="flex items-center gap-2">
                                            <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width={32} height={32} rx={16} fill="url(#paint0_linear_248_808)" />
                                                <g clipPath="url(#clip0_248_808)">
                                                    <path d="M15.997 4L15.8359 4.54693V20.4161L15.997 20.5767L23.3631 16.2225L15.997 4Z" fill="#343434" />
                                                    <path d="M15.9972 4L8.63086 16.2225L15.9972 20.5767V12.8743V4Z" fill="#8C8C8C" />
                                                    <path d="M15.997 21.9714L15.9062 22.0821V27.7349L15.997 27.9998L23.3677 17.6195L15.997 21.9714Z" fill="#3C3C3B" />
                                                    <path d="M15.9972 27.9998V21.9714L8.63086 17.6195L15.9972 27.9998Z" fill="#8C8C8C" />
                                                    <path d="M15.998 20.5767L23.3642 16.2225L15.998 12.8743V20.5767Z" fill="#141414" />
                                                    <path d="M8.63086 16.2225L15.9972 20.5767V12.8743L8.63086 16.2225Z" fill="#393939" />
                                                </g>
                                                <defs>
                                                    <linearGradient id="paint0_linear_248_808" x1="4.72727" y1="3.49869e-07" x2="28.7273" y2="33.8182" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="white" />
                                                        <stop offset={1} stopColor="#D9D9D9" stopOpacity="0.71" />
                                                    </linearGradient>
                                                    <clipPath id="clip0_248_808">
                                                        <rect width={24} height={24} fill="white" transform="translate(4 4)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span className="font-extralight uppercase text-[12px] text-white">Ethereum</span>


                                        </div>
                                        <p className="text-[14px] text-white">$ 23,3B</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <svg width={115} height={6} viewBox="0 0 115 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width={115} height={6} rx={3} fill="#0A0714" />
                                            <rect width={55} height={6} rx={3} fill="url(#paint0_linear_248_802)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_248_802" x1="5.52916" y1="0.603181" x2="6.64789" y2="9.86583" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#CB3CFF" />
                                                    <stop offset={1} stopColor="#F7931A" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <span className="text-[14px] text-white">71.68%</span>

                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="grid gap-2">
                                    <div className="flex justify-between">
                                        <div className="flex items-center gap-2">
                                            <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx={16} cy={16} r={16} fill="#50AF95" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M10.3668 8.34537L7.12392 15.1557C7.11095 15.1804 7.10648 15.2086 7.11121 15.2361C7.11594 15.2636 7.12959 15.2887 7.15006 15.3076L15.904 23.7002C15.9292 23.7229 15.9619 23.7354 15.9958 23.7354C16.0297 23.7354 16.0624 23.7229 16.0876 23.7002L24.8468 15.3076C24.8671 15.2886 24.8806 15.2634 24.8853 15.236C24.89 15.2086 24.8857 15.1804 24.873 15.1557L21.6301 8.34537C21.6215 8.32168 21.6056 8.30131 21.5847 8.28718C21.5638 8.27304 21.539 8.26585 21.5139 8.26663H10.4819C10.457 8.26731 10.4328 8.27509 10.4123 8.28904C10.3917 8.30299 10.3755 8.32253 10.3656 8.34537H10.3668Z" fill="#FDFDFF" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M17.1252 15.8524C17.0624 15.8576 16.7376 15.8786 16.0145 15.8786C15.4383 15.8786 15.0296 15.8629 14.8828 15.8524C12.6565 15.7531 10.9959 15.3652 10.9959 14.9041C10.9959 14.4431 12.6565 14.0503 14.8828 13.9509V15.4649C15.0281 15.4753 15.4436 15.5015 16.0197 15.5015C16.7112 15.5015 17.0569 15.4701 17.1199 15.4649V13.9509C19.341 14.0503 21.0017 14.4381 21.0017 14.8989C21.0017 15.3597 19.3457 15.7531 17.1252 15.8524ZM17.1252 13.799V12.4419H20.2266V10.3727H11.7817V12.4419H14.8828V13.799C12.3631 13.9152 10.4668 14.4117 10.4668 15.0142C10.4668 15.6168 12.3631 16.1092 14.8828 16.2295V20.5727H17.1252V16.2295C19.6397 16.1133 21.531 15.6165 21.531 15.0195C21.531 14.4224 19.6397 13.914 17.1252 13.7992V13.799Z" fill="#50AF95" />
                                            </svg>

                                            <span className="font-extralight uppercase text-[12px] text-white">USDT</span>


                                        </div>
                                        <p className="text-[14px] text-white">$ 23,3B</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <svg width={115} height={6} viewBox="0 0 115 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width={115} height={6} rx={3} fill="#0A0714" />
                                            <rect width={55} height={6} rx={3} fill="url(#paint0_linear_248_802)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_248_802" x1="5.52916" y1="0.603181" x2="6.64789" y2="9.86583" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#CB3CFF" />
                                                    <stop offset={1} stopColor="#F7931A" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <span className="text-[14px] text-white">71.68%</span>

                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="grid gap-2">
                                    <div className="flex justify-between">
                                        <div className="flex items-center gap-2">
                                            <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width={32} height={32} rx={16} fill="#F00500" />
                                                <g clipPath="url(#clip0_248_831)">
                                                    <path d="M21.5726 6.11144C20.948 6.72901 20.3758 7.39835 19.8672 8.11206L19.7063 8.06029C18.7788 7.76075 17.8176 7.57585 16.8489 7.51298C16.5572 7.4908 15.4688 7.4908 15.1135 7.51298C14.0401 7.58325 13.2173 7.74226 12.2823 8.06399C12.2449 8.07878 12.2112 8.08987 12.1776 8.10097C11.6502 7.39095 11.063 6.72531 10.416 6.11514C13.5203 4.54349 17.1519 4.3549 20.402 5.59372C20.7498 5.72315 21.0902 5.87477 21.423 6.03748L21.5726 6.11144Z" fill="#F00500" />
                                                    <path d="M27.3617 20.138C26.8905 21.4655 26.1836 22.697 25.2673 23.7694C24.7699 24.3463 24.2201 24.8751 23.6292 25.3558C22.2453 26.4578 20.6296 27.2455 18.9055 27.6597C16.998 28.1145 15.0083 28.1145 13.1009 27.6597C11.373 27.2455 9.761 26.4578 8.37717 25.3558C7.78624 24.8751 7.23645 24.3463 6.73902 23.7694C4.10228 20.689 3.3019 16.4584 4.64459 12.6458C4.89891 11.9395 5.21682 11.2591 5.5983 10.6119C5.77409 10.3161 5.99101 9.98325 6.09573 9.84642C6.45478 11.3737 6.89611 12.7161 7.06067 13.2005C7.04945 13.2264 7.03449 13.256 7.01953 13.2819C6.14809 15.0273 5.67685 16.7099 5.56464 18.4997C5.56464 18.5219 5.5609 18.5478 5.5609 18.57C5.53098 19.1062 5.54594 19.3614 5.6357 19.6979C5.91621 20.7518 6.78017 21.913 8.13407 23.052C10.3519 24.9158 13.3589 26.2618 15.6366 26.4172C18.0116 26.5762 21.516 25.2042 23.8498 23.1999C24.2163 22.8782 24.5604 22.538 24.8821 22.1756C25.114 21.9093 25.4581 21.4507 25.4319 21.4507C25.4244 21.4507 25.4319 21.4433 25.4468 21.436C25.4581 21.4286 25.4693 21.4175 25.4618 21.4101C25.458 21.4064 25.4655 21.3953 25.4767 21.3916C25.488 21.3879 25.4955 21.3805 25.4917 21.3731C25.488 21.3657 25.4917 21.3583 25.5067 21.3546C25.5179 21.3509 25.5216 21.3398 25.5179 21.3324C25.5141 21.325 25.5179 21.3176 25.5254 21.3176C25.5329 21.3176 25.5403 21.3065 25.5403 21.2991C25.5403 21.2917 25.5478 21.2806 25.5553 21.2806C25.5628 21.2806 25.5703 21.2732 25.5703 21.2658C25.5815 21.2363 25.6002 21.2067 25.6189 21.1808C25.675 21.0957 25.8994 20.7 25.9293 20.6335C26.1425 20.1564 26.2771 19.7312 26.3407 19.3059C26.3706 19.1025 26.3893 18.729 26.3744 18.6403C26.3706 18.6255 26.3706 18.5996 26.3669 18.5589C26.3594 18.4849 26.3557 18.374 26.3482 18.2631C26.3407 18.0967 26.3257 17.8637 26.3145 17.749C26.1537 16.0702 25.7199 14.6982 24.897 13.2449C24.8634 13.1894 24.8335 13.1339 24.8148 13.0896C24.8073 13.0785 24.8035 13.0674 24.7998 13.06C24.9157 12.7161 25.3907 11.2775 25.7685 9.63194L25.776 9.63933L25.8321 9.71329C25.9293 9.84272 26.1874 10.2273 26.3033 10.4122C26.8307 11.2628 27.2421 12.1762 27.5338 13.1302C28.2107 15.4267 28.1546 17.8748 27.3617 20.138Z" fill="#F00500" />
                                                    <path d="M22.5065 15.7188C22.4952 15.778 22.3194 15.9555 22.1437 16.0849C21.6275 16.4584 20.7037 16.8061 19.765 16.9725C19.2301 17.0686 18.6953 17.0834 18.5345 17.0057C18.4297 16.954 18.4148 16.9133 18.4522 16.7802C18.5307 16.5028 18.7851 16.1996 19.1815 15.9148C19.3835 15.7706 20.2026 15.2788 20.584 15.0717C21.2124 14.7315 21.721 14.5281 22.0651 14.48C22.1736 14.4652 22.3045 14.4615 22.3456 14.48C22.413 14.5059 22.4878 14.7019 22.5177 14.9386C22.5326 15.0643 22.5252 15.619 22.5065 15.7188Z" fill="black" />
                                                    <path d="M13.6948 16.9429C13.6724 16.9873 13.5602 17.0353 13.433 17.0538C13.3059 17.0723 12.9169 17.0612 12.6962 17.0353C11.9033 16.9318 11.0618 16.6914 10.4484 16.3956C10.1044 16.2292 9.85751 16.0628 9.67425 15.8816L9.56953 15.7743L9.55831 15.6338C9.5396 15.3897 9.54335 15.0051 9.57327 14.8683C9.59197 14.7537 9.63311 14.6427 9.68921 14.5429C9.71913 14.5059 9.71913 14.5059 9.85377 14.5059C10.0183 14.5059 10.1567 14.5318 10.3811 14.602C10.8412 14.7426 11.5256 15.0828 12.3596 15.5783C13.0478 15.9851 13.3059 16.1848 13.5041 16.4584C13.6387 16.6285 13.7285 16.8689 13.6948 16.9429Z" fill="black" />
                                                    <path d="M18.9918 22.0905C18.9918 22.1016 18.9469 22.2791 18.8908 22.4899C18.8347 22.7007 18.7898 22.8708 18.7898 22.8782C18.7487 22.8819 18.7113 22.8856 18.6701 22.8819H18.5504L18.3859 23.2665C18.2961 23.4772 18.2138 23.6732 18.2026 23.7028L18.1802 23.7546L18.1016 23.6289L18.0231 23.5031V22.4788L17.9932 22.4862C17.9296 22.501 17.477 22.5601 17.2788 22.5786C16.4597 22.66 15.6369 22.6415 14.8216 22.5269C14.6907 22.5084 14.5785 22.4936 14.5747 22.4973C14.571 22.501 14.5747 22.7376 14.5822 23.0298L14.5934 23.5549L14.5299 23.651C14.4962 23.7028 14.4625 23.7472 14.4625 23.7509C14.4513 23.762 14.4139 23.7028 14.3279 23.5327C14.2344 23.3552 14.1671 23.1666 14.1184 22.9706L14.0923 22.8634L13.9763 22.8708L13.8604 22.8819L13.8305 22.745C13.8155 22.6711 13.7968 22.5564 13.7893 22.4936L13.7781 22.3752L13.6809 22.2902C13.6248 22.2421 13.5687 22.194 13.5574 22.1866C13.5387 22.1718 13.5312 22.146 13.5312 22.1238V22.0794L13.9988 22.0831L14.4663 22.0868L14.4812 22.1349L14.4962 22.1829L14.657 22.1903C14.7468 22.194 15.031 22.2014 15.2854 22.2088L15.7529 22.2199L15.8725 22.035L15.996 21.8501H16.1531L16.1493 21.4655L16.1456 21.0809L15.9399 20.9922C15.2779 20.7037 14.8889 20.3746 14.743 19.9752C14.7131 19.8939 14.7131 19.8643 14.7056 19.4945C14.7019 19.1284 14.7019 19.0951 14.7281 19.0138C14.7804 18.8289 14.9263 18.6846 15.1133 18.6366C15.1769 18.6181 15.3452 18.6181 16.2279 18.6181L17.2676 18.6218L17.3835 18.6772C17.5219 18.7438 17.5855 18.7919 17.664 18.8954C17.7538 19.0138 17.78 19.1062 17.78 19.3318C17.78 19.6535 17.7576 19.9309 17.7239 20.0418C17.6753 20.1934 17.6005 20.3376 17.507 20.4671C17.32 20.7037 16.9796 20.9404 16.6692 21.0477L16.5794 21.0809L16.5832 21.4692L16.5869 21.8575L16.6692 21.8649L16.7515 21.8723L16.8637 22.0387L16.9721 22.2051H17.4733C17.7501 22.2051 17.9932 22.2088 18.0156 22.2125C18.053 22.2199 18.0605 22.2162 18.0979 22.1534L18.1428 22.0868H18.5729C18.8945 22.072 18.9918 22.0794 18.9918 22.0905Z" fill="black" />
                                                    <path d="M17.0161 23.1518C16.945 23.1925 16.8964 23.211 16.8852 23.2036C16.8739 23.1999 16.8216 23.1555 16.7655 23.1148L16.6645 23.0335L16.5598 23.1444C16.3316 23.3885 16.3241 23.3996 16.2568 23.4033C16.1521 23.4144 16.1297 23.3959 16.0025 23.2073C15.9352 23.1111 15.8828 23.0298 15.8828 23.0298C15.8828 23.0298 15.8342 23.0224 15.7781 23.0187L15.6734 23.0076L15.6248 23.1074L15.5761 23.2073L15.4901 23.1814C15.4228 23.1592 15.3555 23.1333 15.2919 23.1037L15.1797 23.0482V22.8375L16.1745 22.8412L17.1694 22.8449L17.1731 22.9447C17.1769 23.063 17.1806 23.0593 17.0161 23.1518Z" fill="black" />
                                                    <path d="M26.3669 18.6402C26.3631 18.6255 26.3631 18.5996 26.3594 18.5589C25.4618 18.4627 22.8998 18.4036 20.5211 20.345C20.5211 20.345 19.7544 16.8689 16.164 16.8689C12.5735 16.8689 11.242 20.345 11.242 20.345C9.22989 18.2039 6.53704 18.3592 5.56462 18.4997C5.56462 18.5219 5.56088 18.5478 5.56088 18.57C5.53096 19.1062 5.54592 19.3614 5.63568 19.6979C5.91619 20.7518 6.78014 21.913 8.13405 23.052C10.3519 24.9157 13.3589 26.2618 15.6366 26.4171C18.0116 26.5761 21.516 25.2042 23.8498 23.1999C24.2163 22.8781 24.5604 22.5379 24.8821 22.1755C25.1139 21.9093 25.458 21.4507 25.4319 21.4507C25.4244 21.4507 25.4319 21.4433 25.4468 21.4359C25.458 21.4285 25.4693 21.4174 25.4618 21.41C25.458 21.4063 25.4655 21.3953 25.4767 21.3916C25.488 21.3879 25.4954 21.3805 25.4917 21.3731C25.488 21.3657 25.4917 21.3583 25.5067 21.3546C25.5179 21.3509 25.5216 21.3398 25.5179 21.3324C25.5141 21.325 25.5179 21.3176 25.5254 21.3176C25.5328 21.3176 25.5403 21.3065 25.5403 21.2991C25.5403 21.2917 25.5478 21.2806 25.5553 21.2806C25.5628 21.2806 25.5702 21.2732 25.5702 21.2658C25.5815 21.2362 25.6002 21.2067 25.6189 21.1808C25.675 21.0957 25.8994 20.7 25.9293 20.6335C26.1425 20.1564 26.2771 19.7312 26.3407 19.3059C26.3631 19.1025 26.3818 18.729 26.3669 18.6402ZM17.0167 23.1518C16.9456 23.1925 16.897 23.211 16.8858 23.2036C16.8746 23.1999 16.8222 23.1555 16.7661 23.1148L16.6651 23.0335L16.5604 23.1444C16.3323 23.3885 16.3248 23.3996 16.2575 23.4033C16.1527 23.4144 16.1303 23.3959 16.0031 23.2073C15.9358 23.1111 15.8835 23.0298 15.8835 23.0298C15.8835 23.0298 15.8348 23.0224 15.7787 23.0187L15.674 23.0076L15.6254 23.1074L15.5768 23.2073L15.4908 23.1814C15.4234 23.1592 15.3561 23.1333 15.2925 23.1037L15.1803 23.0483V22.8375L16.1752 22.8412L17.17 22.8449L17.1738 22.9447C17.1775 23.063 17.1813 23.0594 17.0167 23.1518ZM18.8867 22.4862C18.8306 22.6969 18.7858 22.8671 18.7858 22.8745C18.7446 22.8781 18.7072 22.8818 18.6661 22.8781H18.5464L18.3856 23.2664C18.2958 23.4772 18.2135 23.6732 18.2023 23.7028L18.1799 23.7546L18.1013 23.6288L18.0228 23.5031V22.4788L17.9929 22.4862C17.9293 22.501 17.4767 22.5601 17.2785 22.5786C16.4594 22.66 15.6366 22.6415 14.8213 22.5268C14.6904 22.5083 14.5782 22.4936 14.5744 22.4973C14.5707 22.501 14.5744 22.7376 14.5819 23.0298L14.5931 23.5549L14.5296 23.651C14.4959 23.7028 14.4622 23.7472 14.4622 23.7509C14.451 23.762 14.4136 23.7028 14.3276 23.5327C14.2341 23.3552 14.1668 23.1666 14.1182 22.9706L14.092 22.8634L13.976 22.8708L13.8601 22.8818L13.8302 22.745C13.8152 22.6711 13.7965 22.5564 13.789 22.4936L13.7778 22.3752L13.6806 22.2902C13.6245 22.2421 13.5684 22.194 13.5571 22.1866C13.5384 22.1718 13.531 22.1459 13.531 22.1238V22.0794L13.9985 22.0831L14.466 22.0868L14.4809 22.1349L14.4959 22.1829L14.6567 22.1903C14.7465 22.194 15.0307 22.2014 15.2851 22.2088L15.7526 22.2199L15.8722 22.035L15.9957 21.8501H16.1527L16.149 21.4655L16.1453 21.0809L15.9396 20.9922C15.2776 20.7037 14.8886 20.3746 14.7427 19.9752C14.7128 19.8939 14.7128 19.8643 14.7053 19.4945C14.7016 19.1284 14.7016 19.0951 14.7278 19.0137C14.7801 18.8288 14.926 18.6846 15.113 18.6365C15.1766 18.6181 15.3449 18.6181 16.2276 18.6181L17.2673 18.6218L17.3832 18.6772C17.5216 18.7438 17.5852 18.7919 17.6637 18.8954C17.7535 19.0137 17.7797 19.1062 17.7797 19.3318C17.7797 19.6535 17.7572 19.9308 17.7236 20.0418C17.675 20.1934 17.6002 20.3376 17.5067 20.4671C17.3196 20.7037 16.9793 20.9404 16.6689 21.0476L16.5791 21.0809L16.5829 21.4692L16.5866 21.8575L16.6689 21.8649L16.7512 21.8723L16.8634 22.0387L16.9718 22.2051H17.473C17.7498 22.2051 17.9929 22.2088 18.0153 22.2125C18.0527 22.2199 18.0602 22.2162 18.0976 22.1533L18.1425 22.0868H18.5726C18.9054 22.0868 19.0027 22.0905 19.0027 22.1016C18.9915 22.0979 18.9428 22.2791 18.8867 22.4862Z" fill="white" />
                                                    <path d="M26.3364 18.2631C26.329 18.0966 26.314 17.8637 26.3028 17.749C26.142 16.0701 25.7081 14.6982 24.8853 13.2449C24.8516 13.1894 24.8217 13.1339 24.803 13.0896C24.7955 13.0785 24.7918 13.0674 24.7881 13.06C24.904 12.7161 25.379 11.2775 25.7567 9.63193C26.2691 7.39834 26.5945 4.78756 25.5997 4.00359C25.5997 4.00359 23.8792 3.87785 21.5753 6.11144C20.9508 6.72901 20.3785 7.39834 19.8699 8.11206L19.709 8.06028C18.7815 7.76075 17.8203 7.57585 16.8516 7.51298C16.5599 7.49079 15.4716 7.49079 15.1162 7.51298C14.0428 7.58324 13.22 7.74226 12.285 8.06398C12.2476 8.07877 12.214 8.08987 12.1803 8.10096C11.6529 7.39095 11.0658 6.72531 10.4187 6.11514C8.02134 3.87046 6.23733 3.99989 6.23733 3.99989C5.18263 4.80975 5.54168 7.53887 6.08773 9.84642C6.44678 11.3737 6.8881 12.7161 7.05267 13.2005C7.04145 13.2264 7.02649 13.256 7.01153 13.2819C6.14009 15.0273 5.66884 16.7099 5.55664 18.4997C6.5328 18.3592 9.22191 18.2002 11.2378 20.345C11.2378 20.345 12.5693 16.8689 16.1597 16.8689C19.7502 16.8689 20.5169 20.345 20.5169 20.345C22.8956 18.4036 25.4575 18.4664 26.3551 18.5589C26.3514 18.4849 26.3439 18.374 26.3364 18.2631ZM7.75954 11.8064C7.75954 11.8064 6.36075 8.34873 6.7198 6.374C6.77964 6.04118 6.89184 5.74904 7.06763 5.52716C7.06763 5.52716 8.65341 5.68248 11.2116 8.49295C11.2116 8.49295 10.7254 8.72592 10.0746 9.22146C10.0746 9.22146 10.0709 9.22515 10.0672 9.22515C9.36029 9.76136 8.45519 10.6119 7.75954 11.8064ZM13.695 16.9429C13.6726 16.9872 13.5604 17.0353 13.4332 17.0538C13.3061 17.0723 12.9171 17.0612 12.6964 17.0353C11.9035 16.9318 11.062 16.6914 10.4486 16.3956C10.1046 16.2292 9.85771 16.0627 9.67445 15.8815L9.56973 15.7743L9.55851 15.6338C9.53981 15.3897 9.54355 15.0051 9.57347 14.8683C9.59217 14.7537 9.63331 14.6427 9.68941 14.5429C9.71933 14.5059 9.71933 14.5059 9.85398 14.5059C10.0185 14.5059 10.1569 14.5318 10.3813 14.602C10.8414 14.7426 11.5258 15.0828 12.3598 15.5783C13.048 15.9851 13.3061 16.1848 13.5043 16.4584C13.6389 16.6285 13.7287 16.8689 13.695 16.9429ZM22.5066 15.7188C22.4954 15.778 22.3196 15.9555 22.1438 16.0849C21.6277 16.4584 20.7039 16.806 19.7651 16.9724C19.2303 17.0686 18.6955 17.0834 18.5347 17.0057C18.4299 16.954 18.415 16.9133 18.4524 16.7802C18.5309 16.5028 18.7853 16.1996 19.1817 15.9148C19.3837 15.7706 20.2027 15.2788 20.5842 15.0717C21.2126 14.7315 21.7212 14.5281 22.0653 14.48C22.1738 14.4652 22.3047 14.4615 22.3458 14.48C22.4131 14.5059 22.4879 14.7019 22.5178 14.9386C22.5328 15.0643 22.5253 15.619 22.5066 15.7188ZM21.8858 9.22146L21.8783 9.21776C21.25 8.72223 20.7787 8.48925 20.7787 8.48925C23.2509 5.67878 24.7806 5.52346 24.7806 5.52346C24.9489 5.74904 25.0573 6.03748 25.1172 6.3703C25.465 8.34503 24.1148 11.8064 24.1148 11.8064C23.5501 10.8116 22.7909 9.93147 21.8858 9.22146Z" fill="#FFA409" />
                                                    <path d="M25.1215 6.37031C24.8298 6.33333 23.4497 6.32593 21.8863 9.22146L21.8789 9.21776C21.2505 8.72223 20.7793 8.48926 20.7793 8.48926C23.2515 5.67878 24.7811 5.52346 24.7811 5.52346C24.9532 5.74904 25.0616 6.03749 25.1215 6.37031Z" fill="#FF9300" />
                                                    <path d="M24.1195 11.8064C23.551 10.8079 22.7956 9.93148 21.8867 9.22146C23.4501 6.32593 24.8264 6.33333 25.1219 6.37031C25.4697 8.34873 24.1195 11.8064 24.1195 11.8064Z" fill="#FF8300" />
                                                    <path d="M25.1772 6.3814C25.1585 6.3777 25.1398 6.374 25.1211 6.3703L25.1772 6.3814Z" fill="#FF8300" />
                                                    <path d="M11.2124 8.48926C11.2124 8.48926 10.7261 8.72223 10.0754 9.21776C10.0754 9.21776 10.0716 9.22146 10.0679 9.22146C8.44845 6.32223 7.02348 6.33333 6.7168 6.37031C6.77664 6.03749 6.88884 5.74534 7.06462 5.52346C7.06836 5.52346 8.65415 5.67878 11.2124 8.48926Z" fill="#FF9300" />
                                                    <path d="M10.0702 9.22146C9.35958 9.76137 8.45449 10.6082 7.75883 11.8064C7.75883 11.8064 6.36005 8.34873 6.71909 6.37031C7.02204 6.33333 8.45075 6.32593 10.0702 9.22146Z" fill="#FF8300" />
                                                    <path d="M6.72 6.3703C6.7013 6.374 6.67886 6.3777 6.66016 6.3814L6.72 6.3703Z" fill="#FF8300" />
                                                    <path d="M20.3336 13.7256C20.3336 13.7256 19.1368 13.7996 19.2864 12.8751C19.436 11.9506 20.371 11.8396 20.6328 11.8766C20.8946 11.9136 21.9418 12.2834 21.7548 13.06C21.5678 13.8366 21.306 13.6886 21.1564 13.7256C21.0068 13.7626 20.3336 13.7256 20.3336 13.7256Z" fill="white" />
                                                    <path d="M11.5074 13.7256C11.5074 13.7256 10.3106 13.7996 10.4602 12.8751C10.6098 11.9506 11.5448 11.8396 11.8066 11.8766C12.0684 11.9136 13.1156 12.2834 12.9286 13.06C12.7416 13.8366 12.4798 13.6886 12.3302 13.7256C12.1806 13.7626 11.5074 13.7256 11.5074 13.7256Z" fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_248_831">
                                                        <rect width={24} height={24} fill="white" transform="translate(4 4)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>


                                            <span className="font-extralight uppercase text-[12px] text-white">shiba</span>


                                        </div>
                                        <p className="text-[14px] text-white">$ 23,3B</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <svg width={115} height={6} viewBox="0 0 115 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width={115} height={6} rx={3} fill="#0A0714" />
                                            <rect width={55} height={6} rx={3} fill="url(#paint0_linear_248_802)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_248_802" x1="5.52916" y1="0.603181" x2="6.64789" y2="9.86583" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#CB3CFF" />
                                                    <stop offset={1} stopColor="#F7931A" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <span className="text-[14px] text-white">71.68%</span>

                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="grid gap-2">
                                    <div className="flex justify-between">
                                        <div className="flex items-center gap-2">
                                            <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width={32} height={32} rx={16} fill="white" />
                                                <g clipPath="url(#clip0_248_842)">
                                                    <g clipPath="url(#clip1_248_842)">
                                                        <path d="M12.0732 18.6323C12.1501 18.5553 12.256 18.5104 12.3683 18.5104H22.5512C22.7373 18.5104 22.8303 18.735 22.6988 18.8665L20.6872 20.8781C20.6102 20.9551 20.5043 21 20.392 21H10.2092C10.0231 21 9.93007 20.7754 10.0616 20.6439L12.0732 18.6323Z" fill="url(#paint0_linear_248_842)" />
                                                        <path d="M12.0732 11.1219C12.1534 11.0449 12.2592 11 12.3683 11H22.5512C22.7373 11 22.8303 11.2246 22.6988 11.3561L20.6872 13.3677C20.6102 13.4447 20.5043 13.4896 20.392 13.4896H10.2092C10.0231 13.4896 9.93007 13.265 10.0616 13.1335L12.0732 11.1219Z" fill="url(#paint1_linear_248_842)" />
                                                        <path d="M20.6872 14.8531C20.6102 14.7761 20.5043 14.7312 20.392 14.7312H10.2092C10.0231 14.7312 9.93007 14.9557 10.0616 15.0873L12.0732 17.0988C12.1501 17.1758 12.256 17.2207 12.3683 17.2207H22.5512C22.7373 17.2207 22.8303 16.9962 22.6988 16.8646L20.6872 14.8531Z" fill="url(#paint2_linear_248_842)" />
                                                    </g>
                                                </g>
                                                <defs>
                                                    <linearGradient id="paint0_linear_248_842" x1="21.5784" y1="9.79834" x2="14.5311" y2="23.2969" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#00FFA3" />
                                                        <stop offset={1} stopColor="#DC1FFF" />
                                                    </linearGradient>
                                                    <linearGradient id="paint1_linear_248_842" x1="18.4969" y1="8.18956" x2="11.4496" y2="21.6881" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#00FFA3" />
                                                        <stop offset={1} stopColor="#DC1FFF" />
                                                    </linearGradient>
                                                    <linearGradient id="paint2_linear_248_842" x1="20.0279" y1="8.98884" x2="12.9805" y2="22.4874" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#00FFA3" />
                                                        <stop offset={1} stopColor="#DC1FFF" />
                                                    </linearGradient>
                                                    <clipPath id="clip0_248_842">
                                                        <rect width={24} height={24} fill="white" transform="translate(4 4)" />
                                                    </clipPath>
                                                    <clipPath id="clip1_248_842">
                                                        <rect width="12.7591" height={10} fill="white" transform="translate(10 11)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>


                                            <span className="font-extralight uppercase text-[12px] text-white">Solana</span>


                                        </div>
                                        <p className="text-[14px] text-white">$ 23,3B</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <svg width={115} height={6} viewBox="0 0 115 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width={115} height={6} rx={3} fill="#0A0714" />
                                            <rect width={55} height={6} rx={3} fill="url(#paint0_linear_248_802)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_248_802" x1="5.52916" y1="0.603181" x2="6.64789" y2="9.86583" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#CB3CFF" />
                                                    <stop offset={1} stopColor="#F7931A" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <span className="text-[14px] text-white">71.68%</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${isDarkMode ? "bg-[#0F0C19]" : "bg-[#4b4d69]"}  w-full lg:w-[80%] p-4`}>
                            <div className="flex justify-between items-center">
                                <h1 className="text-white text-[18px]">History</h1>
                                <a className="text-blue-700 text-xs">See All</a>
                            </div>
                            <div className="grid gap-4 mt-2">
                                <div className="flex justify-between">
                                    <div className="flex  text-white gap-2">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <ellipse cx="13.9998" cy="14" rx="13.5955" ry="13.8593" fill="#32A953" fill-opacity="0.15" />
                                            <path d="M8.78189 19.5549C8.59234 19.3617 8.59234 19.0484 8.78189 18.8552L13.4724 14.0737L12.5047 13.0872C11.4604 12.0227 12.0691 10.1995 13.5336 10.0053L16.5474 9.60573C17.7055 9.45217 18.6924 10.4582 18.5417 11.6388L18.1497 14.7111C17.9592 16.204 16.1708 16.8244 15.1265 15.7599L14.1588 14.7734L9.4683 19.5549C9.27875 19.7482 8.97143 19.7482 8.78189 19.5549Z" fill="#32A953" />
                                        </svg>
                                        <span className="uppercase">Bitcoin</span>

                                    </div>
                                    <div className="text-white">
                                        <p className="text-xs text-right font-extralight">12 Aug 2024</p>
                                        <p className="text-xs text-right font-extralight">10:34AM</p>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex  text-white gap-2">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <ellipse cx="13.9998" cy="14" rx="13.5955" ry="13.8593" fill="#DA1818" fill-opacity="0.15" />
                                            <path d="M18.9057 8.7751C19.0934 8.97014 19.0904 9.28341 18.899 9.4748L14.1628 14.211L15.1209 15.2067C16.1549 16.2813 15.5288 18.0985 14.0625 18.2786L11.045 18.6492C9.88544 18.7917 8.90829 17.7762 9.07026 16.5971L9.49176 13.5288C9.69659 12.0377 11.4909 11.4345 12.5249 12.509L13.4831 13.5047L18.2193 8.76851C18.4107 8.57711 18.718 8.58007 18.9057 8.7751Z" fill="#DA1818" />
                                        </svg>

                                        <span className="uppercase">ethereum</span>

                                    </div>
                                    <div className="text-white">
                                        <p className="text-xs text-right font-extralight">12 Aug 2024</p>
                                        <p className="text-xs text-right font-extralight">10:34AM</p>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex  text-white gap-2">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <ellipse cx="13.9998" cy="14" rx="13.5955" ry="13.8593" fill="#32A953" fill-opacity="0.15" />
                                            <path d="M8.78189 19.5549C8.59234 19.3617 8.59234 19.0484 8.78189 18.8552L13.4724 14.0737L12.5047 13.0872C11.4604 12.0227 12.0691 10.1995 13.5336 10.0053L16.5474 9.60573C17.7055 9.45217 18.6924 10.4582 18.5417 11.6388L18.1497 14.7111C17.9592 16.204 16.1708 16.8244 15.1265 15.7599L14.1588 14.7734L9.4683 19.5549C9.27875 19.7482 8.97143 19.7482 8.78189 19.5549Z" fill="#32A953" />
                                        </svg>
                                        <span className="uppercase">SOLANA</span>

                                    </div>
                                    <div className="text-white">
                                        <p className="text-xs text-right font-extralight">12 Aug 2024</p>
                                        <p className="text-xs text-right font-extralight">10:34AM</p>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex  text-white gap-2">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <ellipse cx="13.9998" cy="14" rx="13.5955" ry="13.8593" fill="#32A953" fill-opacity="0.15" />
                                            <path d="M8.78189 19.5549C8.59234 19.3617 8.59234 19.0484 8.78189 18.8552L13.4724 14.0737L12.5047 13.0872C11.4604 12.0227 12.0691 10.1995 13.5336 10.0053L16.5474 9.60573C17.7055 9.45217 18.6924 10.4582 18.5417 11.6388L18.1497 14.7111C17.9592 16.204 16.1708 16.8244 15.1265 15.7599L14.1588 14.7734L9.4683 19.5549C9.27875 19.7482 8.97143 19.7482 8.78189 19.5549Z" fill="#32A953" />
                                        </svg>
                                        <span className="uppercase">SHIBA</span>

                                    </div>
                                    <div className="text-white">
                                        <p className="text-xs text-right font-extralight">12 Aug 2024</p>
                                        <p className="text-xs text-right font-extralight">10:34AM</p>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex  text-white gap-2">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <ellipse cx="13.9998" cy="14" rx="13.5955" ry="13.8593" fill="#DA1818" fill-opacity="0.15" />
                                            <path d="M18.9057 8.7751C19.0934 8.97014 19.0904 9.28341 18.899 9.4748L14.1628 14.211L15.1209 15.2067C16.1549 16.2813 15.5288 18.0985 14.0625 18.2786L11.045 18.6492C9.88544 18.7917 8.90829 17.7762 9.07026 16.5971L9.49176 13.5288C9.69659 12.0377 11.4909 11.4345 12.5249 12.509L13.4831 13.5047L18.2193 8.76851C18.4107 8.57711 18.718 8.58007 18.9057 8.7751Z" fill="#DA1818" />
                                        </svg>

                                        <span className="uppercase">USDT</span>

                                    </div>
                                    <div className="text-white">
                                        <p className="text-xs text-right font-extralight">12 Aug 2024</p>
                                        <p className="text-xs text-right font-extralight">10:34AM</p>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex  text-white gap-2">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <ellipse cx="13.9998" cy="14" rx="13.5955" ry="13.8593" fill="#32A953" fill-opacity="0.15" />
                                            <path d="M8.78189 19.5549C8.59234 19.3617 8.59234 19.0484 8.78189 18.8552L13.4724 14.0737L12.5047 13.0872C11.4604 12.0227 12.0691 10.1995 13.5336 10.0053L16.5474 9.60573C17.7055 9.45217 18.6924 10.4582 18.5417 11.6388L18.1497 14.7111C17.9592 16.204 16.1708 16.8244 15.1265 15.7599L14.1588 14.7734L9.4683 19.5549C9.27875 19.7482 8.97143 19.7482 8.78189 19.5549Z" fill="#32A953" />
                                        </svg>
                                        <span className="uppercase">Bitcoin</span>

                                    </div>
                                    <div className="text-white">
                                        <p className="text-xs text-right font-extralight">12 Aug 2024</p>
                                        <p className="text-xs text-right font-extralight">10:34AM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard