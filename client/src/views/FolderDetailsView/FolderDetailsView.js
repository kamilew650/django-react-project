import React from "react";
import { useHistory } from "react-router-dom";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import CreateCardDialog from "../../components/CreateCardDialog/CreateCardDialog";

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

export default function FolderDetailsView() {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const getCardsClickHandler = (e) => {
    history.push(`/getCards`);
  };

  const viewAllClickHandler = (e) => {
    history.push(`/viewAll`);
  };

  return (
    <>
      <GridList cellHeight={320} style={{ margin: "0px" }}>
        <GridListTile key="getCards">
          <StyledCard onClick={getCardsClickHandler}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                GET CARDS
              </Typography>
            </CardContent>
          </StyledCard>
        </GridListTile>
        <GridListTile key="viewCards">
          <StyledCard onClick={viewAllClickHandler}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                VIEW ALL
              </Typography>
            </CardContent>
          </StyledCard>
        </GridListTile>
        <GridListTile key="add" onClick={() => setOpen(true)}>
          <StyledCard>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                ADD NEW CARD
              </Typography>
            </CardContent>
          </StyledCard>
        </GridListTile>
      </GridList>
      <CreateCardDialog open={open} setOpen={setOpen} />
    </>
  );
}
