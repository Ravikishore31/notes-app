const useCreateDate = () => {
  const dateObj = new Date();
  const month = dateObj.getMonth();
  let monthDate;
  switch (month) {
    case 0:
      monthDate = "Jan";
      break;
    case 1:
      monthDate = "Feb";
      break;
    case 2:
      monthDate = "Mar";
      break;
    case 3:
      monthDate = "Apr";
      break;
    case 4:
      monthDate = "May";
      break;
    case 5:
      monthDate = "Jun";
      break;
    case 6:
      monthDate = "Jul";
      break;
    case 7:
      monthDate = "Aug";
      break;
    case 8:
      monthDate = "Sept";
      break;
    case 9:
      monthDate = "Oct";
      break;
    case 10:
      monthDate = "Nov";
      break;
    case 11:
      monthDate = "Dec";
      break;
    default:
      break;
  }

  const date = `${monthDate} ${dateObj.getDate()}, ${dateObj.getFullYear()} [${dateObj.getHours()}:${dateObj.getMinutes()}]`;
  return date;
};

export default useCreateDate;
