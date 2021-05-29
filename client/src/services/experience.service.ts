export class ExperiencesService {
    getExperiences(): Promise<any> {
        return Promise.resolve([
            {
              date: 'May 2020 – Current',
              company: 'Aplazame (Madrid)',
              description: 'Front-end Developer. Development of an online payment method platform build with vanilla JS and migrating it to Vue.js with Sass, unit testing in jest and component testing with vue-test-utils. Maintenance and develop-ment of e2e tests in Cypress.'
            },
            {
              date: 'Sept 2018 – Abr 2020',
              company: 'ING Spain (Madrid)',
              description: 'Front-end Developer. Development of an Online Banking Platform in pure Javascript using Backbone, Marionette, Polymer and unit testing in mocha, chai and sinon.'
            },
            {
              date: 'Sept 2017 – Sept 2018',
              company: 'Content Stadium (Amsterdam)',
              description: 'Full Stack Developer. Development of a CMS templates editor written in Typescript, Html5 and CSS3 for the Front-end, and Node.js with Express for the Back-end'
            },
            {
              date: 'Sept 2016 - Sept 2017',
              company: 'Indra (Madrid)',
              description: 'Junior Full-Stack Developer. Web development in Java with Spring MVC and Angular 2+  of airline websites in a Scrum and Agile environment.'
            },
            {
              date: 'January 2016 - August 2016',
              company: 'Linea Directa (Madrid)',
              description: 'Front-end web development. Improvement of a console for the management of personal insurance with HTML, CSS and Javascript'
            },
          ])

    }
  
}

export default new ExperiencesService()