// creating emoji list on page
function createListItem(emojiListItems) {
  // first container
  const emojiDiv = document.createElement("div");
  emojiDiv.className = "emoji";
  emojiDiv.innerText = emojiListItems.emoji;
  // second container
  const aliasesDiv = document.createElement("div");
  aliasesDiv.className = "aliases";
  aliasesDiv.innerText = emojiListItems.aliases.join(", ");
  // third container

  const descriptionDiv = document.createElement("div");
  descriptionDiv.className = "description";
  descriptionDiv.innerText = emojiListItems.description;

  // appending all containers in list
  const listItem = document.createElement("li");
  listItem.classList = "list-item";

  listItem.append(emojiDiv, aliasesDiv, descriptionDiv);

  return listItem;
}
const emojiUl = document.getElementById("emoji-list");
// fetch data from array of emoji.js and append to UL
const renderInUl = (emojiArray) => {
  emojiUl.innerHTML = "";
  emojiArray.forEach((items) => {
    const li = createListItem(items);
    emojiUl.append(li);
  });
};

renderInUl(emojiList);

const searchBar = document.getElementsByClassName("search-bar")[0];
searchBar.addEventListener("keyup", (e) => {
  const searchInput = e.target.value.toLowerCase();
  const filteredList = emojiList.filter(
    (items) =>
      items.aliases.toString().toLowerCase().includes(searchInput) ||
      items.description.toLowerCase().includes(searchInput) || items.tags.toString().toLowerCase().includes(searchInput)
  );

  renderInUl(filteredList);
});
