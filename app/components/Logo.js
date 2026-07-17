import Link from "next/link"

export default function Logo() {
    const date = new Date()
    const year = date.getFullYear().toString().slice(-2)

    return(
        <Link aria-label="Go to homepage" href="/" className="copy-small font-bold">
            F-©{year}
        </Link>
    )
}