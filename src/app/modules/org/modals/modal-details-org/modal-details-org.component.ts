import { Component, OnInit } from '@angular/core';
import { Org } from 'src/app/shared/model/org.model';

@Component({
  selector: 'app-modal-details-org',
  templateUrl: './modal-details-org.component.html',
  styleUrls: ['./modal-details-org.component.scss']
})
export class ModalDetailsOrgComponent implements OnInit {
  org: Org;

  constructor() {
    this.org = {} as Org
  }

  ngOnInit(): void {
  }

}
