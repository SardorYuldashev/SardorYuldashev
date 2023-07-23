import React from 'react';
import classes from './backend.module.scss';
import server from '../../assets/server.gif';

const Backend = () => {
  const jobs = [
    {
      id: 1,
      title: "Metro",
      techs: ['logo_graphql.svg', 'logo_postgresql.svg', 'logo_expressjs.svg', 'logo_knexjs.webp'],
      url: 'https://github.com/SardorYuldashev/M4L06HW-Metro'
    },
    {
      id: 2,
      title: "Laptops",
      techs: ['logo_rest.webp', 'logo_expressjs.svg', 'logo_knexjs.webp', 'logo_postgresql.svg', 'logo_bcrypt.webp', 'logo_joi.webp', 'logo_jwt.svg'],
      url: 'https://github.com/SardorYuldashev/exam_8month'
    },
    {
      id: 3,
      title: "ToDo",
      techs: ['logo_mongodb.svg', 'logo_rest.webp', 'logo_jwt.svg', 'logo_joi.webp', 'logo_expressjs.svg', 'logo_bcrypt.webp', 'logo_dotenv.webp'],
      url: 'https://github.com/SardorYuldashev/M4L09CW-HW'
    },
    {
      id: 4,
      title: "Restaurant",
      techs: ['logo_graphql.svg', "logo_apollo.webp", 'logo_postgresql.svg', 'logo_expressjs.svg', 'logo_knexjs.webp'],
      url: 'https://github.com/SardorYuldashev/M4L05HW-Restaurant'
    },
    {
      id: 5,
      title: "CRM system imitation",
      techs: ['logo_rest.webp', 'logo_postgresql.svg', 'logo_expressjs.svg', 'logo_knexjs.webp', 'logo_dotenv.webp', 'logo_bcrypt.webp', 'logo_jwt.svg', 'logo_joi.webp'],
      url: 'https://github.com/SardorYuldashev/CRM-8-month'
    },
    {
      id: 6,
      title: "ORM",
      techs: ['logo_sequelize.webp', 'logo_postgresql.svg', 'logo_dotenv.webp', 'logo_expressjs.svg', 'logo_joi.webp', 'logo_bcrypt.webp'],
      url: 'https://github.com/SardorYuldashev/CRM-8-month/tree/orm'
    },
    {
      id: 7,
      title: "3 tasks in 1",
      techs: ['logo_graphql.svg', "logo_apollo.webp", 'logo_postgresql.svg', 'logo_expressjs.svg', 'logo_knexjs.webp'],
      url: 'https://github.com/SardorYuldashev/M4L04HW-Express-GraphQL-'
    },
    {
      id: 8,
      title: "Books",
      techs: ['logo_rest.webp', 'logo_lowdb.webp', 'logo_dotenv.webp', 'logo_expressjs.svg', 'logo_joi.webp', 'logo_jwt.svg'],
      url: 'https://github.com/SardorYuldashev/Month-2-exam-API'
    },
    {
      id: 9999,
      title: "Even more works",
      techs: ['logo_github.webp'],
      url: 'https://github.com/SardorYuldashev'
    }
  ];

  return (
    <div className={classes['backend']} id='backend'>
      <div className="container">
        <div className={classes['backend__content']}>
          <h2 className={classes['backend__content-title']}>
            Backend jobs
          </h2>

          {jobs.map(item => {
            return <a href={item.url}
              key={item.id}
              className={classes['backend__content-card']}
              target='_blank'
            >
              <img className={classes['backend__content-img']}
                src={server} alt="uzor" />

              <div className={classes['backend__content-info']}>
                <h2>{item.title}</h2>
                <div>
                  {item.techs.map(tag => {
                    return <img
                      key={tag}
                      className={classes['backend__content-logo']}
                      src={tag}
                      alt={tag}
                    />
                  })}
                </div>
              </div>
            </a>
          })}

        </div>
      </div>
    </div>
  );
};

export default Backend;