import PageWrapper from "../components/PageWrapper"
import Container from "../components/Container"
import PageHeader from "../components/PageHeader"
import FullwidthText from "../components/FullwidthText"

export default function About() {
    return (
        <PageWrapper>
             <Container classNames=''>
                            <div className="h-[calc(100vh-8.8rem)] flex flex-col justify-between">
                                <PageHeader text="A bit more" />
                                <FullwidthText text='about me' className='pb-20'/>
                            </div>
                        </Container>
        </PageWrapper>
    )
}