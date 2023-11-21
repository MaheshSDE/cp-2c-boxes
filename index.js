const Box = (props) => {
  //  Write your code here.
  const { className, messageText } = props;
  return (
    <div className={className}>
      <p className="description">{messageText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box className="box-container-1" messageText="Small" />
      <Box className="box-container-2" messageText="Medium" />
      <Box className="box-container-3" messageText="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
