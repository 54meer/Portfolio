import React from 'react';

import { DiJavascript1, DiNodejs, DiReact, DiPhp, DiMongodb, DiGit } from 'react-icons/di';
import { SiDocker, SiTypescript } from 'react-icons/si';

const Skills = () => {
  const techStack = [
    { name: 'JavaScript', icon: DiJavascript1 },
    { name: 'PHP', icon: DiPhp },
    { name: 'React', icon: DiReact },
    { name: 'Node.js', icon: DiNodejs },
    { name: 'MongoDB', icon: DiMongodb },
    { name: 'Docker', icon: SiDocker },
    { name: 'TypeScript', icon: SiTypescript }, 
    { name: 'GitHub', icon: DiGit },
  ];

  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
            {techStack.map(({ name, icon: Icon }, index) => (
            <div
                key={index}
                className="flex flex-col items-center justify-center gap-2 rounded-lg p-4 transition-all hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
                <Icon className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
                <span className="text-sm font-medium">
                {name}
                </span>
            </div>
            ))}
        </div>
    </div>
  );
};

export default Skills;