export interface VCData {
    key?: string;
    assignmentId?: string;
     // *TODO* create a service that generates the random unique id??, is called and automatically added to onCreateAssignment()
    cameraId: string;
    cameraDeviceNo?: string;
    vehicleId: string;
    vehicleName?: string;
    dateCreated?: string;
    deleted?: string;
    // *TODO* create a service that generates 'true' onCreateAssignment() and updated to 'false' on editAssignment.deleteAssignment()
}
