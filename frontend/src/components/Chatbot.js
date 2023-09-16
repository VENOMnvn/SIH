import { useRef, useState } from "react";
import openai from "../utils/openai";

const Chatbot = () => {
    const [category, setCategory] = useState('');
    const searchText = useRef(null);

    const handleAiSearch = async () => {
        console.log(searchText.current.value);

        const query =
            "Act as a Legal Case Category suggestion System and suggest in which category my case falls in." +
            searchText.current.value +
            "Give me answer in one or two words defining the category of case.";

        //Make an Api call to get ai results
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: query }],
            model: 'gpt-3.5-turbo',
        });
        setCategory(gptResults.choices?.[0]?.message?.content);
    }

    return (
        <div>
            <div>
                <textarea
                    ref={searchText}
                    className="border-2 mt-16 px-6 py-3"
                    rows="5"
                    cols="30"
                />
            </div>
            <div>
                <button
                    className="bg-gray-300 hover:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
                    onClick={handleAiSearch}>
                    Search
                </button>
            </div>
            <div className="font-semibold text-red-600 m-8">
                Category: {category}
            </div>

        </div>
    );
}

export default Chatbot