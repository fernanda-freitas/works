import PageWrapper from "../components/PageWrapper"
import Container from "../components/Container"
import PageHeader from "../components/PageHeader"
import FullwidthText from "../components/FullwidthText"
import Grid from "../components/Grid"

export default function About() {
    return (
        <PageWrapper>
             <Container classNames=''>
                <div className="h-[calc(100vh-8.8rem)] flex flex-col justify-between">
                    <PageHeader text="A bit more" />
                    <FullwidthText text='about me' className='pb-20'/>
                </div>
                <Grid className='mt-40'>
                    <div className="col-span-3 768:col-span-4 1024:col-span-2">
                        <p className="copy-small">Fernanda Freitas</p>
                    </div>
                    <div className="col-span-9 768:col-span-8 1024:col-span-4 flex flex-col gap-y-20">
                        <p className="copy-small">
                            I'm a Frontend Developer who tries to bridges the gap between design and code.
                            With 8 years shaping user experiences and 4 years bringing them to life with modern technologies, I don't just build websites—I craft digital experiences that look stunning and work flawlessly.
                        </p>
                        <ul className="copy-small flex flex-col gap-y-10">
                            <li>
                                I specialize in creating web experiences that are:
                            </li>
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
                        <p className="copy-small">
                            My tool box: Next.js, TypeScript, Tailwind CSS, Payload CMS, Figma and a strong foundation in modern web development best practices.
                        </p>
                    </div>
                </Grid>
            </Container>
        </PageWrapper>
    )
}