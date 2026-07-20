'use client'
import Link from "next/link"
import pageAnimation from "./PageAnimation"
import { useTransitionRouter } from "next-view-transitions";

export default function Logo() {
    const router = useTransitionRouter();
    const date = new Date()
    const year = date.getFullYear().toString().slice(-2)

    return(
        <Link 
            onClick={(e) => {
                e.preventDefault();
                router.push('/', {
                    onTransitionReady: pageAnimation,
                });
            }}
            aria-label="Go to homepage" href="/" className="copy-small font-bold">
            F-©{year}
        </Link>
    )
}