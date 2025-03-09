import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, DollarSign } from 'lucide-react';

const CareerInsights = () => {
  const [insights, setInsights] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Connect with Django backend
    // Example insights data
    setTimeout(() => {
      setInsights({
        trendData: [
          { month: 'Jan', dataScientist: 85, softwareEngineer: 90, productManager: 75 },
          { month: 'Feb', dataScientist: 88, softwareEngineer: 92, productManager: 78 },
          { month: 'Mar', dataScientist: 92, softwareEngineer: 88, productManager: 82 },
          { month: 'Apr', dataScientist: 95, softwareEngineer: 95, productManager: 85 },
          { month: 'May', dataScientist: 98, softwareEngineer: 97, productManager: 88 },
        ],
        statistics: {
          jobGrowth: '+15%',
          averageSalary: '$120,000',
          openPositions: '5,000+'
        }
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[500px]">
        <div className="text-gray-600">Loading insights...</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Career Insights</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-3">
            <TrendingUp className="text-green-500" size={24} />
            <div>
              <div className="text-sm text-gray-600">Job Growth</div>
              <div className="text-2xl font-bold text-gray-800">{insights.statistics.jobGrowth}</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-3">
            <DollarSign className="text-blue-500" size={24} />
            <div>
              <div className="text-sm text-gray-600">Average Salary</div>
              <div className="text-2xl font-bold text-gray-800">{insights.statistics.averageSalary}</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-3">
            <Users className="text-purple-500" size={24} />
            <div>
              <div className="text-sm text-gray-600">Open Positions</div>
              <div className="text-2xl font-bold text-gray-800">{insights.statistics.openPositions}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Career Trends</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={insights.trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="dataScientist"
                name="Data Scientist"
                stroke="#3B82F6"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="softwareEngineer"
                name="Software Engineer"
                stroke="#10B981"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="productManager"
                name="Product Manager"
                stroke="#8B5CF6"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default CareerInsights;