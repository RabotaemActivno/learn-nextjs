import Link from "next/link"

export const TheHeader = () => {
    return (
        <header>
            <Link className="link" href="/">Home</Link>
            <Link className="link" href="/blog">Blog</Link>
            <Link className="link" href="/about">About</Link>
        </header>
    )
}
