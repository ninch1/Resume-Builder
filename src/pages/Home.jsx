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
    <>
      <Navbar userData={userData} setUserData={setUserData} />
      <MultiStepForm />
    </>
  );
}