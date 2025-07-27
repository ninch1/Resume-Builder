import Links from "./Links.jsx"

export default function ResumePreview({ userData }) {
    return (
        <div className="overflow-x-auto md:flex md:justify-center ">
            {/*resume A4 page*/}
            <div className="overflow-hidden border-1 p-10"
            style={{ width: '794px', height: '1123px' }}>
                <h1 className="font-bold text-4xl">{userData.personalInfo.name || "Elguja Modebadze"}</h1>
                <h2 className="font-bold text-3xl ">{userData.personalInfo.profession || "Frontend developer"}</h2>
                <hr className="border-gray-300 my-5" />

                <div className="flex">
                    <div className="border-r border-gray-300 pr-5">
                        <div className="mb-10"> {/*DETAILS */}
                            <h2 className="font-semibold text-2xl border-b-3 w-fit mb-5">DETAILS</h2>

                            <h3 className="font-semibold text-xl">LOCATION</h3>
                            <h3 className="text-xl mb-5">{userData.personalInfo.location || "Tbilisi, Georgia"}</h3>

                            <h3 className="font-semibold text-xl">PHONE</h3>
                            <h3 className="text-xl mb-5">{userData.personalInfo.phone || "+995 599 99 99 99"}</h3>

                            <h3 className="font-semibold text-xl">EMAIL</h3>
                            <h3 className="text-xl mb-5">{userData.personalInfo.email || "emodebadze9108@sdsu.edu"}</h3>
                        </div>
                        <Links userData={userData} />
                        <div className="mb-10"> {/*SKILLS */}
                            <h2 className="font-semibold text-2xl border-b-3 w-fit mb-5">SKILLS</h2>
                            <div className="flex flex-col text-xl">
                                {userData.personalInfo.skills.map((item) => (
                                    <span key={item} className="">{item}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}