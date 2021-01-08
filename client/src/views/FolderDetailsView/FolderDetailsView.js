import { useHistory } from "react-router-dom";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const mockupResponse = [
  { before: "Bread", after: "Chleb" },
  { before: "Apple", after: "Jabłko" },
  { before: "Plum", after: "Śliwka" },
  { before: "Snack", after: "Przekąska" },
  { before: "Oil", after: "Olej" },
  { before: "Parsley", after: "Pietruszka" },
  { before: "Chives", after: "Szczypiorek" },
];

export default function FolderDetailsView() {
  const history = useHistory();
  const folderName = history.location.pathname.replace("/folder/", "");

  return (
    <>
      <Typography variant="h2" gutterBottom>
        {folderName}
      </Typography>
      <GridList cellHeight={320} cols={2} style={{ margin: "0px" }}>
        {mockupResponse.map((tile) => (
          <GridListTile key={tile.before}>
            <Card>
              <CardContent>
                <Typography variant="h3" gutterBottom>
                  {tile.before}
                </Typography>
                <Typography variant="h3" gutterBottom>
                  {tile.after}
                </Typography>
              </CardContent>
            </Card>
          </GridListTile>
        ))}
        <GridListTile key="add">
          <Card>
            <CardContent>
              <Typography variant="h3" gutterBottom>
                ADD
              </Typography>
              <Typography variant="h1" gutterBottom>
                +
              </Typography>
            </CardContent>
          </Card>
        </GridListTile>
      </GridList>
    </>
  );
}
