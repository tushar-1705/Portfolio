import React, { useState } from "react";

const Resume = () => {
  const [showResume, setShowResume] = useState(false);

  const handleToggle = () => {
    setShowResume(!showResume);
  };

  return (
    <section
      name="Resume"
      className="max-w-screen-md mx-auto px-4 py-16 text-center"
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-8">📄 Resume</h2>

      <button
        onClick={handleToggle}
        className="bg-green-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-600 transition duration-300"
      >
        {showResume ? "Hide Resume" : "Show Resume"}
      </button>

      {showResume && (
        <div className="mt-8">
          {/* Resume Viewer with Responsive Height */}
          <div className="w-full h-[450px] md:h-[600px]">
            <object
              data="/Tushar_resume.pdf#view=FitH"
              type="application/pdf"
              width="100%"
              height="100%"
            >
              <p className="text-sm text-gray-600">
                Your browser does not support PDF viewing.{" "}
                <a
                  href="/Tushar_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Click here to view
                </a>
              </p>
            </object>
          </div>

          {/* Download Button */}
          <a
            href="/Tushar_resume.pdf"
            download="Tushar_Nikam_Resume.pdf"
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      )}
    </section>
  );
};

export default Resume;
