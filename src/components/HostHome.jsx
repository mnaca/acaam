import React, { useState, useEffect } from 'react';
import HostHomeStep from './HostHomeStep';

export default function HostHome(props) {
  const [step, setStep] = useState(1);
  const [options] = useState({});
  const setOption = (keys, values) => {
    for (let i = 0; i < keys.length; i++) {
      options[keys[i]] = values[i];
    }
  }

  return (
    <HostHomeStep step={step} setOption={setOption} setStep={setStep} />
  )
}