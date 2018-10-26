import React from 'react';

class Main extends React.Component {
  render () {
    return (
      <main id="about-me">
        <a href="#">
          <i class="far fa-arrow-alt-circle-up">
            ::before
          </i>
        </a>
         <h1>About Me</h1>
           <picture>
             <source media="(min-width: 769px)" srcset="http://all4desktop.com/data_images/original/4246355-happy.jpg"/>
             <source media="(min-width: 426px)" srcset="https://www.deshebideshe.com/assets/news_images/7f5320efbbe7f01edaa136c52973fcc9.jpg"/>
               <img src="https://pbs.twimg.com/profile_images/739109952212467713/Vr_n84CJ.jpg" alt="my pictire' profile picture"/>
           </picture>
      </main>
    )
  }
}

export default Main;
