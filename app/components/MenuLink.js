'use client'
import Link from "next/link"
import { useTransitionRouter } from "next-view-transitions";

export default function MenuLink({href, label}) {
    const router = useTransitionRouter();

    return (
         <Link 
            onClick={(e) => {
                e.preventDefault();
                router.push(href, {
                  onTransitionReady: pageAnimation,
                });
              }}
            aria-label={`Go to ${label} page`} href={href} className="group flex flex-row items-center h-[2.8rem]">
            <span className="copy-small font-normal bg-black px-12 py-6 rounded-full text-white">{label}</span>
            <div className="group-hover:h-full h-0 rotate-270 group-hover:rotate-0 transition-all duration-400 overflow-hidden flex bg-black rounded-full aspect-square">
                <svg className="m-auto size-10 scale-0 group-hover:scale-100 transition-all duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </div>
        </Link>
    )
}

const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        scale: 1,
        transform: "translateY(0)",
      },
      {
        opacity: 0.5,
        scale: 0.9,
        transform: "translateY(-100px)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};