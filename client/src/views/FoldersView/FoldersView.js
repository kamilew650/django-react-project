import React, { useContext, useEffect, useRef } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import CreateFolderDialog from "../../components/CreateFolderDialog/CreateFolderDialog";
import FolderContext from "../../context/FolderContext";
import fetchAutorized from "../../utils/fetchAuthorized/fetchAuthorized";

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

export default function FoldersView() {
  const [open, setOpen] = React.useState(false);
  const [folders, setFolders] = React.useState([]);
  //Add fetch in useEffect during first render
  const [context, setContext] = useContext(FolderContext);
  const history = useHistory();

  const wasClosedRef = useRef();
  useEffect(() => {
    wasClosedRef.current = open;
  });

  useEffect(() => {
    fetchAutorized("folder", "GET")
      .then((res) => res.json())
      .then((json) => setFolders(json));
  }, []);

  useEffect(() => {
    if (wasClosedRef.current === false)
      fetchAutorized("folder", "GET")
        .then((res) => res.json())
        .then((json) => setFolders(json));
  }, [open]);

  const clickHandler = (e) => {
    setContext(e);
    history.push(`/folder/${e.id}`);
  };

  return (
    <>
      <GridList cellHeight="auto" style={{ margin: "0px", width:"100%"}}>
        {folders.map((tile) => (
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
