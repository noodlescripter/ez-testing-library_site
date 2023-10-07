import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  allLibraries: any = {
    cypress: {
      title: 'Cypress Library',
      position: 'start',
      content: "Simplify test automation with @ez-library/cypress. Write clean scripts for web apps, APIs, and end-to-end tests effortlessly."
    },
    wdio: {
      title: 'Webdriver IO Library',
      position: 'end',
      content: "Streamline automation with @ez-library/wdio. Write simple scripts for web apps, APIs, and end-to-end tests with ease."
    },
    playwright: {
      title: 'Playwright Library',
      position: 'start',
      content: "Uncomplicated testing with @ez-library/playwright. Write concise scripts for web apps, APIs, and end-to-end testing."
    },
    javaSelenium: {
      title: 'Selenium Library with Java 11',
      position: 'start',
      content: "Java & Selenium: Simplify automation with @ez-library/java-selenium. Write clean scripts for web apps, APIs, and tests effortlessly."
    },
  }

  rootUrl: string = 'https://github.com/noodlescripter';
  sAllLib = [
    {
      title: 'Cypress Library',
      href: this.rootUrl+'/ez-library_cypress',
      content: "Simplify test automation with @ez-library/cypress. Write clean scripts for web apps, APIs, and end-to-end tests effortlessly."
    },
    {
      title: 'Webdriver IO Library',
      href: this.rootUrl+'/ez-library_wdio',
      content: "Streamline automation with @ez-library/wdio. Write simple scripts for web apps, APIs, and end-to-end tests with ease."
    },
    {
      title: 'Playwright Library',
      href: this.rootUrl+'/ez-library_playwright',
      content: "Uncomplicated testing with @ez-library/playwright. Write concise scripts for web apps, APIs, and end-to-end testing."
    },
    {
      title: 'Selenium Library with Java 11',
      href: this.rootUrl+'/ez_library_selenium',
      content: "Java & Selenium: Simplify automation with @ez-library/java-selenium. Write clean scripts for web apps, APIs, and tests effortlessly."
    }
  ]
}
