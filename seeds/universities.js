
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('universities').del()
    .then(function () {
      // Inserts seed entries
      return knex('universities').insert([
        {
          id: 1,
          school_name:"Baruch College",
          description:"Baruch College is a public institution that was founded in 1919. It has a total undergraduate enrollment of 15,210.",
          ranking:20,
          tuition:7551,
          acceptance_rate: 31,
          imgURL:"http://www1.cuny.edu/mu/forum/files/2013/09/Baruch-College-Host-%E2%80%9CGet-Out-the-Vote%E2%80%9D-Rally-3.jpg",
          latitude:40.7390899,
          longitude:-73.9868692
        },
        {
          id: 2,
          school_name:"Columbia University",
          description:"Columbia University is a private institution that was founded in 1754. It has a total undergraduate enrollment of 6,113.",
          ranking:5,
          tuition:57208,
          acceptance_rate:6,
          imgURL:"https://thenypost.files.wordpress.com/2017/02/columbia-university.jpg?quality=90&strip=all",
          latitude:40.8075395,
          longitude:-73.9647667
        },
        {
          id: 3,
          school_name:"Fashion Institute of Technology",
          description:"Fashion Institute of Technology is a public institution that was founded in 1944.It has a total undergraduate enrollment of 9,096.",
          ranking:100,
          tuition:14863,
          acceptance_rate:40,
          imgURL:"http://www.akastrategy.com/wp-content/uploads/2012/05/FIT-21.png",
          latitude:40.747029,
          longitude:-73.9963076
        },
        {
          id: 4,
          school_name: "Fordham University",
          description: "Fordham University is a private institution that was founded in 1841. It has a total undergraduate enrollment of 9,258.",
          ranking: 61,
          tuition: 50601,
          acceptance_rate: 45,
          latitude:40.7715518,
          imgURL:"https://news.fordham.edu/wp-content/uploads/2015/04/EASTER-NEWSPAGE.jpg",
          longitude:-73.9871233
        },
        {
          id: 5,
          school_name: "Hunter College",
          description: "CUNY—Hunter College is a public institution that was founded in 1870. It has a total undergraduate enrollment of 16,723.",
          ranking: 28,
          tuition: 17250,
          acceptance_rate: 38,
          imgURL:"http://www.hunter.cuny.edu/research/repository/images/hunter_campus1.jpg/image_preview",
          latitude:40.7685446,
          longitude:-73.9668191
        },
        {
          id: 6,
          school_name: "John Jay College of Criminal Justice",
          description: "CUNY—John Jay College of Criminal Justice is a public institution that was founded in 1965. It has a total undergraduate enrollment of 12,674.",
          ranking: 111,
          tuition: 17940,
          acceptance_rate: 34,
          imgURL:"http://www.jjay.cuny.edu/sites/default/files/Admissions/admissions-graduatemainimage.jpg",
          latitude:40.7703971,
          longitude:-73.9906935
        },
        {
          id: 7,
          school_name: "New School",
          description: "The New School is a private institution that was founded in 1919. It has a total undergraduate enrollment of 7,014.",
          ranking: 133,
          tuition: 47330,
          acceptance_rate: 60,
          imgURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/New_School_University_Center.jpg/300px-New_School_University_Center.jpg",
          latitude:40.7435814,
          longitude:-74.0026616
        },
        {
          id: 8,
          school_name: "New York University - NYU",
          description: "New York University is a private institution that was founded in 1831. It has a total undergraduate enrollment of 26,135.",
          ranking: 30,
          tuition: 50464,
          acceptance_rate: 32,
          imgURL:"https://www.usnews.com/img/college-photo_6422.jpg",
          latitude:40.7295174,
          longitude:-73.9986549
        },
        {
          id: 9,
          school_name: "Pace University",
          description: "Pace University is a private institution that was founded in 1906. It has a total undergraduate enrollment of 8,914.",
          ranking: 187,
          tuition: 44036,
          acceptance_rate: 84,
          imgURL:"http://dailynurse.com/wp-content/uploads/2017/04/Pace.jpg",
          latitude:40.7103915,
          longitude:-74.0081298
        },
        {
          id: 10,
          school_name: "Yeshiva University",
          description: "Yeshiva University is a private institution that was founded in 1886. It has a total undergraduate enrollment of 2,714.",
          ranking: 94,
          tuition: 42000,
          acceptance_rate: 51,
          imgURL:"https://bcexpert.uk/wp-content/uploads/2016/12/education-uk.jpg",
          latitude:40.734726,
          longitude:-73.996215
        }
      ]);
    });
};
