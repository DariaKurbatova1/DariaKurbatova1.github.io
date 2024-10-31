/* eslint-disable react/no-unescaped-entities */
import './Intro.css';
import profilePicture from './assets/profile.png'

export default function Intro(){
  return (
    <section id="about" className="intro">
      <img
        src={profilePicture }
        alt="profile picture"
        className="introImage"
      />
      <div className="introText">
        <h2 className="introTitle">Hello, I'm Daria!</h2>
        <p className="introDescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
         officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
};

