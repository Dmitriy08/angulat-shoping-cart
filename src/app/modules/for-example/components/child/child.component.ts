import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  dataValue:string = '';
  @Input() get data() {
    return this.dataValue;
  };
  @Output() dataChange = new EventEmitter();
  set data(value) {
    this.dataValue = value;
    this.dataChange.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
    let count = 0;
    setInterval(() => {
      count++;
      this.dataChange.emit('Child component data change on init ' + count);
    }, 1000);
  }

}
