import PageWrapper from "../components/PageWrapper"
import Container from "../components/Container"
import PageHeader from "../components/PageHeader"
import FullwidthText from "../components/FullwidthText"
import Grid from "../components/Grid"
import Link from "next/link"

export default function About() {
    return (
        <PageWrapper>
            <Container as="main">
                <div className="h-[calc(100vh-8.8rem)] flex flex-col justify-between">
                    <PageHeader text="A bit more" />
                    <FullwidthText text='about me' tag="h2" className='pb-20'/>
                </div>
                <Grid className='mt-40'>
                    <div className="col-span-3 768:col-span-4 1024:col-span-2">
                        <p className="copy-large">Fernanda Freitas</p>
                    </div>
                    <div className="col-span-9 768:col-span-8 1024:col-span-5 flex flex-col gap-y-20">
                        <p className="copy-large">
                            I'm a Frontend Developer who tries to bridge the gap between design and code.
                            With 8 years shaping user experiences and 4 years bringing them to life with modern technologies, I don't just build websites—I craft digital experiences that look stunning and work flawlessly.
                        </p>
                        <div className="flex flex-col gap-y-10">
                            <p className="copy-large">
                                I specialize in creating web experiences that are:
                            </p>
                            <ul className="copy-large flex flex-col gap-y-10">
                                <li>
                                    💅 Visually stunning (because design matters)
                                </li>
                                <li>
                                    ⚡ Lightning fast (because users won't wait)
                                </li>
                                <li>
                                    🌎 Accessible to everyone (because inclusion is essential)
                                </li>
                                <li>
                                    🧑‍💻 Responsive across all devices (because your audience is everywhere)
                                </li>
                            </ul>
                        </div>
                        <p className="copy-large">
                            My tool box: Next.js, TypeScript, Tailwind CSS, Payload CMS, Figma and a strong foundation in modern web development best practices.
                        </p>
                    </div>
                    <div className="" style={{gridColumnStart: 'none'}}>
                        <div className="flex items-center gap-x-10">
                            <Link className="generic-hover copy-small uppercase" href="https://www.linkedin.com/in/fernanda-freitas-martinez-8b9a792a/" target='_blank' rel='noopener noreferrer'>LI</Link>
                            <Link className="generic-hover copy-small uppercase" href="https://www.instagram.com/fernanda_freitas_martinez/" target='_blank' rel='noopener noreferrer'>IG</Link>
                            <Link className="generic-hover copy-small uppercase" href="mailto:idea.fernanda@gmail.com">Mail</Link>
                        </div>
                    </div>
                </Grid>
            </Container>
        </PageWrapper>
    )
}