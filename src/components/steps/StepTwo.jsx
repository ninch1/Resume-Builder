export default function StepTwo({ userData, setUserData}) {
    return (
        <fieldset className="min-w-75 flex flex-col gap-2 items-center justify-center border border-gray-400 p-4 rounded-xl">
            <legend className="text-center px-2">Education</legend>

            <label htmlFor="schoolName" className="">School Name</label>
            <input
                type="text"
                id="schoolName"
                name="schoolName"
                className="w-full border-none bg-input rounded-2xl py-2 px-2 mb-4"
                placeholder="San Diego State University"
                value={userData.schoolName}
                onChange={(e) => setUserData((prevData) => ({ ...prevData, schoolName: e.target.value }))}
            />

            <label htmlFor="degree" className="">Degree</label>
            <input
                type="text"
                id="degree"
                name="degree"
                className="w-full border-none bg-input rounded-2xl py-2 px-2 mb-4"
                placeholder="Computer Engineering"
                value={userData.degree}
                onChange={(e) => setUserData((prevData) => ({ ...prevData, degree: e.target.value }))}
            />

            
        </fieldset>
    )
}