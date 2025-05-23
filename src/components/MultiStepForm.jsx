import { useState } from 'react';
import StepOne from './steps/StepOne';
import ArrowImg from '../assets/arrow.png';

export default function InputForm({ userData, setUserData }) {
    const [step, setStep] = useState(1);

    return (
        <div className="flex flex-col items-center">
            <div className="flex gap-5 justify-center items-center mb-3">
                {step > 1 && <button onClick={() => setStep((prevStep) => prevStep - 1)}>
                    <img src={ArrowImg} className="w-5 rotate-180" />
                </button> }
                <div className={`${step < 2 ? "ml-10" : ""} ${step > 3 ? "mr-10" : ""}`}>
                    Step {step} of 4
                </div>
                {step < 4 && <button onClick={() => setStep((prevStep) => prevStep + 1)}>
                    <img src={ArrowImg} className="w-5" />
                </button> }
            </div>
            {step === 1 && <StepOne userData={userData} setUserData={setUserData} />}
        </div>
    )
}