export default function StepOne({ userData, setUserData}) {
    return (
        <fieldset className="min-w-75 flex flex-col gap-2 items-center justify-center border border-gray-400 p-4 rounded-xl">
            <legend className="text-center px-2">Personal Info</legend>

            <label htmlFor="name" className="">Full Name</label>
            <input
                type="text"
                id="name"
                name="name"
                className="w-full border-none bg-input rounded-2xl py-2 px-2 mb-4"
                placeholder="Elguja Modebadze"
                value={userData.name}
                onChange={(e) => setUserData((prevData) => ({ ...prevData, name: e.target.value }))}
            />

            <label htmlFor="email" className="">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                className="w-full border-none bg-input rounded-2xl py-2 px-2 mb-4"
                placeholder="emodebadze9108@sdsu.edu"
                value={userData.email}
                onChange={(e) => setUserData((prevData) => ({ ...prevData, email: e.target.value }))}
            />

            <label htmlFor="phone" className="">Phone Number</label>
            <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full border-none bg-input rounded-2xl py-2 px-2 mb-4"
                placeholder="+995 599 99 99 99"
                value={userData.phone}
                onChange={(e) => setUserData((prevData) => ({ ...prevData, phone: e.target.value }))}
            />

            <label htmlFor="linkedin" className="">LinkedIn URL</label>
            <input
                type="url"
                id="linkedin"
                name="linkedin"
                className="w-full border-none bg-input rounded-2xl py-2 px-2 mb-4"
                placeholder="https://linkedin.com/in/yourname"
                value={userData.linkedin}
                onChange={(e) => setUserData((prevData) => ({ ...prevData, linkedin: e.target.value }))}
            />
        </fieldset>
    )
}