// filepath: /c:/Users/Kun SramRach/Desktop/MVC-EXPRESS-REACT-APP/frontend/src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Welcome": "Welcome",
      "Orders your favourite foods here": "Orders your favourite foods here",
      "Choose from a devers menu featuring a delectable array of dishes craft with the finest ingriedent and culinary. Our misstion is to satisfy your craving and elevate your dining expensive, one delicous meal at a time": "Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time",
      "View Menu": "View Menu",
      "Explore our menu": "Explore our menu",
      "Top dishes near you": "Top dishes near you",
      "Error logging in": "Error logging in",
      "You must agree to the terms to proceed": "You must agree to the terms to proceed",
      "All fields are required for registration": "All fields are required for registration",
      "Error registering": "Error registering",
      "Login": "Login",
      "Register": "Register",
      "Email": "Email",
      "Password": "Password",
      "Name": "Name",
      "I agree to the terms and conditions": "I agree to the terms and conditions",
      // Add other translations here
    }
  },
  km: {
    translation: {
      "Welcome": "សូមស្វាគមន៍",
      "Orders your favourite foods here": "បញ្ជាទិញម្ហូបដែលអ្នកចូលចិត្តនៅទីនេះ",
      "Choose from a devers menu featuring a delectable array of dishes craft with the finest ingriedent and culinary. Our misstion is to satisfy your craving and elevate your dining expensive, one delicous meal at a time": "ជ្រើសរើសពីម៉ឺនុយដែលមានភាពចម្រុះដែលមានចំណីអាហារដ៏ឆ្ងាញ់ជាច្រើនដែលត្រូវបានបង្កើតឡើងដោយគ្រឿងផ្សំ និងជំនាញផ្នែកចុងភៅល្អបំផុត។ បេសកកម្មរបស់យើងគឺដើម្បីបំពេញតម្រូវការរបស់អ្នក និងលើកកម្ពស់បទពិសោធន៍អាហាររបស់អ្នកម្តងម្ហូបឆ្ងាញ់",
      "View Menu": "មើលម៉ឺនុយ",
      "Explore our menu": "ស្វែងរកម៉ឺនុយរបស់យើង",
      "Top dishes near you": "ម្ហូបល្អបំផុតនៅជិតអ្នក",
      "Error logging in": "មានបញ្ហាក្នុងការចូល",
      "You must agree to the terms to proceed": "អ្នកត្រូវតែយល់ព្រមនឹងលក្ខខណ្ឌដើម្បីបន្ត",
      "All fields are required for registration": "វាលទាំងអស់ត្រូវបានទាមទារសម្រាប់ការចុះឈ្មោះ",
      "Error registering": "មានបញ្ហាក្នុងការចុះឈ្មោះ",
      "Login": "ចូល",
      "Register": "ចុះឈ្មោះ",
      "Email": "អ៊ីមែល",
      "Password": "ពាក្យសម្ងាត់",
      "Name": "ឈ្មោះ",
      "I agree to the terms and conditions": "ខ្ញុំយល់ព្រមនឹងលក្ខខណ្ឌ",
      // Add other translations here
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;