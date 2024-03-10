import { ResponsivePie } from "@nivo/pie";
import "./PieChart.css";

export const PieChart = ({ data }) => {
  return (
    <div className="pie-chart">
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 100, bottom: 80, left: 100 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={0}
        borderColor={"#eee"}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#555"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={"#555"}
        arcLinkLabelsDiagonalLength={15}
        arcLinkLabelsStraightLength={15}
        theme={{
          tooltip: {
            container: {
              background: "white",
              color: "#555",
              fontSize: 12,
              fontWeight: "bold",
            },
          },
        }}
        colors={{ scheme: "set2" }} // category10, pastel2, set2
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 50,
            itemsSpacing: 20,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#555",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 13,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};
