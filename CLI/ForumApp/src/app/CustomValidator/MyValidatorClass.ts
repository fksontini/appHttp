import { AbstractControl, ValidationErrors } from "@angular/forms";

export class MyValidator{
 static   noSpaceValidator(c: AbstractControl): ValidationErrors |null
    {
if ((c.value as string).indexOf(' ')!=-1) 
return {
    nospace:true
       };
    }
}