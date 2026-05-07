export const CAREER_UPSKILLING = {
  title: 'Career Upskilling Opportunity',
  questions: ['Do you want a remote or hybrid IT job?', 'Do you want to start freelancing?'],
  summary:
    'Upskill yourself with industry professionals, build real-world projects, and learn trending tools and skills.',
  training:
    'We provide hybrid training through online app recordings, offline project-oriented smart classrooms with AC, and 1:1 doubt-clearing sessions.',
  courses: ['Data Analytics with Generative AI', 'Data Science with Generative AI'],
  outcome: 'Build skills. Create projects. Move toward your dream job.',
  contactLine: 'Contact us for more.',
  whatsappNumber: '918583058673',
  whatsappMessage: 'I am interested in Data Analytics course for getting jobs and starting freelancing.',
};

export const getWhatsAppLink = () => {
  const text = encodeURIComponent(CAREER_UPSKILLING.whatsappMessage);
  return `https://wa.me/${CAREER_UPSKILLING.whatsappNumber}?text=${text}`;
};
