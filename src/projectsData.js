import ecommerce from "./assets/ecommerce.png";
import edura from "./assets/edura.png";
import ecommerce1 from "./assets/ecommerce1.png";
import ecommerce3 from "./assets/ecommerce3.png";
import ecommerce2 from "./assets/ecommerce2.png";
import edura1 from "./assets/edura1.png";
import edura2 from "./assets/edura 2.png";
import edura3 from "./assets/edura 3.png";
import hungary1 from "./assets/hungary1.png";
import hungary2 from "./assets/hungary2.png";
import hungary3 from "./assets/hungary3.png";
import hungary from "./assets/hungary.png";
export const projects = [
    {
        id: "ecommerce-website",
        title: "E-commerce Website",
        desc: "Built a responsive e-commerce website using React & Tailwind CSS featuring product listings, wishlist, and authentication.",
        image: ecommerce,
        tags: ["React", "Tailwind CSS", "User Auth"],
        type: "Frontend Development",
        company: "Internship",
        techStack: "React, Tailwind CSS",
        about: "Developed a responsive e-commerce platform that provides a smooth shopping experience. The project focuses on clean UI and essential shopping features.",
        results: "Implemented product listings, product details, wishlist, and add-to-cart features. Added user authentication (login/signup) with a clean, modern UI.",
        images: [ecommerce1, ecommerce2,ecommerce3],
    },
    {
        id: "edura-elearning",
        title: "Edura E-learning Website",
        desc: "An e-learning platform featuring an instructor dashboard to create, edit, and manage courses.",
        image: edura,
        tags: ["React", "API Integration", "Tailwind CSS"],
        type: "Frontend Development",
        company: "Internship",
        techStack: "React, Tailwind CSS",
        about: "Developed an e-learning platform with an instructor dashboard designed to empower educators with comprehensive course management tools.",
        results: "Created a system to create, edit, and manage courses. Integrated APIs to fetch and manage dynamic course data. Designed responsive layouts for both students and instructors.",
        images: [edura2, edura3, edura1],
    },
    
     {
  id: "hungary-food-delivery",
  title: "Hungary Food Delivery (Frontend)",
  desc: "Frontend food delivery web application with login, food browsing, sorting, and cart functionality.",
  image: hungary, // Using existing asset as placeholder
  tags: ["React", "CSS", "JavaScript"],
  type: "Frontend Development",
  company: "Personal Project",
  techStack: "React, CSS, JavaScript",
  about: "Developed a responsive frontend food delivery system focusing on UI and user experience. The application allows users to sign up, log in, browse food items, and manage their cart.",
  results: "Implemented food listing and sorting, login/signup UI, and add-to-cart functionality using React state for real-time updates.",
  images: [hungary3, hungary2, hungary1],
}

    
];
