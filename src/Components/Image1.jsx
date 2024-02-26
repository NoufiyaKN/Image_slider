import { Parallax } from 'react-parallax';
import Italy from '../assets/images/italy.jpg'
const Image1  = () => (
    <Parallax className='image5' bgImage={Italy} strength={800}>
        <div className='content1'>
            <span className='img-txt'> Explore The World</span>
        </div>
    </Parallax>
);
export default Image1