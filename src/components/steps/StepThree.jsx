import DatePicker from "react-datepicker";

export default function StepThree({ userData, setUserData}) {
    return (
        <fieldset className="min-w-75 flex flex-col gap-2 items-center justify-center border border-gray-400 p-4 rounded-xl">
            <legend className="text-center px-2">Experience</legend>

            <label htmlFor="company" className="">Company</label>
            <input
                type="text"
                id="company"
                name="company"
                className="w-full border-none bg-input rounded-2xl py-2 px-2 mb-4"
                placeholder="Google"
                value={userData.experience.company}
                onChange={(e) => setUserData((prevData) => ({ ...prevData, experience: {...prevData.experience, company: e.target.value }}))}
            />
            
            <label htmlFor="jobTitle" className="">Job Title</label>
            <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                className="w-full border-none bg-input rounded-2xl py-2 px-2 mb-4"
                placeholder="Frontend Developer"
                value={userData.experience.company}
                onChange={(e) => setUserData((prevData) => ({ ...prevData, experience: {...prevData.experience, jobTitle: e.target.value }}))}
            />

            <label className="">Start Date</label>
            <DatePicker
            selected={userData.experience.startDate}
            onChange={(date) =>
                setUserData((prevData) => ({
                ...prevData,
                experience: { ...prevData.experience, startDate: date }
                }))
            }
            dateFormat="MM/yyyy"
            showMonthYearPicker
            placeholderText="Select month and year"
            className="w-full border-none bg-input rounded-2xl py-2 px-2 mb-4 placeholder:text-center"
            />

            <label className="">End Date</label>
            <DatePicker
            selected={userData.experience.endDate}
            onChange={(date) =>
                setUserData((prevData) => ({
                ...prevData,
                experience: { ...prevData.experience, endDate: date }
                }))
            }
            dateFormat="MM/yyyy"
            showMonthYearPicker
            placeholderText="Select month and year"
            className="w-full border-none bg-input rounded-2xl py-2 px-2 mb-4 placeholder:text-center"
            disabled={userData.experience.isCurrent}
            />

            <div className="flex items-center gap-2 mb-4">
                <input
                    type="checkbox"
                    id="isCurrent"
                    checked={userData.experience.isCurrent}
                    onChange={(e) =>
                    setUserData((prevData) => ({
                        ...prevData,
                        experience: {
                        ...prevData.experience,
                        isCurrent: e.target.checked,
                        endDate: e.target.checked ? null : prevData.experience.endDate
                        }
                    }))
                    }
                />
                <label htmlFor="isCurrent">Currently working here</label>
            </div>
        </fieldset>
    )
}