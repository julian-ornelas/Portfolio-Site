import type { About } from '@/types'

const about: About = {
  title: 'About',
  summary:
    "I’m a computer science senior with a passion for data science, especially machine learning, and an appreciation for open-source projects. I have the skillset needed to create a machine learning model, and would like to help open-source projects grow. I enjoy tackling complex problems and finding solutions for them.\n\nIn my free time, I unwind with video games and board games, enjoying the strategic and logical challenges they offer. Additionally, I am trying to achieve a proficiency in Esperanto, a constructed language.",
  education: {
    title: 'Education',
    list: [
      {
        title: 'Bachelor of Science in Computer Science',
        institution: 'Georgia State University',
        url: 'https://www.gsu.edu/',
        description:
          "I'm taking my undergraduate degree here. I have taken a myriad of computer science courses, ranging from intro computer science classes to more specialized courses. I will soon be taking classes in machine learning and data mining.",
        startDate: '2022-08',
        endDate: '2025-05',
        courses: [
          'Fundamentals of Data Science',
          'Probability and Statistics',
          'Linear Algebra',
          'Game Theory',
          'Data Structures & Algorithms'
        ]
      }
    ]
  },
  achievements: {
    title: 'Achievements',
    list: [
    ]
  }
}

export default about
