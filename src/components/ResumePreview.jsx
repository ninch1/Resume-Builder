import Section from "./Section"

export default function ResumePreview({ userData }) {
    return (
        <div className="overflow-x-auto md:flex md:justify-center">
            <div className="overflow-hidden border-1" style={{ width: '794px', height: '1123px' }}>
                <h1 className="font-bold">{userData.name || "Elguja Modebadze"}</h1>
                <hr className="border" />
            </div>
        </div>
    )
}