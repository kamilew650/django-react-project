import React from "react";
import { useHistory } from "react-router-dom";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import CreateCardDialog from "../../components/CreateCardDialog/CreateCardDialog";
import fetchAuthorized from "../../utils/fetchAuthorized/fetchAuthorized";

const StyledCard = styled(Card)`
  height: 95%;
  background-color: aliceblue;
  :hover {
    background-color: #c1e2ff;
    box-shadow:
    1px 1px #a8ccea,
    2px 2px #a8ccea,
    3px 3px #a8ccea;
  }
  transition: all 0.4s;
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
`;

export default function FolderDetailsView() {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const getCardsClickHandler = (e) => {
    history.push(
      `/getCards/${history.location.pathname.replace("/folder/", "")}`
    );
  };

  const deleteFolder = () => {
    const id = history.location.pathname.replace("/folder/", "");
    fetchAuthorized(`folder/${id}`, "DELETE").then(() => history.push(`/folders`));
  };

  const viewAllClickHandler = (e) => {
    history.push(
      `/viewAll/${history.location.pathname.replace("/folder/", "")}`
    );
  };

  return (
    <>
      <GridList cellHeight="auto"  style={{ margin: "0px", width:"100%"}}>
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
        <GridListTile key="delete" onClick={() => deleteFolder()}>
          <StyledCard>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                DELETE FOLDER
              </Typography>
            </CardContent>
          </StyledCard>
        </GridListTile>
      </GridList>
      <CreateCardDialog open={open} setOpen={setOpen} />
    </>
  );
}
