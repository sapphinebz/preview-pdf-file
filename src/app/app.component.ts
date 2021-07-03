import { Component, HostListener } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  template: `
    <input #fileUpload type="file" (change)="onSelectFile($event)" />
    <button *ngIf="pdfFile" (click)="previewPdf()">preview</button>
    <div>
      <object
        *ngIf="url"
        id="preview"
        height="800px"
        width="100%"
        [data]="url"
        type="application/pdf"
      ></object>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = "pdfWebView";
  pdfFile!: File;
  url!: SafeUrl;

  constructor(private domSanitizer: DomSanitizer) {}

  onSelectFile(event: any) {
    this.pdfFile = event.target.files[0];
    const url = URL.createObjectURL(this.pdfFile);
    this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  previewPdf() {
    window.open(URL.createObjectURL(this.pdfFile));
  }
}
