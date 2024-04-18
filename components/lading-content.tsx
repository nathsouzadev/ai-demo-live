'use client';

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const resources = [
  {
    title: 'Chatbot',
    description: 'Create a chatbot using AI',
  },
  {
    title: 'Code Generation',
    description: 'Generate code using AI',
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Demo resources
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {resources.map((resource) => (
          <Card
            key={resource.title}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className='text-lg'>{resource.title}</p>
                </div>
              </CardTitle>
              <CardContent className='pt-4 px-0'>
                {resource.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
