import PageWrapper from "../components/PageWrapper"
import FullwidthText from "../components/FullwidthText"
import Container from "../components/Container"
import WorkGrid from "../components/WorkGrid"
import PageHeader from "../components/PageHeader"

export default function Works() {
    return(
        <PageWrapper>
            <Container classNames=''>
                <div className="h-[calc(100vh-8.8rem)] flex flex-col justify-between">
                    <PageHeader text="Selected" />
                    <FullwidthText text='Work' className='pb-20'/>
                </div>
                <WorkGrid />
            </Container>
        </PageWrapper>
    )
}