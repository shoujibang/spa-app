let dateServer = dataStr => {
  var time = new Date(dataStr);

  function timeAdd0(str) {
    if (str < 10) {
      str = "0" + str;
    }
    return str;
  }
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  var d = time.getDate();
  var h = time.getHours();
  var mm = time.getMinutes();
  var s = time.getSeconds();
  return (
    y +
    "-" +
    timeAdd0(m) +
    "-" +
    timeAdd0(d) +
    " " +
    timeAdd0(h) +
    ":" +
    timeAdd0(mm) +
    ":" +
    timeAdd0(s)
  );
};
let formatMd = dataStr => {
  var time = new Date(dataStr);

  function timeAdd0(str) {
    if (str < 10) {
      str = "0" + str;
    }
    return str;
  }
  var m = time.getMonth() + 1;
  var d = time.getDate();
  var h = time.getHours();
  var mm = time.getMinutes();
  return (
    timeAdd0(m) + "-" + timeAdd0(d) + " " + timeAdd0(h) + ":" + timeAdd0(mm)
  );
};

let formatDuring = mss => {
  var days = parseInt(mss / (1000 * 60 * 60 * 24));
  var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = (mss % (1000 * 60)) / 1000;
  // return days + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒";
  return {
    days,
    hours,
    minutes,
    seconds
  };
};

let formatText = dataStr => {
  let time = new Date(dataStr);
  let now = new Date();
  let differ = now.getTime() - time.getTime();
  let obj = formatDuring(differ);
  if (obj.days > 60) {
    return "两月前";
  } else if (obj.days > 30) {
    return "一月前";
  } else if (obj.days > 7) {
    return parseInt(obj.days / 7) + "周前";
  } else if (obj.days > 0) {
    return obj.days + "天前";
  } else if (obj.hours > 0) {
    return obj.hours + "小时前";
  } else {
    return "刚刚";
  }
};
let mathAbs = v => {
  console.log(`mathAbs:${v}`);
  if (v) {
    return Math.abs(v);
  } else {
    return 0;
  }
};

let NumberFormat = value =>{
  if (!value) {
    return "0";
  }
  let intPartFormat = value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,"); //将整数部分逢三一断
  return intPartFormat;
}




export default {
   dateServer,
   formatMd,
   formatText,
   mathAbs,
   NumberFormat
};
