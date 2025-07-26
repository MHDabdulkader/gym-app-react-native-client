import { MotiView, useAnimationState } from "moti";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

type props = {
  //backgroundColor: string,
  blockSize?: number;
  transparent?: boolean;
  overlay?: boolean;
};
export default function CustomLoading({
  blockSize = 80,
  transparent = false,
  overlay = false,
}: props) {
  const block1 = useAnimationState({
    active: { scale: 1.3 },
    idle: { scale: 1 },
  });
  const block2 = useAnimationState({
    active: { scale: 1.3 },
    idle: { scale: 1 },
  });
  const block3 = useAnimationState({
    active: { scale: 1.3 },
    idle: { scale: 1 },
  });
  const block4 = useAnimationState({
    active: { scale: 1.3 },
    idle: { scale: 1 },
  });
  useEffect(() => {
    const chainAction = [block1, block2, block4, block3, block1];
    let index = 0;
    const ChainAnimationloop = () => {
      chainAction.forEach((block, key) => {
        if (key === index) {
          block.transitionTo("active");
        } else {
          block.transitionTo("idle");
        }
      });
      index = (index + 1) % chainAction.length;
    };

    ChainAnimationloop();
    const interval = setInterval(ChainAnimationloop, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <View
      style={[
        {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          backgroundColor: transparent ? "transparent" : "#232323",
        },
        overlay && styles.overlayStyle
      ]}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MotiView
          state={block1}
          transition={{
            type: "timing",
            duration: 200,
          }}
          style={[styles.blockStyle, { width: blockSize, height: blockSize }]}
        />
        <MotiView
          state={block2}
          transition={{
            type: "timing",
            duration: 200,
          }}
          style={[styles.blockStyle, { width: blockSize, height: blockSize }]}
        />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MotiView
          state={block3}
          transition={{
            type: "timing",
            duration: 200,
          }}
          style={[styles.blockStyle, { width: blockSize, height: blockSize }]}
        />
        <MotiView
          state={block4}
          transition={{
            type: "timing",
            duration: 200,
          }}
          style={[styles.blockStyle, { width: blockSize, height: blockSize }]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  blockStyle: {
    backgroundColor: "#A3FF12",
    margin: 10,
    borderRadius: 25,
  },
  overlayStyle:{
    position:"absolute",
    top: 0, bottom: 0, left: 0, right: 0, zIndex: 100,
    justifyContent:"center", 
    alignItems:"center",
    backgroundColor: "rgba(0,0,0,0.1)",
    pointerEvents:'auto'
  }
});
