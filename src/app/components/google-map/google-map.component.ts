import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})

export class GoogleMapComponent implements OnInit {
  zoom = 13
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    // mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 20,
    minZoom: 8,
  }
  marker = null;

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {
      let lat= position.coords.latitude;
      let lng= position.coords.longitude;
      this.center = {
        lat,
        lng,
      };
      this.marker = {
        position: {
          lat,
          lng,
        },
        label: {
          color: 'red',
          text: 'Marker label ',
        },
        title: 'Marker title ',
        options: { animation: google.maps.Animation.BOUNCE },
      }
    })
  }

  click(event: google.maps.MouseEvent) {
    let lat = event.latLng.lat();
    let lng = event.latLng.lng();
    this.marker = {
      position: {
        lat,
        lng,
      },
      label: {
        color: 'red',
        text: 'Marker label ',
      },
      title: 'Marker title ',
      options: { animation: google.maps.Animation.BOUNCE },
    }
  }
}
