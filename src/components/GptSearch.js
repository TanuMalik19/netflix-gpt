import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
return (
    <div>
    <div className="fixed -z-10">
    <img className="h-screen object-cover md:w-screen"
    src={BG_URL} alt="logo" />
    </div>
    <GptSearchBar />
    <GptMovieSuggestions />
</div>
);
};

export default GptSearch;
