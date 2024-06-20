const ErrorMessage = ({ items }) => {
  return <>{items.length == 0 && <p>I am stil hungry.</p>}</>;
};

export default ErrorMessage;
