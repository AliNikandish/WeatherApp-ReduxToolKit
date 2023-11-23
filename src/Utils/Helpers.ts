export const getWindDirection = (deg: number): string => {
  if (deg > 15 && deg <= 75) return "شمال شرقی";

  if (deg > 76 && deg <= 105) return "شرق";
  if (deg > 105 && deg <= 165) return "جنوب شرقی";

  if (deg > 166 && deg <= 195) return "جنوب";
  if (deg > 195 && deg <= 255) return "جنوب غربی";

  if (deg > 255 && deg <= 285) return "غرب";
  if (deg > 285 && deg <= 345) return "شمال غربی";

  return "شمال";
};

export const getHumidityValue = (level: number): string => {
  if (level <= 55) return "خشک و راحت";
  if (level > 55 && level <= 65) return "دارای رطوبت";

  return "رطوبت بسیار بالا";
};

export const getVisibilityValue = (number: number): string => {
  if (number <= 50) return "مه آلود خطرناک";
  if (number > 50 && number <= 500) return "انتظار مه شدید";
  if (number > 500 && number <= 2000) return "انتظار مه";
  if (number > 2000 && number <= 9000) return "انتظار مه کم";

  return "پاک و شفاف";
};

export const getSunTime = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  console.log(date);
  console.log(timestamp);

  let hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();

  if (hours.length <= 1) hours = `0${hours}`;
  if (minutes.length <= 1) minutes = `0${minutes}`;

  return `${hours}:${minutes}`;
};

export const getPop = (value: number): string => {
  if (value <= 0.33) return "Low probability";
  if (value > 0.33 && value <= 0.66) return "Moderate probability";

  return "High probability";
};

export const translateDescription = (conditions: string) : string|null => {
  switch (conditions) {
    case "clear sky":
      return "آسمان صاف";
    case "few clouds":
      return "کمی ابری";
    case "scattered clouds":
      return "ابرهای پراکنده";
    case "broken clouds":
      return "نیمه ابری";
    case "shower rain":
      return "باران شدید";
    case "rain":
      return "بارانی";
    case "heavy intensity rain":
      return "باران شدید";
    case "thunderstorm":
      return "طوفانی";
    case "light rain":
      return "باران کم";
    case "snow":
      return "برفی";
    case "mist":
      return "غبار";
    case "thunderstorm with light rain":
      return "رعد و برق همراه با باران خفیف";
    case "thunderstorm with rain":
      return "رعد و برق همراه با باران";
    case "thunderstorm with heavy rain":
      return "رعد و برق همراه با باران شدید";
    case "light thunderstorm":
      return "رعد و برق خفیف";
    case "thunderstorm":
      return "رعد و برق";
    case "heavy thunderstorm":
      return "رعد و برق شدید";
    case "ragged thunderstorm":
      return "رعد و برق شدید";
    case "thunderstorm with light drizzle":
      return "رعد و برق همراه با نم نم باران";
    case "thunderstorm with drizzle":
      return "رعد و برق همراه با نم نم باران";
    case "thunderstorm with heavy drizzle":
      return "رعد و برق همراه با باران شدید";
    case "light intensity drizzle	":
      return "باران نم نم";
    case "drizzle":
      return "باران نم نم";
    case "heavy intensity drizzle":
      return "باران نم نم";
    case "light intensity drizzle rain":
      return "بارش باران با شدت کم";
    case "drizzle rain":
      return "باران نم نم";
    case "heavy intensity drizzle rain":
      return "باران شدید";
    case "shower rain and drizzle":
      return "باران";
    case "heavy shower rain and drizzle	":
      return "باران شدید";
    case "shower drizzle":
      return "باران نم نم";
    case "light rain	":
      return "باران نم نم";
    case "moderate rain":
      return "باران";
    case "heavy intensity rain":
      return "باران شدید";
    case "very heavy rain	":
      return "باران خیلی شدید";
    case "extreme rain":
      return "باران شدید";
    case "freezing rain":
      return "تگرگ";
    case "light intensity shower rain":
      return "باران رگباری";
    case "shower rain	":
      return "باران";
    case "heavy intensity shower rain":
      return "باران رگباری شدید";
    case "ragged shower rain":
      return "باران رگباری شدید";
    case "light snow":
      return "برف نم نم";
    case "snow":
      return "برف";
    case "heavy snow":
      return "برف سنگین";
    case "sleet":
      return "برف";
    case "light shower sleet":
      return "برف";
    case "shower sleet":
      return "برف";
    case "light rain and snow":
      return "برف و باران کم";
    case "rain and snow":
      return "باران و برف";
    case "light shower snow":
      return "بارش برف";
    case "shower snow":
      return "بارش برف";
    case "heavy shower snow":
      return "بارش برف سنگین";
    case "smoke	":
      return "دود";
    case "haze":
      return "مه";
    case "sand/dust whirls":
      return "گرد و غبار";
    case "fog":
      return "مه";
    case "sand":
      return "گرد و غبار";
    case "dust":
      return "گرد و خاک";
    case "volcanic ash":
      return "خاکستر آتشفشانی";
    case "squall":
      return "طوفان";
    case "tornado":
      return "گرد باد";

    default:
      return null;
  }
};

export const convertKelvinToCentigrade = (kelvin: number): number => {
  return Math.round(kelvin - 273.15);
};
