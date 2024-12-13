const getInitials = (str: string) => {
  const words = str.trim().split(/\s+/);

  const firstLetter = words[0][0].toUpperCase();
  const lastLetter = words.length > 1 ? words[1][0].toUpperCase() : "";

  return firstLetter + lastLetter;
};

export default getInitials;
