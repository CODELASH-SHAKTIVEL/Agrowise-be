import React from 'react';
import { Users, Target, Award, TrendingUp } from 'lucide-react';

export default function About() {
  const stats = [
    { id: 1, name: 'Farmers Helped', value: '10,000+' },
    { id: 2, name: 'Success Rate', value: '95%' },
    { id: 3, name: 'Expert Consultations', value: '50,000+' },
    { id: 4, name: 'Crops Analyzed', value: '100,000+' },
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Project Launch',
      description: 'Initial release of the agricultural support platform',
    },
    {
      year: '2021',
      title: 'AI Integration',
      description: 'Implementation of advanced crop analysis algorithms',
    },
    {
      year: '2022',
      title: 'Mobile App',
      description: 'Launch of mobile application for better accessibility',
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Extended support for international farming communities',
    },
  ];

  return (
    <div className="bg-white" id="about">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">About AgroSupport</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Empowering farmers with technology-driven solutions for sustainable agriculture.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-lg font-medium text-gray-900">Our Mission</h3>
          <div className="mt-4 prose prose-green text-gray-500">
            <p>
              We are dedicated to revolutionizing agriculture through innovative technology
              and expert support. Our platform combines traditional farming wisdom with
              modern analytical tools to help farmers make informed decisions and achieve
              better yields.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-lg font-medium text-gray-900">Project Timeline</h3>
          <div className="mt-6 grid gap-8 md:grid-cols-4">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <div className="h-full border-l-2 border-green-200 pl-4">
                  <div className="absolute -left-1 top-0 w-4 h-4 rounded-full bg-green-600"></div>
                  <div className="font-bold text-green-600">{item.year}</div>
                  <div className="font-medium text-gray-900">{item.title}</div>
                  <div className="text-sm text-gray-500">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-lg font-medium text-gray-900">Impact Statistics</h3>
          <dl className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="border-t-2 border-green-200 pt-6">
                <dt className="text-base font-medium text-gray-500">{stat.name}</dt>
                <dd className="text-3xl font-bold tracking-tight text-green-600">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16">
          <h3 className="text-lg font-medium text-gray-900">Our Partners</h3>
          <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="col-span-1 flex justify-center items-center h-32 bg-gray-50 rounded-lg"
              >
                <span className="text-gray-400">Partner Logo</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}