// created by angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
// routing

// created by me
import { RecipeComponent } from './components/recipe/recipe.component';
import { StarComponent } from './components/star/star.component';
import { OnFireComponent } from './components/on-fire/on-fire.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchComponent } from './lunch/lunch.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FilterHeaderComponent } from './components/filter-header/filter-header.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    StarComponent,
    OnFireComponent,
    NavigationBarComponent,
    FooterComponent,
    BreakfastComponent,
    LunchComponent,
    RecipesComponent,
    FilterHeaderComponent,
  ],
  imports: [BrowserModule, NgbModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
