export const phoneFormat = (phone: string): string => {
  if (!/^\d+$/.test(phone) || phone.length < 10) {
    console.error('Invalid phone number');
    return phone;
  }

  return phone.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '+7 ($1) $2 $3-$4');
};
