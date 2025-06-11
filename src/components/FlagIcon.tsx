import React from 'react';

interface FlagIconProps {
  country: string;
  className?: string;
}

const FlagIcon: React.FC<FlagIconProps> = ({ country, className = "w-8 h-6" }) => {
  const getFlagSvg = (country: string) => {
    switch (country) {
      case 'United Arab Emirates':
        return (
          <svg className={className} viewBox="0 0 24 16" fill="none">
            <rect width="24" height="16" fill="#00732F"/>
            <rect width="24" height="10.67" y="5.33" fill="#FFFFFF"/>
            <rect width="24" height="5.33" y="10.67" fill="#000000"/>
            <rect width="8" height="16" fill="#FF0000"/>
          </svg>
        );
      case 'Australia':
        return (
          <svg className={className} viewBox="0 0 24 16" fill="none">
            <rect width="24" height="16" fill="#012169"/>
            <g fill="#FFFFFF">
              <polygon points="0,0 12,0 0,8"/>
              <polygon points="12,0 24,0 24,8 12,8"/>
              <polygon points="0,8 12,8 0,16"/>
              <polygon points="12,8 24,8 24,16 12,16"/>
            </g>
            <rect width="24" height="1.6" y="7.2" fill="#FFFFFF"/>
            <rect width="1.6" height="16" x="11.2" fill="#FFFFFF"/>
            <rect width="24" height="0.8" y="7.6" fill="#C8102E"/>
            <rect width="0.8" height="16" x="11.6" fill="#C8102E"/>
          </svg>
        );
      case 'China':
        return (
          <svg className={className} viewBox="0 0 24 16" fill="none">
            <rect width="24" height="16" fill="#DE2910"/>
            <g fill="#FFDE00">
              <polygon points="3,2 4.5,4.5 2,3.5 4,3.5 1.5,4.5"/>
              <polygon points="7,1 7.5,2 6.5,1.5 7.5,1.5 7,2"/>
              <polygon points="8.5,3 9,4 8,3.5 9,3.5 8.5,4"/>
              <polygon points="8.5,5.5 9,6.5 8,6 9,6 8.5,6.5"/>
              <polygon points="7,7.5 7.5,8.5 6.5,8 7.5,8 7,8.5"/>
            </g>
          </svg>
        );
      case 'Germany':
        return (
          <svg className={className} viewBox="0 0 24 16" fill="none">
            <rect width="24" height="5.33" fill="#000000"/>
            <rect width="24" height="5.33" y="5.33" fill="#DD0000"/>
            <rect width="24" height="5.34" y="10.66" fill="#FFCE00"/>
          </svg>
        );
      case 'Denmark':
        return (
          <svg className={className} viewBox="0 0 24 16" fill="none">
            <rect width="24" height="16" fill="#C60C30"/>
            <rect width="24" height="2" y="7" fill="#FFFFFF"/>
            <rect width="2" height="16" x="7" fill="#FFFFFF"/>
          </svg>
        );
      case 'France':
        return (
          <svg className={className} viewBox="0 0 24 16" fill="none">
            <rect width="8" height="16" fill="#002395"/>
            <rect width="8" height="16" x="8" fill="#FFFFFF"/>
            <rect width="8" height="16" x="16" fill="#ED2939"/>
          </svg>
        );
      case 'United Kingdom':
        return (
          <svg className={className} viewBox="0 0 24 16" fill="none">
            <rect width="24" height="16" fill="#012169"/>
            <g fill="#FFFFFF">
              <polygon points="0,0 24,0 24,2.67 8,2.67 8,0"/>
              <polygon points="0,5.33 24,5.33 24,8 8,8 8,5.33"/>
              <polygon points="0,10.67 24,10.67 24,13.33 8,13.33 8,10.67"/>
              <polygon points="0,13.33 24,13.33 24,16 0,16"/>
            </g>
            <rect width="24" height="1.6" y="7.2" fill="#FFFFFF"/>
            <rect width="1.6" height="16" x="11.2" fill="#FFFFFF"/>
            <rect width="24" height="0.8" y="7.6" fill="#C8102E"/>
            <rect width="0.8" height="16" x="11.6" fill="#C8102E"/>
          </svg>
        );
      case 'Italy':
        return (
          <svg className={className} viewBox="0 0 24 16" fill="none">
            <rect width="8" height="16" fill="#009246"/>
            <rect width="8" height="16" x="8" fill="#FFFFFF"/>
            <rect width="8" height="16" x="16" fill="#CE2B37"/>
          </svg>
        );
      case 'Russia':
        return (
          <svg className={className} viewBox="0 0 24 16" fill="none">
            <rect width="24" height="5.33" fill="#FFFFFF"/>
            <rect width="24" height="5.33" y="5.33" fill="#0039A6"/>
            <rect width="24" height="5.34" y="10.66" fill="#D52B1E"/>
          </svg>
        );
      case 'United States':
        return (
          <svg className={className} viewBox="0 0 24 16" fill="none">
            <rect width="24" height="16" fill="#B22234"/>
            <g fill="#FFFFFF">
              <rect width="24" height="1.23" y="1.23"/>
              <rect width="24" height="1.23" y="3.69"/>
              <rect width="24" height="1.23" y="6.15"/>
              <rect width="24" height="1.23" y="8.62"/>
              <rect width="24" height="1.23" y="11.08"/>
              <rect width="24" height="1.23" y="13.54"/>
            </g>
            <rect width="9.6" height="8.62" fill="#3C3B6E"/>
            <g fill="#FFFFFF">
              <circle cx="1.6" cy="1.23" r="0.3"/>
              <circle cx="3.2" cy="1.23" r="0.3"/>
              <circle cx="4.8" cy="1.23" r="0.3"/>
              <circle cx="6.4" cy="1.23" r="0.3"/>
              <circle cx="8" cy="1.23" r="0.3"/>
            </g>
          </svg>
        );
      default:
        return (
          <div className={`${className} bg-gray-200 rounded flex items-center justify-center`}>
            <span className="text-xs">🏳️</span>
          </div>
        );
    }
  };

  return getFlagSvg(country);
};

export default FlagIcon;