import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h3>Parent Component</h3>
    <h4>Count = {{ count }}</h4>
    <app-child
        (onIncrease)="onIncrease();"
        (onDecrease)="onDecrease();"
        (onReset)="onReset();"
        (onChange)="onChange($event);"
        ></app-child>
  `
})

export class ParentComponent {
    count = 1;
    onChange(isIncrease: boolean) { isIncrease ? this.count++ : this.count--; }
    onIncrease() { this.count++; }
    onDecrease() { this.count--; }
    onReset() { this.count = 1; }
}
// ----------------------------------
@Component({
    selector: 'app-child',
    template: `
        <button class="btn btn-success" (click)="onChange.emit(true);">Increase</button>
        <button class="btn btn-danger" (click)="onChange.emit(false);">Decrease</button>
        <button class="btn btn-warning" (click)="onReset.emit();">Reset</button>
    `
})

export class ChildComponent {
    @Output() onIncrease = new EventEmitter<void>();
    @Output() onDecrease = new EventEmitter<void>();
    @Output() onReset = new EventEmitter<void>();
    @Output() onChange = new EventEmitter<boolean>();
}
