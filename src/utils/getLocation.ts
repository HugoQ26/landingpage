export const getPreciseLocation = async (): Promise<
  [number, number] | string
> => {
  try {
    const permission = await navigator.permissions.query({
      name: 'geolocation',
    });
    if (permission.state === 'granted') {
      const data = await coords();
      return data;
    }
  } catch (err) {
    console.log('get location arror ', err);

    return 'We get some error';
  }
  return 'Sucess';
};

function coords(): Promise<[number, number]> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        resolve([latitude, longitude]);
      },
      (err) => {
        console.log('fuction coords error');

        reject({ message: 'rejected', err: err });
      },
      options,
    );
  });
}

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
