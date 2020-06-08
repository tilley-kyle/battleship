const checkPlayerReady = (playerSetup) => {
  let count = 0;
  for (const key in playerSetup) {
    if (playerSetup[key] === true) count += 1;
  }
  return (count === 5) ? true : false;
};

export default checkPlayerReady;