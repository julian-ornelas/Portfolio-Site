import type { Projects } from '@/types'

const projects: Projects = {
  title: 'Projects',
  source: 'GitHub',
  website: 'Website',
  main: [
    {
      name: 'Water Quality Prediction',
      techstack: ['scikit-learn', 'Pandas', 'Numpy',],
      image: 'water_quality_decision_tree_stats.png',
      description:
        'Machine learning models that predicts whether water is suitable for farmers to use for irrigation based on a dataset found on Kaggle that had features like chemical composition and color, plus some exploratory visualizations.',
      src: 'https://github.com/sebastien-andre/Water_Quality_Project',
      url: ''
    },
    {
      name: 'Hangman',
      techstack: ['Python'],
      image: 'hangman_game.png',
      description:
        'CLI-based Hangman that gets a random word from API based on difficulty level and has user guess what the letter is. Uses arrays to check whether inputted letter is correct and is able to update guess list.',
      src: 'https://github.com/julian-ornelas/fun_hangman',
      url: ''
    }
  ],
  // You can leave this array empty
  other: [
  ]
}

export default projects
