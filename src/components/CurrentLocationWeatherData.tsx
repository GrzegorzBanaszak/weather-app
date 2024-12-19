const CurrentLocationWeatherData = () => {
  return (
    <div className="flex my-4 justify-between md:flex-col ">
      <div>
        <h4 className="font-bold">Temperatura</h4>
        <p>12.5°C</p>
      </div>
      <div>
        <h4 className="font-bold">Szansa opadów</h4>
        <p className="text-center md:text-left">30%</p>
      </div>
      <div>
        <h4 className="font-bold">Siła wiatru</h4>
        <p className="text-center md:text-left">13 km/h</p>
      </div>
    </div>
  );
};

export default CurrentLocationWeatherData;
