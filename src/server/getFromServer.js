export function getPeopleFromLocalStorage() {
  return JSON.parse(localStorage.getItem('randomPeople'));
}

export function getFilteredPeopleFromLocalStorage() {
  return JSON.parse(localStorage.getItem('filteredPeople'));
}

export function getMyFriends() {
  return JSON.parse(localStorage.getItem('myFriends'));
}

export function getChat() {
  return JSON.parse(localStorage.getItem('chat'));
}

export function getName() {
  return JSON.parse(localStorage.getItem('name'));
}

export function getAvatar() {
  return JSON.parse(localStorage.getItem('avatar'));
}
