import type { Experience } from '@/types'

const experience: Experience = {
  title: 'Experience',
  description: 'You can download my resume by clicking the button below.',
  download_button: 'Download resume',
  present: 'Present',
  month: 'month | months',
  year: 'year | years',
  list: [
    {
      company: 'CodePath',
      position: 'Cybersecurity Tech Fellow',
      url: 'http://www.applebutwithmorebananas.com',
      startDate: '2023-07',
      endDate: '2023-11',
      highlights: [
        'Mentored over 20 students through technical labs and projects, with topics including OSINT, cryptography, and encryption.',
        'Achieved a 95% satisfactory response rate to student questions and concerns by delivering prompt guidance and assistance on Slack.'
      ],
      description:
        "In an online Zoom class regarding cybersecurity, I had to help students through their breakout room problems, verifying that they understood the concepts and helping with any questions they had. I was friendly and helpful to my students, and overall made sure they enjoyed the class."
    },
    {
      company: 'PwC x Paragon One',
      position: 'Nonprofit Consulting Extern',
      url: 'http://www.googolplexthegame.com',
      startDate: '2023-06',
      endDate: '2023-08',
      highlights: [
        'Synthesized presentation for 2 selected donors highlighting giving trends, potential funding opportunities, and strategic recommendations.',
        'Secured up to $20,000 in grants by evaluating the potential impact of funding from selected organizations.'
      ],
      description:
        'I was tasked with helping a STEM nonprofit gain funding for their activities. I had to analyze financial capabilities and make sure philanthropic organizations were a match with the nonprofit. Then I presented my findings and pitched suggestions on why the nonprofit board should attempt to secure funding from those organizations.'
    }
    ,
    {
      company: 'Fulton County Schools',
      position: 'Information Technology Intern',
      url: 'http://www.googolplexthegame.com',
      startDate: '2022-06',
      endDate: '2022-07',
      highlights: [
        'Applied troubleshooting methodology on over 500 laptops to assess for physical and software issues.',
        'Created and updated Azure AD profiles for 60% of laptops using hash and model number, tagged laptops appropriately.'
      ],
      description:
        'I was able to assist in the re-imaging and preparing of school laptops for the next school year. It was a numbers game of trying to get as many laptops ready for the students while still ensuring quality performance, while communicating with my supervisors about how the laptops are coming along.'
    }
  ]
}

export default experience
