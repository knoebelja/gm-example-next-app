const capitalizeProperNoun = str => str[0].toUpperCase() + str.substring(1);

const formatName = name => {
  const nameArray = name.split("-");
  const properNameArray = nameArray.map(name => capitalizeProperNoun(name));
  return properNameArray.join(" ");
};

export default formatName;
