
import { DistrictData } from "../types";

export const districtData: DistrictData[] = [
  { name: "Lisboa", users: 3245, coordinates: [-9.1393, 38.7223] },
  { name: "Porto", users: 2780, coordinates: [-8.6291, 41.1579] },
  { name: "Braga", users: 1450, coordinates: [-8.4256, 41.5454] },
  { name: "Setúbal", users: 1120, coordinates: [-8.8926, 38.5244] },
  { name: "Aveiro", users: 980, coordinates: [-8.6535, 40.6405] },
  { name: "Faro", users: 890, coordinates: [-7.9304, 37.0146] },
  { name: "Coimbra", users: 750, coordinates: [-8.4293, 40.2033] },
  { name: "Leiria", users: 680, coordinates: [-8.8071, 39.7444] },
  { name: "Santarém", users: 560, coordinates: [-8.6874, 39.2369] },
  { name: "Viseu", users: 520, coordinates: [-7.9138, 40.6566] },
  { name: "Vila Real", users: 380, coordinates: [-7.7449, 41.3053] },
  { name: "Viana do Castelo", users: 350, coordinates: [-8.8282, 41.6918] },
  { name: "Bragança", users: 280, coordinates: [-6.7612, 41.8072] },
  { name: "Évora", users: 270, coordinates: [-7.9053, 38.571] },
  { name: "Castelo Branco", users: 240, coordinates: [-7.4915, 39.8217] },
  { name: "Guarda", users: 220, coordinates: [-7.2682, 40.5369] },
  { name: "Beja", users: 190, coordinates: [-7.8664, 38.0158] },
  { name: "Portalegre", users: 150, coordinates: [-7.4324, 39.2916] }
];

// Calculate color based on user count - generate shades of red
export const getDistrictDataWithColors = () => {
  const maxUsers = Math.max(...districtData.map(d => d.users));
  
  return districtData.map(district => {
    // Calculate color - darker red for higher user count
    const intensity = Math.min(Math.floor((district.users / maxUsers) * 255), 255);
    const color = `rgb(${235}, ${235 - intensity}, ${235 - intensity})`;
    
    return {
      ...district,
      color
    };
  });
};
