import WorldMapContainer from "./components/map/MapContainer";
import SideBarContainer from "./components/sidebar/SideBarContainer";

function App(props) {
  return (
    <div className="wrapper">
        <WorldMapContainer state={props.state.position} dispatch={props.dispatch}/>
        <SideBarContainer state={props.state.position} dispatch={props.dispatch}/>
    </div>
  );
}

export default App;
