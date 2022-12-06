import { Html } from '@react-three/drei';
import React from 'react';

const MusicApp = (props) => {
    return (
        <Html
            wrapperClass='htmlScreen'
            transform
            distanceFactor={2.6}
            position={[1.3, 0, -1.4]}
            rotation-x={-0.226}
        >
            <a target="_blank" href="https://music-jsantamariabf.vercel.app/">Full Project</a>
            <iframe src={"https://music-jsantamariabf.vercel.app/"} {...props} />
        </Html>
    )
}

export default MusicApp