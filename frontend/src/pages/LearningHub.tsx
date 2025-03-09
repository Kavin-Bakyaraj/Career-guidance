import React, { useState } from 'react';
import { Search, BookOpen, Youtube, ExternalLink } from 'lucide-react';

const LearningHub = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [resources, setResources] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const searchResources = async () => {
    setLoading(true);
    // TODO: Connect with Django backend
    // Example resources data
    setTimeout(() => {
      setResources([
        {
          type: 'course',
          title: 'Introduction to Machine Learning',
          platform: 'MIT OpenCourseWare',
          link: 'https://example.com',
          description: 'Learn the fundamentals of machine learning...'
        },
        {
          type: 'video',
          title: 'Python for Data Science',
          platform: 'YouTube',
          link: 'https://example.com',
          duration: '45:30'
        },
        // Add more example resources...
      ]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Learning Hub</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex space-x-4">
          <input
            type="text"
            className="flex-grow p-3 border border-gray-300 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for courses and videos..."
          />
          <button
            onClick={searchResources}
            disabled={loading}
            className="px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <Search size={20} />
            <span>{loading ? 'Searching...' : 'Search'}</span>
          </button>
        </div>
      </div>

      {resources.length > 0 && (
        <div className="grid grid-cols-1 gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  {resource.type === 'course' ? (
                    <BookOpen size={24} className="text-blue-600" />
                  ) : (
                    <Youtube size={24} className="text-red-600" />
                  )}
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{resource.title}</h2>
                    <div className="text-gray-600 mt-1">{resource.platform}</div>
                    {resource.description && (
                      <p className="text-gray-600 mt-2">{resource.description}</p>
                    )}
                    {resource.duration && (
                      <div className="text-gray-500 mt-2">Duration: {resource.duration}</div>
                    )}
                  </div>
                </div>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
                >
                  <span>View</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LearningHub;