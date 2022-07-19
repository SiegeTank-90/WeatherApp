import React from 'react';
import DailyTemp from './dailyTemp';
import CustomTick from './CustomTick';
import { LineChart, ResponsiveContainer, Line, XAxis, YAxis } from 'recharts';
import {
    faDroplet,
    faCloud,
    faWind,
    faCloudRain,
    faTemperatureHigh,
    faSun,
    faGaugeHigh,
    faCloudBolt,
} from '@fortawesome/free-solid-svg-icons';
import {
    ConditionsBox,
    DailyOverview,
    FlexContainer,
    GradientContainer,
    TranparentContainer,
} from './styled/styledComponents';

let NextHoursArray = [
    {
        time: 'Now',
        icon: 'partlycloudy',
        temp: '20',
    },
    {
        time: '1am',
        icon: 'cloud',
        temp: '22',
    },
    {
        time: '2am',
        icon: 'sunny',
        temp: '24',
    },
    {
        time: '3am',
        icon: 'sunny',
        temp: '20',
    },
    {
        time: '4am',
        icon: 'sunny',
        temp: '18',
    },
    {
        time: '5am',
        icon: 'sunny',
        temp: '18',
    },
    {
        time: '6am',
        icon: 'sunny',
        temp: '20',
    },
];

let NextDaysArray = [
    <DailyTemp day={'Mon'} icon={faCloud} high={26} low={22} />,
    <DailyTemp day={'Tues'} icon={faCloud} high={28} low={24} />,
    <DailyTemp day={'Wed'} icon={faCloud} high={30} low={26} />,
    <DailyTemp day={'Thurs'} icon={faCloud} high={26} low={22} />,
    <DailyTemp day={'Fri'} icon={faCloud} high={28} low={24} />,
    <DailyTemp day={'Sat'} icon={faCloud} high={30} low={26} />,
    <DailyTemp day={'Sun'} icon={faCloud} high={30} low={26} />,
];

function weatherWidget() {
    return (
        <GradientContainer>
            <DailyOverview
                icon={faCloudBolt}
                day={'Tuesday'}
                date={'July 19th, 2022'}
                high={91}
                low={87}
                feelslike={102}
                desc={'Partly Cloudy'}
                BackgroundColor={'rgba(2,33,64,1.0)'}

            />
            <FlexContainer JustifyContent={'center'}>
                <ConditionsBox
                    img={faDroplet}
                    BackgroundColor={'rgba(255,255,255,1.0)'}
                    Width={'100px'}
                    name={'Humidity'}
                    value={'28%'}
                />
                <ConditionsBox
                    img={faWind}
                    Width={'100px'}
                    BackgroundColor={'rgba(255,255,255,1.0)'}
                    name={'Wind Speed'}
                    value={'12 mph'}
                />
                <ConditionsBox
                    img={faCloudRain}
                    Width={'100px'}
                    BackgroundColor={'rgba(255,255,255,1.0)'}
                    name={'Percipitation'}
                    value={'20%'}
                />
            </FlexContainer>
            <TranparentContainer>
                <h1>For The Next Hours</h1>
                <ResponsiveContainer width='100%' height={115}>
                    <LineChart
                        height={125}
                        width={225}
                        data={NextHoursArray}
                        margin={{ top: 0, right: 25, left: 25, bottom: 0 }}
                    >
                        <YAxis hide={true} type='number' domain={['dataMin-5', 'dataMax+5']} />
                        <XAxis
                            xAxisId={0}
                            padding
                            tick={{ fill: '#fff', fontSize: '.75em', margin: '5px' }}
                            dataKey={'time'}
                            orientation={'top'}
                            tickLine={false}
                            axisLine={false}
                            interval={0}
                        />
                        <Line type='monotone' dataKey='temp' stroke='#fff' />
                        <XAxis
                            xAxisId={1}
                            tick={<CustomTick />}
                            dataKey={'icon'}
                            orientation={'bottom'}
                            tickLine={false}
                            axisLine={false}
                            interval={0}
                        />
                        <XAxis
                            xAxisId={2}
                            tick={{ fill: '#fff' }}
                            dataKey={'temp'}
                            orientation={'bottom'}
                            tickLine={false}
                            axisLine={false}
                            interval={0}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </TranparentContainer>

            <TranparentContainer>
                <h1>Next Days Weather</h1>
                <FlexContainer JustifyContent={'space-around'}>
                    {NextDaysArray}
                </FlexContainer>
            </TranparentContainer>
            <FlexContainer JustifyContent={'center'}>
                <ConditionsBox
                    img={faGaugeHigh}
                    BackgroundColor={'rgba(255,255,255,.1)'}
                    Textrgb={'255,255,255'}
                    Width={'100px'}
                    name={'Pressure'}
                    value={'20mph'}
                />
                <ConditionsBox
                    img={faSun}
                    BackgroundColor={'rgba(255,255,255,.1)'}
                    Width={'100px'}
                    Textrgb={'255,255,255'}
                    name={'Sunset'}
                    value={'7:30PM'}
                />
                <ConditionsBox
                    img={faTemperatureHigh}
                    BackgroundColor={'rgba(255,255,255,.1)'}
                    Textrgb={'255,255,255'}
                    Width={'100px'}
                    name={'Humidity'}
                    value={'20%'}
                />
            </FlexContainer>
        </GradientContainer>
    );
}

export default weatherWidget;
