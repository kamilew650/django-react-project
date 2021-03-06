import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import ClickableCard from "../../components/ClickableCard/ClickableCard";
import fetchAuthorized from "../../utils/fetchAuthorized/fetchAuthorized";

export default function GetCards() {
  const [cards, setCards] = React.useState([]);
  const history = useHistory();

  useEffect(() => {
    const id = history.location.pathname.replace("/getCards/", "");
    fetchAuthorized(`card/random/${id}`, "GET")
      .then((res) => res.json())
      .then((json) => setCards(json));
  }, [history.location.pathname]);

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
      <GridList cellHeight='auto' cols={cols}  style={{ margin: "0px", width:"100%"}}>
        {cards.map((tile) => (
          <GridListTile key={tile.before}>
            <ClickableCard tile={tile} />
          </GridListTile>
        ))}
      </GridList>
      <GoBackButton />
    </>
  );
}
