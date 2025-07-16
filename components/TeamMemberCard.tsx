'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
  linkedinUrl: string;
  initials: string;
  gradientFrom: string;
  gradientTo: string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({
  name,
  role,
  description,
  imageSrc,
  linkedinUrl,
  initials,
  gradientFrom,
  gradientTo
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className={`w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden bg-gradient-to-br ${gradientFrom} ${gradientTo}`}>
        {!imageError ? (
          <Image
            src={imageSrc}
            alt={name}
            width={128}
            height={128}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl text-white font-bold">{initials}</span>
          </div>
        )}
      </div>
      <h3 className="text-xl font-bold mb-2 text-center">{name}</h3>
      <p className="text-gray-600 mb-4 text-center">{role}</p>
      <p className="text-gray-500 text-sm mb-4 text-center">
        {description}
      </p>
      <Link 
        href={linkedinUrl}
        className="text-indigo-600 hover:text-indigo-800 flex items-center justify-center gap-2"
        target="_blank"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
        LinkedIn Profile
      </Link>
    </div>
  );
};

export default TeamMemberCard; 