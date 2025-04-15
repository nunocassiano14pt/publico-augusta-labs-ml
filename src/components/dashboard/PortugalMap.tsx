
import React, { useEffect, useRef } from 'react';
import { DistrictData } from '../../types';

interface PortugalMapProps {
  districtData: DistrictData[];
}

const PortugalMap: React.FC<PortugalMapProps> = ({ districtData }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const totalUsers = districtData.reduce((acc, curr) => acc + curr.users, 0);

  useEffect(() => {
    if (!svgRef.current) return;

    // Portugal's approximate bounding box in lat, long
    const latMin = 36.8;
    const latMax = 42.2;
    const lonMin = -9.6;
    const lonMax = -6.1;
    
    const svgWidth = 300;
    const svgHeight = 400;
    
    // Simple projection function to convert coordinates to SVG positions
    const projectPoint = (lon: number, lat: number): [number, number] => {
      const x = ((lon - lonMin) / (lonMax - lonMin)) * svgWidth;
      const y = svgHeight - ((lat - latMin) / (latMax - latMin)) * svgHeight;
      return [x, y];
    };

    // Clear previous circles
    while (svgRef.current.firstChild) {
      svgRef.current.removeChild(svgRef.current.firstChild);
    }
    
    // Draw Portugal outline (simplified)
    const pathData = `M90,350 Q70,280,40,240 Q20,200,30,150 
                      Q40,100,80,50 Q120,20,170,40 
                      Q220,60,260,100 Q280,150,270,200 
                      Q260,250,240,300 Q220,330,180,350 
                      Q150,370,120,360 Z`;
    
    const outlinePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    outlinePath.setAttribute('d', pathData);
    outlinePath.setAttribute('fill', '#f5f5f5');
    outlinePath.setAttribute('stroke', '#cccccc');
    outlinePath.setAttribute('stroke-width', '2');
    svgRef.current.appendChild(outlinePath);
    
    // Add circles for districts
    districtData.forEach((district) => {
      const [x, y] = projectPoint(district.coordinates[0], district.coordinates[1]);
      
      // Size is relative to user count, but with minimum size
      const minRadius = 5;
      const maxRadius = 15;
      const sizeScale = (district.users / Math.max(...districtData.map(d => d.users)));
      const radius = minRadius + sizeScale * (maxRadius - minRadius);
      
      // Create circle
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', `${x}`);
      circle.setAttribute('cy', `${y}`);
      circle.setAttribute('r', `${radius}`);
      circle.setAttribute('fill', district.color || '#e3000f');
      circle.setAttribute('stroke', '#fff');
      circle.setAttribute('stroke-width', '1');
      
      // Add tooltip on hover
      circle.setAttribute('data-district', district.name);
      circle.setAttribute('data-users', district.users.toString());
      circle.classList.add('district-circle');
      
      svgRef.current.appendChild(circle);
      
      // Add text labels for major districts
      if (district.users > 1000) {
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', `${x}`);
        text.setAttribute('y', `${y - radius - 5}`);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('font-size', '10');
        text.setAttribute('fill', '#333');
        text.textContent = district.name;
        svgRef.current.appendChild(text);
      }
    });
  }, [districtData]);

  return (
    <div className="relative">
      <div className="text-lg font-semibold mb-4">Utilizadores por Distrito</div>
      <div className="text-3xl font-bold mb-2">{totalUsers.toLocaleString()}</div>
      <div className="text-sm text-gray-500 mb-4">Total de utilizadores ativos</div>
      <div className="map-container relative">
        <svg 
          ref={svgRef} 
          viewBox="0 0 300 400" 
          className="w-full max-h-[300px]" 
          preserveAspectRatio="xMidYMid meet"
        />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
        {districtData
          .sort((a, b) => b.users - a.users)
          .slice(0, 6)
          .map(district => (
            <div key={district.name} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-1"
                style={{ backgroundColor: district.color || '#e3000f' }}
              />
              <span className="truncate">{district.name}: </span>
              <span className="font-medium ml-1">{district.users.toLocaleString()}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PortugalMap;
