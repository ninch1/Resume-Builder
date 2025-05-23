import { useState } from 'react';
import Navbar from '../components/Navbar';
import MultiStepForm from '../components/MultiStepForm';

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
    <div className="flex flex-col items-center">
      <Navbar />
      <main className="mt-25"> {/*margin top is to push the main content below the navbar*/}
        <MultiStepForm userData={userData} setUserData={setUserData} />
      </main>
    </div>
  );
}