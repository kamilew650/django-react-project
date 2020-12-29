import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const mockupResponse = [
  {
    name: "Technical",
  },
  {
    name: "Foods",
  },
  {
    name: "Some other group",
  },
];

export default function FoldersView() {
  //Add fetch in useEffect during first render
  const history = useHistory();

  const clickHandler = (e) => {
    history.push(`/folder/${e}`);
  };

  return (
    <GridList cellHeight={320} cols={2}>
      {mockupResponse.map((tile) => (
        <GridListTile
          key={tile.name}
          cols={tile.cols || 1}
          onClick={() => clickHandler(tile.name)}
        >
          <Card>
            <CardContent>
              <Typography variant="h3" gutterBottom>
                {tile.name}
              </Typography>
            </CardContent>
          </Card>
        </GridListTile>
      ))}
    </GridList>
  );
}
