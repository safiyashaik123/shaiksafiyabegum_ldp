import { useState } from "react";

const steps = [
  "User clicked Login",
  "Redirecting to Google...",
  "Google verified the user",
  "Google asks for permission",
  "Access Token Generated",
  "Calling Protected API",
  "User Details Loaded"
];

export default function OAuthFlow() {
  const [step, setStep] = useState(-1);

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  return (
    <div>
      <h2>OAuth Flow Simulation</h2>

      {step === -1 ? (
        <button onClick={nextStep}>
          Login with Google
        </button>
      ) : (
        <>
          <h3>Current Step</h3>

          <p>{steps[step]}</p>

          {step < steps.length - 1 ? (
            <button onClick={nextStep}>
              Next
            </button>
          ) : (
            <h3>OAuth Completed Successfully</h3>
          )}
        </>
      )}
    </div>
  );
}