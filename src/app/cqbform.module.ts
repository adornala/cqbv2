import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormioResource, FormioResourceRoutes, FormioResourceConfig, FormioResourceService } from 'ng2-formio/resource';


@NgModule({
  imports: [
    FormioResource,
    RouterModule.forChild(FormioResourceRoutes())
  ],
  providers: [
    FormioResourceService,
    {provide: FormioResourceConfig, useValue: {
      name: 'sampleForm',
      form: 'sample'
    }}
  ]
})
export class CQBResource {}
