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
                        <div className="mb-10"> {/*personal info */}
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
                    </div> {/*education*/}
                    <div className="pl-5">
                        <h2 className="font-semibold text-2xl border-b-3 w-fit mb-5">EDUCATION</h2>   

                        <h3 className="font-semibold text-xl">SCHOOL</h3>
                        <h3 className="text-xl mb-5">{userData.schoolInfo.schoolName || "San Diego State University"}</h3>

                        <h3 className="font-semibold text-xl">DEGREE</h3>
                        <h3 className="text-xl mb-5">{userData.schoolInfo.degree || "Computer Engineering"}</h3>

                        {userData.schoolInfo.startDate && (userData.schoolInfo.endDate || userData.schoolInfo.isCurrent) && (
                        <div>
                            <h3 className="font-semibold text-xl">DATE</h3>
                            <div className="flex gap-5">
                                <p className="text-xl mb-5">
                                    {userData.schoolInfo.startDate.toLocaleString("default", {
                                    month: "short",
                                    year: "numeric",
                                    })}
                                </p>
                                <span className="text-xl">-</span>
                                <p className="text-xl mb-5">
                                {userData.schoolInfo.isCurrent ? "Currently Studying" : (
                                    userData.schoolInfo.endDate.toLocaleString("default", {
                                    month: "short",
                                    year: "numeric",
                                    })
                                )}
                                </p>
                            </div>
                        </div>
                        )}
                        {userData.schoolInfo.description && <div>
                            <h3 className="font-semibold text-xl">EDUCATION DESCRIPTION</h3>
                            <p className="break-words max-w-sm">{userData.schoolInfo.description}</p>
                        </div>}
                    </div>
                </div>
                <div className="flex gap-5 mt-3 pt-3 border-t border-gray-300"> {/*experience*/}
                    <div>
                        <h2 className="font-semibold text-2xl border-b-3 w-fit mb-5">EXPERIENCE</h2>  

                        <h3 className="font-semibold text-xl">COMPANY</h3>
                        <h3 className="text-xl mb-5">{userData.experience.company || "Google"}</h3>

                        <h3 className="font-semibold text-xl">Job Title</h3>
                        <h3 className="text-xl mb-5">{userData.experience.jobTitle || "Frontend Developer"}</h3>

                        {userData.experience.startDate && (userData.experience.endDate || userData.experience.isCurrent) && (
                        <div>
                            <h3 className="font-semibold text-xl">DATE</h3>
                            <div className="flex gap-5">
                                <p className="text-xl mb-5">
                                    {userData.experience.startDate.toLocaleString("default", {
                                    month: "short",
                                    year: "numeric",
                                    })}
                                </p>
                                <span className="text-xl">-</span>
                                <p className="text-xl mb-5">
                                {userData.experience.isCurrent ? "Currently Studying" : (
                                    userData.experience.endDate.toLocaleString("default", {
                                    month: "short",
                                    year: "numeric",
                                    })
                                )}
                                </p>
                            </div>
                        </div>
                        )}
                    </div>
                    {userData.experience.description && <div>
                        <h3 className="font-semibold text-xl">EXPERIENCE DESCRIPTION</h3>
                        <p className="break-words max-w-sm">{userData.experience.description}</p>
                    </div>}
                </div>
            </div>
        </div>
    )
}