import Link from "next/link"
import {Navigation} from "./Navigation"

const navItams = [
    {label: "Home", href: '/'},
    {label: "Blog", href: '/blog'},
    {label: "About", href: '/about'},
]

export const TheHeader = () => {
    return (
        <header>
            <Navigation navLinks={navItams}/>
        </header>
    )
}
