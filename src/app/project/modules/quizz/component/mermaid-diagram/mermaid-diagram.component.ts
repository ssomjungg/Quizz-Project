import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import mermaid from 'mermaid';

@Component({
  selector: 'app-mermaid-diagram',
  templateUrl: './mermaid-diagram.component.html',
  styleUrl: './mermaid-diagram.component.scss'
})
export class MermaidDiagramComponent implements OnInit {
  @ViewChild('diagramContainer') diagramContainer!: ElementRef;
  @ViewChild('mermaidDiv', { static: false }) mermaidDiv!: ElementRef;
  @Input() mermaidCode: string = '';
  markdownContent:string = '';
  constructor(
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    console.log('mermaid', this.mermaidCode);
  }

}
