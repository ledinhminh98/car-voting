import { Html, Image, useCursor } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef, useState } from "react";
import { Color } from "three";
import getUuid from "uuid-by-string";
import { useRoute } from "wouter";

const Frame = ({ url, c = new Color(), ...props }) => {
  const image = useRef();
  const frame = useRef();
  const [, params] = useRoute("/type/:id");
  const [hovered, hover] = useState(false);
  const [rnd] = useState(() => Math.random());
  const name = getUuid(url);
  const itemName = props.item;
  const isActive = params?.id === name;

  useCursor(hovered);

  useFrame((state, dt) => {
    image.current.material.zoom =
      0.9 - Math.sin(rnd * 10000 + state.clock.elapsedTime / 8) / 10.5;
    easing.damp3(
      image.current.scale,
      [
        0.85 * (!isActive && hovered ? 0.85 : 1),
        0.9 * (!isActive && hovered ? 0.905 : 1),
        1,
      ],
      0.1,
      dt
    );
    easing.dampC(
      frame.current.material.color,
      hovered ? "#c96efa" : "#ffffff",
      0.1,
      dt
    );
  });

  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[1.5, 1.8, 0.15]}
        position={[0, 0.95, 0]}
      >
        <boxGeometry />
        <meshStandardMaterial
          color="#151515"
          metalness={0.5}
          roughness={0.5}
          envMapIntensity={2}
        />
        <mesh
          ref={frame}
          raycast={() => null}
          scale={[0.9, 0.93, 0.9]}
          position={[0, 0, 0.2]}
        >
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image
          raycast={() => null}
          ref={image}
          position={[0, 0, 0.7]}
          url={url}
        />
        <Html
          scale={0.17}
          rotation={[0, 0, 0]}
          position={[0, 0.4, 0]}
          transform
        >
          <div className="annotation">{itemName}</div>
        </Html>
      </mesh>
    </group>
  );
};

export default Frame;
