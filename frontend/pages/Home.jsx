import {jwtDecode} from "jwt-decode";
import { useEffect, useState } from "react";
import {
    APIProvider, 
    Map, 
    AdvancedMarker, 
    Pin, 
    InfoWindow,
    // MapCameraChangedEvent

} from "@vis.gl/react-google-maps";
export function Home() {
    const position = {lat : 51.049999, lng: -114.066666};
    const [open, setOpen] = useState(false);

    const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    const mapID = import.meta.env.VITE_MAP_ID;


       
    return(
        <APIProvider apiKey={googleMapsApiKey} onLoad={() => console.log('Maps API has loaded.')}>           <div className="font-proxima" style={{height: "100vh", width:"100%"}}>
                Home test font
                <Map 
                    defaultZoom= {12} 
                    defaultCenter ={position} 
                    mapId={mapID}
                    options= {{
                        draggable: true,
                        scrollwheel: true,
                        zoomControl: true, 
                        disableDoubleClickZoom: false
                    }}
                    >
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


    // const [user, setUser] = useState(null);

    // useEffect(() => {
    //     function loadUserData(){
    //         const token = sessionStorage.getItem("User")
    //         setUser(jwtDecode(token))
    //     }   
    //     loadUserData();
    // }, [])