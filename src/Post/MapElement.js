export default class MapElement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const latitude = this.props.location.latitude / 10000;
    const longitude = this.props.location.longitude / 10000;
    // console.log(props);
    return (
      <Box>
        <MapHeader>
          <div>{this.props.title}</div>
          <p>{this.props.author.username}</p>
        </MapHeader>
        <MapContent
          zoomControl={false}
          center={[latitude, longitude]}
          zoom={17}
          dragging={false}
          scrollWheelZoom={false}
          doubleClickZoom={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MapMarker
            handleClick={this.props.handleClick}
            position={[latitude, longitude]}
          />
          {/* <LocationMarker /> */}
        </MapContent>
      </Box>
    );
  }
}
