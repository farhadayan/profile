import { Component } from '@angular/core';
//import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export default class ResumeComponent {
  width: string = '80vw';
  height: string = '80vh';
  ngAfterViewInit() {
    // const viewer = new GcPdfViewer('#viewer', {
    //   workerSrc: '//node_modules/@grapecity/gcpdfviewer/gcpdfviewer.worker.js',
    //   restoreViewStateOnLoad: false,
    // });
    // viewer.addDefaultPanels();
    // viewer.open('assets/pdf/Farhad_Ahmed-January.pdf');
  }
}
