export interface UploadProgress {
    status: 'progress' | 'done' | 'error';
    message?: number | string;
  }
  
  export interface Image {
    id: number;
    fileName: string;
    fileType: string;
    data: any; // Typically you'd use 'string' or 'Blob' based on what the backend returns
  }
  