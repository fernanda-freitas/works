import Container from "./Container"
import MenuLink from "./MenuLink"
import Logo from "./Logo"

export default function Header() {


    return (
        <Container as="header" classNames="relative flex flex-row items-center justify-between w-full pt-20 pb-50 z-50">
            <Logo />
            <div className="flex flex-row items-center gap-x-10">
                <MenuLink href="/work" label="Work"/>
                <MenuLink href="/about" label="About"/>
            </div>
        </Container>
    )
}