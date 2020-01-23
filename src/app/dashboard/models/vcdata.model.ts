export interface VCData {
    key?: string;
    assignmentId?: string;
     // *TODO* create a service that generates the random unique id??, is called and automatically added to onCreateAssignment()
    cameraId: string;
    vehicleId: string;
    dateCreated?: string;
    deleted?: boolean;
    // *TODO* create a service that generates 'true' onCreateAssignment() and updated to 'false' on editAssignment.deleteAssignment()
}

export interface Camera {
    cameraId: string;
    cameraDeviceNo?: string;
}

export interface Vehicle {
    vehicleId: string;
    vehicleName?: string;
}
