import React, { useState } from 'react';
import { Upload, CheckCircle, XCircle } from 'lucide-react';

const ResumeAnalyzer = () => {
  const [file, setFile] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const analyzeResume = async () => {
    if (!file) return;
    
    setLoading(true);
    // TODO: Connect with Django backend
    // Example analysis data
    setTimeout(() => {
      setAnalysis({
        skills: ['Python', 'Machine Learning', 'SQL', 'Data Visualization'],
        experience: [
          {
            title: 'Data Scientist',
            company: 'Tech Corp',
            duration: '2 years',
            highlights: ['Led machine learning projects', 'Improved model accuracy by 25%']
          }
        ],
        recommendations: [
          'Add more cloud computing experience',
          'Highlight leadership roles',
          'Include certifications'
        ]
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Resume Analyzer</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="hidden"
            id="resume-upload"
          />
          <label
            htmlFor="resume-upload"
            className="cursor-pointer flex flex-col items-center"
          >
            <Upload size={48} className="text-gray-400 mb-4" />
            <span className="text-gray-600">
              {file ? file.name : 'Upload your resume (PDF, DOC, DOCX)'}
            </span>
          </label>
          {file && (
            <button
              onClick={analyzeResume}
              disabled={loading}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              {loading ? 'Analyzing...' : 'Analyze Resume'}
            </button>
          )}
        </div>
      </div>

      {analysis && (
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills Analysis</h2>
            <div className="flex flex-wrap gap-2">
              {analysis.skills.map((skill: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Experience</h2>
            {analysis.experience.map((exp: any, index: number) => (
              <div key={index} className="mb-6 last:mb-0">
                <h3 className="text-xl font-medium text-gray-800">{exp.title}</h3>
                <div className="text-gray-600 mt-1">{exp.company} • {exp.duration}</div>
                <ul className="mt-2 space-y-1">
                  {exp.highlights.map((highlight: string, i: number) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <CheckCircle size={16} className="text-green-500 mr-2" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recommendations</h2>
            <ul className="space-y-3">
              {analysis.recommendations.map((rec: string, index: number) => (
                <li key={index} className="flex items-center text-gray-600">
                  <XCircle size={16} className="text-red-500 mr-2" />
                  {rec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeAnalyzer;