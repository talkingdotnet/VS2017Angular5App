import { Component, VERSION} from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    public currentCount = 0;
    public name: string;
    constructor() {
        this.name = `Angular! v${VERSION.full}`
    }
    public incrementCounter() {
        this.currentCount++;
    }
}
