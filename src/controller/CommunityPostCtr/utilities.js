export const getPostTime = (fecha) =>{

    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const dnow = new Date();
    const dpost = new Date(fecha);  
    // dividimos por mil porque son milisegundos
    const seconds = (dnow - dpost) / 1000;  
    // aquí pongo algunos ejemplos, puedes añadir más `if else` para hacer los tiempos más específicos
    if (seconds <= 10) {
      return "Ahora mismo";
    } else if (seconds < 60) {
      return "Hace " + Math.ceil(seconds) + " segundos";
    } else if (seconds < 300) {
      return "Hace " + (Math.ceil(seconds / 60)) + " minutos";
    } else if (seconds < 1000) {
      return "Hace 15 minutos";
    } else if (seconds < 2000) {
      return "Hace 30 minutos";
    } else if (seconds < 86400) {
      return "Hace " + (Math.ceil(seconds / 3600)) + " horas";
    } else if (seconds < 610000) {
      return "Hace " + (Math.ceil(seconds / 86400)) + " días";
    } else if (seconds < 2600000) {
      return "Hace " + (Math.ceil(seconds / 604800)) + " semanas";
    } else if (seconds < 28908604.109) {
      return "Hace " + (Math.ceil(seconds / 2592000)) + " meses";
    } else if (seconds < 95000000) {
      return "Hace " + (Math.round(seconds / 31536000)) + " años";
    } else {
      return "El " + dpost.getDate() + " de " + months[dpost.getMonth()] + " de " + dpost.getFullYear();
    }
  }

  export const softNumber = number => {
    if( number > 999){
      let x=(''+number).length
      const p=Math.pow
      const d=p(10,true)
      x-=x%3
      return Math.round(number*d/p(10,x))/d+" kMGTPE"[x/3]
    }else{
      return number
    }
  }
  
  export const sortedDates = arr => {
    const sorted = [...arr].sort((dateA, dateB) =>  dateB.timePost - dateA.timePost);
    return sorted
  };
  
  export const rankings = (arr,number) => {
    const sorted = [...arr].sort((a, b) => b.userPts - a.userPts);
    let fifth = sorted.slice(0,number)
    return fifth
  };