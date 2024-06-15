function AppTime() {
  let ShowDate = new Date();

  return (
    <div className="time-container">
      <h3>
        This is the Current date & time : {ShowDate.toLocaleDateString()} -{" "}
        {ShowDate.toLocaleTimeString()}
      </h3>
    </div>
  );
}

export default AppTime;
