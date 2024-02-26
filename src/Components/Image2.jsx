import { Parallax } from 'react-parallax';
import Moraine from '../assets/images/moraine.jpg'
const Image2  = () => (
    <Parallax className='image5' bgImage={Moraine} strength={800}>
        <div className='content1'>
            <span className='img-txt'>
“Not all those who wander are lost.” </span>
        </div>
    </Parallax>
);
export default Image2