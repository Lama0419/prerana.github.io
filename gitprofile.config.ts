// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'preranabl', // Your GitHub org/user name. (This is the only required config)
  },
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed.
        },
      },
    },
  seo: {
    title: 'Portfolio of Prerana Blown Lama',
    description: 'Portfolio page for Prerana Blown Lama. Resume. Github Profile',
    imageURL: '',
  },
  social: {
    linkedin: 'preranabl',
    twitter: 'blownlama',
    medium: '@preranablama',
    email: 'preranablama@gmail.com',
  },
  resume: {
    fileUrl:
      '/Resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Blue Teaming',
    'Threat Intelligence',
    'Digital Forensics',
    'SOC',
    'Incidence Response',
    'Red Teaming',
    'Penetration Testing',
    'Vulnerability Management',
    'Git',
    'Docker'
  ],
  experiences: [
    {
      company: 'Cloud Factory',
      position: 'Cloud Worker',
      from: 'Oct 2023',
      to: 'Present',
      companyLink: 'https://www.cloudfactory.com.np/',
      tasks: 'Using project management tool Jira Service Desk for updating tickets. Updating tickets in
spreadsheet.<br> Working on cloud-based IT management platform Bluezoo and network
monitoring tool Cradle point.'
    },
    
  certifications: [
    {
      name: 'Blue Team Level 1 (BTL1)',
      body: 'This certification covers the following domains; Security Fundamentals, Phishing Analysis, Digital Forensics, Threat Intelligence, SIEM, Incident Response. Ends with a 24-hour incident response exam.',
      year: 'January 2022',
      link: 'https://elearning.securityblue.team/home/certificate/569726006',
    },
    {
      name: 'Certified Ethical Hacker (CEH v12)',
      body: 'The C|EH exam is a 4-hour exam with 125 multiple-choice questions. This knowledge-based exam will test your skills in Information Security Threats and Attack Vectors, Attack Detection, Attack Prevention, Procedures, Methodologies and more!',
      year: 'December 2021',
      link: 'https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/',
    },
    {
      name: 'Certified Application Practitioner (CAP)',
      body: 'CAP is intended to be taken by application security engineers, application developers, SOC analysts, penetration testers, red and blue team members and any appsec enthusiast, who wants to evaluate and advance their knowledge.',
      year: 'March 2023',
      link: 'https://secops.group/product/certified-application-security-practitioner/',
    },
    {
      name: '(ISC)² cc',
      body: 'This certification covers the following domains; Security Fundamentals, Phishing Analysis, Digital Forensics, Threat Intelligence, SIEM, Incident Response. Ends with a 24-hour incident response exam.',
      year: 'January 2021',
    },
    {
      name: 'Aviatrix Multi-Cloud Networking Associate',
      year: 'September 2020',
    },
    {
      name: 'Fortinet NSE 2 Network Security Associate',
      year: 'May 2020',
    },
    {
      name: 'CNSS Certified Network Specialist | ICSI (International CyberSecurity Institute)',
      year: 'May 2020',
    },
    {
      name: 'Cloudflare Accredited Service Architect',
      year: 'May 2021',
    },
    {
      name: 'Cloudflare Accredited Sales Professional',
      year: 'May 2021',
    },
    {
      name: 'SkillFront ISO/IEC 27001 Information Security Associate',
      year: 'May 2021',    },
    {
      name: 'Blue Team Level 1',
      body: 'This certification covers the following domains; Security Fundamentals, Phishing Analysis, Digital Forensics, Threat Intelligence, SIEM, Incident Response. Ends with a 24-hour incident response exam.',
      year: 'January 2022',
      link: 'https://elearning.securityblue.team/home/certificate/569726006',
    },
  ],
  educations: [
    {
      institution: 'Saarland University',
      degree: 'Masters in Cybersecurity',
      from: '2023',
      to: '2025',
    },
    {
      institution: 'London Metropolitan University',
      degree: 'Bachelors in Networking and IT Security',
      from: '2017',
      to: '2020',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: '@realnikhiljyapu', // to hide blog section, keep it empty
    limit: 5, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
    enablePWA: true,
};

export default CONFIG;
