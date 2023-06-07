import axios from "axios";

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(
        'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
      {
        params: {
            bl_latitude: '25.15543993776612',
            tr_latitude: '25.4125783454622',
            bl_longitude: '51.39587210719369',
            tr_longitude: '51.62812119686502',
            restaurant_tagcategory_standalone: '10591',
            restaurant_tagcategory: '10591',
            limit: '30',
            currency: 'USD',
            open_now: 'false',
            lunit: 'km',
            lang: 'en_US'
          },
          headers: {
            'X-RapidAPI-Key': 'cac71bf8d2msh5dc58353bcce072p1e22cfjsn52a812c300d1',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};
