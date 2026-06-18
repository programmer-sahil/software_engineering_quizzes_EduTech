export const CAREER_UPSKILLING = {
  title: 'Career Upskilling Opportunity',
  questions: [
    'Remote or hybrid IT job preparation',
    'Freelancing and portfolio guidance',
    'Live classes with project-based mentorship',
    'Affordable student-friendly upskilling',
  ],
  summary:
    'Prepare for exams and career growth together with live classes, project-based mentorship, freelancing guidance, and practical IT skill building.',
  training:
    'We provide hybrid training through live classes, online app recordings, offline project-oriented smart classrooms with AC, and 1:1 doubt-clearing sessions.',
  courses: ['Data Analytics with Generative AI', 'Data Science with Generative AI'],
  outcome: 'Build skills. Create projects. Move toward your dream job.',
  contactLine: 'Contact us for more.',
  whatsappNumber: '918583058673',
  whatsappMessage: 'Hi dada, I am interested / need help in this domain. what is the fees?',
};

export const getWhatsAppLink = () => {
  const text = encodeURIComponent(CAREER_UPSKILLING.whatsappMessage);
  return `https://wa.me/${CAREER_UPSKILLING.whatsappNumber}?text=${text}`;
};
