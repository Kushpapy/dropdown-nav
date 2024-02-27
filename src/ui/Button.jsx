import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-weight: 500;
    padding: 0.8rem 1.2rem;
    text-align: center;
    border-radius: var(--border-radius-lg);
  `,
  large: css`
    padding: 1.2rem 2.4rem;
    font-weight: 600;
    font-size: 1.8rem;
  `,
};

const variations = {
  primary: css`
    color: var(--color-grey-0);
    background-color: var(--color-grey-900);
    border-radius: var(--border-radius-lg);
    flex-grow: 0;

    &:hover {
      color: var(--color-grey-900);
      background-color: var(--color-grey-0);
      box-shadow: inset 0 0 0 1px var(--color-grey-900);
    }
  `,
  alternate: css`
    border: 1.5px solid var(--color-grey-900);
    color: var(--color-grey-500);
    background-color: var(--color-grey-0);

    &:hover {
      color: var(--color-grey-900);
    }
  `,
};

const Button = styled.button`
  border: none;
  transition: all 0.3s;

  ${(props) => sizes[props.$size]}
  ${(props) => variations[props.$variation]}
`;

Button.defaultProps = {
  $variation: "primary",
  $size: "small",
};

export default Button;
