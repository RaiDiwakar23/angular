import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProvideFunctionService {
  constructor() {}

  provideSum() {
    return 5 + 5;
  }

  provideMultiplication() {
    return 5 * 5;
  }
}
