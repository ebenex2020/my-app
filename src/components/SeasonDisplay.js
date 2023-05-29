const seasonHolder = {
  winter: {
    text: "it's freeking cold!!!",
    iconName: "snowflake",
  },
  summer: {
    text: "hotter than fire",
    iconName: "sun",
  },
};

const seasonConfig = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = ({ lat }) => {
  const season = seasonConfig(lat, new Date().getMonth());

  const { text, iconName } = seasonHolder[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`massive icon ${iconName} left-icon`} />
      <h1>{text}</h1>
      <i className={`massive icon ${iconName} right-icon`} />
    </div>
  );
};

export default SeasonDisplay;
