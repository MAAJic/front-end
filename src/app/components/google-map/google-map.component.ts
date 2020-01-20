import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-google-map",
  templateUrl: "./google-map.component.html",
  styleUrls: ["./google-map.component.scss"]
})
export class GoogleMapComponent implements OnInit {
  zoom = 13;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    // mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 20,
    minZoom: 8
  };
  marker = null;
  @Output() locationed = new EventEmitter<any>();
  @Input() address: any;
  // mapLocation = EventEmitter;

  // location = null;

  // @Input()
  // get mapLocation() {
  //   return this.location;
  // }

  // set mapLocation(value) {
  //   this.location = value;
  // }

  ngOnInit() {
    if (this.address) {
      let lat = this.address[0];
      let lng = this.address[1];
      console.log({ lat, lng });
      this.center = {
        lat,
        lng
      };
      this.marker = {
        position: {
          lat,
          lng
        },
        label: {
          color: "red",
          text: "Marker label "
        },
        title: "Marker title ",
        options: { animation: google.maps.Animation.BOUNCE }
      };
      // let location = {
      //   coordinates: [lat, lng]
      // };
      // // console.log(this.mapLocation)
      // this.locationed.emit(location);
      // this.location = `${lat}, ${lng}`;
    } else
      navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        this.center = {
          lat,
          lng
        };
        this.marker = {
          position: {
            lat,
            lng
          },
          label: {
            color: "red",
            text: "Marker label "
          },
          title: "Marker title ",
          options: { animation: google.maps.Animation.BOUNCE }
        };
        let location = {
          coordinates: [lat, lng]
        };
        // console.log(this.mapLocation)
        this.locationed.emit(location);
        // this.location = `${lat}, ${lng}`
      });
  }

  click(event: google.maps.MouseEvent) {
    let lat = event.latLng.lat();
    let lng = event.latLng.lng();
    console.log({ lat, lng });
    this.marker = {
      position: {
        lat,
        lng
      },
      label: {
        color: "red",
        text: "Marker label "
      },
      title: "Marker title ",
      options: { animation: google.maps.Animation.BOUNCE }
    };
    let location = {
      coordinates: [lat, lng]
    };
    // console.log(this.mapLocation)
    this.locationed.emit(location);
  }
}
