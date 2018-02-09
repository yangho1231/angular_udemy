import { Component } from '@angular/core';

@Component({
    selector: 'app-warning',
    template: 
        `
        <p>Warning you got error</p>
        `
    ,
    styles: [
        `
        p {
            padding: 10px;
            background-color: mistyrose;
            border: 1px solid red;
        }
        `
    ]
})

export class WarningAlertComponent {

}