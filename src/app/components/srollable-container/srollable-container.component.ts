import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-srollable-container',
  templateUrl: './srollable-container.component.html',
  styleUrls: ['./srollable-container.component.scss']
})
export class SrollableContainerComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
