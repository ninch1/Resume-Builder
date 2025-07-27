import { useState } from 'react'

export default function Skills({ userData, setUserData}) {
    const [skillInput, setSkillInput] = useState("");
    
    //userData.personalInfo.skills
    function addSkill() {
        if (userData.personalInfo.skills.length >= 3) {
            alert("Maximum amount of skills is 3");
            setSkillInput("");
            return;
        }

        const trimmedSkill = skillInput.trim().toLowerCase();
        if (!trimmedSkill) return; 

        if (trimmedSkill.length >= 30)
                alert("Please keep character count under 30 characters.")
        else {
            const isDuplicate = userData.personalInfo.skills
            .some((skill) => skill.toLowerCase() === trimmedSkill);
            if (isDuplicate)
                alert("That skill is already added!");
            else {
                setUserData((prevData) =>
                    ({...prevData,
                    personalInfo: {...prevData.personalInfo, skills: [...prevData.personalInfo.skills, skillInput.trim()]}
                }))
                setSkillInput("");
            }
        }
    }

    function removeSkill(skillR) {
            if (!userData.personalInfo.skills.includes(skillR)) {
                alert("Skill does not exist. Please refresh.")
                return
            }
            const newSkills = userData.personalInfo.skills.filter(item => item !== skillR)
            setUserData((prevData) =>
                ({...prevData,
                personalInfo: {...prevData.personalInfo, skills: newSkills}
            }))
        }

    return (
        <div className='flex flex-col items-center'>
            <label htmlFor="skills" className='mb-2'>Skills</label>
            <div className='w-full flex gap-5'>
                <input id="skills" name="skills" type="text" value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                className='w-full rounded-xl px-2 py-1' />
                <button onClick={addSkill} type="button"
                className='buttonShadow p-2 rounded-2xl'
                >Add</button>
            </div>
            <ul className='flex flex-col gap-2 pt-5'>
                {userData.personalInfo.skills.map((skill, index) => (
                    <li key={index} className='rounded-xl p-2 listStyle text-center'
                    onClick={(e) => removeSkill(e.target.innerText)}>{skill}</li>
                ))}
            </ul>
        </div>
    )
}