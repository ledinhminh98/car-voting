import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";
import { Quaternion, Vector3 } from "three";
import { useLocation, useRoute } from "wouter";
import Frame from "../Frame";

const Frames = ({ images, q = new Quaternion(), p = new Vector3() }) => {
  const GOLDENRATIO = 1.61803398875;
  const ref = useRef();
  const clicked = useRef();
  const [, params] = useRoute("/type/:id");
  const [, setLocation] = useLocation();

  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id);
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true);
      clicked.current.parent.localToWorld(
        p.set(0, GOLDENRATIO / 2 + 0.15, isMobile ? 2.4 : 1.3)
      );
      clicked.current.parent.getWorldQuaternion(q);
    } else {
      p.set(0, 0.6, isMobile ? 9 : 4.5);
      q.identity();
    }
  });

  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt);
    easing.dampQ(state.camera.quaternion, q, 0.4, dt);
  });

  return (
    <>
      <group
        ref={ref}
        onClick={(e) => (
          e.stopPropagation(),
          setLocation(
            clicked.current === e.object ? "/" : "/type/" + e.object.name
          )
        )}
        onPointerMissed={() => setLocation("/")}
      >
        {images.map((props) => (
          <Frame key={props.url} {...props} />
        ))}
      </group>
    </>
  );
};

export default Frames;
