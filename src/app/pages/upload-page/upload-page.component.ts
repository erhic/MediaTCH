import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, catchError, of } from 'rxjs';
import { FileUploadService } from 'src/app/core/services/file-upload.service';

@Component({
  selector: 'pm-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.css']
})
export class UploadPageComponent implements OnInit {

  file: File | undefined;
  uploadForm!: FormGroup;

  constructor(private fileUploadService:FileUploadService,private formBuilder: FormBuilder) { }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      youtubeLink: ['', Validators.required]
    });
  }

  uploadFile(event:any) {
    event.preventDefault()
    if (this.file) {
      console.log(this.file)
      this.fileUploadService.uploadFile(this.file)
        .pipe(
          map(response => {
            console.log('File uploaded successfully', response);
            return response; 
          }),
          catchError(error => {
            console.error('Error uploading file', error);
            return of(error); 
          })
        )
        .subscribe();
    }
  }

  uploadLink() {
    if (this.uploadForm.valid) {
      const { youtubeLink } = this.uploadForm.value;
      this.fileUploadService.uploadYouTubeLink(youtubeLink)
        .pipe(
          map(response => {
            console.log('Link uploaded successfully', response);
            return response; 
          }),
          catchError(error => {
            console.error('Error uploading link', error);
            return of(error);
          })
        )
        .subscribe();
    }
  }

}
