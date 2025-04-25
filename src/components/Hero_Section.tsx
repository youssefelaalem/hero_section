import { useState } from "react";
import { HEADLINES, SUBHEADLINES } from "../constants/content";
import { PuffLoader } from "react-spinners";
import EditIcon from "../assets/EditIcon.tsx";

function Hero_Section() {
  const [loading, setLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const [content, setContent] = useState({
    headline: HEADLINES[0],
    subheadline: SUBHEADLINES[0],
    image: `https://picsum.photos/800/600?random=${Math.random()}`,
  });

  const getRandomImage = () => {
    setLoading(true);
    const img = `https://picsum.photos/800/600?random=${Math.random()}`;
    return img;
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleRegenerate = () => {
    setLoading(true);
    setContent({
      headline: HEADLINES[Math.floor(Math.random() * HEADLINES.length)],
      subheadline:
        SUBHEADLINES[Math.floor(Math.random() * SUBHEADLINES.length)],
      image: getRandomImage(),
    });
  };
  //for edit and change content if there is real backend to save in database
  const handleTextChange = (field: string, value: string) => {
    setContent((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="max-h-screen bg-gray-50 py-20 px-4">
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50 bg-opacity-50">
          <PuffLoader color="#1F2937" />
        </div>
      )}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <EditIcon
            onClick={() => setIsEditMode(!isEditMode)}
            isEditMode={isEditMode}
          />
          <h1
            contentEditable={isEditMode}
            suppressContentEditableWarning
            className="text-5xl font-bold text-gray-900 outline-none hover:bg-gray-100 rounded-lg p-2"
            onBlur={(e) =>
              handleTextChange("headline", e.target.textContent || "")
            }
          >
            {content.headline}
          </h1>

          <p
            contentEditable={isEditMode}
            suppressContentEditableWarning
            className="text-xl text-gray-600 outline-none hover:bg-gray-100 rounded-lg p-2"
            onBlur={(e) =>
              handleTextChange("subheadline", e.target.textContent || "")
            }
          >
            {content.subheadline}
          </p>
          {isEditMode && (
            <div className="flex gap-4 sm-max:justify-center">
              <button
                onClick={() => setIsEditMode(false)}
                className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-black transition-all"
              >
                Change a Content
              </button>
            </div>
          )}

          <div className="flex gap-4 sm-max:justify-center">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-black transition-all">
              Get Started with Premium AI
            </button>
            <button
              onClick={handleRegenerate}
              className="border-2 border-gray-300 px-6 py-4 rounded-lg hover:bg-white transition-all"
            >
              Regenerate with AI
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 overflow-hidden mb-2">
          <img
            src={content.image}
            alt="AI Generated Visual"
            className="rounded-xl shadow-2xl w-full h-auto max-w-full object-cover"
            onLoad={handleImageLoad}
            onError={() => setLoading(false)}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero_Section;
