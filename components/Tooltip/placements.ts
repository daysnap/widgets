const autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1,
}

const targetOffset = [0, 0]

const placements = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    // offset: [0, -4],
    offset: [0, 0],
    targetOffset,
  },
  topCenter: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    // offset: [0, -4],
    offset: [0, 0],
    targetOffset,
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    // offset: [0, -4],
    offset: [0, 0],
    targetOffset,
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    // offset: [0, 4],
    offset: [0, 0],
    targetOffset,
  },
  bottomCenter: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    // offset: [0, 4],
    offset: [0, 0],
    targetOffset,
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    // offset: [0, 4],
    offset: [0, 0],
    targetOffset,
  },
}

export default placements
