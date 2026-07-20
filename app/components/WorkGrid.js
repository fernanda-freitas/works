"use client"

import { useState } from "react"
import Grid from "./Grid"
import Image from 'next/image'
import Link from "next/link"

const items = [
    // { type: 'image', src: '/projects/uptec.png', href: 'https://uptec.up.pt/' },
    // { type: 'image', src: '/projects/uptec-2.png', href: 'https://uptec.up.pt/' },
    // { type: 'video', src: '/projects/uptec-5.mov', href: 'https://uptec.up.pt/' },
    { type: 'video', src: '/projects/uptec-6.mov', href: 'https://uptec.up.pt/' },
    { type: 'image', src: '/projects/fms.png', href: 'https://fmsoaresbarroso.pt/en' },
    { type: 'video', src: '/projects/va-studio-02.mov', href: 'https://v-a.studio/' },
    { type: 'image', src: '/projects/good-people.png', href: 'https://goodcompanybooks.com/' },
    { type: 'video', src: '/projects/theplayground-2.mov', href: 'https://theplayground.pt/' },
    // { type: 'image', src: '/projects/noeduchaufourlawrance-2-1.png', href: 'https://noeduchaufourlawrance.com/' },
    { type: 'image', src: '/projects/noeduchaufourlawrance-2.png', href: 'https://noeduchaufourlawrance.com/' },
    { type: 'image', src: '/projects/good-company.png', href: 'https://goodcompanybooks.com/' },
    // { type: 'image', src: '/projects/good company 2.png', href: 'https://goodcompanybooks.com/' },
    // { type: 'image', src: '/projects/good-company-2.png', href: 'https://goodcompanybooks.com/' },
    // { type: 'image', src: '/projects/good-company-3.png', href: 'https://goodcompanybooks.com/' },
    // { type: 'image', src: '/projects/good-company-4.png', href: 'https://goodcompanybooks.com/' },
    // { type: 'image', src: '/projects/good-company.png', href: 'https://goodcompanybooks.com/' },
    // { type: 'image', src: '/projects/revolution-needles.png', href: 'https://revolutionneedles.com/' },
    // { type: 'image', src: '/projects/revolution-needles-2.png', href: 'https://revolutionneedles.com/' },
    { type: 'image', src: '/projects/revolution-needles-3.png', href: 'https://revolutionneedles.com/' },
    // { type: 'image', src: '/projects/rocaline.png', href: 'https://rocalineceramics.com/' },
    // { type: 'image', src: '/projects/rocaline-2.png', href: 'https://rocalineceramics.com/' },
    // { type: 'image', src: '/projects/rocaline-3.png', href: 'https://rocalineceramics.com/' },
    // { type: 'image', src: '/projects/rocaline-4.png', href: 'https://rocalineceramics.com/' },
    // { type: 'image', src: '/projects/rocaline-5.png', href: 'https://rocalineceramics.com/' },
    { type: 'video', src: '/projects/rocaline-06.mov', href: 'https://rocalineceramics.com/' },
    { type: 'image', src: '/projects/blue-oasis.png', href: 'https://blueoasis.tech/' },
]

export default function WorkGrid({}) {
    const [hovered, setHovered] = useState(null)

    return (
        <Grid className='mt-[4rem]'>
            {items.map((item, index) => (
                <div
                    key={index}
                    className="col-span-12 768:col-span-6 1024:col-span-3"
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                >
                    <Link href={item.href} className="group relative flex flex-col" target="_blank" rel="noopener noreferrer">
                        <div className="relative w-full h-full aspect-[334/462]">
                            <div className="relative h-full w-full overflow-hidden rounded-[10] bg-project-bg transition-[height] duration-167 ease-linear 768:group-hover:h-[calc(100%-24px)]">
                                {item.type === 'image' ? (
                                    <Image
                                        src={encodeURI(item.src)}
                                        alt=""
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <video
                                        src={encodeURI(item.src)}
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    />
                                )}
                                <div
                                    className={`pointer-events-none absolute inset-0 z-10 hidden bg-black/50 transition-opacity duration-167 ease-linear 768:block ${
                                        hovered !== null && hovered !== index ? "opacity-100" : "opacity-0"
                                    }`}
                                />
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full flex flex-row justify-between gap-x-6 transition-opacity duration-167 ease-linear 768:opacity-0 768:group-hover:opacity-100 768:group-hover:delay-167">
                            <p className="copy-small font-normal">Lorem ipsum dolor</p>
                            <span className="copy-small font-normal text-grey">2026</span>
                        </div>
                    </Link>
                </div>
            ))}
        </Grid>
    )
}
