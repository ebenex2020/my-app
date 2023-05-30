const Spinner = ({ message }) => {
  return (
    <div className="ui active dimmer">
      <div className="ui loader text">{message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
