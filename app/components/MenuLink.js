import Link from "next/link"

export default function MenuLink({href, label}) {
    return (
         <Link aria-label={`Go to ${label} page`} href={href} className="group flex flex-row items-center h-[2.8rem]">
            <span className="copy-small font-normal bg-black px-12 py-6 rounded-full text-white">{label}</span>
            <div className="group-hover:h-full h-0 rotate-270 group-hover:rotate-0 transition-all duration-400 overflow-hidden flex bg-black rounded-full aspect-square">
                <svg className="m-auto size-10 scale-0 group-hover:scale-100 transition-all duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </div>
        </Link>
    )
}