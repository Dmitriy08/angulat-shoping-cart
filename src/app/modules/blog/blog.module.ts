import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BlogApiService } from './shared/blog-api.service';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [
  {path: 'blog', children: [
    {path: '', component: BlogComponent},
    {path: 'page/:id', component: BlogComponent}
  ]}
];

@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgbModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    BlogApiService
  ]
})
export class BlogModule { }
