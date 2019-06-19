$(document).ready(function () {

  setSkillsImage(images)
  hoverSkillsImage()
  setEducation(education)
  setCareer(career)
  setProjects(projects)

  $(".scroll-link a").click(function () {
    $('.navbar-collapse').collapse('hide');
    $('html, body').animate({
      scrollTop: $($(this).attr("href")).offset().top
    }, 700);

    $(".scroll-link li").removeClass("active")

    $(this).parent().addClass("active")

  })

})


const setSkillsImage = (images) => {

  images.forEach(image => {
    $(".skill-1").append(`<article>
    <img src="images/${image}.png" alt="code-img">
      <h4>${image}</h4>
          </article>`)
  })
}

const hoverSkillsImage = () => {
  $('.skills img').hover(function () {
    $(this).stop().animate({ 'marginTop': '-10px', 'padding-bottom': '10px' }, 200);
  },
    function () {
      $(this).stop().animate({ 'marginTop': '0px', 'padding-bottom': '0px' }, 200);
    });

}

const setEducation = (element) => {
  element.forEach(value => {
    $('.edu-block').append(`<article class="alert col-12 col-md-4 card-body">
            <h5 class=" stack card-header" >${value.course}</h5>
            <br>
            <h5 style="font-weight:bold">${value.school}</h5>
            <h5>${value.year}</h5>
            <h6 style=" font-style: italic">${value.location}</h6>
          </article>`)
  })
}

const setProjects = (element) => {
  element.forEach(value => {
    $('.project-block').append(`<section class="row card-body card-body-2">

            <div class="col-12 col-md-4 d-flex justify-content-center align-items-center">
              <img class="img-fluid img-thumbnail" src=${value.image}> 
              </div>
            <div class="col-12 col-md-8" style="bottom: 21px;">
            <br>
              <article class = "container"  >
                <a target="_blank" href=${value.github}><img src="images/github.png"
                    alt="code-img"></a>
                <a target="_blank" class="a-h1" style="text-decoration: none"
                  href=${value.github}>${value.name}</a>
                <a target="_blank" href=${value.github}><img style="height:20px;width:20px"
                    src="images/hyperlink.png" alt="code-img"></a>
               
              </article>
               <p class="stack-1 container col-6 col-md-3">${value.date}</p>
              <p>${value.description} </p>
              <p style="font-weight:bold">${value.stack}</p>
            </div>

          </section>`)
  })
}

const setCareer = (element) => {
  element.forEach(value => {
    $('.career-block').append(` <div class="row">
          <div class="col-8 col-md-3 container">
            <header class="text-center">
              <p class=" stack">${value.company}</p>
              <p class="stack">${value.role}</p>
        
              <p class=" stack">${value.year}</p>
            </header>
          </div>
          <div class="col-12 col-md-9">
            ${value.work}
          </div>
          
        </div>

        <br>`)
  })
}


var images = ["javascript", "jquery", "html5", "css", "sass", "postgres", "mongodb", "ajax", "express",
  "vba", "ruby", "rails", "python", "django", "websocket", "react", "bootstrap", "nodejs"]

var education = [
  {
    course: 'Full-stack Web Development',
    school: 'Lighthouse Labs',
    year: '2019, Present',
    location: 'Vancouver, BC'
  },
  {
    course: 'MEng - Mining Engineering',
    school: 'UBC',
    year: '2013, January',
    location: 'Vancouver, BC'
  },
  {
    course: 'BEng - Mechanical Engineering',
    school: 'Anna University',
    year: '2008, April',
    location: 'Chennai, India'
  }
]

var projects = [
  {
    name: 'Goofspiel',
    github: 'https://github.com/gitvijayy/Goofspiel',
    host: '',
    description: `Goofspiel is a two player strategic card game, 
    built as a single page application.  Contributed to the project by implementing game logic, 
    frontend and websocket`,
    date: 'June 2019',
    stack: 'Javascript - HTML - CSS - jQuery - Websocket - AJAX - NodeJS - Express - Postgres - Bootstrap',
    image: 'images/gameplay.png',
  },
  {
    name: 'Chatty',
    github: 'https://github.com/gitvijayy/ChattyApp',
    host: '',
    description: `Interactive Chat application built using React`,
    date: 'June 2019',
    stack: 'React - Javascript - HTML - CSS - NodeJS - Express - Websockets',
    image: 'images/chattyapp.png',
  },
  {
    name: 'Tweeter',
    github: 'https://github.com/gitvijayy/tweeter',
    host: '',
    description: `Tweeter is a simple, single page Twitter clone`,
    date: 'May 2019',
    stack: 'Javascript - HTML - CSS - jQuery - AJAX - NodeJS - Express - MongoDB',
    image: 'images/tweeter.png',
  },
  {
    name: 'Tiny App',
    github: 'https://github.com/gitvijayy/TinyApp',
    host: '',
    description: `TinyURL clone, an application where you obtain a much 
    shorter URL for the give long URL`,
    date: 'May 2019',
    stack: 'Javascript - HTML - CSS - NodeJS',
    image: 'images/tinyapp.png',
  }

]
var career = [
  {
    company: 'Mechoz Pvt Ltd.',
    role: 'Co-Founder / General Manager',
    year: '2013 - 2018',
    work: `<ul style="text-align: left">
      <li> Developed key operational initiatives to drive and maintain substantial business growth.</li>
      <li> Established and administered annual budget with effective controls to prevent overages, minimize burn
        rate and support
                sustainability objectives.</li>

      <li> Conducted target market research to scope out industry competition and identify advantageous trends.
        Participated in high-level hiring decisions for key leadership positions, conducted senior hire
        interviews
        and nominated
                new board members.</li>
      <li> Interviewed, supervised and motivated staff members to achieve optimal productivity.</li>
      <li> Achieved top sales in company for two consecutive years, growing annual revenue by 20%.</li>
      <li> Developed program to promote new managers from within, building and maintaining cohesive leadership
                structure.</li>

      <li> Developed an in house ERP based on day to day requirements using VBA.</li>
      <li> Oversaw business-wide changes to modernize procedures and organization.</li>
      <li>Aligned operations with client goals by automating the workflow.</li>
    </ul>`

  },
  {
    company: 'New Gold',
    role: 'Ventilation Engineer Intern',
    year: '2011 - 2012',
    work: `<ul style="text-align: left">
            <li> Conducted surveys and devised drawings of mine layouts to prepare for mining operations.</li>
            <li> Supported operations in developing schedules and communicated status to aptly manage complex mining
              projects.</li>
            <li> Supported development of technical reports to provide vital insights for mining project implementation
              and activities.</li>
            <li> Performed detailed ventilation inspections to assess safety risks, mine structure and equipment.</li>

          </ul>`

  },
  {
    company: 'Mount Polley',
    role: 'Mineral Processing Associate',
    year: '2011',
    work: `<ul style="text-align: left">
            <li> Set up equipment, organized inventory and maintained facilities.</li>
            <li> Gathered, arranged and corrected research data to create representative graphs and charts highlighting
              results.
            </li>
            <li> Conducted feasibility studies which supported the development of magnetic sluice for gold recovery.
            </li>
            <li> Reviewed and verified recovery data before entering into database to enhance research quality and
              accuracy.</li>
            <li>Collected and recorded data at various field sites for later assessment and data analysis.</li>
          </ul>`

  },
  {
    company: 'Infosys',
    role: 'Systems Engineer',
    year: '2009 - 2010',
    work: `<ul style="text-align: left">

            <li> Provided back-end support for user identification software system to clients worldwide.</li>
            <li> Designed email templates for frequently used day to day communications.</li>
            <li> Prepared and submitted reports and other documentation to assist development team members.</li>
            <li> Trained on C, C++, Java and Visual Basic.</li>
            <li> Led a team of four on training project and developed an application for steam tables.</li>
          </ul>`

  }
]