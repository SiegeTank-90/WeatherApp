import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const FlexContainer = styled.div(
 ({ Direction, JustifyContent, Gap }) => ({
  display: 'flex',
  flexDirection: Direction && 'column',
  justifyContent: JustifyContent,
  width: '100%',
  gap: Gap ? Gap : '5%',
 })
);

export const GradientContainer = styled.div({
 display: 'flex',
 flexDirection: 'column',
 alignItems: 'center',
 position: 'relative',
 zIndex: 10,
 background:
  'linear-gradient(0.25turn, rgba(22,68,135,.90), rgba(24,31,40,.60))',
 padding: '1.5% 1.5%',
 minWidth: '415px',
 maxWidth: '30%',
 minHeight: '80%',
});

export const TranparentContainer = styled.div({
 background: 'rgba(255, 255, 255, 0.15)',
 textAlign: 'center',
 borderRadius: '5px',
 margin: '5% 2.5%',
 padding: '5%',
 h1: {
  fontSize: '.75em',
  marginBottom: '15px',
  fontWeight: 300,
  color: 'rgba(255,255,255,1.0)',
 },
});

//Focus Features

export const FocusFeature = ({
 className,
 identifier,
 OnClick,
 icon,
 day,
 date,
 high,
 low,
 feelslike,
 desc,
}) => (
 <div className={`${className} ${identifier} overview`} onClick={OnClick}>
  <FontAwesomeIcon icon={icon} size='5x' />
  <div className='details'>
   <h2 className='title'>{day}</h2>
   <h3 className='subTitle'>{date}</h3>
   <h1 className='high'>{high}°</h1>
   <h4 className='description'>Feels Like {feelslike}°</h4>
   <h4 className='description'>{desc}</h4>
  </div>
  <h1 className='low'>/{low}°</h1>
 </div>
);

export const DailyOverview = styled(FocusFeature)(
 ({ BackgroundColor, Textrgb, Direction }) => ({
  backgroundColor: BackgroundColor,
  position: 'absolute',
  zIndex: 2,
  display: 'flex',
  flexDirection: Direction,
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: '5%',
  borderRadius: '15px',
  width: '80%',
  color: `rgba(${Textrgb ? Textrgb : '255,255,255'}, 1.0)`,
  '.details': {
   textAlign: 'center',
  },
  h1: {
   fontWeight: 600,
  },
  h2: {
   fontWeight: 200,
   letterSpacing: '.10em',
   fontSize: '1.75em',
  },
  h3: {
   fontWeight: 200,
   fontSize: '1em',
   letterSpacing: '.10em',
  },
  h4: {
   fontWeight: 200,
   fontSize: '.8em',
  },
  '.high': {
   color: 'rgba(255,210,149,1.0)',
   fontSize: '3em',
  },
  '.low': {
   color: 'rgba(8,82,158,1.0)',
   fontSize: '1.5em',
  },
  'svg > path': {
   filter: 'drop-shadow(0 0 125px rgba(83, 137,193,1.0))',
  },
 })
);

//Boxes

export const Box = ({ className, name, value, img }) => (
 <div className={className}>
  <FontAwesomeIcon icon={img} size={'2x'} />
  <p className='value'>{value}</p>
  <p>{name}</p>
 </div>
);

export const ConditionsBox = styled(Box)(
 ({ BackgroundColor, Textrgb, Width }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: '1px solid rgba(112, 112, 112, 1)',
  borderRadius: '15px',
  width: Width,
  padding: '5% 2.5%',
  backgroundColor: BackgroundColor,
  fontSize: '.75em',
  color: `rgba(${Textrgb ? Textrgb : '0,0,0'}, 1.0)`,
  'p:nth-child(odd)': {
   color: `rgba(${Textrgb ? Textrgb : '0,0,0'}, 0.5)`,
  },
  'p.value': {
   marginTop: '15%',
   fontSize: '1.25em',
  },
 })
);
