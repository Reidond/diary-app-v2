export function pushToLocalStorage(entry, item) {
  const localItems = JSON.parse(localStorage.getItem(entry)) || [];
  localItems.push(item);
  localStorage.setItem(entry, JSON.stringify(localItems));
  return localItems;
}
