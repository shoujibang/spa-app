function getMonthDateRange(year, month) {
  var moment = require("moment");
  // month in moment is 0 based, so 9 is actually october, subtract 1 to compensate
  // array is 'year', 'month', 'day', etc
  var startDate = moment([year, month - 1]);
  // Clone the value before .endOf()
  var endDate = moment(startDate).endOf("month");
  // just for demonstration:
  console.log(startDate.toDate());
  console.log(endDate.toDate());
  // make sure to call toDate() for plain JavaScript date type
  return {
    start: startDate.format("YYYY MM DD"),
    end: endDate.format("YYYY MM DD")
  };
}

export default {
  getMonthDateRange
};

// var now = new Date(); //当前日期
// var nowDayOfWeek = now.getDay(); //今天本周的第几天
// var nowDay = now.getDate(); //当前日
// var nowMonth = now.getMonth(); //当前月
// var nowYear = now.getYear(); //当前年

// nowYear += (nowYear < 2000) ? 1900 : 0; //

// var lastMonthDate = new Date(); //上月日期
// lastMonthDate.setDate(1);
// lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
// var lastYear = lastMonthDate.getYear();
// var lastMonth = lastMonthDate.getMonth();

// //格式化日期：yyyy-MM-dd
// function formatDate(date) {
//     var myyear = date.getFullYear();
//     var mymonth = date.getMonth() + 1;
//     var myweekday = date.getDate();

//     if (mymonth < 10) {
//         mymonth = "0" + mymonth;
//     }
//     if (myweekday < 10) {
//         myweekday = "0" + myweekday;
//     }
//     return (myyear + "-" + mymonth + "-" + myweekday);
// }
// //获得某月的天数

// //获得某月的天数
// function getMonthDays(myMonth) {
//     var monthStartDate = new Date(nowYear, myMonth, 1);
//     var monthEndDate = new Date(nowYear, myMonth + 1, 1);
//     var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
//     return days;
// }

// // function getMonthDays(myMonth){
// //     var monthStartDate = new Date(nowYear, myMonth, 1);
// //     var monthEndDate = new Date(nowYear, myMonth + 1, 1);
// //     var days = (monthEndDate - monthStartDate)/(1000 * 60 * 60 * 24);
// //     return days;
// // }
// //获得某月的天数 （与上面有重复可删除，不然本月结束日期报错）
// // function getMonthDays(nowyear, myMonth) {
// //     var lastMonthStartDate = new Date(nowyear, lastMonth, 1);
// //     var lastMonthEndDate = new Date(nowyear, lastMonth + 1, 1);
// //     var days = (lastMonthEndDate - lastMonthStartDate) / (1000 * 60 * 60 * 24); //格式转换
// //     alert(days);
// // }

// //获得本周的结束日期
// function getWeekEndDate() {
//     var weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek));
//     return formatDate(weekEndDate);
// }

// //获得本月的开始日期
// function getMonthStartDate() {
//     var monthStartDate = new Date(nowYear, nowMonth, 1);
//     return formatDate(monthStartDate);
// }
// //获得本月的结束日期
// function getMonthEndDate() {

//     var days = getMonthDays(nowMonth); //获取当月总共有多少天
//     alert(days)
//     var monthEndDate = new Date(nowYear, nowMonth, days);
//     return formatDate(monthEndDate); //返回当月结束时间
// }

// //获得上月开始时间
// function getLastMonthStartDate() {
//     var lastMonthStartDate = new Date(nowYear, lastMonth, 1);
//     return formatDate(lastMonthStartDate);
// }

// //获得上月结束时间
// function getLastMonthEndDate() {
//     var lastMonthEndDate = new Date(nowYear, lastMonth, getMonthDays(lastMonth));
//     return formatDate(lastMonthEndDate);
// }
// export default {
//     getWeekEndDate,
//     getMonthStartDate,
//     getMonthEndDate,
//     getLastMonthStartDate,
//     getLastMonthEndDate
// }
