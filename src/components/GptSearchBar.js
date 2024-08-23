import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {

    const langKey = useSelector(store => store.config.language);

    return <div className="pt-[10%] flex justify-center"> 
        <form 
        className="w-1/2 bg-black grid grid-cols-12"
        >

            <input 
            type="text" 
            className="p-4 m-4 col-span-9" 
            placeholder={lang[langKey].gptSearchPlaceholder}
            />

            <button 
            className="py-2 px-2 m-4 bg-red-500 rounded-lg text-white col-span-3"> 
            {lang[langKey].search}
            </button>

        </form>
    </div>
};

export default GptSearchBar;