import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  transcribeAudio(jobKey: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const requestBody = {
      audioUrl: environment.s3Url + jobKey
    };
    return this.http.post(environment.apiUrl, requestBody, { headers });
  }

  analyzeAudio(jobKey: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { jobKey };

    return this.http.post(environment.apiUrl + '/audio/analyze', body, { headers });
  }

  comprehendAudio(jobKey: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { jobKey };

    return this.http.post(environment.apiUrl + '/audio/comprehend', body, { headers });
  }
}
