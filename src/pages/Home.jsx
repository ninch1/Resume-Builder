import { useState } from 'react';
import Navbar from '../components/Navbar';
import MultiStepForm from '../components/MultiStepForm';
import ResumePreview from '../components/ResumePreview';

export default function Home() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    summary: "",
    skills: [],
    experience: [],
    education: [],
    projects: []
  });

  return (
    <div>
      <Navbar />
      <main className="mt-25 xl:flex xl:justify-center xl:gap-10"> {/*margin top is to push the main content below the navbar*/}
        <MultiStepForm userData={userData} setUserData={setUserData} />
        <hr className="my-10 border-gray-300" />
        <ResumePreview userData={userData} />
      </main>
    </div>
  );
}