const yCoord = (coords) => {
  coords = coords.toString();
  return (coords.length === 1) ? 0 : parseInt(coords[0]);
};

export default yCoord;