import { useState } from "react"
import {
    APIProvider, 
    Map, 
    AdvancedMarker, 
    Pin, 
    InfoWindow,

} from "@vis.gl/react-google-maps";
export function Home() {
    const position = {lat : 53.54, lng: 10};
    const [open, setOpen] = useState(false);
       
    return(
        <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
           <div className="font-proxima" style={{height: "100vh", width:"100%"}}>
                Home test font
                <Map 
                    zoom= {9} 
                    center ={position} 
                    mapId={process.env.REACT_APP_MAP_ID}>
                    <AdvancedMarker position = {position} onClick={() => setOpen(true)}>
                        <Pin 
                            background= {"red"}
                            borderColor= {"grey"}
                            glyphColor= {"purple"}
                        />                
                    </AdvancedMarker>
                </Map>

            </div>
        </APIProvider>
    );
}

