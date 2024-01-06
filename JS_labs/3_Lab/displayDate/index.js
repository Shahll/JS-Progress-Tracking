function formatDate() {
  let userInput = document.querySelector(".user-input").value;

  function parseDate(userInput) {
    const parts = userInput.split(/[./-]/);
    return new Date(parts[2], parts[1] - 1, parts[0]);
  }
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const userDate = parseDate(userInput);

  function dateDiffInDays(date1, date2) {
    const diffTime = date2 - date1;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  }

  const diffDays = dateDiffInDays(userDate, today);
  console.log(diffDays)
  const formattedDate =
  diffDays === 0
  ? "Today"
  : diffDays === 1
  ? "Yesterday"
  : diffDays >= 2 && diffDays <= 6
  ? diffDays + " days ago"
  : diffDays === 7
  ? "A week ago"
  : diffDays >= 365
  ? "A year ago"
  : userDate.getFullYear() + "." + (userDate.getMonth() + 1) + "." + userDate.getDate();

  document.querySelector(".text-to-change").innerText = formattedDate;

}
