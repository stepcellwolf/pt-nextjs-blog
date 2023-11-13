const talksData = [
  {
    title: 'Hate Speech on Internet',
    date: '14 - 17 November 2012',
    description:
      'Hate speech on Internet, delivering educational terminology, classification, and how to report hate speech on Internet',
  },
  {
    title: 'ACTA - ACTIVE CITIZENS TAKE ACTION',
    date: '19 - 21 March 2013',
    location: 'Maribor, Slovenia',
    description: 'Presenting topic: Bullying of digital divide or not?',
  },
  {
    title: 'Belgrade Security Forum 2013',
    date: '19 – 21 September 2013',
    location: 'Belgrade, Serbia',
    description:
      'Assuring Cyber-Security in the Western Balkans and the Rest of Europe: Roles and Responsibilities of Institutions, Industry and Users?',
  },
  {
    title: 'Smart Defense and Open – Door Policy – New Synergies for Euro – Atlantic Security',
    date: '27 November 2013',
    location: 'Sofia, Bulgaria',
    description:
      'Collective Cyber Defence – The Role of Newer Members and Opportunities for Specialization of Bulgaria in the Alliance Questions and answers',
  },
  {
    title: 'Kaspersky - CyberSecurity for the Next Generation 2014 (EU Round)',
    date: '11–12 December 2013',
    location: 'Politecnico di Milano, Milano, Italy',
    description: 'Methodological Approach to Security Awareness',
  },
  {
    title: 'NATO ARW: Strengthening Cyber Defense for Critical Infrastructure',
    date: '30 - 31 October 2014',
    location: 'Kiev, Ukraine',
    description:
      'Standards for Information Security are inappropriate fashion to assess the risk in private companies and elsewhere',
  },
  {
    title:
      'DCAF Young Faces Network 2014: Young Faces Network Cybersecurity Winter School for the Western Balkans',
    date: '1 - 5 December 2014',
    location: 'Petnica, Serbia',
    description: 'How the Internet works and Introduction to cybersecurity threats and risks',
  },
  {
    title: 'NATO ARW: Encouraging Cyber Security Awareness in the Balkans',
    date: '17 - 19 March 2015',
    location: 'Skopje, N. Macedonia',
    description: 'Cyber security awareness among the Balkan Countries and the rest of the world',
  },
  {
    title:
      'Geneva Internet Platform (GIP): Fighting cybercrime through closer international cooperation',
    date: '30 March 2015',
    location: 'Geneva, Switzerland',
    description: 'Presenting Cybersecurity Lab',
  },
  {
    title: 'Open Data & the Hacking Movement: Internet governance in Bangkok',
    date: 'August 2015',
    location: 'Remote',
    description: 'DoS/DDoS attacks at Cybersecurity Lab',
  },
  {
    title: 'TEDxBASSalon',
    date: '24 September 2015',
    location: 'Business Academy Smilevski, Skopje, N. Macedonia',
    description: 'Open Data & the Hacking Movement',
  },
  {
    title: 'Freedom not Fear 2015',
    date: '19 October 2015',
    location: 'Skopje, N. Macedonia',
    description: 'Mobile Security and privacy workshop',
  },
  {
    title: 'OSCE Chairmanship Event on Effective Strategies to Cyber/ICT Security Threats',
    date: '29 - 30 October 2015',
    location: 'Belgrade Serbia',
    description: 'Cyber.Lab and video scenario',
  },
  {
    title: '22nd OSCE Ministerial Council',
    date: '3 - 4 December 2015',
    location: 'Belgrade, Serbia',
    description: 'Cyber.Lab',
  },
  {
    title: 'Dark Moto Studio',
    date: '12 - 13 December 2015',
    location: 'Verona, Italy',
    description: 'Cyber security and privacy workshop',
  },
  {
    title: 'Beer & Code #40',
    date: '11 February 2016',
    location: 'Skopje, N. Macedonia',
    description: 'Drupal - winner in CMS security race',
  },
  {
    title: 'CYREX 2016',
    date: '26 February 2016',
    location: 'Plovdiv University Paisii Helendarski, Plovdiv, Bulgaria',
    description: 'Cyber Research Exercise',
  },
  {
    title: 'Start-up Academy',
    date: '4 - 6 March 2016',
    location: 'Kratovo, N. Macedonia',
    description: 'Security aspects of starting a e-business',
  },
  {
    title: 'On-line Winter School',
    date: '22 February 2016',
    location: 'Remote',
    description: 'Cybersecurity for South-Eastern Europe',
  },
  {
    title: 'ABA ROLI Regional E&E Internet Freedom Summit',
    date: '26 - 30 October 2016',
    location: 'Ohrid, N. Macedonia',
    description: '',
  },
  {
    title: 'NATO ARW',
    date: '15 - 17 November 2016',
    location: 'Skopje, N. Macedonia',
    description:
      'Health Security: Benchmarking Best Practices in Telemedicine for Eastern European NATO Members',
  },
  {
    title: 'SEEDIG - South Eastern European Dialogue on Internet Governance',
    date: '24 - 25 May 2017',
    location: 'Ohrid, N. Macedonia',
    description: 'Mobile security and pentesting',
  },
  {
    title:
      'SECOND REGIONAL INTERNET FREEDOM SUMMIT, AMERICAN BAR ASSOCIATION RULE OF LAW INITIATIVE’S (ABA ROLI’S): Development and Enhancement of Legal Frameworks in Eastern Europe and Eurasia to Protect Internet Freedom Program',
    date: '21 - 25 March 2018',
    location: 'Struga, N. Macedonia',
    description: 'Cybersecurity Challenges for 2018',
  },
  {
    title: 'EU Edition 2018',
    date: '4 May 2018',
    location: 'Berlin, Germany',
    description: 'Free and Safe in Cyberspace',
  },
  {
    title: '4TH SEEDIG MEETING',
    date: '23 – 24 May 2018',
    location: 'Ljubljana, Slovenia',
    description:
      'Session 5: Securing all data. Cybersecurity: National frameworks and regional cooperation',
  },
  {
    title: '28th Economic Forum',
    date: '4 - 6 September 2018',
    location: 'Krynica-Zdroj, Poland',
    description:
      'Discussion panel: Developing an Innovative Nationwide Education for Cyber Security',
  },
  {
    title: 'Economic Forum of Young Leaders 2018',
    date: '3 - 7 September 2018',
    location: 'Nowy Sacz, Poland',
    description:
      'Panel discussion: Enterprises in the world of smart products ‒ Industry 4.0 technologies at your fingertips',
  },
  {
    title: 'NATO ARW: Fundamental readiness in Cyber Defence in the Balkans (FRCDB)',
    date: '17 - 19 October 2018',
    location: 'Belgrade, Serbia',
    description: 'Cyber Security in the Western Balkans: Policy Gaps and Cooperation Opportunities',
  },
  {
    title: 'IGF-MKD: SECOND ANNUAL INTERNET GOVERNANCE FORUM MACEDONIA',
    date: '31 October 2018',
    location: 'Skopje, N. Macedonia',
    description: 'Cyber Security retrospective in Macedonia (Technical community)',
  },
  {
    title: 'Berlin Process for the Western Balkans',
    date: '4 - 5 July 2019',
    location: 'Poznan, Poland',
    description:
      'Panel discussion: Hybrid Threats to Democracy: Disinformation, propaganda and fake news',
  },
  {
    title: '29th Economic Forum',
    date: '3 - 5 September 2019',
    location: 'Krynica-Zdrój, Poland',
    description:
      'Panel discussion: Cyber Security of Critical Infrastructure and Industry. Presentation title: International Cooperation Between National Cyber Security Strategies for building a sustainable Digital Transformation, and Critical Infrastructure and Industry',
  },
  {
    title: 'Internet Generation Forum',
    date: '12 September 2019',
    location: 'Budapest, Hungary',
    description:
      'Discussing the Internet of Today and Tomorrow. Panel discussion: Keeping the Internet of tomorrow safe and secure for youngsters',
  },
  {
    title: 'IFG-MKD: 3rd Third Annual Internet Governance Forum Macedonia',
    date: '28 October 2019',
    location: 'Skopje, N. Macedonia',
    description: 'Македонија во рамките на националниот индекс на кибернетичка безбедност',
  },
  {
    title: 'Fourteenth Annual Meeting of the Internet Governance Forum (IGF) - IGF 2019',
    date: '25 - 29 November 2019',
    location: 'Berlin, Germany',
    description:
      'NRIs Collaborative Session on Cybersecurity. Emerging technologies and their interfaces with inclusion, security and human rights (NRIs)',
  },
  {
    title: 'Internet društvo Srbije, Beogradski ogranak',
    date: '25 June 2021',
    location: 'Remote',
    description: 'Vebinar o temi sa ISOC Fundamentals treninga',
  },
]

export default talksData
