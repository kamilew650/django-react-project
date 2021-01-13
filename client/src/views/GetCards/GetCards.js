import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import ClickableCard from "../../components/ClickableCard/ClickableCard";

const mockupResponse = [
  { before: "Bread", after: "Chleb" },
  { before: "Apple", after: "Jabłko" },
  { before: "Plum", after: "Śliwka" },
  { before: "Snack", after: "Przekąska" },
  { before: "Oil", after: "Olej" },
  { before: "Parsley", after: "Pietruszka" },
  { before: "Chives", after: "Szczypiorek" },
];

export default function GetCards() {
  const cols = Math.round(
    Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    ) > 640
      ? 4
      : 2
  );
  return (
    <>
      <GridList cellHeight={320} cols={cols} style={{ margin: "0px" }}>
        {mockupResponse.map((tile) => (
          <GridListTile key={tile.before}>
            <ClickableCard tile={tile} />
          </GridListTile>
        ))}
      </GridList>
      <GoBackButton />
    </>
  );
}
