import CloudIcon from '@mui/icons-material/Cloud';
import '../App.css'


function BodyComponent() {

    return (
        <div className='container'>
        <div className='wrapper'>
            <div className='leftContainer'>
                <div className='todayContainer'>
                    <div className='iconContainer' id='icon'><CloudIcon style={{ fontSize: 28 }} /></div>
                    <div className='todayTextContainer'>
                        <div className='todayText'>Today</div>
                        <div className='todayDate' id='date'>Fri, 11 Nov</div>
                    </div>
                </div>
                <div className='temperatureContainer'>
                    <div className='tempandDegTextWrapper'>
                        <div className='temperature' id='temper'>29</div>
                        <div className='degreeText'>°C</div>
                    </div>
                    <div className='locationandMoodContainer'>
                        <div className='locationWrapper'>
                            <div className='locationText' id='location'>Mumbai, IN</div>
                        </div>
                        <div className='moodWrapper'>
                            <div className='mood' id='weather'>Hazy</div>
                            <div className='dot'>•</div>
                            <div className='feels' id='feels-like'>Feels like 32</div>
                        </div>
                    </div>
                </div>
                <div className='parameterContainerOne'>
                    <div className='speedWrapper'>
                        <div className='speedIcon'><img src="https://img.icons8.com/ultraviolet/40/000000/wind--v1.png" /></div>
                        <div className='speedText' id='speed'>12 m/h</div>
                    </div>
                    <div className='humidityWrapper'>
                        <div className='humidityIcon'><img src="https://img.icons8.com/ultraviolet/40/000000/hygrometer.png" /></div>
                        <div className='humidityText' id='humidity'>55%</div>
                    </div>
                    <div className='pressureWrapper'>
                        <div className='pressureIcon'><img src="https://img.icons8.com/ultraviolet/40/000000/atmospheric-pressure.png" /></div>
                        <div className='pressureText' id='pressure'>99 pa</div>
                    </div>
                </div>
                <div className='parameterContainerTwo'>
                    <div className='sunRiseWrapper'>
                        <div className='sunRiseIcon'><img src="https://img.icons8.com/ultraviolet/40/000000/sunrise--v1.png" /></div>
                        <div className='sunRiseText' id='sunrise'>6:45 AM</div>
                    </div>
                    <div className='sunSetWrapper'>
                        <div className='sunSetIcon'><img src="https://img.icons8.com/ultraviolet/40/000000/sunset--v1.png" /></div>
                        <div className='sunSetText' id='sunset'>6:14 PM</div>
                    </div>
                    <div className='nightWrapper'>
                        <div className='nightIcon'><img src="https://img.icons8.com/ultraviolet/40/000000/partly-cloudy-night--v1.png" /></div>
                        <div className='nightText' id='min-temp'>28.55°C</div>
                    </div>
                </div>
                <div className='nextFiveDayContainer'>
                    <div className='nextFiveDayTextWrapper'>
                        <div className='nextFiveDayText'>Five Day Forecast</div>
                    </div>
                    <div className='daysContainer'>
                        <div className='daysWrapper'>
                            <div className='dayOneWrapper'>
                                <div className='dayOneText' id='day-two'>Mon</div>
                                <div className='dash' />
                                <div className='dayOneTemp' id='day-two-temp'>29.27°C</div>
                            </div>
                            <div className='dayTwoWrapper'>
                                <div className='dayTwoText' id='day-three'>Tue</div>
                                <div className='dash' />
                                <div className='dayTwoTemp' id='day-three-temp'>29.27°C</div>
                            </div>
                            <div className='dayThreeWrapper'>
                                <div className='dayThreeText' id='day-four'>Wed</div>
                                <div className='dash' />
                                <div className='dayThreeTemp' id='day-four-temp'>29.27°C</div>
                            </div>
                            <div className='dayFourWrapper'>
                                <div className='dayFourText' id='day-five'>Thu</div>
                                <div className='dash' />
                                <div className='dayFourTemp' id='day-five-temp'>29.27°C</div>
                            </div>
                            <div className='dayFiveWrapper'>
                                <div className='dayFiveText' id='day-six'>Fri</div>
                                <div className='dash' />
                                <div className='dayFiveTemp' id='day-six-temp'>29.27°C</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default BodyComponent
