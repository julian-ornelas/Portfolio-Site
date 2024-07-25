import type { Hero } from '@/types'

const hero: Hero = {
  title: 'Hey, My name is Julian Ornelas',
  subtitle:
    "Data science is my passion, and I am committed to leveraging open-source programs to drive innovation and solve complex problems. With a solid foundation in computer science as a senior at Georgia State University, I strive to expand my knowledge and skills.",
  name: 'Julian Ornelas',
  url: '',
  contact_button: 'Get in touch',
  //If a profile hast an empty string '', the button wont be rendered
  profiles: {
    linkedin: 'https://www.linkedin.com/in/julian-ornelas/',
    github: 'https://github.com/julian-ornelas/',
    youtube: '',
    twitter: '',
    instagram: '',
    facebook: ''
  },
  home: 'Home'
}

export default hero
