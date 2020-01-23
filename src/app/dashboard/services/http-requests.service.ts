import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Assignment } from '../models/vcdata.model';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class HttpRequestsService {

    constructor(private http: HttpClient) {}

    postAssignment(assignmentId: string, cameraId: string, vehicleId: string, dateCreated: string, deleted: boolean) {
        const postAssignmentData: Assignment = {
            assignmentId,
            cameraId,
            vehicleId,
            dateCreated,
            deleted
        };

        this.http
            .post('https://vehicle-cam.firebaseio.com/posts.json',
            postAssignmentData)
            .subscribe(postResponse => {
                console.log(postResponse);
            });
    }

    getAllData() {
        return this.http
            .get('https://vehicle-cam.firebaseio.com/posts.json')
            .pipe(
                map((responseData: { [key: string]: Assignment }) => {
                    const postsArray: Assignment[] = [];
                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            postsArray.push({...responseData[key], key});
                        }
                    }
                    return postsArray;
                })
            );
    }
}
