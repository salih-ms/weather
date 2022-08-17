import Styles from "../../styles/Home.module.css";
import { MdWbSunny } from "react-icons/md";
import { useEffect } from "react";
const Weather = () => {
  const res = async () => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=şanliurfa&appid=16f465550398b5de6bacd612e485105a`
    );
    const data = await response.json();
    console.table(data);
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition();
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);
  return (
    <div className={Styles.main}>
      <div className={Styles.content}>
        <div className={Styles.container}>
          <button onClick={res}>serach</button>
          <div className={Styles.weather}>
            <div className={Styles.weather_left}>
              <div className={Styles.left_content}>
                <h2>Real-Time And Historical World Weather</h2>
                <p>
                  Retrieve instant, accurate weather information for any
                  location in the world in lightweight
                </p>
                <h2>created by salih </h2>
              </div>
            </div>
            <div className={Styles.weather_right}>
              <div className={Styles.right_content}>
                <div className={Styles.city}>
                  <span>karaköprü ,</span>
                  <span>şanliurfa , </span>
                  <span>türkiye</span>
                </div>
              </div>
              <div className={Styles.temprature}>
                <div className={Styles.temprature_icon}>
                  <MdWbSunny className={Styles.sunnyIcon} />
                  <p>sunny</p>
                </div>
                <div className={Styles.temprature_val}>
                  <h2>34°C</h2>
                </div>
                <div className={Styles.wind}>
                  <p>wind : 20kmph</p>
                  <p>Precip: 0 mm</p>
                  <p>pressure : 1003mb</p>
                </div>
              </div>
              <div className={Styles.week}>
                <div className={Styles.day}>
                  <p>TUE</p>
                  <MdWbSunny className={Styles.sunnyIcon} />
                  <p>25°C</p>
                </div>
                <div className={Styles.day}>
                  <p>TUE</p>
                  <MdWbSunny className={Styles.sunnyIcon} />
                  <p>25°C</p>
                </div>
                <div className={Styles.day}>
                  <p>TUE</p>
                  <MdWbSunny className={Styles.sunnyIcon} />
                  <p>25°C</p>
                </div>
                <div className={Styles.day}>
                  <p>TUE</p>
                  <MdWbSunny className={Styles.sunnyIcon} />
                  <p>25°C</p>
                </div>
                <div className={Styles.day}>
                  <p>TUE</p>
                  <MdWbSunny className={Styles.sunnyIcon} />
                  <p>25°C</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
