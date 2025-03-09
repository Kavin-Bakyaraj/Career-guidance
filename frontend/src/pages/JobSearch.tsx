import React, { useState } from 'react';
import { Search, MapPin, Building, ExternalLink } from 'lucide-react';

const JobSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const searchJobs = async () => {
    setLoading(true);
    // TODO: Connect with Django backend
    // Example jobs data
    setTimeout(() => {
      setJobs([
        {
          title: 'Senior Data Scientist',
          company: 'Tech Corp',
          location: 'San Francisco, CA',
          description: 'Looking for an experienced data scientist...',
          applyLink: 'https://example.com'
        },
        // Add more example jobs...
      ]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Job Search</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex space-x-4">
          <input
            type="text"
            className="flex-grow p-3 border border-gray-300 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for jobs..."
          />
          <button
            onClick={searchJobs}
            disabled={loading}
            className="px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <Search size={20} />
            <span>{loading ? 'Searching...' : 'Search'}</span>
          </button>
        </div>
      </div>

      {jobs.length > 0 && (
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Building size={18} className="mr-2" />
                      {job.company}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin size={18} className="mr-2" />
                      {job.location}
                    </div>
                  </div>
                </div>
                <a
                  href={job.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
                >
                  <span>Apply</span>
                  <ExternalLink size={18} />
                </a>
              </div>
              <p className="mt-4 text-gray-600">{job.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobSearch;