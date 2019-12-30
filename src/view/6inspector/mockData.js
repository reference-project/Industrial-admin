/* 车间 */
// 检测总览
const todayList = [
  {
    ProductClass: "A型电机",
    TaskCount: 200,
    QualifiedCount: 160,
    CompletedRate: 80
  },
  {
    ProductClass: "B型电机",
    TaskCount: 250,
    QualifiedCount: 120,
    CompletedRate: 48
  },
  {
    ProductClass: "R型电机",
    TaskCount: 240,
    QualifiedCount: 240,
    CompletedRate: 100
  },
  {
    ProductClass: "SS型电机",
    TaskCount: 220,
    QualifiedCount: 145,
    CompletedRate: 66
  }
];

// 生产任务 & 产线概况
const todayAssign = {
  proAssign: [
    { value: 200, name: "A型" },
    { value: 250, name: "B型" },
    { value: 240, name: "R型" },
    { value: 220, name: "SS型" }
  ],
  proLine: [
    { value: 28, name: "生产中" },
    { value: 14, name: "预警" },
    { value: 18, name: "未生产" }
  ]
};

// 今日各产线
const todayPro = [
  {
    LineNo: 20,
    ProductClass: "A型",
    TaskCount: 218,
    QualifiedCount: 69,
    CompletedRate: 36.6,
    QualifiedRate: 63.7,
    captain: "刘宝华",
    captionPhone: "13801380138",
    IsWarning: true
  },
  {
    LineNo: 28,
    ProductClass: "SS型",
    TaskCount: 236,
    QualifiedCount: 177,
    CompletedRate: 62.9,
    QualifiedRate: 23.5,
    captain: "常遇田",
    captionPhone: "13901390139",
    IsWarning: true
  },
  {
    LineNo: 51,
    ProductClass: "SS型",
    TaskCount: 204,
    QualifiedCount: 135,
    CompletedRate: 64.8,
    QualifiedRate: 34.8,
    captain: "温玉坤",
    captionPhone: "13701380138",
    IsWarning: true
  },
  {
    LineNo: 45,
    ProductClass: "R型",
    TaskCount: 252,
    QualifiedCount: 128,
    CompletedRate: 51.4,
    QualifiedRate: 53.5,
    captain: "张雪松",
    captionPhone: "13501380138",
    IsWarning: true
  },
  {
    LineNo: 48,
    ProductClass: "R型",
    TaskCount: 219,
    QualifiedCount: 178,
    CompletedRate: 74.3,
    QualifiedRate: 68.8,
    captain: "崔鹏",
    captionPhone: "13501390138",
    production: "normal"
  },
  {
    LineNo: 22,
    ProductClass: "B型",
    TaskCount: 205,
    QualifiedCount: 184,
    CompletedRate: 82.3,
    QualifiedRate: 71.4,
    captain: "鞠明臣",
    captionPhone: "13501340138",
    production: "normal"
  },
  {
    LineNo: 37,
    ProductClass: "A型",
    TaskCount: 198,
    QualifiedCount: 166,
    CompletedRate: 83.8,
    QualifiedRate: 80.2,
    captain: "宁伟",
    captionPhone: "13101390138",
    production: "normal"
  },
  {
    LineNo: 30,
    ProductClass: "B型",
    TaskCount: 186,
    QualifiedCount: 145,
    CompletedRate: 78.9,
    QualifiedRate: 72.9,
    captain: "苏力军",
    captionPhone: "13201390138",
    production: "normal"
  }
];

// 有预警的产线
const alertList = [
  {
    LineNo: "22",
    chartData: {
      xAxisData: ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30"],
      seriesData: [20, 22, 23, 18, 15, 13]
    }
  },
  {
    LineNo: "25",
    chartData: {
      xAxisData: ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30"],
      seriesData: [23, 22, 25, 18, 19, 11]
    }
  },
  {
    LineNo: "32",
    chartData: {
      xAxisData: ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30"],
      seriesData: [17, 21, 14, 22, 18, 15]
    }
  },
  {
    LineNo: "48",
    chartData: {
      xAxisData: ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30"],
      seriesData: [16, 20, 13, 22, 15, 17]
    }
  }
];

/* 产线 */
// 达成率
const lineCompletedRate = [
  {
    process: "综合检测",
    chartData: {
      xAxisData: ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30"],
      seriesData: [75, 77, 83, 82, 80, 74]
    }
  },
  {
    process: "静音检测",
    chartData: {
      xAxisData: ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30"],
      seriesData: [70, 92, 95, 73, 79, 89]
    }
  },
  {
    process: "外观检测",
    chartData: {
      xAxisData: ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30"],
      seriesData: [72, 90, 84, 85, 76, 78]
    }
  }
];

// 良品率
const lineQualifiedRate = [
  {
    process: "综合检测",
    chartData: {
      xAxisData: ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30"],
      seriesData: [83, 78, 76, 84, 85, 83]
    }
  },
  {
    process: "静音检测",
    chartData: {
      xAxisData: ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30"],
      seriesData: [79, 77, 80, 82, 87, 71]
    }
  },
  {
    process: "外观检测",
    chartData: {
      xAxisData: ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30"],
      seriesData: [67, 75, 74, 82, 88, 75]
    }
  }
];

// 各工序数据
const lineProcessData = [
  {
    process: "检测结果",
    totalNum: 200,
    completeNum: 160,
    completeRate: 100,
    qualifiedRate: 80
  },
  {
    process: "综合检测",
    totalNum: 180,
    completeNum: 147,
    completeRate: 90,
    qualifiedRate: 56
  },
  {
    process: "静音检测",
    totalNum: 175,
    completeNum: 136,
    completeRate: 87.5,
    qualifiedRate: 54
  },
  {
    process: "外观检测",
    totalNum: 160,
    completeNum: 123,
    completeRate: 80,
    qualifiedRate: 68
  }
];

// 不合格原因
const pieUnqalifiedReason = {
  qc1: [
    { value: 22, name: "刹车打滑" },
    { value: 28, name: "砝码拉不动" },
    { value: 32, name: "未检测" }
  ],
  qc2: [
    { value: 14, name: "低电压不吸合" },
    { value: 18, name: "热保护不到4分钟" },
    { value: 22, name: "未检测" }
  ],
  qc3: [
    { value: 6, name: "外管不良" },
    { value: 2, name: "未检测" }
  ]
};

export {
  todayList,
  todayAssign,
  todayPro,
  alertList,
  lineCompletedRate,
  lineQualifiedRate,
  lineProcessData,
  pieUnqalifiedReason
};