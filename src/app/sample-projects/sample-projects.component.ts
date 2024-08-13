import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
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
    link: 'https://github.com/farhadayan/Angular_Project',
  },
  {
    title: 'profile',
    link: 'https://github.com/farhadayan/profile',
  },
];

@Component({
  selector: 'app-sample-projects',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './sample-projects.component.html',
  styleUrl: './sample-projects.component.scss',
})
export default class SampleProjectsComponent {
  pageLimitOptions: Array<number> = [1, 5, 10, 20];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  myProjectsData = new MatTableDataSource<Projects>(projects);
  displayColumns = ['title', 'github-link'];

  openDetails(project: Projects) {
    window.open(project.link, '_blank');
  }

  ngAfterViewInit() {
    this.myProjectsData.sort = this.sort;
    this.myProjectsData.paginator = this.paginator;
  }
}
