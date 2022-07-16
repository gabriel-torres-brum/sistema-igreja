export function maskPhoneNumber(phoneNumber?: string | undefined) {
  if (!phoneNumber) return "";

  if (phoneNumber.charAt(5) === "9") {
    return phoneNumber
      .replace(/[\D]/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})(\d+?)/, "$1");
  }

  return phoneNumber
    .replace(/[\D]/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(-\d{4})(\d+?)/, "$1");
}

export function maskDate(date?: string) {
  if (!date) return "";

  return date
    .replace(/[\D]/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d+?)/, "$1");
}