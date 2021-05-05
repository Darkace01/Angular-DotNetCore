import { Component, OnInit } from '@angular/core';
import { circle, latLng, LeafletMouseEvent, marker, Marker, polygon, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 15, attribution: 'Angular Movies' })
    ],
    zoom: 14,
    center: latLng(51.507351, -0.127758)
  };



  layers: Marker<any>[] = [];

  handleMapClick(event: LeafletMouseEvent) {
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    this.layers = [];
    console.log(latitude, longitude);
    this.layers.push(marker([latitude, longitude]));
  }
}
