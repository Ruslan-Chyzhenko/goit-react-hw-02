import styled from "../Container/Container.module.css";
export const Container = ({ children }) => {
  return <div className={styled.container}>{children}</div>;
};

export default Container;
