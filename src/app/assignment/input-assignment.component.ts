import { Component } from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input-assignment.component.html'
})

export class InputAssignmentComponent {
    userName = '';

    reset() {
        this.userName = '';
    }


}