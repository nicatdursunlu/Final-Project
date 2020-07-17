export function getTimeFromPosted(time) {
  const date = new Date();
  const postSharedDate = new Date(time);

  const sharedMinute = postSharedDate.getMinutes();
  const sharedHour = postSharedDate.getHours();
  const sharedDay = postSharedDate.getDate();

  const minute = date.getMinutes();
  const hour = date.getHours();
  const day = date.getDate();

  if (day - sharedDay === 0) {
    if (hour - sharedHour === 0) {
      return `${minute - sharedMinute} minutes ago`;
    } else if (hour - sharedHour >= 1) {
      return `${hour - sharedHour} hours ago`;
    }
  } else {
    return `${day - sharedDay} days ago`;
  }
}
