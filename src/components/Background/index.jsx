import { Float } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { TextureLoader, RepeatWrapping, DoubleSide } from 'three';
import { isMobile } from 'react-device-detect'
import backgroundImage from "/src/assets/images/the-sky.jpeg";

const Background = () => {
  const texture = useLoader(TextureLoader, backgroundImage);
  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.offset.set(0, 0);
  texture.repeat.set(1, 1);

  return (
    <group>
      <Float
        speed={1}
        rotationIntensity={0.1}
        floatIntensity={0.2}
        floatingRange={[0.1, -0.3]}
      >
        <mesh scale={[1, 1, 1]} position={[0, 8.5, 0]}>
          <cylinderGeometry
            args={[20, 20, isMobile ? 28 : 20, 15, 6, true, 2.1, Math.PI / 1.5]}
          />
          <meshBasicMaterial
            side={DoubleSide}
            map={texture}
            color="#aa62b3"
            toneMapped={false}
          />
        </mesh>
      </Float>
      <mesh scale={[1, 1, 1]} position={[0, 7.5, -6]}>
        <cylinderGeometry args={[18, 18, 20, 15, 6, true, 0, Math.PI * 2]} />
        <meshBasicMaterial
          side={DoubleSide}
          map={texture}
          color="#aa62b3"
          toneMapped={true}
        />
      </mesh>
    </group>
  );
};

export default Background;
