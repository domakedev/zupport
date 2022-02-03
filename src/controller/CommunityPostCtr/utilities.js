/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
export const getPostTime = (fecha) => {
  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  const dnow = new Date();
  const dpost = new Date(fecha);
  // dividimos por mil porque son milisegundos
  const seconds = (dnow - dpost) / 1000;
  // console.log("eeeeeeeeeeeeeea",seconds);
  // aquí pongo algunos ejemplos, puedes añadir más `if else` para hacer los tiempos más específicos
  if (seconds <= 10) {
    return 'Ahora mismo';
  }
  if (seconds < 60) {
    return `Hace ${Math.ceil(seconds)} segundos`;
  }
  if (seconds < 300) {
    return `Hace ${Math.ceil(seconds / 60)} minutos`;
  }
  if (seconds < 1000) {
    return 'Hace 15 minutos';
  }
  if (seconds < 2000) {
    return 'Hace 30 minutos';
  }
  if (seconds < 86400) {
    return `Hace ${Math.ceil(seconds / 3600)} horas`;
  }
  if (seconds < 610000) {
    return `Hace ${Math.ceil(seconds / 86400)} días`;
  }
  if (seconds < 2600000) {
    return `Hace ${Math.ceil(seconds / 604800)} semanas`;
  }
  if (seconds < 28908604.109) {
    return `Hace ${Math.ceil(seconds / 2592000)} meses`;
  }
  if (seconds < 95000000) {
    return `Hace ${Math.round(seconds / 31536000)} años`;
  }
  return `El ${dpost.getDate()} de ${
    months[dpost.getMonth()]
  } de ${dpost.getFullYear()}`;
};

export const softNumber = (number) => {
  if (number > 999) {
    let x = `${number}`.length;
    // const p = Math.pow;
    const d = 10 ** true;
    x -= x % 3;
    return Math.round((number * d) / 10 ** x) / d + ' kMGTPE'[x / 3];
  }
  return number;
};

export const sortedDates = (arr) => {
  const sorted = [...arr].sort(
    (dateA, dateB) => dateB.timePost - dateA.timePost
  );
  return sorted;
};

export const rankings = (arr, number) => {
  const sorted = [...arr].sort((a, b) => b.userPts - a.userPts);
  const fifth = sorted.slice(0, number);
  return fifth;
};

// export const rankingsCommunity = (arr, number) => {
//   const postResolved = arr.filter((e) => e.resolved);
//   const sorted = [...arr].sort((a, b) => b.pots.length - a.users.length);
//   const fifth = sorted.slice(0, number);
//   return fifth;
// };
export const rankingsCommunity = (arr, number) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].posts.length > 0) {
      const resolvedPosts = arr[i].posts.filter((e) => e.resolved);
      // console.log(resolvedPosts);
      arr[i].postsResol = resolvedPosts; // (resolvedPosts.length / arr[i].posts.length) * 100;
    } else {
      arr[i].postsResol = []; // 0;
      count += 1;
    }
  }
  // console.log(count);
  const sorted = [...arr].sort(
    (a, b) => b.postsResol.length - a.postsResol.length
  );
  // console.log(sorted);
  // const fifth = count > 0 ? sorted.slice(0, 1) : sorted.slice(0, number);
  const fifth = sorted.slice(0, number);
  return fifth;
};
export const isUserInCommu = (arr, filter, currentUser) => {
  const userInCommun = [];
  const userInNotCommun = [];

  for (let i = 0; i < arr.length; i++) {
    const resp = arr[i].users.find((e) => e === currentUser);
    if (resp) {
      userInCommun.push(arr[i]);
    } else {
      userInNotCommun.push(arr[i]);
    }
  }
  if (filter === 'userInCommunity') {
    return userInCommun;
  }
  return userInNotCommun;
};
