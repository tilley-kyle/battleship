const xCoord = (coords) => {
  coords = coords.toString();
  return (coords.length === 1) ? parseInt(coords) : parseInt(coords[1]);
};

export default xCoord;