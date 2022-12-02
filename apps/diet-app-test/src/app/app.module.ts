import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { StarComponent } from './star/star.component';


@NgModule({
  declarations: [AppComponent,RecipeComponent, StarComponent],
  imports: [BrowserModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

