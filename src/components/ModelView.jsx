import React, { Suspense } from "react";
import { Html, PerspectiveCamera, View } from "@react-three/drei";
import Lights from "./Lights";
import IPhone from "./IPhone";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const ModelView = ({
  index,
  gsapType,
  groupRef,
  controlRef,
  setRotationState,
  item,
  size,
}) => {
  return (
    //   view
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? "right-[-100%]" : ""}`}
    >
      {/* light */}
      <ambientLight intensity={0.5} />

      {/* camera */}
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      {/* Lights for better enviroment view */}
      <Lights />

      {/* orbit controls for moving iPhone as 3D Object */}
      <OrbitControls
        makeDefault
        enablePan={false}
        enableZoom={false}
        ref={controlRef}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <group
        ref={groupRef}
        key={index}
        name={`${index === 1} ? 'small' : 'large`}
        position={[0, 0, 0]}
      >
        <Suspense
          fallback={
            <Html>
              <div>Loading...</div>
            </Html>
          }
        >
          <IPhone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
