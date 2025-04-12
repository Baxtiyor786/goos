// let btn = document.getElementById('btn')

// btn.addEventListener('click', () =>{
//     const text = document.getElementById("text").value;
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = "ru-RU";
//     utterance.rate = 0.5 ;  //Скорость
//     utterance.pitch = 0;  // Ton
//     speechSynthesis.speak(utterance);
// })

const voiceSelect = document.getElementById('voiceSelect');
const synth = window.speechSynthesis;

function loadVoices() {
  const voices = synth.getVoices();
  voiceSelect.innerHTML = '';

  voices.forEach((voice) => {
    const option = document.createElement('option');
    option.textContent = `${voice.name} (${voice.lang})`;
    option.value = voice.name;
    voiceSelect.appendChild(option);
  });
}

loadVoices();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = loadVoices;
}

function speakText() {
  const text = document.getElementById('text').value;
  const utterance = new SpeechSynthesisUtterance(text);
  const selectedVoice = voiceSelect.value;
  utterance.voice = synth.getVoices().find(voice => voice.name === selectedVoice);
  synth.speak(utterance);
}

