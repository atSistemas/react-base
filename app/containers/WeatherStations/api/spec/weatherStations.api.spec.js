import expect from 'expect';
import api from '../';
import weatherStationMock from 'app/api/mocks/weatherStation.json';


describe('Actions', () => {
  describe('WeatherStations action', () => {

    it('Should return weatherStation ', () => {
      let obj = {
        "last": {
          "dt": 1467917065
        },
          "params": [
        ],
        "station": {
            "coord": {
            "lat": 41.761,
            "lon": -2.4588
          },
          "id": 10912,
          "name": "ED1ZAI-1",
          "status": 30,
          "type": 2
          }
        };

      const returnedData = api.getDataWeatherStation(obj);

      expect(returnedData[0].id).toEqual(obj.station.id );

    });

  });
});