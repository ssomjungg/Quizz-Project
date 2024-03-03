import { Component, Input } from '@angular/core';

@Component({
  selector: 'bam-label',
  templateUrl: './bam-label.component.html',
  styleUrl: './bam-label.component.scss'
})
export class BamLabelComponent {
  @Input() require = false;
  constructor() {}
  ngOnInit(): void {
    // console.log(this.require);
  }
}
