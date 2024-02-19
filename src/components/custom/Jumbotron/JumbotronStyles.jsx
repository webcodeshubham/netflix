import styles from "styled-components";

export const Inner = styles.div`
align-items: center;
display: flex;
flex-direction: ${({ direction }) => direction};
justify-content: space-between;
max-width: 1100px;
margin: auto;
width: 100%;

@media (max-width: 1000px) {
  flex-direction: column;
}
`;
