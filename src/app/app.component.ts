import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <input #fileUpload type="file" (change)="onSelectFile($event)" />
    <button (click)="previewPdf()">preview</button>
  `,
  styles: [],
})
export class AppComponent {
  title = "pdfWebView";
  pdfFile!: File;

  onSelectFile(event: any) {
    this.pdfFile = event.target.files[0];
  }

  previewPdf() {
    window.open(URL.createObjectURL(this.pdfFile));
  }
}
