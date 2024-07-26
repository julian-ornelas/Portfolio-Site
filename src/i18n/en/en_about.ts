import type { About } from '@/types'

const about: About = {
  title: 'About',
  summary:
    "I’m a computer science senior with a passion for data science, especially machine learning, and an appreciation for open-source projects. I have the skillset needed to create a machine learning model, and would like to help open-source projects grow. I enjoy tackling complex problems and finding solutions for them.\n\nIn my free time, I unwind with video games and board games, enjoying strategic and logical challenges that they offer. Additionally, I am trying to achieve a proficiency in Esperanto, a constructed language.",
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
      {
        title: "World's Best Armchair Astronaut",
        date: '2023-04',
        url: 'https://website/news/worlds-best-armchair-astronaut',
        awarder: 'Galactic Couch Potato Association',
        summary:
          "Awarded for outstanding achievements in the field of amateur space exploration from the comfort of one's living room. Recognized for over 500 hours of logged telescope time pointed at the TV screen, simulating a journey across the cosmos while never actually leaving the sofa."
      },
      {
        title: 'Supreme Overlord of Spreadsheet Sorcery',
        date: '2022-11',
        url: 'https://website/news/spreadsheet-sorcery',
        awarder: 'International League of Data Wizards',
        summary:
          'Honored for transforming ordinary spreadsheets into dazzling arrays of formulas and charts that not only compute complex datasets but also tell compelling stories, perform light shows, and occasionally predict the weather.'
      },
      {
        title: 'Grand Champion of Procrastination',
        date: '2024-01',
        url: 'https://website/news/procrastination-champ',
        awarder: 'Global Guild of Time Wasters',
        summary:
          'Awarded for successfully putting off a 10-minute task for over 6 months, a remarkable demonstration of procrastination skills, turning the act of delaying into an art form, and finally completing the task during a commercial break.'
      },
      {
        title: 'Lifetime Achievement in Snack Innovation',
        date: '2023-03',
        url: 'https://website/news/snack-innovation',
        awarder: 'Snack Lovers Federation',
        summary:
          'Recognized for a lifelong dedication to creating the perfect snack combinations that balance salty, sweet, crunchy, and gooey in one bite. Famous for inventing the chocolate-covered pretzel marshmallow nacho.'
      }
    ]
  }
}

export default about
