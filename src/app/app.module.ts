import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

import { HomeModule } from './features/home/home.module';
import { AboutModule } from './features/about/about.module';
import { ExperienceModule } from './features/experience/experience.module';
import { ProjectsModule } from './features/projects/projects.module';
import { ContactModule } from './features/contact/contact.module';
import { SkillsModule } from './features/skills/skills.module';
import { AwardsCerticationComponent } from './features/awards-certication/awards-certication.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule, AboutModule, ExperienceModule, ProjectsModule, ContactModule,
    SkillsModule,
    AwardsCerticationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
