import {Pipe} from "angular2/core";

@Pipe({
	name: "search"
})
export class SearchPipe{
	transform(value, query){
		console.log(value);
		return value.filter((item) => item.ingredients.indexOf(query) > -1 );
	}
}