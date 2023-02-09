
const data = [
    {
        id: 1,
        senior_career: [
            {
                year: '1995-1996',
                club: 'Panathinaikos'
            },
            {
                year: '1996-1998',
                club: 'Apollon Smyrnis'
            },
            {
                year: '1998-2003',
                club: 'Panathinaikos'
            },
            {
                year: '2003-2005',
                club: 'Inter de Milan'
            },
            {
                year: '2005-2007',
                club: 'Benfica'
            },
            {
                year: '2007-2012',
                club: 'Panathinaikos'
            },
            {
                year: '2012-2014',
                club: 'Fulham'
            }
        ],
        options:['Geórgios Samarás', 'Theofanis Gekas', 'Giorgos Karagounis'],
        correct: 2
    },
    {
        id: 2,
        senior_career: [
            {
                year: '2006-2008',
                club: 'Cardiff City FC'
            },
            {
                year: '2008-2010',
                club: 'Arsenal FC'
            },
            {
                year: '2010-2011',
                club: 'Nottingham Forest FC'
            },
            {
                year: '2010-2011',
                club: 'Cardiff City FC'
            },
            {
                year: '2011-2019',
                club: 'Arsenal FC'
            },
            {
                year: '2019-2022',
                club: 'Juventus FC'
            },
            {
                year: '2021-2022',
                club: 'Rangers FC'
            },
            {
                year: '2022-2023',
                club: 'O.G.C. Nice'
            }
        ],
        options:['Brennan Johnson', 'Aaron Ramsey', 'Mark Hughes'],
        correct: 1
    },
    {
        id:3,
        senior_career: [
            {
                year: '2004-2007',
                club: 'A.J. Auxerre'
            },
            {
                year: '2007-2014',
                club: 'Arsenal F.C'
            },
            {
                year: '2014-2017',
                club: 'Manchester City F.C'
            },
        ],
        options:['Baccary Sagna', 'Gael Clichy', 'Vincent Kompany'],
        correct: 0
    },
    {
        id: 4,
        senior_career: [
            {
                year: '1999-2002',
                club: 'ASEC Mimosas'
            },
            {
                year: '2002-2009',
                club: 'Arsenal F.C'
            },
            {
                year: '2009-2013',
                club: 'Manchester City F.C'
            },
            {
                year: '2013-2016',
                club: 'Liverpool F.C'
            },
            {
                year: '2016-2017',
                club: 'Celtic F.C'
            },
        ],
        options:['Kolo Touré', 'Yaya Touré', 'El Bilal Touré'],
        correct: 0
    },
    {
        id: 5,
        senior_career: [
            {
                year: '2006-2007',
                club: 'Newcastle United F.C'
            },
            {
                year: '2007-2008',
                club: 'Falkirk F.C (on loan)'
            },
            {
                year: '2008-2009',
                club: 'Carlisle United F.C (on loan)'
            },
            {
                year: '2009-2016',
                club: 'Newcastle United F.C'
            },
            {
                year: '2016-2017',
                club: 'A.F.C Ajax (on loan)'
            },
            {
                year: '2016-2017',
                club: 'AZ Alkmaar (on loan)'
            },
            {
                year: '2017-2018',
                club: 'Brighton & Hove Albion'
            },
            {
                year: '2018-Now',
                club: 'Norwich City F.C'
            }
        ],
        options:['Davide Santon', 'Romain Amalfitano', 'Tim Krul'],
        correct: 2
    },
    {
        id: 6,
        senior_career: [
            {
                year: '2006-2007',
                club: 'Leeds United'
            },
            {
                year: '2007-2021',
                club: 'Tottenham Hotspur F.C'
            },
            {
                year: '2008-2009',
                club: 'Watford F.C (on loan)'
            },
            {
                year: '2009-2010',
                club: 'Peterborough United F.C (on loan)'
            },
            {
                year: '2010-2011',
                club: 'Bristol City (on loan)'
            },
            {
                year: '2012-2013',
                club: 'Sunderland (on loan)'
            },
            {
                year: '2019-2020',
                club: 'Newcastle United F.C (on loan)'
            },
            {
                year: '2021-2022',
                club: 'Watford F.C'
            },
        ],
        options:['Benoit Assou-Ekotto', 'Danny Rose', 'Michael Rankine'],
        correct: 1
    },
    {
        id: 7,
        senior_career: [
            {
                year: '2004-2006',
                club: 'Cukaricki Stankom'
            },
            {
                year: '2006-2007',
                club: 'OFK Belgrade'
            },
            {
                year: '2007-2010',
                club: 'S.S Lazio'
            },
            {
                year: '2010-2017',
                club: 'Manchester City F.C'
            },
            {
                year: '2017-2020',
                club: 'A.S Rome'
            },
            {
                year: '2020-2022',
                club: 'Inter de Milan'
            }
        ],
        options:['Branislav Ivanovic', 'Filip Duricic', 'Aleksandar Kolarov'],
        correct: 2
    },
    {
        id: 8,
        senior_career: [
            {
                year: '2003-2007',
                club: 'Watford F.C'
            },
            {
                year: '2007-2011',
                club: 'Aston Villa F.C'
            },
            {
                year: '2011-2019',
                club: 'Manchester United F.C'
            },
            {
                year: '2019-2021',
                club: 'Inter de Milan'
            },
            {
                year: '2021-2023',
                club: 'Aston Villa F.C'
            },
        ],
        options: ['Jesse Lingard', 'Ashley Young', 'Danny Welbeck'],
        correct: 1
    },
    {
        id: 9,
        senior_career: [
            {
                year: '2003-2015',
                club: 'Manchester United F.C'
            },
            {
                year: '2015-2017',
                club: 'West Bromwich Albion F.C'
            },
            {
                year: '2017-2019',
                club: 'Stoke City F.C'
            },
        ],
        options:['Darren Fletcher', 'Ryan Giggs', 'Owen Hargreaves'],
        correct: 0
    },
    {
        id: 10,
        senior_career: [
            {
                year: '2007-2009',
                club: 'Amiens'
            },
            {
                year: '2009-2012',
                club: 'Blackburn Rovers F.C'
            },
            {
                year: '2012-2015',
                club: 'Stoke City F.C'
            },
            {
                year: '2015-2018',
                club: 'Sevilla F.C'
            },
            {
                year: '2018-2019',
                club: 'A.S Roma'
            },
            {
                year: '2019-2020',
                club: 'Galatasaray F.C'
            },
            {
                year: '2020-2021',
                club: 'Stade Rennais'
            },
            {
                year: '2021-now',
                club: 'Al-Rayyan S.C'
            }
        ],
        options:["Steven N'Zonzi", 'Samir Nasri', 'Kevin Gameiro'],
        correct: 0
    }
];

export default data;