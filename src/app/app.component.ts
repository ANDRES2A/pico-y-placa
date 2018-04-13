import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { PicoYPlacaService } from './pico-y-placa.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PicoYPlaca';
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  licensePlate: string;
  dateToDrive: string;
  timeToDrive: string;
  picoYPlacaResponse: string;

  constructor(private _formBuilder: FormBuilder, private picoYPlacaService: PicoYPlacaService) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.pattern(/^[a-zA-z]{3}-[0-9]{4}$/)]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  predictPicoYPlaca() {
    this.picoYPlacaResponse = this.picoYPlacaService.ableToDrive(this.licensePlate, this.dateToDrive, this.timeToDrive);
  }
}
