import { useState } from "react";
import starIcon from "./assets/star-fall-svgrepo-com.svg";
import { searchGifByWord } from "./services/giphy.service";

function App() {
  const [gifs, setGifs] = useState([]);
  const [text, setText] = useState("");

  const onClick = (e) => {
    e.preventDefault();
    searchGifByWord(text).then(setGifs);
  };

  return (
    <main className="bg-black min-h-screen min-w-screen md:px-20 px-5">
      <nav className="text-white flex flex-row py-5 justify-between items-center">
        <h3 className="font-bold cursor-pointer lg:text-xl md:text-xl sm:text-xl text-md">
          Generator Gifs
        </h3>
        <ul className="md:flex flex-row text-xs gap-5 hidden">
          <li className="cursor-pointer hover:text-gray-300">Features</li>
          <li className="cursor-pointer hover:text-gray-300">Integration</li>
          <li className="cursor-pointer hover:text-gray-300">Pricing</li>
          <li className="cursor-pointer hover:text-gray-300">Resources</li>
        </ul>
        <div className="md:flex flex-row gap-3 text-xs hidden">
          <button className="cursor-pointer hover:text-gray-300">
            Sign In
          </button>
          <button
            type="button"
            className="bg-blue-500 p-3 rounded font-semibold hover:bg-blue-400"
          >
            Get Started
          </button>
        </div>
      </nav>
      <section className="flex flex-col items-center py-5 mt-5 lg:px-[27%] justify-center text-center">
        <h1 className="font-bold text-white lg:text-[4rem] text-[2rem]">
          Search <span className="gradient-text">Creative</span> Gifs or images
          in seconds
        </h1>
        <p className="text-gray-400 md:w-[80%] md:text-sm text-xs mt-3">
          Powerful Generator Gif, the searcher who will give you any gif or
          image
        </p>
        <form
          onSubmit={onClick}
          className="flex flex-row mt-5 rounded-full border border-gray-600 text-white p-2 text-xs md:w-[80%] w-full justify-between group-focus:border-gray-300"
        >
          <img src={starIcon} alt="Search" className="w-8 mx-4" />
          <input
            type="text"
            name="input-text"
            id="input-text"
            placeholder="an astronaut riding a horse on mars"
            className="bg-black w-full outline-none group"
            onChange={(e) => setText(e.currentTarget.value)}
          />
          <button
            type="button"
            className="bg-blue-500 py-3 px-5 rounded-full font-semibold hover:bg-blue-400 ml-4"
            onClick={onClick}
          >
            Search
          </button>
        </form>
      </section>
      <section className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:px-[27%] md:px-10 gap-4">
        {gifs.map((gif) => (
          <div
            key={gif.id}
            className="bg-gray-800 h-[18rem] text-white rounded-lg p-3 flex flex-col items-stretch"
          >
            <h3 className="text-lg font-bold py-2">{gif.title}</h3>
            <p className="text-xs text-gray-300">{gif.import_datetime}</p>
            <div className="flex-1 mt-1 overflow-auto flex justify-center">
              <img
                alt="image-result"
                className="flex-grow mt-1 object-contain"
                src={gif.images.original.url}
              />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
