export function postPeopleToLocalStorage(data) {
  localStorage.setItem('randomPeople', JSON.stringify(data))
}

export function postFilteredPeopleToLocalStorage(data) {
  localStorage.setItem('filteredPeople', JSON.stringify(data))
}

export function postMyFriendToLocalStorage(data) {
  localStorage.setItem('myFriends', JSON.stringify(data))
}

export function postChat(data) {
  localStorage.setItem('chat', JSON.stringify(data))
}

export function postName(data) {
  localStorage.setItem('name', JSON.stringify(data))
}

export function postAvatar(data) {
  localStorage.setItem('avatar', JSON.stringify(data))
}
