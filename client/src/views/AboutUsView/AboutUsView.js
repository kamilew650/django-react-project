import { MapContainer, TileLayer, Marker } from "react-leaflet";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const StyledMap = styled(MapContainer)`
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgb(221, 221, 221);
  background-image: none;
  background-origin: padding-box;
  background-position-x: 0%;
  background-position-y: 0%;
  background-size: auto;
  box-sizing: border-box;
  color: rgb(28, 30, 33);
  display: block;
  height: 400px;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  touch-action: none;
  width: 680.406px;
`;

const AboutUsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  gap: 24px;
`;

export default function AboutUsView() {
  const position = [50.289045549107946, 18.67806013068489];

  return (
    <AboutUsContainer>
      <Typography variant="h3">Tutaj studiujemy</Typography>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossorigin=""
      />
      <StyledMap center={position} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}></Marker>
      </StyledMap>
    </AboutUsContainer>
  );
}
