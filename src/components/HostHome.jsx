import React, { useState } from 'react';
import HostHomeStep from './HostHomeStep';

export default function HostHome(props) {
  const [step, setStep] = useState(1);
  const images = [];

  return (
    <HostHomeStep step={"Ando"} />
  )
}