import React, { useState } from 'react';

export default function VoiceAssistant() {
  const [status, setStatus] = useState('Voice assistant ready (browser support required).');

  const startVoice = () => {
    const API = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!API) {
      setStatus('Voice input is not supported in this browser.');
      return;
    }

    const recognition = new API();
    recognition.lang = 'en-IN';
    recognition.onresult = (event) => {
      setStatus(`You said: ${event.results[0][0].transcript}`);
    };
    recognition.start();
  };

  return (
    <section className="card glass">
      <h3>Voice Assistant</h3>
      <button onClick={startVoice}>Start Voice Query</button>
      <p>{status}</p>
    </section>
  );
}
