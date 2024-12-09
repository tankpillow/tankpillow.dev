import Link from "next/link";

export default function BlogPage()
{
    return (
        <main>
            <h1>/* Blog */</h1>
            <ol>
                <li>
                    <Link href="/blog/engines-or-frameworks">Game Engines or Game Frameworks</Link>
                </li>
            </ol>
        </main>
    );
}
