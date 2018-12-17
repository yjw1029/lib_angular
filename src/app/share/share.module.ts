import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import {NgZorroAntdModule, NZ_I18N, NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS, zh_CN} from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { MenuFoldOutline, MenuUnfoldOutline, UserOutline, LockOutline, LeftOutline } from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule, MatToolbarModule, MatRadioModule, MatCheckboxModule } from '@angular/material';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material';
import { MatChipsModule, MatSidenavModule, MatIconModule, MatAutocompleteModule, MatTableModule, MatSortModule, MatTabsModule} from '@angular/material';
import { BookInfoComponent } from './book-info/book-info.component';

registerLocaleData(zh);
const icons: IconDefinition[] = [MenuFoldOutline, MenuUnfoldOutline, UserOutline, LockOutline, LeftOutline];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdMobileModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatRadioModule,
    MatCheckboxModule,
    MatChipsModule,
    MatSidenavModule,
    MatIconModule,
    MatAutocompleteModule,
    MatTableModule,
    MatSortModule,
    MatTabsModule
  ],
  declarations: [BookInfoComponent],
  exports: [
    CommonModule,
    NgZorroAntdMobileModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatRadioModule,
    MatCheckboxModule,
    MatChipsModule,
    MatSidenavModule,
    MatIconModule,
    MatAutocompleteModule,
    MatTableModule,
    MatSortModule,
    MatTabsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: NZ_ICON_DEFAULT_TWOTONE_COLOR, useValue: '#00ff00' },
    { provide: NZ_ICONS, useValue: icons },
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
})
export class ShareModule { }
