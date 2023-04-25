import React, { useState, useRef, useEffect } from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import * as shape from 'd3-shape';

const MovingTimeGraph = ({ data }) => {
  const [path, setPath] = useState('');
  const svgRef = useRef(null);
  const { width, height } = useWindowDimensions();

  const curve = shape.curveMonotoneX;
  const xAccessor = (d) => d.x;
  const yAccessor = (d) => d.y;
  const lineGenerator = shape.line().x(xAccessor).y(yAccessor).curve(curve);

  useEffect(() => {
    if (data.length > 0) {
      const newData = data.slice(-100);
      const pathData = lineGenerator(newData);
      setPath(pathData);
      if (svgRef.current) {
        svgRef.current.scrollToEnd();
      }
    }
  }, [data]);

  return (
    <View style={{ flex: 1 }}>
      <Svg ref={svgRef} width={width} height={height}>
        <Path d={path} stroke="blue" fill="none" strokeWidth="2" />
      </Svg>
    </View>
  );
};

export default MovingTimeGraph;
