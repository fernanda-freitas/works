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
    // { type: 'image', src: '/projects/good company 2.png', href: 'https://goodcompanybooks.com/' },
    { type: 'image', src: '/projects/good company.png', href: 'https://goodcompanybooks.com/' },
    // { type: 'image', src: '/projects/good-company-2.png', href: 'https://goodcompanybooks.com/' },
    // { type: 'image', src: '/projects/good-company-3.png', href: 'https://goodcompanybooks.com/' },
    // { type: 'image', src: '/projects/good-company-4.png', href: 'https://goodcompanybooks.com/' },
    { type: 'image', src: '/projects/noeduchaufourlawrance-2-1.png', href: 'https://noeduchaufourlawrance.com/' },
    // { type: 'image', src: '/projects/noeduchaufourlawrance-2.png', href: 'https://noeduchaufourlawrance.com/' },
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
    return (
        <Grid className='mt-[4rem]'>
            {items.map((item, index) => (
                <Link href={item.href} key={index} target="_blank" rel="noopener noreferrer" className="col-span-12 768:col-span-6 1024:col-span-3">
                    <div className="relative w-full h-auto aspect-[334/462] rounded-[30] overflow-hidden bg-project-bg">
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
                    </div>
                </Link>
            ))}
        </Grid>
    )
}
