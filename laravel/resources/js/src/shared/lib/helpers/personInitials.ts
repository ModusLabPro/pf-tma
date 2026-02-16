export const personInitials = (name: string) => {
  const [firstName, lastName] = name.split(' ');
  return lastName ? `${firstName[0]}${lastName[0]}`.toUpperCase() : firstName[0].toUpperCase();
};
