import images from './images'

const heroSection = {
    title: 'Dream Cabinets, Expert Craftsmanship',
    subtitle: 'Masterfully Crafted Cabinetry for Your Unique Needs',
  };
  
  const navlinks = [
    {
      link_title: 'Home',
      link_to: 'hero'
    },
    {
      link_title: 'About',
      link_to: 'about-us'
    },
    {
      link_title: 'Gallery',
      link_to: 'gallery'
    },
    {
      link_title: 'Contact',
      link_to: 'contact-us'
    }
  ];
  
  const contactUs = {
    title: 'Contact Us',
    headline: 'Call for a free consultation!',
    name_long: 'Epik Mill and Cabinets',
    name_short: 'Epik',
    addr: '',
    city: 'West Jordan',
    state_long: 'Utah',
    state_short: 'UT',
    postal_code: '84000',
    country: 'USA',
    phone_1: '801-604-7718',
    phone_2: '',
    email_1: 'Faux@EpikMillAndCabinet.com',
    email_2: '',
    title_wh: 'Working Hours',
    days_1: 'Monday-Friday:',
    hours_1: '08:00 am - 05:00 pm',
    social_media: [
      {
        title: 'Facebook',
        link: 'https://www.facebook.com/faux.bellon'
      },
    ]
  };

  const servicesOffered = {
    headline: 'Services Offered',
    sub_headline: '',
    description: [
      `Welcome to ${contactUs.name_long} where we specialize in crafting custom cabinetry that seamlessly blends beauty with functionality. Our expert artisans meticulously design and install cabinets that enhance the aesthetics of your space while providing practical solutions for everyday living. Whether you're renovating your kitchen, bathroom, or office, our cabinetry is tailored to meet your unique needs, ensuring a perfect fit for any style and purpose.`,
      `Our custom cabinetry installations are a testament to our commitment to quality and elegance. Each piece is carefully crafted to deliver both stunning visual appeal and unmatched functionality, transforming your home or business into a space of refined sophistication. From initial consultation to final installation, we work closely with you to create cabinetry that embodies your vision and enhances your lifestyle.`,
    ],
    services: [
      {
        service: `Kitchen Cabinet Design and Installation`,
        desc: `Crafting and installing custom kitchen cabinets that maximize storage, enhance functionality, and complement the kitchen's aesthetic.`
      },
      {
        service: `Entertainment Centers and Media Units`,
        desc: `Building custom entertainment centers and media units that house electronics, provide storage, and integrate with the living room or home theater design.`,
      },
      {
        service: `Bathroom Vanities and Storage Solutions`,
        desc: `Designing and building custom bathroom vanities and storage units that blend seamlessly with the bathroom decor while providing practical storage solutions.`,
      },
      {
        service: `Home Office Cabinetry`,
        desc: `Designing and installing custom cabinetry for home offices, including desks, shelving, and storage units to create an organized and productive workspace.`,
      },
      {
        service: `Commercial Cabinetry Solutions`,
        desc: `Creating custom cabinetry for commercial spaces such as offices, retail stores, and restaurants, tailored to the specific needs and aesthetics of the business.`,
      },        
    ],
    button_label: 'View Gallery', 
  }

  const aboutUs = {
    title: 'About Us',
    infoObjs: [
      {
        topLine: `${contactUs.name_long}`,
        headline: 'Iusto eaque adipisci',
        description: [
          `What sets ${contactUs.name_long} apart consectetur adipisicing elit. Nemo, exercitationem? Fugiat ad sapiente necessitatibus, soluta eum illo fugit sit optio`,
          `Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, corrupti. Expedita molestiae illum quaerat reprehenderit nemo architecto nisi nobis quia?`,
        ],
        imgUrl: `${images.about_us_1}`,
        alt: 'info-1',
        direction: 'fade-left',
        bg_color: 'bg-accent-dark-50',
        reverse: 'false'
      },  
      {
        topLine: `Exceptional Craftsmanship`,
        headline: 'Precision and Quality in Every Detail',
        description: [
          `At ${contactUs.name_long}, we pride ourselves on exceptional craftsmanship, where every piece of custom cabinetry is meticulously crafted with precision and quality in every detail. Our master artisans bring years of experience and a passion for their craft to every project, ensuring that each cabinet is not only functional but also a work of art. From the careful selection of materials to the precise construction and finishing touches, we uphold the highest standards of quality throughout the entire process.`,
          `Our commitment to precision craftsmanship extends beyond aesthetics; it's about creating cabinetry that stands the test of time. Each project is approached with dedication to detail, ensuring that every joint is seamless, every surface is flawless, and every client's vision is brought to life with unparalleled skill and care. Whether you're looking to enhance your kitchen, bathroom, or office space, our custom cabinetry exemplifies the epitome of quality craftsmanship, transforming your environment into a place of beauty and functionality.`,
        ],
        imgUrl: `${images.about_us_2}`,
        alt: 'info-1',
        direction: 'fade-right',
        bg_color: 'bg-accent-light-50',
        reverse: 'true'
      },  
      {
        topLine: `Innovative Design Solutions`,
        headline: 'Custom Solutions for Every Interior Challenge',
        description: [
          `At ${contactUs.name_long}, we are dedicated to providing innovative design solutions that address every interior challenge with creativity and expertise. Our team of designers excels in creating custom cabinetry that not only meets but exceeds expectations, offering solutions tailored to your specific space and functional needs. Whether you have a unique layout, limited space, or specific aesthetic preferences, we specialize in designing cabinetry that maximizes efficiency while enhancing the beauty of your environment.`,
          `Our approach to innovative design solutions begins with a deep understanding of your vision and requirements. From conceptualization to execution, we leverage modern design principles and cutting-edge techniques to deliver solutions that are as functional as they are visually striking. Each project is a collaborative journey, where we work closely with you to explore creative possibilities and translate ideas into reality. With a commitment to innovation and excellence, we transform spaces into reflections of your style and practical requirements, ensuring a truly personalized experience.`,
        ],
        imgUrl: `${images.about_us_3}`,
        alt: 'info-1',
        direction: 'fade-left',
        bg_color: 'bg-accent-dark-50',
        reverse: 'false'
      },              
    ]
  };

  const galleryInfo = {
    title: 'Gallery',
    description: `Explore the craftsmanship and creativity that define ${contactUs.name_long} through our gallery of completed projects. From luxurious kitchen transformations to sophisticated office cabinetry and elegant bathroom vanities, each photo showcases our commitment to excellence and attention to detail. Whether you're seeking inspiration for your upcoming project or admiring the seamless integration of beauty and functionality in our work, our gallery offers a glimpse into the possibilities we can bring to your space. Dive into our portfolio and envision how custom cabinetry from ${contactUs.name_long} can elevate your home or business to new heights of style and sophistication.`,
  };

  const contactUsPage = {
    title: 'Contact Us',
    subtitle: 'Call for a free quote!',
    description: [
      `Ready to transform your space with cabinetry tailored to your needs? Contact ${contactUs.name_long} today for a complimentary consultation and a free quote. Whether you're envisioning a stunning kitchen makeover, updating your bathroom with elegant vanities, or creating custom storage solutions for your home office, our team is here to bring your ideas to life. We pride ourselves on providing personalized service, expert craftsmanship, and innovative design solutions that exceed expectations. Don't wait—let's collaborate on making your dream cabinetry a reality.`,
      `Getting started is easy—simply fill out our contact form or give us a call to schedule your initial consultation. Our dedicated team will guide you through the process, from discussing your project requirements to delivering detailed designs and cost estimates. At ${contactUs.name_long}, we're committed to delivering excellence in every aspect of your custom cabinetry journey. Contact us today and take the first step towards enhancing your space with our exceptional craftsmanship and personalized service.`,
    ],
    imgUrl: '',
    alt: 'alt-1',
  };

  const data = {
    heroSection,
    navlinks,
    servicesOffered,
    aboutUs,
    galleryInfo,
    contactUsPage,
    contactUs,
  };
  
  export default data;