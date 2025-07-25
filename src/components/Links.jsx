function cleanURL(link) {
        if (link && !link.startsWith("https://") && !link.startsWith("http://")) {
            return "https://" + link;
        }
        return link;
    }

export default function Links({ userData }) {
    if (userData.personalInfo.linkedin) // add other links if we will have in future
        return (
            <div className="mb-10"> {/*LINKS */}
                <h2 className="font-semibold text-2xl border-b-3 w-fit mb-5">LINKS</h2>
                {userData.personalInfo.linkedin && <a href={cleanURL(userData.personalInfo.linkedin)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl mb-5 cursor-pointer underline">LinkedIn</a>}
            </div>
        )
}