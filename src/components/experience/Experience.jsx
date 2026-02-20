import experienceData from '../../data/experience.json';

const Experience = () => {
  return (
    <div className="min-h-screenpy-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {experienceData.title}
          </h1>
          <p className="text-xl text-gray-600">
            {experienceData.subtitle}
          </p>
        </div>

        <div className="space-y-12">
          {experienceData.experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {index !== experienceData.experiences.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-blue-200"></div>
              )}
              
              {/* Experience Card */}
              <div className="relative flex items-start space-x-6">
                <div className="relative">
                  {exp?.logo ?
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-12 h-12 rounded-full"
                    />
                  :
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {exp.duration.split(' - ')[0].slice(2)}
                    </div>
                  }
                </div>
                  {/* <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {exp.duration.split(' - ')[0].slice(2)}
                  </div>
                </div> */}

                <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {exp.position}
                      </h3>
                      <p className="text-lg text-blue-600 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="mt-2 sm:mt-0 sm:text-right">
                      <p className="text-gray-600 font-medium">{exp.duration}</p>
                      <p className="text-gray-500 text-sm">{exp.location}</p>
                      <span className="inline-block mt-1 px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">
                    {exp.description}
                  </p>

                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;