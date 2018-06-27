import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { routes } from './client.routes';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), MatInputModule, MatFormFieldModule],
  declarations: [RegisterComponent],
})
export class ClientModule {}
