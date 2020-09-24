import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.page.html',
  styleUrls: ['./membership.page.scss'],
})
export class MembershipPage implements OnInit {
  page = 0;
  resultsCount = 25;
  totalPages = 10;
  edit = {};

  data = [];
  bulkEdit = false;

  constructor(private http: HttpClient) {
    this.loadData();
  }

  ngOnInit() {
  }

  loadData() {
    this.http.get(`https://randomuser.me/api/?page=${this.page}&results=${this.resultsCount}`).subscribe(res => {
      console.log('res_ ', res);
      // tslint:disable-next-line: no-string-literal
      this.data = res['results'];
    });
  }

  toggleBulkEdit() {
    this.bulkEdit = !this.bulkEdit;
    this.edit = {};
  }

  bulkDelete() {
    console.log('this.edit: ', this.edit);
    const toDelete = Object.keys(this.edit);
    const reallyDelete = toDelete.filter(index => this.edit[index]).map(key => +key);
    while (reallyDelete.length) {
      this.data.splice(reallyDelete.pop(), 1);
      this.toggleBulkEdit();
    }
  }

  nextPage() {
    this.page++;
    this.loadData();
  }

  prevPage() {
    this.page--;
    this.loadData();
  }

  goFirst() {
    this.page = 0;
    this.loadData();
  }

  goLast() {
    this.page = this.totalPages - 1;
    this.loadData();
  }
}
