import React, { useState } from 'react';
import { MapPin, Target, Book, Award } from 'lucide-react';

const CareerRoadmap = () => {
  const [skills, setSkills] = useState('');
  const [goal, setGoal] = useState('');
  const [roadmap, setRoadmap] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generateRoadmap = async () => {
    setLoading(true);
    // TODO: Connect with Django backend
    // Example roadmap data
    setTimeout(() => {
      setRoadmap([
        'Learn Python fundamentals',
        'Master data structures and algorithms',
        'Study machine learning basics',
        'Complete deep learning specialization',
        'Work on real-world projects',
      ]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Career Roadmap Generator</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Skills
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md"
              rows={4}
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="Enter your current skills..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Career Goal
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="e.g., Senior Data Scientist"
            />
          </div>
          
          <button
            onClick={generateRoadmap}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            {loading ? 'Generating...' : 'Generate Roadmap'}
          </button>
        </div>
      </div>

      {roadmap.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Career Path</h2>
          <div className="space-y-6">
            {roadmap.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {index === 0 ? <MapPin className="text-blue-500" /> :
                   index === roadmap.length - 1 ? <Target className="text-green-500" /> :
                   index % 2 === 0 ? <Book className="text-purple-500" /> :
                   <Award className="text-orange-500" />}
                </div>
                <div className="flex-grow">
                  <div className="text-lg font-medium text-gray-800">{step}</div>
                  <div className="h-8 border-l-2 border-gray-200 ml-[7px] mt-2">
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerRoadmap;