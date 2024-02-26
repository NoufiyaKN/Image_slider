import { Parallax } from 'react-parallax';
import Waterfall from '../assets/images/waterfall.jpg'
const Image3  = () => (
    <Parallax className='image5' bgImage={Waterfall} strength={800}>
        <div className='content1'>
            <span className='img-txt'>Get Involved In New Activities</span>
        </div>
    </Parallax>
);
export default Image3