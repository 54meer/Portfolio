import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Skills from './Skills';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ['MERN Stack Developer', 'Problem Solver', 'UI/UX Enthusiast', 'Full Stack Developer'];

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
      }

      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWordIndex, words]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const stats = [
    { number: '5+', label: 'Projects Built' },
    { number: '3+', label: 'Years Experience' },
    { number: '100%', label: 'Coffee Powered' },
    { number: '∞', label: 'Bugs Fixed' }
  ];

  const funFacts = [
    "I can debug code in my dreams 💭",
    "My code sometimes works on the first try 🎯",
    "I speak fluent English & JavaScript 😄",
    "I turn coffee into code ☕ → </>"
  ];

  return (
    <div className="min-h-screen">
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="relative inline-block mb-8">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto shadow-lg">
                {`</>`}
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-blue-600">Sameer Sayed</span>
            </h1>
            
            <div className="h-12 mb-6">
              <span className="text-xl md:text-2xl text-gray-700 font-semibold">
                I'm a{' '}
                <span className="text-purple-600 border-purple-600 animate-pulse">
                  {displayText}|
                </span>
              </span>
            </div>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              I build amazing web applications using the MERN stack. 
              Passionate about creating seamless user experiences and solving complex problems with clean code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                onClick={scrollToTop}
                to="/projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🚀 View My Work
              </Link>
              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                📞 Let's Talk
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-4 rounded-lg"
              >
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Tech Stack & Tools
          </h2>
          <div className="mx-auto">
            <Skills />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 rounded-xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Fun Facts 🎯
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {funFacts.map((fact, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300"
              >
                <p className="text-gray-700 font-medium">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's turn your ideas into reality with cutting-edge technology and clean code.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              onClick={scrollToTop}
              to="/experience"
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-semibold transition-all duration-300"
            >
              💼 Experience
            </Link>
            <Link
              onClick={scrollToTop}
              to="/projects"
              className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-semibold transition-all duration-300"
            >
              🎯 Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;