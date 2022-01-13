const autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1,
}

const targetOffset = [0, 0]

const placements = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -10],
    targetOffset,
  },
  topCenter: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -10],
    targetOffset,
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -10],
    targetOffset,
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 10],
    targetOffset,
  },
  bottomCenter: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 10],
    targetOffset,
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 10],
    targetOffset,
  },
}

export default placements
