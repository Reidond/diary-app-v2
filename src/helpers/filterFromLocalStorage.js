export function filterFromLocalStorage(entry, id) {
  let localItems = JSON.parse(localStorage.getItem(entry)) || [];
  localItems = localItems.filter(item => item.id !== id);
  localStorage.setItem(entry, JSON.stringify(localItems));
  return localItems;
}
