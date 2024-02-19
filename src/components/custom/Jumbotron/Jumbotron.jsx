import { Inner } from "./JumbotronStyles";

const Jumbotron = ({ direction = "column", ...restProps }) => {
  return (
    <>
      <Inner direction={direction}>
        <h1>Hello! I am Jumbotron </h1>
      </Inner>
    </>
  );
};

export default Jumbotron;
