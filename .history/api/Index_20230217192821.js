import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lng,tr_lat,tr_lng) => {
  try {
    const {
      data: { data },
    } = await axios.get(
        'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
      {
        params: {
            bl_latitude: bl_lat ? bl_lat :'12.957413817490618',
            tr_latitude: tr_lat ? tr_lat :'12.457413817490618',
            bl_longitude: bl_lng ? bl_lng : '77.70454566806008',
            tr_longitude: tr_lng ? tr_lng : '77.40454566806008',
            restaurant_tagcategory_standalone: '10591',
            restaurant_tagcategory: '10591',
            limit: '30',
            currency: 'USD',
            open_now: 'false',
            lunit: 'km',
            lang: 'en_US'
          },
          headers: {
            'X-RapidAPI-Key': 'AIzaSyDWpuVw2apN-XgX3gmrzsHrZgr1AG4sCxQ',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};
