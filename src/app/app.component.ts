import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpRequestsService } from './http-requests.service';
import { VCData } from './vcdata.model';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['.styles.css'],
  providers: [MatIconRegistry]
})

export class AppComponent implements OnInit {
  vehCamData: VCData[] = [];

  constructor(private http: HttpClient, private httpRequestsService: HttpRequestsService) {}

  ngOnInit() {}

  onCreateAssignment(postAssignment: VCData) {
    this.httpRequestsService.postAssignment(
      postAssignment.assignmentId,
      postAssignment.cameraId,
      postAssignment.vehicleId,
      postAssignment.dateCreated,
      postAssignment.deleted);
  }

  onFetchData() {
    this.httpRequestsService.getAllData().subscribe(data => {
      this.vehCamData = data;
    });
  }

  // *TODO* all functions  below this line in progress---------------------------------------

  editAssignment() {
    // create an edit service that handles updating of data and deleting existing assignments
    // services:
    //  updating function will update only the cameraId or vehicleId
    //  deleting function will only do one thing:  change deleted data value to 'true'
  }

  findMatch(matchEntry, vehCamData) {
    //  maybe create a service that handles full logic on smart-search
    //  see vanilla js functions
      // return vehCamData.filter(vehCam => {
      //     const regex = new RegExp(matchEntry, 'gi');
      //     return vehCam.cameraDeviceNo.match(regex) || vehCam.vehicleId.match(regex) || vehCam.assignmentId.match(regex);
      // });
  }

  showMatch() {
      //  maybe create a service that handles full logic on smart-search
      //  see vanilla js functions
      // const matches = this.findMatch(entry, this.vehCamData);  // **TODO** PAUSED HERE on this error
      // const updateHtml = matches.map( item => {
      //     const regex = new RegExp(entry, 'gi');
      //     const cameraDeviceNo = item.camera_deviceNum.replace(regex, `<span class="h1">${this.value}</span>`);
      //     const vehicleName = item.vehicle_name.replace(regex,`<span class="h1">${this.value}</span>`);
      //     return `<li>
      //                 <span class="cam-listing">${cameraDeviceNo}</span>
      //                 <span class="veh-listing">${vehicleName}</span>
      //             </li>`;
      // }).join('');
      // really need logic to search by 2 paramaters but return ANY/ALL applicable vehCamData
  }

}
