import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonLoader = () => {
  return (
    <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
      {Array(3)
        .fill(1)
        .map((index) => (
          <div
            className="rounded-xl"
            style={{
              width: "300px",
              height: "420px",
            }}
            key={index.toString()}
          >
            <div style={{ width: "100%", height: "90%", overflow: "hidden" }}>
              <Skeleton
                height={350}
                width={300}
                borderRadius={20}
                baseColor="#333"
                highlightColor="#666"
              />
            </div>
            <Skeleton
              height={20}
              width={300}
              borderRadius={20}
              baseColor="#333"
              highlightColor="#666"
            />
          </div>
        ))}
    </div>
  );
};
