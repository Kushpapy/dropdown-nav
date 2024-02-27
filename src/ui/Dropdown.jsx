import styled from "styled-components";

const DropdownList = styled.ul`
  width: 15rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  top: 100%;
  left: -7rem;
  position: absolute;
  background-color: var(--color-grey-0);
  margin-right: 10rem;
  z-index: 120;
  color: var(--color-grey-500);
  box-shadow: 0 8px 16px 0 rgba(3, 49, 86, 0.08);
`;

function Dropdown({ children }) {
  return <DropdownList>{children}</DropdownList>;
}

export default Dropdown;
