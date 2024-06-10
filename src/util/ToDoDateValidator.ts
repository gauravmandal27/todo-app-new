import { AbstractControl, ValidatorFn } from "@angular/forms";
import { TodoManagementService } from "../app/todo-management.service";

export function ToDoDateValidator(todoService: TodoManagementService): ValidatorFn {
    return (control: AbstractControl) => {
        const inputDate = Date.parse(control.value.trim()); // Parse the input date
        const currentDate = Date.now();

        if (isNaN(inputDate)) {
            return { invalidDate: true };
        }

        return inputDate > currentDate ? null : { pastDate: true };
    };
}