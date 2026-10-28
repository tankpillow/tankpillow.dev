
interface SocialLink
{
    href : string;
    color : string;
    textColor : string;
    text : string;
}

const socials : SocialLink[] = [
    {
        href: "https://github.com/tankpillow",
        color: "zinc",
        textColor: "white",
        text: "GitHub"
    },
    {
        href: "https://youtube.com/@tankpillow",
        color: "red",
        textColor: "white",
        text: "YouTube"
    },
    {
        href: "https://twitch.tv/tankpillow",
        color: "purple",
        textColor: "white",
        text: "Twitch"
    },
    {
        href: "https://discord.gg/ppQkQnWdMp",
        color: "blue",
        textColor: "white",
        text: "Discord"
    },
    {
        href: "https://ko-fi.com/tankpillow",
        color: "pink",
        textColor: "white",
        text: "Ko-Fi"
    }
]

export default function SocialLinks()
{
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-8">
            {socials.map((social) => (
                <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-6 py-3 bg-${social.color}-600 hover:bg-${social.color}-700 text-${social.textColor} rounded-lg transition-colors font-medium`}
                >
                    {social.text}
                </a>   
            ))}
        </div>
    )
}