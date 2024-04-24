export const convertToBanglaNumber = (number: string): string => {
  const englishToBanglaMap: { [key: string]: string } = {
    "0": "০",
    "1": "১",
    "2": "২",
    "3": "৩",
    "4": "৪",
    "5": "৫",
    "6": "৬",
    "7": "৭",
    "8": "৮",
    "9": "৯",
  };

  // Convert each digit of the number to Bangla numeral
  const englishDigits = number.toString().split("");
  const banglaDigits = englishDigits.map((digit) => {
    return englishToBanglaMap[digit] || digit;
  });

  return banglaDigits.join("");
};
