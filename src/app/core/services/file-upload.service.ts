import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }
  
  uploadFile(file:File){
    const formData:FormData = new FormData();
    formData.append('audioFile',file);

    return this.http.post(environment.apiUrl + '/audio/upload',formData);
  }

  uploadYouTubeLink(audioUrl: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { audioUrl };

    return this.http.post(environment.apiUrl + '/audio/upload/url', body, { headers });
  }
}
