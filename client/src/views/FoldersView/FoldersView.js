import React, { useContext } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import CreateFolderDialog from "../../components/CreateFolderDialog/CreateFolderDialog";
import FolderContext from "../../context/FolderContext";

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

const mockupResponse = [
  {
    id: 1,
    name: "Technical",
    fromLang: "pl",
    toLang: "en",
  },
  {
    id: 2,
    name: "Foods",
    fromLang: "pl",
    toLang: "es",
  },
  {
    id: 3,
    name: "Some other group",
    fromLang: "pl",
    toLang: "de",
  },
];

export default function FoldersView() {
  const [open, setOpen] = React.useState(false);
  //Add fetch in useEffect during first render
  const [context, setContext] = useContext(FolderContext);
  const history = useHistory();

  const clickHandler = (e) => {
    setContext(e);
    history.push(`/folder/${e.name}`);
  };

  return (
    <>
      <GridList cellHeight={320}>
        {mockupResponse.map((tile) => (
          <GridListTile
            key={tile.name}
            cols={tile.cols || 1}
            onClick={() => clickHandler(tile)}
          >
            <StyledCard>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  {tile.name}
                </Typography>
              </CardContent>
            </StyledCard>
          </GridListTile>
        ))}
        <GridListTile key="add" onClick={() => setOpen(true)}>
          <StyledCard>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                ADD NEW FOLDER
              </Typography>
            </CardContent>
          </StyledCard>
        </GridListTile>
      </GridList>
      <CreateFolderDialog open={open} setOpen={setOpen} />
    </>
  );
}
