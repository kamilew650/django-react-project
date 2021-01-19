import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const StyledCard = styled(Card)`
  height: 95%;
  background-color: aliceblue;
  :hover {
    background-color: #e0f1ff;
  }
  transition: all 0.4s;
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: center;
`;

const HideableText = styled(Typography)`
  opacity: ${(props) => (props.visible ? "100%" : "0%")};
  transition: all 0.4s;
`;

export default function ClickableCard(props) {
  const [visible, setVisible] = React.useState(false);
  const { tile } = props;
  return (
    <StyledCard onClick={() => setVisible(!visible)}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {tile.before}
        </Typography>

        <HideableText variant="h4" gutterBottom visible={visible}>
          {tile.after}
        </HideableText>
      </CardContent>
    </StyledCard>
  );
}
