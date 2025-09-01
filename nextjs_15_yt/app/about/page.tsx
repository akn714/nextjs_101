import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Name of the website",
    description: "A lot of keywords",
    keywords: "about, company, mission, ai, saas",
    twitter: {
        card: "summary_large_image",
        title: "About Us | Twitter"
    }
}

export default function About() {
    console.log('this is about')
    const key = 'very secret key'; // this will not be exposed to browser
    return (
        <h1>About</h1>
    )
}