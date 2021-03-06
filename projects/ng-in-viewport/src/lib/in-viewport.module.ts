/*******************************************************************************
 * @license
 * Copyright (c) 2020 Piotr Stępniewski <k3nsei.pl@gmail.com>
 * (https://www.linkedin.com/in/piotrstepniewski/)
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://opensource.org/licenses/MIT
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InViewportDirective } from './in-viewport.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [InViewportDirective],
  exports: [InViewportDirective]
})
export class InViewportModule {}
