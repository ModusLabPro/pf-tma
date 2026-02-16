export const nameWithLetter = (name: string): string => {
  const [lastName, firstName] = name.split(' ');

  return lastName ? `${firstName} ${lastName[0]}.` : firstName;
};
