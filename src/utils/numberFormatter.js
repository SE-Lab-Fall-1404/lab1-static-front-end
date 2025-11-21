/**
 * Converts English/Arabic numerals to Iranian (Persian) numerals
 * 
 * Iranian numerals mapping:
 * 0 -> ۰
 * 1 -> ۱
 * 2 -> ۲
 * 3 -> ۳
 * 4 -> ۴
 * 5 -> ۵
 * 6 -> ۶
 * 7 -> ۷
 * 8 -> ۸
 * 9 -> ۹
 * 
 * @param {string|number} value - The number or string containing numbers to convert
 * @returns {string} - The value with numbers converted to Iranian format
 */
export const toIranianNumber = (value) => {
  if (value === null || value === undefined) {
    return '';
  }

  // Convert to string
  const str = String(value);
  
  // Mapping of English/Arabic digits to Iranian digits
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const digitIndex = englishDigits.indexOf(char);
    
    if (digitIndex !== -1) {
      // Replace English digit with Iranian digit
      result += persianDigits[digitIndex];
    } else {
      // Keep non-digit characters as is (letters, spaces, punctuation, etc.)
      result += char;
    }
  }
  
  return result;
};

/**
 * Formats a phone number with Iranian numerals
 * @param {string} phoneNumber - Phone number string
 * @returns {string} - Phone number with Iranian numerals
 */
export const formatIranianPhoneNumber = (phoneNumber) => {
  return toIranianNumber(phoneNumber);
};

/**
 * Formats a year with Iranian numerals
 * @param {number|string} year - Year value
 * @returns {string} - Year with Iranian numerals
 */
export const formatIranianYear = (year) => {
  return toIranianNumber(year);
};

