import { useState } from 'react';
import Navbar from '../components/Navbar';
import MultiStepForm from '../components/MultiStepForm';
import ResumePreview from '../components/ResumePreview';

export default function Home() {
  const [userData, setUserData] = useState({
    personalInfo:
    {
      name: "", // mandatory
      profession: "",
      location: "", // mandatory
      email: "", // mandatory
      phone: "",
      linkedin: "",
      summary: "",
      skills: [],
    },
    
    schoolInfo:
    {
      schoolName: "",
      degree: "",
      startDate: null,
      endDate: null,
      isCurrent: false,
      description: "",
    },

    experience:
    {
      company: "",
      jobTitle: "",
      startDate: null,
      endDate: null,
      isCurrent: false,
      description: "",
    },
  });

  return (
    <div>
      <Navbar />
      <main className="mt-25 xl:flex xl:justify-center xl:gap-10"> {/*margin top is to push the main content below the navbar*/}
        <MultiStepForm userData={userData} setUserData={setUserData} />
        <ResumePreview userData={userData} />
      </main>
    </div>
  );
}