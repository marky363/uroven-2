import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category, Picture } from '../category.model';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {
  
  @Input('action') action: string;
  @Input('gallery') gallery: Picture[];
  @Input('index') index: number = 0;
  @Output('close') onClose = new EventEmitter<void>();

 

  constructor() { }

  ngOnInit(): void {
    console.log(this.gallery)
    setTimeout((() => {
      this.onClose.emit();
    }),200000000)
  }
  close(){
    this.onClose.emit();
  }

}
