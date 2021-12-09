const cotString = (string = '', num) => {
  if(string.length > num) {
    const str = string.substr(0,num);
    return `${str}...`;
  }
}

cotString('Hellow world', 2);
//=============================================================
const  newFunck = (arr = []) => {
  const arrTwo = arr.map((item,index) => ({Value: item, Type: typeof(item), Index: index}));
  return arrTwo;
}
newFunck([1,'Hello', true]);
//=============================================================
//====C этим не разобрался====== не хватило времени решил делать дальше ====
const funkArr = (arr=[]) => {
  const maxNunQuantity = arr.reduce((acc, n) => (acc[n] = (acc[n] || 0) + 1, acc), {});
  const nunQuantity = Math.max(Object.values(maxNunQuantity));

  //console.log(maxNunQuantity);
  //console.log(nunQuantity);
  //console.log(nunQuantity);
}
funkArr ([1,1,2,2,3,2,3,4])


//============================================================

const users = [
  {
    id: 4,
    first_name: 'Jeanette',
    last_name: 'Penddreth',
    email: 'jpenddreth0@census.gov',
    gender: 'female',
    ip_address: '26.58.193.2',
  },
  {
    id: 2,
    first_name: 'Petr',
    last_name: 'Jackson',
    email: 'gfrediani1@senate.gov',
    gender: 'male',
    ip_address: '229.179.4.212',
  },
  {
    id: 3,
    first_name: 'Jeanette',
    last_name: 'Penddreth',
    email: 'jpenddreth0@census.gov',
    gender: 'female',
    ip_address: '26.58.193.2',
  },
  {
    id: 2,
    first_name: 'Petr',
    last_name: 'Jackson',
    email: 'gfrediani1@senate.gov',
    gender: 'male',
    ip_address: '229.179.4.212',
  },
];

const modifiUser = (users) => {
  const arrWomen = [];
  const arrMen = [];
  const newUsers = users.map(item => ({fullName : `${item.first_name} ${item.last_name}`,id :item.id,email:item.email,gender: item.gender,ip_address: item.ip_address}) )

  const genderFilter = newUsers.map(item => {
      if(item.gender === 'female') {
        arrWomen.push(item)
      } else {
        arrMen.push(item)
      }
    }
  )

  //console.log({women : arrWomen})
  //console.log({men : arrMen})
}

modifiUser(users)

//====================================================
const videos = [{
  id: 65432445,
  title: "The Chamber"
}, {
  id: 675465,
  title: "Fracture"
}, {
  id: 70111470,
  title: "Die Hard"
}, {
  id: 654356453,
  title: "Bad Boys"
}];

const reduce = (arr = []) => {
  const obj = arr.reduce((acc, currentValue) => {
    acc[currentValue.id] = currentValue.title
    return acc;
  }, {});
  return obj;
}
reduce(videos)

//=========================================================

const newReleases = [{
  id: 70111470,
  title: "Die Hard",
  boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
  uri: "http://api.netflix.com/catalog/titles/movies/70111470",
  rating: [4.0],
  bookmark: []
}, {
  id: 654356453,
  title: "Bad Boys",
  boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
  uri: "http://api.netflix.com/catalog/titles/movies/70111470",
  rating: [5.0],
  bookmark: [{ id: 432534, time: 65876586 }]
}, {
  id: 65432445,
  title: "The Chamber",
  boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
  uri: "http://api.netflix.com/catalog/titles/movies/70111470",
  rating: [4.0],
  bookmark: []
}, {
  id: 675465,
  title: "Fracture",
  boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
  uri: "http://api.netflix.com/catalog/titles/movies/70111470",
  rating: [5.0],
  bookmark: [{ id: 432534, time: 65876586 }]
}];

const arrIdFunck = (arr = []) => {
  const arrId = []
  const arrIdfilter = arr.map(item => {
    if(item.rating[0] === 5 ) {
      arrId.push(item.id)
    }
    return arrId
  })
}
arrIdFunck(newReleases)

//======================================================

const boxarts = [
  {
    width: 200,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
  },
  {
    width: 150,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
  },
  {
    width: 300,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
  },
  {
    width: 425,
    height: 150,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"
  }
];

const maxArea = (arr = []) => {
  const obj = arr.reduce((acc, {currentWidth,currentHeight}) => {
    console.log([currentWidth,currentHeight])
    //return acc;
  }, {});
  //return  console.log(obj);
}
maxArea(boxarts)
