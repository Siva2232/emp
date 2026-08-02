import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float, RoundedBox } from "@react-three/drei";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const VIOLET = "#5b4bdb";
const TEAL = "#0b8fa8";
const PAPER = "#ffffff";
const SHADE = "#e4e8f3";

/** Thin bars on the front panel so it reads as an interface, not a blank slab. */
function ScreenLines() {
  return (
    <group position={[0, 0, 0.06]}>
      <RoundedBox args={[0.62, 0.1, 0.02]} radius={0.04} position={[-0.72, 0.5, 0]}>
        <meshStandardMaterial color={VIOLET} roughness={0.35} />
      </RoundedBox>
      {[0.22, 0.02, -0.18].map((y, i) => (
        <RoundedBox
          key={y}
          args={[1.5 - i * 0.34, 0.075, 0.02]}
          radius={0.03}
          position={[-0.28 - i * 0.17, y, 0]}
        >
          <meshStandardMaterial color={SHADE} roughness={0.5} />
        </RoundedBox>
      ))}
      <RoundedBox args={[0.5, 0.16, 0.02]} radius={0.06} position={[-0.78, -0.5, 0]}>
        <meshStandardMaterial color={TEAL} roughness={0.35} />
      </RoundedBox>
    </group>
  );
}

function PanelStack({ animate }) {
  const group = useRef(null);

  useFrame((state, delta) => {
    if (!group.current || !animate) return;
    const { x, y } = state.pointer;
    const targetY = x * 0.32;
    const targetX = -y * 0.18;
    // Damped follow so the stack drifts toward the cursor instead of snapping.
    group.current.rotation.y += (targetY - group.current.rotation.y) * Math.min(delta * 3, 1);
    group.current.rotation.x += (targetX - group.current.rotation.x) * Math.min(delta * 3, 1);
  });

  return (
    <group ref={group}>
      <group rotation={[0.06, -0.34, 0.04]}>
        <RoundedBox args={[2.5, 1.72, 0.09]} radius={0.09} position={[-0.42, -0.3, -0.55]}>
          <meshStandardMaterial color={SHADE} roughness={0.45} metalness={0.05} />
        </RoundedBox>

        <RoundedBox args={[2.5, 1.72, 0.09]} radius={0.09} position={[-0.2, -0.14, -0.2]}>
          <meshStandardMaterial color={VIOLET} roughness={0.3} metalness={0.15} />
        </RoundedBox>

        <group position={[0.12, 0.08, 0.2]}>
          <RoundedBox args={[2.5, 1.72, 0.09]} radius={0.09}>
            <meshStandardMaterial color={PAPER} roughness={0.28} metalness={0.08} />
          </RoundedBox>
          <ScreenLines />
        </group>
      </group>
    </group>
  );
}

function Orbit({ animate }) {
  const ring = useRef(null);
  const knot = useRef(null);

  useFrame((state, delta) => {
    if (!animate) return;
    if (ring.current) ring.current.rotation.z += delta * 0.12;
    if (knot.current) {
      knot.current.rotation.x += delta * 0.35;
      knot.current.rotation.y += delta * 0.22;
    }
  });

  return (
    <>
      <mesh ref={ring} position={[0.1, 0, -1.5]} rotation={[1.15, 0.2, 0]}>
        <torusGeometry args={[2.15, 0.022, 12, 120]} />
        <meshStandardMaterial color={TEAL} roughness={0.4} />
      </mesh>

      <mesh ref={knot} position={[1.55, 1.15, 0.7]} scale={0.28}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={VIOLET} roughness={0.25} metalness={0.3} />
      </mesh>

      <mesh position={[-1.75, -0.95, 0.9]} scale={0.16}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={TEAL} roughness={0.2} metalness={0.4} />
      </mesh>
    </>
  );
}

export default function HeroScene() {
  const reduced = useReducedMotion();
  const animate = !reduced;

  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.35, 6.1], fov: 34 }}
      gl={{ antialias: true, alpha: true }}
      frameloop={animate ? "always" : "demand"}
    >
      <ambientLight intensity={1.15} />
      <directionalLight position={[3.5, 5, 4]} intensity={2.4} />
      <directionalLight position={[-4, -1.5, 2]} intensity={0.9} color="#9b8ffb" />

      <Float
        speed={animate ? 1.15 : 0}
        rotationIntensity={animate ? 0.22 : 0}
        floatIntensity={animate ? 0.55 : 0}
      >
        <PanelStack animate={animate} />
      </Float>

      <Orbit animate={animate} />

      <ContactShadows
        position={[0, -1.75, 0]}
        opacity={0.3}
        scale={9}
        blur={2.8}
        far={3.2}
        color="#0a0e1a"
        frames={animate ? Infinity : 1}
      />
    </Canvas>
  );
}
