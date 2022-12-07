import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { StarComponent } from './components/star/star.component';
import { OnFireComponent } from './components/on-fire/on-fire.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    StarComponent,
    OnFireComponent,
    NavigationBarComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
