import aboutpic from "./components/Access/mePhoto.jpg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/MatheusMoura2000/hw20/',
  title: 'JS.',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'CHENG CHIEN',
  role: 'Full stack developer',
  description:
    'GT Boot camp student Matheus.',
  resume: '
    linkedin: '',
    github: 'https://github.com/MatheusMoura2000/hw20',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Password Generator',
    description:
      'Generates reliable passowrds for you to use',
    sourceCode: 'https://github.com/MatheusMoura2000/password-generator-Hw3',
    
  },
  {
    name: 'Event Planner',
    description:
      'Helps you create a schedule',
    sourceCode: 'https://github.com/MatheusMoura2000/schedule-organizer-Hw5',
  
  },
  {
    name: 'Work-generator',
    description:
      'allows user to interact and gain information on employees',
    sourceCode: 'https://github.com/MatheusMoura2000/work-generator-hw10',
  },
  {
    name: 'Note-Taker',
    description:
      'allows user to take notes',
    sourceCode: 'https://github.com/MatheusMoura2000/Note-Taker-Hw11',
    
  },
  {
    name: 'Weather-app',
    description:
      'You can check the weather anywhere you want ',
    sourceCode: 'https://github.com/MatheusMoura2000/weather-app-Hw6',

  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Express',
  'MySQL',
  'MongoDB',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'MERN',
  'Java 8',
  'Java Spring Boot',
  'Microservices',
  'Docker',
  'Heroku'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'Matheusmoura0917@gmail.com',
}

export { header, about, projects, skills, contact }
