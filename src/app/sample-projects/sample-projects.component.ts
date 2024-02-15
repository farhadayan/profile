import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

type Projects = {
  title: string;
  link: string;
};

const projects: Projects[] = [
  {
    title: 'book-lovers',
    link: 'https://github.com/farhadayan/book-lovers',
  },
  {
    title: 'writer-portal',
    link: 'https://github.com/farhadayan/book-lovers',
  },
];

@Component({
  selector: 'app-sample-projects',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './sample-projects.component.html',
  styleUrl: './sample-projects.component.scss',
})
export default class SampleProjectsComponent {
  pageLimitOptions: Array<number> = [5, 10, 20];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  myProjects: Projects[] = [];
  myProjectsData = new MatTableDataSource<Projects>(projects.map((x) => x));
  displayColumns = ['project-title', 'github-link'];
  ngOnInit() {
    this.myProjects = projects.map((x) => x);
  }

  openDetails(project: Projects) {
    window.open(project.link, '_blank');
  }

  ngAfterViewInit() {
    this.myProjectsData.paginator = this.paginator;
  }
}
