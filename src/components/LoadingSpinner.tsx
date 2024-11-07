import { useEffect } from 'react';
import { jellyTriangle } from 'ldrs';

jellyTriangle.register();

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <l-jelly-triangle
        size="40"
        speed="1.75"
        color="#45f3ff"
      ></l-jelly-triangle>
    </div>
  );
}