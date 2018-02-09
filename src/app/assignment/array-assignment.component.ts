import { Component } from '@angular/core';

@Component({
    selector: 'app-array',
    templateUrl: './array-assignment.component.html'
})

export class ArrayAssignmentComponent {
    display = false;
    logs = [];
    onToggleDetails() {
        this.display = !this.display;
        this.logs.push(this.logs.length + 1);
    }
    getColor(i) {
        return i >= 5 ? 'blue' : 'transparent';
    }
}