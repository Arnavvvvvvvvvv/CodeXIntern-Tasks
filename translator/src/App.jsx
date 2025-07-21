import { useState } from "react"
import axios from "axios";

function App() {
  const[text, settext]= useState("");
  const[option, setoptions]= useState("");
  const[convertedtext, setconvertedtext]= useState("");
  const [loading, setLoading] = useState(false);

  const capturetext= (e)=>{
    e.preventDefault();
    settext(e.target.value);
  }

  const captureoption= (e)=>{
    e.preventDefault();
    setoptions(e.target.value);
  }

const convertext = async () => {
  if (!text || !option) return;

  setLoading(true); // Start loading

  const options = {
    method: 'POST',
    url: 'https://google-translator9.p.rapidapi.com/v2',
    headers: {
      'x-rapidapi-key': '9fa68724a4mshdab3be5cc5e0301p1bee43jsnfd12e2d4677b',
      'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    data: {
      q: `${text}`,
      source: 'en',
      target: `${option}`,
      format: 'text'
    }
  };

  try {
    const response = await axios.request(options);
    setconvertedtext(response.data?.data?.translations[0]?.translatedText);
  } catch (error) {
    console.error(error);
    setconvertedtext("Error occurred.");
  } finally {
    setLoading(false); // Stop loading
  }
};


console.log(text);
console.log(option);

  return (
    <>
      <div className=" h-screen w-full bg-slate-300 flex items-center flex-col justify-center gap-y-7">
    <span className=" text-4xl font-extrabold uppercase tracking-wider drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)] bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent">TEXT TRANSLATOR</span> <span className="text-4xl">🔄</span>
      <div className="flex items-center justify-center gap-x-7 py-7"><p className="text-2xl">Input text:</p>
        <input type="text" placeholder="enter text to convert" className="w-106 h-12 text-xl border-slate-800 rounded-lg px-5 flex items-center justify-center" onChange={capturetext}/>
        <div className="text-2xl">
        <label>Choose target language: </label>
        <select name="Choose language" onChange={captureoption}>
          <option value="hi">Hindi</option>
          <option value="ko">Korean</option>
          <option value="kn">Kannada</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="zh-CN">Chinese</option>
          <option value="ru">Russian</option>
          <option value="ja">Japanese</option>
          <option value="bn">Bengali</option>
          <option value="ar">Arabic</option>
        </select></div>
        <button type="submit" onClick={convertext} className="bg-cyan-800 w-20 h-5 font-bold flex items-center justify-center cursor-pointer text-white hover:bg-slate-400 hover:text-blue-500 text-50">Convert</button>
      </div>

      <div className="flex flex-col items-start gap-2 w-[800px]">
  <p className="text-xl font-semibold">Translated text:</p>
  <div className="relative w-full">
    <p className="bg-slate-700 text-white h-50 w-[800px] text-[30px] px-3 border rounded-2xl">
      {loading ? (
  <div className="flex items-center gap-2 text-white">
    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
    <span>Translating...</span>
  </div>
) : (
  convertedtext || "Translation will appear here."
)}
    </p>
    
  </div>
</div>

      </div>
    </>
  )
}

export default App