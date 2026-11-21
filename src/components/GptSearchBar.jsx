
import React from 'react';
import lang from '../utils/languageConstant';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang)
    
  return (
    <div className="pt-[10%] px-4 flex justify-center">

      <form className="flex items-center w-full max-w-3xl bg-gray-900/95 border border-gray-700 rounded-xl shadow-2xl p-2 gap-2">

        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="flex-1 min-w-0 bg-transparent text-white px-5 py-3 outline-none placeholder:text-gray-400 text-base"
        />

        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
        >
          {lang[langKey].search}
        </button>

      </form>

    </div>
  );
};

export default GptSearchBar;
