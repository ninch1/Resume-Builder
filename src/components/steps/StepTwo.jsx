import DatePicker from "react-datepicker";

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
                value={userData.schoolInfo.schoolName}
                onChange={(e) => setUserData((prevData) => ({ ...prevData, schoolInfo: {...prevData.schoolInfo, schoolName: e.target.value }}))}
            />

            <label htmlFor="degree" className="">Degree</label>
            <input
                type="text"
                id="degree"
                name="degree"
                className="w-full border-none bg-input rounded-2xl py-2 px-2 mb-4"
                placeholder="Computer Engineering"
                value={userData.degree}
                onChange={(e) => setUserData((prevData) => ({ ...prevData, schoolInfo: {...prevData.schoolInfo, degree: e.target.value }}))}
            />

            <label className="">Start Date</label>
            <DatePicker
            selected={userData.schoolInfo.startDate}
            onChange={(date) =>
                setUserData((prevData) => ({
                ...prevData,
                schoolInfo: { ...prevData.schoolInfo, startDate: date }
                }))
            }
            dateFormat="MM/yyyy"
            showMonthYearPicker
            placeholderText="Select month and year"
            className="w-full border-none bg-input rounded-2xl py-2 px-2 mb-4 placeholder:text-center"
            />

            <label className="">End Date</label>
            <DatePicker
            selected={userData.schoolInfo.endDate}
            onChange={(date) =>
                setUserData((prevData) => ({
                ...prevData,
                schoolInfo: { ...prevData.schoolInfo, endDate: date }
                }))
            }
            dateFormat="MM/yyyy"
            showMonthYearPicker
            placeholderText="Select month and year"
            className="w-full border-none bg-input rounded-2xl py-2 px-2 mb-4 placeholder:text-center"
            disabled={userData.schoolInfo.isCurrent}
            />

            <div className="flex items-center gap-2 mb-4">
                <input
                    type="checkbox"
                    id="isCurrent"
                    checked={userData.schoolInfo.isCurrent}
                    onChange={(e) =>
                    setUserData((prevData) => ({
                        ...prevData,
                        schoolInfo: {
                        ...prevData.schoolInfo,
                        isCurrent: e.target.checked,
                        endDate: e.target.checked ? null : prevData.schoolInfo.endDate
                        }
                    }))
                    }
                />
                <label htmlFor="isCurrent">Currently studying here</label>
            </div>
        </fieldset>
    )
}