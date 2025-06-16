import React from 'react';

interface FlagIconProps {
  country: string;
  className?: string;
}

const FlagIcon: React.FC<FlagIconProps> = ({ country, className = "w-8 h-6" }) => {
  const getFlagImage = (country: string) => {
    const flagMap: { [key: string]: string } = {
      'United Arab Emirates': '/flags/Property 1=AE.png',
      'Australia': '/flags/Property 1=AU.png',
      'China': '/flags/Property 1=CN.png',
      'Germany': '/flags/Property 1=DE.png',
      'Denmark': '/flags/Property 1=DK.png',
      'France': '/flags/Property 1=FR.png',
      'United Kingdom': '/flags/Property 1=GB.png',
      'Italy': '/flags/Property 1=IT.png',
      'Russia': '/flags/Property 1=RU.png',
      'United States': '/flags/Property 1=US.png',
      'Pakistan': '/flags/Property 1=US.png' // Using US flag as fallback
    };

    const flagSrc = flagMap[country] || '/flags/Property 1=US.png';

    return (
      <img 
        src={flagSrc} 
        alt={`${country} flag`} 
        className={`${className} object-cover rounded`}
        onError={(e) => {
          // Fallback to a default flag if image fails to load
          (e.target as HTMLImageElement).src = '/flags/Property 1=US.png';
        }}
      />
    );
  };

  return getFlagImage(country);
};

export default FlagIcon;