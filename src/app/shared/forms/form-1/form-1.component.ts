import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../services/services.service';
import { HttpClientModule } from '@angular/common/http';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbNavModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction, debounceTime, distinctUntilChanged, map } from 'rxjs';

@Component({
  selector: 'app-form-1',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NgbNavModule, NgbTypeaheadModule, ReactiveFormsModule],
  templateUrl: './form-1.component.html',
  styleUrls: ['./form-1.component.scss']
})
export class Form1Component implements OnInit{

  dynamicFormInputs: Array<any> = []
  dynamicForm: FormGroup = new FormGroup({});
  active: number = 1; 

  constructor(private formService: ServicesService){}

  ngOnInit(): void {
    this.formService.getForm().subscribe({
      next: (res) => {
        console.log(res)
        this.dynamicFormInputs = res.result.form_inputs;
        if(this.dynamicFormInputs){
          this.dynamicFormInputs.forEach((step: any) => {
            const stepId = step.step_id;
            this.dynamicForm.addControl(stepId, new FormGroup({}));
            step.inputs.forEach((input: any) => {
              if(input.inpt_tag === 'check-list' || input.inpt_tag === 'radio-list'){
                (this.dynamicForm.get(stepId) as FormGroup).addControl( input.inpt_id ,new FormArray([]));
                if(input.inpt_tag === 'radio-list'){
                  (this.dynamicForm.get(stepId) as FormGroup).get(input.inpt_id)?.valueChanges.subscribe({
                    next: ()=>{
                      if(((this.dynamicForm.get(stepId) as FormGroup).get(input.inpt_id) as FormArray).length >=  1){
                        (this.dynamicForm.get(stepId) as FormGroup).get(input.inpt_id)?.disable({emitEvent: false});
                      }else{
                        (this.dynamicForm.get(stepId) as FormGroup).get(input.inpt_id)?.enable({emitEvent: false});
                      }
                    }
                  })
                }else{
                  (this.dynamicForm.get(stepId) as FormGroup).get(input.inpt_id)?.valueChanges.subscribe({
                    next: ()=>{
                      let arrayControl = ((this.dynamicForm.get(stepId) as FormGroup).get(input.inpt_id) as FormArray)
                      if(arrayControl.valid && arrayControl.dirty && arrayControl.length >= 1){
                        (this.dynamicForm.get(stepId) as FormGroup).get(input.inpt_id)?.disable({emitEvent: false});
                      }else{
                        (this.dynamicForm.get(stepId) as FormGroup).get(input.inpt_id)?.enable({emitEvent: false});
                      }
                    }
                  })
                }
              }else{
                (this.dynamicForm.get(stepId) as FormGroup).addControl( input.inpt_id ,new FormControl(null));
              }
              if(input.inpt_tag === 'select' && input.inpt_values.length >= 20){
                input.search = ((text$: Observable<string>) =>
                  text$.pipe(
                    debounceTime(200),
                    map((term) =>
                      term === ''
                      ? []
                      : input.inpt_values.filter((v: any) => v.ival_text.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
                    ),
                  )) as OperatorFunction<string, readonly {ival_text: string; ival_value: any}[]>;
                input.formatter = (x: {ival_text: string}) => x.ival_text;
              }
              input.inpt_attribte.forEach((attribute: any) => {
                switch(attribute.iatt_tag){
                  case 'placeholder': {
                    input.inpt_placeholder = attribute.fiat_value || '';
                    break;
                  }
                  case 'autocomplete': {
                    input.inpt_autocomplete = attribute.fiat_value || false;
                    break;
                  }
                  case 'autofocus': {
                    input.inpt_autofocus = attribute.fiat_value || false;
                    break;
                  }
                  case 'required': {
                    if(attribute.fiat_value){
                      (this.dynamicForm.get(stepId) as FormGroup).get(input.inpt_id)?.addValidators(Validators.required);
                    }
                    break;
                  }
                  case 'maxlength': {
                    (this.dynamicForm.get(stepId) as FormGroup).get(input.inpt_id)?.addValidators(Validators.maxLength(attribute.fiat_value || 1000));
                    break;
                  }
                  case 'minlength': {
                    (this.dynamicForm.get(stepId) as FormGroup).get(input.inpt_id)?.addValidators(Validators.minLength(attribute.fiat_value || 0));
                    break;
                  }
                  case 'max': {
                    (this.dynamicForm.get(stepId) as FormGroup).get(input.inpt_id)?.addValidators(Validators.max(attribute.fiat_value || 1000));
                    break;
                  }
                  case 'min': {
                    (this.dynamicForm.get(stepId) as FormGroup).get(input.inpt_id)?.addValidators(Validators.min(attribute.fiat_value || 0));
                    break;
                  }
                  case 'only-numbers': {
                    (this.dynamicForm.get(stepId) as FormGroup).get(input.inpt_id)?.addValidators(Validators.pattern("^[0-9]*$"));
                    break;
                  }
                  case 'type': {
                    if(attribute.fiat_value === 'email'){
                      (this.dynamicForm.get(stepId) as FormGroup).get(input.inpt_id)?.addValidators(Validators.email);
                    }
                    if(attribute.fiat_value === 'date'){
                      input.inpt_type = attribute.fiat_value || 'text';
                    }
                    break;
                  }
                  default: {}
                }
              });
              (this.dynamicForm.get(stepId) as FormGroup).updateValueAndValidity();
            });
          });
        }
      }
    })
  }

  changeChecked(event: any, step_id: string, inpt_id: string, inpt_value: string): void {
    const formArray: FormArray = (this.dynamicForm.get(step_id) as FormGroup).get(inpt_id) as FormArray;
    
    if(formArray){
      if(event.target.checked){
        formArray.push(new FormControl({inpt_id: inpt_id, inpt_value: inpt_value}));
      } else {
        let i: number = 0;

        formArray.controls.forEach((ctrl) => {
          if(ctrl.value.inpt_id === inpt_id && ctrl.value.inpt_value === inpt_value) {
            formArray.removeAt(i);
            return;
          }
          i++;
        });
      }
    }
  }

  nextStep(): void {
    let currentStepId = this.dynamicFormInputs.find((e)=>{ return e.step_order == this.active }).step_id;
    if(this.dynamicForm.get(currentStepId)?.valid)
      this.active = this.active + 1;
  }

  previousStep(): void {
    this.active = this.active - 1;
    if(this.active <= 0) this.active = 1;
  }

  sendData(): void {
    if(this.dynamicForm.valid){
      let formBody: any = {};
      this.dynamicFormInputs.forEach((step: any) => {
        step.inputs.forEach((input: any) => {
          if(input.inpt_tag === 'radio-list' || input.inpt_tag === 'check-list'){
            this.dynamicForm.get(step.step_id)?.get(input.inpt_id)?.value?.forEach((value: any)=>{
              formBody[input.inpt_id] = value.inpt_value;
            })
          }
        })
      })
      Object.keys(this.dynamicForm.value).forEach((stepIds: any)=>{
        formBody = { ...formBody, ...this.dynamicForm.value[stepIds]};
      })
      Object.keys(formBody).forEach((inputIds: any)=>{
        if(typeof formBody[inputIds] === 'object'){
          if(formBody[inputIds].ival_value)
            formBody[inputIds] = formBody[inputIds].ival_value;
          else
            formBody[inputIds] = null;
        }
      })
      this.formService.submitForm(JSON.stringify(formBody)).subscribe({
        next: (res)=> {
          this.dynamicForm.enable();
          this.dynamicForm.reset();
          this.active = 1;
        }
      })
    }
  }

  controlName(name: string): string {
    return name.toLocaleLowerCase().replace(' ', '_');
  }
}
