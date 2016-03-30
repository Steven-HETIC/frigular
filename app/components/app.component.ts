import {Component} from 'angular2/core';
import {ControlGroup, Control, FormBuilder, Validators} from 'angular2/common';
import {Http, Response} from 'angular2/http';
import 'rxjs/Rx';
import {SearchPipe} from "../pipes/search-pipe";

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.html',
    pipes: [SearchPipe],

})
export class AppComponent {
  ingredientsForm: ControlGroup;
  results: String[];
  ingredients: String[];
  box: String;
  box1: String;
  box2: String;


  constructor(private _fb: FormBuilder, private _http: Http) {}

  ngOnInit() {
    this.ingredientsForm = this._fb.group({
      "ingredient_1": ['value', Validators.required],
      "ingredient_2": ['value', Validators.required],
      "ingredient_3": ['value'],
    });
  }

  submit() {
    console.log(this.ingredientsForm.value);
    return this._http.get('api.json').map((res: Response) => res.json()).subscribe(
      (data) => {
        this.results = data.results;
      },
      (err) => {
        console.warn(err)
      }
    )
  }
}



