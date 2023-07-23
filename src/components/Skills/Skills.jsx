import React from 'react';
import classes from './skills.module.scss';

const Skills = () => {
  const logos = [
    {
      id: 1,
      title: 'HTML5',
      url: 'logo_html.svg'
    },
    {
      id: 2,
      title: 'CSS3',
      url: 'logo_css.svg'
    },
    {
      id: 3,
      title: 'JavaScript',
      url: 'logo_javascript.svg'
    },
    {
      id: 4,
      title: 'TypeScript',
      url: 'logo_typescript.svg'
    },
    {
      id: 5,
      title: 'React JS',
      url: 'logo_reactjs.svg'
    },
    {
      id: 6,
      title: 'Vite',
      url: 'logo_vite.svg'
    },
    {
      id: 7,
      title: 'Vue JS',
      url: 'logo_vuejs.svg'
    },
    {
      id: 8,
      title: 'Gulp',
      url: 'logo_gulp.svg'
    },
    {
      id: 9,
      title: 'Bootstrap',
      url: 'logo_bootstrap.svg'
    },
    {
      id: 10,
      title: 'Tailwind',
      url: 'logo_tailwind.svg'
    },
    {
      id: 11,
      title: 'SASS/SCSS',
      url: 'logo_sass.svg'
    },
    {
      id: 12,
      title: 'Figma',
      url: 'logo_figma.svg'
    },
    {
      id: 13,
      title: 'Git',
      url: 'logo_git.svg'
    },
    {
      id: 14,
      title: 'Redux',
      url: 'logo_redux.svg'
    },
    {
      id: 15,
      title: 'Node JS',
      url: 'logo_nodejs.svg'
    },
    {
      id: 16,
      title: 'GraphQL',
      url: 'logo_graphql.svg'
    },
    {
      id: 17,
      title: 'PostgreSQL',
      url: 'logo_postgresql.svg'
    },
    {
      id: 18,
      title: 'Express JS',
      url: 'logo_expressjs.svg'
    },
    {
      id: 19,
      title: 'Next JS',
      url: 'logo_nextjs.svg'
    },
    {
      id: 20,
      title: 'MongoDB',
      url: 'logo_mongodb.svg'
    },
    {
      id: 21,
      title: 'Postman',
      url: 'logo_postman.svg'
    },
    {
      id: 22,
      title: 'Docker',
      url: 'logo_docker.svg'
    },
    
    {
      id: 23,
      title: 'Sequelize',
      url: 'logo_sequelize.webp'
    },
    {
      id: 24,
      title: 'Knex JS',
      url: 'logo_knexjs.webp'
    },
  ];

  return (
    <div className={classes['skills']}>
      <div className={classes['skills__content']}>

        {logos.map(logo => {
          if (logo.id % 2 === 1) {
            return <img
              className={classes['skills__content-img']}
              key={logo.id}
              src={logo.url}
              alt={logo.title}
              title={logo.title}
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          } else if (logo.id % 2 === 0) {
            return <img
              className={classes['skills__content-img']}
              key={logo.id}
              src={logo.url}
              alt={logo.title}
              title={logo.title}
              data-aos="fade-down"
              data-aos-duration="1000"
            />
          }
        })}

      </div>
    </div>
  );
};

export default Skills;