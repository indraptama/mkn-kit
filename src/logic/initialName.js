export const initialName = (name) => {
  let nameContainer = [];
  let splitName = name.split(" ");
  if (splitName.length === 1) {
    return splitName[0].charAt(0);
  }

  for (let i = 0; i < 2; i++) {
    const word = splitName[i].charAt(0);
    nameContainer = [...nameContainer, word];
  }
  return nameContainer.join("");
};

export default initialName;
