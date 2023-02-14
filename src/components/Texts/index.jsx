import { Float, Text } from "@react-three/drei";

const Texts = () => {
  return (
    <>
      <Float
        speed={1}
        rotationIntensity={0.3}
        floatIntensity={0.7}
        floatingRange={[0.1, -0.3]}
      >
        <Text
          curveRadius={-3.5}
          outlineWidth={0.2}
          outlineColor={"#fff"}
          color={"#4566e0"}
          font="/src/assets/fonts/PirataOne-Regular.woff"
          maxWidth={3}
          anchorX="center"
          anchorY="top"
          position={[0, 3.1, 0]}
          fontSize={1}
        >
          SUPERCAR
        </Text>

        <Text
          outlineWidth={0.09}
          outlineColor={"#fff"}
          color={"#4566e0"}
          font="/src/assets/fonts/PirataOne-Regular.woff"
          maxWidth={3}
          anchorX="center"
          anchorY="top"
          position={[0, 1.9, 0]}
          fontSize={0.5}
        >
          VOTING
        </Text>
      </Float>
      <Text
        textAlign="center"
        font="/src/assets/fonts/JosefinSans-SemiBold.woff"
        maxWidth={1}
        anchorX="center"
        anchorY="top"
        position={[0, 0.3, 1]}
        fontSize={0.15}
        depthOffset={1}
      >
        Tap on the images to view more information.
      </Text>
    </>
  );
};

export default Texts;
