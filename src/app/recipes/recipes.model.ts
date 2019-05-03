import { Ingredient } from '../shared/ingredient.model';

export class Recipe{
    public name:string;
    public description:string;
    public Imagepath: string;
    public ingredients: Ingredient[];
    constructor(name:string,description:string,ImagePath:string,ingredients:Ingredient[])
    {
        this.name=name;
        this.description=description;
        this.Imagepath=ImagePath;
        this.ingredients=ingredients;
    }
}