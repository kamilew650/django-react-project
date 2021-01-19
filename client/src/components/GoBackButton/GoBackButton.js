import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const FloatingButton = styled(Button)`
  position: fixed;
  right: 16px;
  bottom: 16px;
`;

export default function GoBackButton() {
  const history = useHistory();
  const clickHandler = () => {
    history.goBack();
  };
  return (
    <FloatingButton variant="contained" onClick={clickHandler} color="primary">
      Go back
    </FloatingButton>
  );
}
