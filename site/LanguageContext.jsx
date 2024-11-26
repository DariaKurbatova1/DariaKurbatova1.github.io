/* eslint-disable react/prop-types */
// LanguageContext.jsx
import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    header: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
    },
    contact: {
        title: "Contact Me",
        nameLabel: "Name:",
        emailLabel: "Email:",
        messageLabel: "Message:",
        sendButton: "Send Message",
        successMessage: "Email sent successfully!",
        errorMessage: "Failed to send email. Please try again later. ",
      },
    intro: {
      title: "Hello, I'm Daria!",
      description: `I am a motivated software developer in my final year at Dawson College. 
        Through experience in both software development and software testing, 
        I have acquired knowledge not only in programming, but also the software 
        development life cycle, the agile and waterfall methodologies along with a 
        proven ability to collaborate effectively in teams. I love collaborating 
        with people to create something, especially if by working on a project I am
        able to solve some real-world problem. I am excited to join a motivated team 
        and make a meaningful impact!`
    },
    experiences: {
      title: "Experience",
      items: [
        {
          position: "Sales Coach",
          company: "H&M",
          location: "Brossard, Canada",
          dates: "September 2023 – ...",
          description: "Promoted to sales coach role which involves:",
          achievements: [
            "Training the new employees",
            "Mentoring new employees in H&M protocols",
            "Ensuring customer service excellence",
            "Leveraging great interpersonal skills to encourage teamwork on the sales floor."
          ]
        },
        {
          position: "Software Tester Internship",
          company: "E-Point",
          location: "Montreal, Canada (Remote)",
          dates: "January 2024 – May 2024",
          description: "Participated in the testing of the E-point web application.",
          achievements: [
            "Performed ad-hoc and exploratory testing, reported bugs using Jira.",
            "Developed test cases for different parts of the application using Qase system."
          ]
        },
        {
          position: "Software Tester (Academic Project)",
          company: "Hitek Computer School",
          location: "Vancouver, BC",
          dates: "April 2023 – December 2023",
          description: "Project: Loan Management System, a web-based bank loan prequalification system.",
          achievements: [
            "Performed ad-hoc testing, reported bugs using Elementool defect tracking system, and verified bug fixes.",
            "Developed test plans and generated test cases for different parts of the application.",
            "Performed various types of testing, such as Functional, Regression, and System.",
            "Conducted Compatibility testing of the web application on different browsers.",
            "Conducted variance management by analyzing and verifying test results, providing status and progress reports using TestLink.",
            "Created automated test scripts using UFT and Selenium WebDriver."
          ]
        }
      ]
    },
    skills: {
      title: "My Skills",
      javaScript: {
        name: "JavaScript",
        description: "Experienced in ES6+, React, Node.js"
      },
      python: {
        name: "Python",
        description: "Proficient in Flask and data analysis"
      },
      htmlCss: {
        name: "HTML & CSS",
        description: "Skilled in responsive and accessible design"
      },
      mongoDB: {
        name: "MongoDB",
        description: "Database management and queries"
      },
      git: {
        name: "Git",
        description: "Version control and collaboration"
      },
      java: {
        name: "Java",
        description: "Object-oriented programming and development"
      },
      cSharp: {
        name: "C#",
        description: "Experienced with .NET framework"
      },
      oracleSQL: {
        name: "Oracle SQL",
        description: "Database queries and management"
      },
      jira: {
        name: "Jira",
        description: "Project management and issue tracking"
      },
      selenium: {
        name: "Selenium WebDriver",
        description: "Automated testing and quality assurance"
      },
    },
  },
  fr: {
    header: {
      about: "À propos",
      projects: "Projets",
      experience: "Expérience",
      skills: "Compétences",
      contact: "Contact",
    },
    contact: {
        title: "Contactez-moi",
        nameLabel: "Nom:",
        emailLabel: "Email:",
        messageLabel: "Message:",
        sendButton: "Envoyer le message",
        successMessage: "Email envoyé avec succès!",
        errorMessage: "Échec de l'envoi de l'email. Veuillez réessayer plus tard. ",
      },
    intro: {
      title: "Bonjour, je suis Daria!",
      description: `Je suis une étudiante en dévelopement de logiciels motivée, dans ma dernière année au Cégep Dawson. 
        Grâce à mon expérience en développement logiciel et en test de logiciels, 
        j'ai acquis des connaissances non seulement en programmation, mais aussi sur le cycle de vie 
        du développement logiciel, les méthodologies agile et en cascade, ainsi qu'une 
        excellante capacité à collaborer efficacement en équipe. J'adore collaborer 
        avec les gens pour créer quelque chose, surtout si en travaillant sur un projet, 
        je peux résoudre un problème du monde réel. Je suis impatiente de rejoindre une équipe motivée 
        et de faire une contribution signifiante!`
    },
    experiences: {
      title: "Expérience",
      items: [
        {
          position: "Coach de Ventes",
          company: "H&M",
          location: "Brossard, Canada",
          dates: "Septembre 2023 – ...",
          description: "Promue au poste de coach de vente, ce qui implique :",
          achievements: [
            "Former les nouveaux employés",
            "Éduquer les nouveaux employés sur les protocoles H&M",
            "Assurer une excellence en service client",
            "Exploiter d'excellentes compétences interpersonnelles pour encourager le travail d'équipe sur le plancher de vente."
          ]
        },
        {
          position: "Stage en Test de Logiciel",
          company: "E-Point",
          location: "Montréal, Canada (Télétravail)",
          dates: "Janvier 2024 – Mai 2024",
          description: "Participer aux tests de l'application web E-point.",
          achievements: [
            "Effectuer des tests ad-hoc et exploratoires, signalé des bugs en utilisant Jira.",
            "Développer des cas de test pour différentes parties de l'application en utilisant le système Qase."
          ]
        },
        {
          position: "Testeur de Logiciel (Projet Académique)",
          company: "Hitek Computer School",
          location: "Vancouver, BC",
          dates: "Avril 2023 – Décembre 2023",
          description: "Projet : Loan Management System, un système de préqualification de prêt bancaire.",
          achievements: [
            "Effectuer des tests ad-hoc, signalé des bogues en utilisant le système de suivi de défauts Elementool, et vérifié les corrections de bogues.",
            "Développer des plans de test et générer des cas de test pour différentes parties de l'application.",
            "Effectuer différents types de tests, tels que fonctionnel, régression, et tests de système.",
            "Réaliser des tests de compatibilité de l'application web sur différents navigateurs.",
            "Vérifier les résultats des tests, en fournissant des rapports de statut et de progression àvec TestLink.",
            "Créer des scripts de test automatisés en utilisant UFT et Selenium WebDriver."
          ]
        }
      ]
    },
    skills: {
      title: "Mes Compétences",
      javaScript: {
        name: "JavaScript",
        description: "React, Node.js"
      },
      python: {
        name: "Python",
        description: "Compétente en Flask"
      },
      htmlCss: {
        name: "HTML & CSS",
        description: "Compétente an design d'applications web"
      },
      mongoDB: {
        name: "MongoDB",
        description: "Requêtes de base de données"
      },
      git: {
        name: "Git",
        description: "Contrôle de version et collaboration"
      },
      java: {
        name: "Java",
        description: "Programmation orientée objet et développement"
      },
      cSharp: {
        name: "C#",
        description: "Expérimenté avec le framework .NET"
      },
      oracleSQL: {
        name: "Oracle SQL",
        description: "Requêtes de base de données"
      },
      jira: {
        name: "Jira",
        description: "Gestion de projet et suivi des problèmes"
      },
      selenium: {
        name: "Selenium WebDriver",
        description: "Tests automatisés et assurance qualité"
      },
    },
    // Add more sections as needed...
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'fr' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
