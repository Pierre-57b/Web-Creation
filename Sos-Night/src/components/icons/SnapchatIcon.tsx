import React from 'react';

export function SnapchatIcon({ className = '' }: { className?: string }) {
  return (
    <img 
      src="https://img.icons8.com/3d-fluency/94/snapchat.png" 
      alt="snapchat"
      className={`w-6 h-6 ${className}`}
    />
  );
}