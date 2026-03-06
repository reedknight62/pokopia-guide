const habitatsData = [
  {
    "id": 1,
    "name": "高草丛",
    "conditions": [
      {"name": "高草丛", "quantity": 4, "emoji": "🌿"}
    ],
    "pokemon": [
      {"name": "妙蛙种子", "type": "草", "time": [], "weather": [], "region": []},
      {"name": "杰尼龟", "type": "水", "time": [], "weather": [], "region": []},
      {"name": "小火龙", "type": "火", "time": [], "weather": ["Sun", "Clouds"], "region": []},
      {"name": "走路草", "type": "草", "time": ["Night"], "weather": [], "region": []},
      {"name": "小拳石", "type": "岩石", "time": [], "weather": [], "region": ["真新镇"]},
      {"name": "喷火龙", "type": "火/飞行", "time": [], "weather": ["Sun", "Clouds"], "region": []}
    ]
  },
  {
    "id": 2,
    "name": "树荫草地",
    "conditions": [
      {"name": "大型树", "quantity": 1, "emoji": "🌳"},
      {"name": "高草丛", "quantity": 4, "emoji": "🌿"}
    ],
    "pokemon": [
      {"name": "飞天螳螂", "type": "虫/飞行", "time": [], "weather": [], "region": []},
      {"name": "巨钳螳螂", "type": "虫/飞行", "time": [], "weather": [], "region": ["真新镇"]},
      {"name": "喇叭芽", "type": "草", "time": [], "weather": [], "region": []},
      {"name": "凯罗斯", "type": "虫", "time": [], "weather": [], "region": []},
      {"name": "赫拉克罗斯", "type": "虫", "time": [], "weather": [], "region": []},
      {"name": "贪心栗鼠", "type": "一般", "time": [], "weather": [], "region": ["真新镇"]}
    ]
  },
  {
    "id": 3,
    "name": "巨石遮荫高草丛",
    "conditions": [
      {"name": "高草丛", "quantity": 4, "emoji": "🌿"},
      {"name": "大型岩石", "quantity": 1, "emoji": "🪨"}
    ],
    "pokemon": [
      {"name": "搬运小匠", "type": "虫", "time": [], "weather": [], "region": []},
      {"name": "铁骨土人", "type": "格斗", "time": [], "weather": [], "region": []},
      {"name": "腕力", "type": "格斗", "time": [], "weather": [], "region": ["真新镇"]}
    ]
  },
  {
    "id": 4,
    "name": "湿润高草丛",
    "conditions": [
      {"name": "高草丛", "quantity": 4, "emoji": "🌿"},
      {"name": "水域", "quantity": 2, "emoji": "💧"}
    ],
    "pokemon": [
      {"name": "杰尼龟", "type": "水", "time": [], "weather": [], "region": []},
      {"name": "卡咪龟", "type": "水", "time": [], "weather": [], "region": []},
      {"name": "水箭龟", "type": "水", "time": [], "weather": [], "region": []},
      {"name": "黏美儿", "type": "水", "time": [], "weather": ["Rain"], "region": []},
      {"name": "古月鸟", "type": "水/飞行", "time": [], "weather": [], "region": ["真新镇"]}
    ]
  },
  {
    "id": 5,
    "name": "海边高草丛",
    "conditions": [
      {"name": "高草丛", "quantity": 4, "emoji": "🌿"},
      {"name": "海水", "quantity": 2, "emoji": "🌊"}
    ],
    "pokemon": [
      {"name": "呆呆兽", "type": "超能力", "time": [], "weather": [], "region": []},
      {"name": "呆壳兽", "type": "超能力", "time": [], "weather": [], "region": []},
      {"name": "呆呆王", "type": "超能力", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 6,
    "name": "高处高草丛",
    "conditions": [
      {"name": "高草丛", "quantity": 4, "emoji": "🌿"},
      {"name": "高处位置", "quantity": 1, "emoji": "⛰️"}
    ],
    "pokemon": [
      {"name": "波波", "type": "一般/飞行", "time": ["Day"], "weather": [], "region": []},
      {"name": "比比鸟", "type": "一般/飞行", "time": ["Day"], "weather": [], "region": []},
      {"name": "咕咕", "type": "一般/飞行", "time": ["Night"], "weather": [], "region": []},
      {"name": "猫头夜鹰", "type": "一般/飞行", "time": ["Night"], "weather": [], "region": []}
    ]
  },
  {
    "id": 7,
    "name": "灯光照明草丛",
    "conditions": [
      {"name": "高草丛", "quantity": 4, "emoji": "🌿"},
      {"name": "照明设备", "quantity": 1, "emoji": "💡"}
    ],
    "pokemon": [
      {"name": "毛球", "type": "虫/毒", "time": ["Night"], "weather": [], "region": []},
      {"name": "摩鲁蛾", "type": "虫/毒", "time": ["Night"], "weather": [], "region": []}
    ]
  },
  {
    "id": 8,
    "name": "漂亮花圃",
    "conditions": [
      {"name": "野花", "quantity": 4, "emoji": "🌸"}
    ],
    "pokemon": [
      {"name": "波波", "type": "一般/飞行", "time": ["Day"], "weather": [], "region": []},
      {"name": "咕咕", "type": "一般/飞行", "time": ["Night"], "weather": [], "region": []},
      {"name": "三蜜蜂", "type": "虫/飞行", "time": [], "weather": [], "region": []},
      {"name": "伊布", "type": "一般", "time": [], "weather": [], "region": ["真新镇"]},
      {"name": "???", "type": "未知", "time": ["Day"], "weather": [], "region": []},
      {"name": "鸭嘴宝宝", "type": "水", "time": [], "weather": [], "region": ["真新镇"]}
    ]
  },
  {
    "id": 9,
    "name": "树荫花圃",
    "conditions": [
      {"name": "树果树", "quantity": 1, "emoji": "🌳"},
      {"name": "野花", "quantity": 4, "emoji": "🌸"}
    ],
    "pokemon": [
      {"name": "黏黏宝", "type": "水", "time": [], "weather": ["Rain"], "region": []},
      {"name": "梦歌仙人掌", "type": "草", "time": ["Night"], "weather": [], "region": []},
      {"name": "木木枭", "type": "草/飞行", "time": [], "weather": [], "region": ["真新镇"]}
    ]
  },
  {
    "id": 10,
    "name": "湿润花圃",
    "conditions": [
      {"name": "野花", "quantity": 4, "emoji": "🌸"},
      {"name": "水域", "quantity": 2, "emoji": "💧"}
    ],
    "pokemon": [
      {"name": "电萤虫", "type": "虫/电", "time": [], "weather": [], "region": []},
      {"name": "甜甜萤", "type": "虫/电", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 11,
    "name": "花海",
    "conditions": [
      {"name": "野花", "quantity": 8, "emoji": "🌸"}
    ],
    "pokemon": [
      {"name": "蜂女王", "type": "虫/飞行", "time": [], "weather": [], "region": []},
      {"name": "妙蛙草", "type": "草/毒", "time": [], "weather": [], "region": []},
      {"name": "妙蛙花", "type": "草/毒", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 12,
    "name": "高处花圃",
    "conditions": [
      {"name": "野花", "quantity": 4, "emoji": "🌸"},
      {"name": "高处位置", "quantity": 1, "emoji": "⛰️"}
    ],
    "pokemon": [
      {"name": "派拉斯", "type": "草", "time": [], "weather": [], "region": []},
      {"name": "???", "type": "未知", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 13,
    "name": "带花的墓地",
    "conditions": [
      {"name": "野花", "quantity": 4, "emoji": "🌸"},
      {"name": "墓碑", "quantity": 1, "emoji": "🪦"}
    ],
    "pokemon": [
      {"name": "卡拉卡拉", "type": "幽灵", "time": [], "weather": [], "region": []},
      {"name": "嘎啦嘎啦", "type": "幽灵/地面", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 14,
    "name": "花园",
    "conditions": [
      {"name": "树篱", "quantity": 4, "emoji": "🌿"},
      {"name": "野花", "quantity": 4, "emoji": "🌸"}
    ],
    "pokemon": [
      {"name": "派拉斯", "type": "草", "time": [], "weather": [], "region": []},
      {"name": "派拉斯特", "type": "草", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 15,
    "name": "新鲜蔬菜田",
    "conditions": [
      {"name": "蔬菜田", "quantity": 8, "emoji": "🥬"}
    ],
    "pokemon": [
      {"name": "螺钉地鼠", "type": "地面", "time": [], "weather": [], "region": []},
      {"name": "龙头地鼠", "type": "地面", "time": [], "weather": [], "region": []},
      {"name": "???", "type": "未知", "time": [], "weather": [], "region": ["真新镇"]}
    ]
  },
  {
    "id": 16,
    "name": "乘着暖上升气流",
    "conditions": [
      {"name": "点燃的营火", "quantity": 3, "emoji": "🔥"}
    ],
    "pokemon": [
      {"name": "飘飘球", "type": "草/幽灵", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 18,
    "name": "训练瀑布",
    "conditions": [
      {"name": "座位", "quantity": 1, "emoji": "🪑"},
      {"name": "水域", "quantity": 2, "emoji": "💧"},
      {"name": "瀑布", "quantity": 1, "emoji": "🌊"}
    ],
    "pokemon": [
      {"name": "无畏小子", "type": "格斗", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 19,
    "name": "诱人的餐桌",
    "conditions": [
      {"name": "座位", "quantity": 1, "emoji": "🪑"},
      {"name": "桌子", "quantity": 1, "emoji": "🪵"},
      {"name": "摆盘食物", "quantity": 1, "emoji": "🍽️"}
    ],
    "pokemon": [
      {"name": "溶食兽", "type": "一般", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 20,
    "name": "野餐套装",
    "conditions": [
      {"name": "座位", "quantity": 1, "emoji": "🪑"},
      {"name": "桌子", "quantity": 1, "emoji": "🪵"},
      {"name": "野餐篮", "quantity": 1, "emoji": "🧺"}
    ],
    "pokemon": [
      {"name": "皮丘", "type": "电", "time": [], "weather": [], "region": ["枯萎荒原"]},
      {"name": "???", "type": "未知", "time": [], "weather": [], "region": ["真新镇"]}
    ]
  },
  {
    "id": 21,
    "name": "花瓶餐桌",
    "conditions": [
      {"name": "座位", "quantity": 1, "emoji": "🪑"},
      {"name": "桌子", "quantity": 1, "emoji": "🪵"},
      {"name": "小花瓶", "quantity": 1, "emoji": "🏺"}
    ],
    "pokemon": [
      {"name": "口呆花", "type": "草", "time": [], "weather": [], "region": []},
      {"name": "大食花", "type": "草", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 22,
    "name": "绿植长椅",
    "conditions": [
      {"name": "树篱", "quantity": 2, "emoji": "🌿"},
      {"name": "宽座椅", "quantity": 1, "emoji": "🪑"}
    ],
    "pokemon": [
      {"name": "妙蛙种子", "type": "草", "time": [], "weather": [], "region": []},
      {"name": "妙蛙草", "type": "草/毒", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 23,
    "name": "照明长椅",
    "conditions": [
      {"name": "宽座椅", "quantity": 1, "emoji": "🪑"},
      {"name": "通电路灯", "quantity": 1, "emoji": "💡"}
    ],
    "pokemon": [
      {"name": "毛球", "type": "虫/毒", "time": ["Night"], "weather": [], "region": []},
      {"name": "摩鲁蛾", "type": "虫/毒", "time": ["Night"], "weather": [], "region": []}
    ]
  },
  {
    "id": 24,
    "name": "锻炼休息区",
    "conditions": [
      {"name": "沙袋", "quantity": 1, "emoji": "🥊"},
      {"name": "座位", "quantity": 1, "emoji": "🪑"}
    ],
    "pokemon": [
      {"name": "艾比郎", "type": "格斗", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 25,
    "name": "急救站",
    "conditions": [
      {"name": "座位", "quantity": 1, "emoji": "🪑"},
      {"name": "桌子", "quantity": 1, "emoji": "🪵"},
      {"name": "急救箱", "quantity": 1, "emoji": "🩹"}
    ],
    "pokemon": [
      {"name": "沙瓦郎", "type": "格斗", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 27,
    "name": "道路指示牌",
    "conditions": [
      {"name": "箭头路牌", "quantity": 1, "emoji": "🪧"},
      {"name": "木制道路", "quantity": 3, "emoji": "🛤️"}
    ],
    "pokemon": [
      {"name": "无壳海兔", "type": "水", "time": [], "weather": [], "region": ["东海", "西海"]}
    ]
  },
  {
    "id": 28,
    "name": "大型行李车",
    "conditions": [
      {"name": "推车", "quantity": 1, "emoji": "🛒"},
      {"name": "木箱", "quantity": 2, "emoji": "📦"}
    ],
    "pokemon": [
      {"name": "铁骨土人", "type": "格斗", "time": [], "weather": [], "region": []},
      {"name": "锤仔", "type": "格斗", "time": [], "weather": [], "region": ["真新镇"]},
      {"name": "???", "type": "未知", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 30,
    "name": "带玩偶的床",
    "conditions": [
      {"name": "床", "quantity": 1, "emoji": "🛏️"},
      {"name": "玩偶", "quantity": 1, "emoji": "🧸"}
    ],
    "pokemon": [
      {"name": "飘飘球", "type": "草/幽灵", "time": [], "weather": [], "region": []},
      {"name": "呆壳兽", "type": "超能力", "time": [], "weather": [], "region": []},
      {"name": "呆呆王", "type": "超能力", "time": [], "weather": [], "region": []},
      {"name": "小卡比兽", "type": "一般", "time": [], "weather": [], "region": ["真新镇"]}
    ]
  },
  {
    "id": 32,
    "name": "墓前供品",
    "conditions": [
      {"name": "墓碑", "quantity": 1, "emoji": "🪦"},
      {"name": "摆盘食物", "quantity": 1, "emoji": "🍽️"},
      {"name": "点燃的细蜡烛", "quantity": 2, "emoji": "🕯️"}
    ],
    "pokemon": [
      {"name": "烛光灵", "type": "幽灵", "time": [], "weather": [], "region": []},
      {"name": "灯火幽灵", "type": "幽灵", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 34,
    "name": "吉利蛋休息区",
    "conditions": [
      {"name": "树篱", "quantity": 6, "emoji": "🌿"},
      {"name": "吉利蛋植物", "quantity": 1, "emoji": "🥚"},
      {"name": "宽座椅", "quantity": 1, "emoji": "🪑"}
    ],
    "pokemon": [
      {"name": "霸王花", "type": "草/毒", "time": [], "weather": [], "region": []},
      {"name": "美丽花", "type": "草", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 50,
    "name": "黄色高草丛",
    "conditions": [
      {"name": "黄色高草丛", "quantity": 4, "emoji": "🌾"}
    ],
    "pokemon": [
      {"name": "圆丝蛛", "type": "虫/毒", "time": [], "weather": [], "region": []},
      {"name": "阿利多斯", "type": "虫/毒", "time": [], "weather": [], "region": []},
      {"name": "强颚鸡母虫", "type": "虫/毒", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 54,
    "name": "沼泽草丛",
    "conditions": [
      {"name": "黄色高草丛", "quantity": 4, "emoji": "🌾"},
      {"name": "泥水", "quantity": 2, "emoji": "🟤"}
    ],
    "pokemon": [
      {"name": "帕底亚", "type": "水/地面", "time": [], "weather": [], "region": []},
      {"name": "乌波", "type": "水/地面", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 56,
    "name": "海岸花圃",
    "conditions": [
      {"name": "海岸花", "quantity": 4, "emoji": "🌺"}
    ],
    "pokemon": [
      {"name": "帕米", "type": "水", "time": [], "weather": [], "region": []},
      {"name": "索罗亚", "type": "水", "time": [], "weather": [], "region": []},
      {"name": "索罗亚克", "type": "水", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 60,
    "name": "热带海岸",
    "conditions": [
      {"name": "大型棕榈树", "quantity": 1, "emoji": "🌴"},
      {"name": "树篱", "quantity": 2, "emoji": "🌿"},
      {"name": "海水", "quantity": 2, "emoji": "🌊"}
    ],
    "pokemon": [
      {"name": "拉普拉斯", "type": "水/冰", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 61,
    "name": "休息地点",
    "conditions": [
      {"name": "纸箱", "quantity": 1, "emoji": "📦"},
      {"name": "稻草床", "quantity": 1, "emoji": "🛏️"}
    ],
    "pokemon": [
      {"name": "喵喵", "type": "一般", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 63,
    "name": "垃圾收集站",
    "conditions": [
      {"name": "垃圾桶", "quantity": 1, "emoji": "🗑️"},
      {"name": "标志牌", "quantity": 1, "emoji": "🪧"},
      {"name": "垃圾袋", "quantity": 1, "emoji": "🛍️"}
    ],
    "pokemon": [
      {"name": "破破袋", "type": "毒", "time": [], "weather": [], "region": []},
      {"name": "灰尘山", "type": "岩石/毒", "time": [], "weather": [], "region": []},
      {"name": "瓦斯弹", "type": "毒", "time": [], "weather": [], "region": ["真新镇"]},
      {"name": "双弹瓦斯", "type": "毒", "time": [], "weather": [], "region": ["真新镇"]}
    ]
  },
  {
    "id": 67,
    "name": "餐厅布置",
    "conditions": [
      {"name": "座位", "quantity": 1, "emoji": "🪑"},
      {"name": "菜单板", "quantity": 1, "emoji": "📋"},
      {"name": "桌子", "quantity": 1, "emoji": "🪵"},
      {"name": "摆盘食物", "quantity": 1, "emoji": "🍽️"}
    ],
    "pokemon": [
      {"name": "帕摩", "type": "水", "time": [], "weather": [], "region": []},
      {"name": "帕米", "type": "水", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 69,
    "name": "鸟鸣餐点",
    "conditions": [
      {"name": "木制鸟屋", "quantity": 1, "emoji": "🏠"},
      {"name": "桌子", "quantity": 1, "emoji": "🪵"},
      {"name": "摆盘食物", "quantity": 1, "emoji": "🍽️"}
    ],
    "pokemon": [
      {"name": "火稚鸡", "type": "火/飞行", "time": [], "weather": [], "region": []},
      {"name": "火焰鸡", "type": "火/格斗", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 75,
    "name": "更衣区",
    "conditions": [
      {"name": "衣柜", "quantity": 1, "emoji": "🚪"},
      {"name": "大镜子", "quantity": 1, "emoji": "🪞"}
    ],
    "pokemon": [
      {"name": "奇诺栗鼠", "type": "一般", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 77,
    "name": "编织工位",
    "conditions": [
      {"name": "座位", "quantity": 1, "emoji": "🪑"},
      {"name": "桌子", "quantity": 1, "emoji": "🪵"},
      {"name": "编织工具", "quantity": 1, "emoji": "🧶"}
    ],
    "pokemon": [
      {"name": "咩利羊", "type": "一般", "time": [], "weather": [], "region": []},
      {"name": "茸茸羊", "type": "一般", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 78,
    "name": "温泉淋浴",
    "conditions": [
      {"name": "淋浴装置", "quantity": 1, "emoji": "🚿"},
      {"name": "座位", "quantity": 1, "emoji": "🪑"},
      {"name": "温泉水", "quantity": 2, "emoji": "♨️"}
    ],
    "pokemon": [
      {"name": "可达鸭", "type": "水", "time": [], "weather": [], "region": []},
      {"name": "哥达鸭", "type": "水", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 86,
    "name": "水车景点",
    "conditions": [
      {"name": "水车", "quantity": 1, "emoji": "🎡"},
      {"name": "水域", "quantity": 2, "emoji": "💧"},
      {"name": "瀑布", "quantity": 1, "emoji": "🌊"}
    ],
    "pokemon": [
      {"name": "波皇子", "type": "水", "time": [], "weather": [], "region": []},
      {"name": "???", "type": "未知", "time": [], "weather": ["Rain"], "region": []}
    ]
  },
  {
    "id": 93,
    "name": "美食祭坛",
    "conditions": [
      {"name": "供奉盘", "quantity": 1, "emoji": "🍽️"}
    ],
    "pokemon": [
      {"name": "卡比兽", "type": "一般", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 98,
    "name": "红色高草丛",
    "conditions": [
      {"name": "红色高草丛", "quantity": 4, "emoji": "🟥"}
    ],
    "pokemon": [
      {"name": "炎兔儿", "type": "火", "time": [], "weather": [], "region": []},
      {"name": "利欧路", "type": "火", "time": [], "weather": [], "region": []},
      {"name": "圆法师", "type": "火/超能力", "time": [], "weather": [], "region": []},
      {"name": "音箱蟀", "type": "虫", "time": [], "weather": [], "region": []},
      {"name": "???", "type": "未知", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 104,
    "name": "优雅花圃",
    "conditions": [
      {"name": "山地花", "quantity": 4, "emoji": "🌸"}
    ],
    "pokemon": [
      {"name": "皮宝宝", "type": "一般", "time": ["Night"], "weather": [], "region": []},
      {"name": "???", "type": "未知", "time": ["Night"], "weather": [], "region": []},
      {"name": "???", "type": "未知", "time": ["Night"], "weather": [], "region": []},
      {"name": "麻花犬", "type": "一般", "time": ["Day"], "weather": [], "region": []},
      {"name": "麻花犬进化", "type": "一般", "time": ["Day"], "weather": [], "region": []}
    ]
  },
  {
    "id": 109,
    "name": "浮萍池",
    "conditions": [
      {"name": "浮萍", "quantity": 4, "emoji": "🌿"},
      {"name": "水域", "quantity": 2, "emoji": "💧"}
    ],
    "pokemon": [
      {"name": "莲叶童子", "type": "水/草", "time": [], "weather": [], "region": []},
      {"name": "乐天河童", "type": "水/草", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 112,
    "name": "苔藓温泉",
    "conditions": [
      {"name": "苔藓", "quantity": 3, "emoji": "🌿"},
      {"name": "温泉水", "quantity": 2, "emoji": "♨️"}
    ],
    "pokemon": [
      {"name": "煤炭龟", "type": "火/水", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 115,
    "name": "熔岩区域",
    "conditions": [
      {"name": "熔岩岩石", "quantity": 1, "emoji": "🌋"},
      {"name": "岩浆", "quantity": 2, "emoji": "🔥"}
    ],
    "pokemon": [
      {"name": "炭小侍", "type": "火/岩石", "time": [], "weather": [], "region": []},
      {"name": "火神蛾", "type": "火/虫", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 121,
    "name": "炉子区域",
    "conditions": [
      {"name": "金属桶", "quantity": 1, "emoji": "🛢"},
      {"name": "熔炉", "quantity": 1, "emoji": "🔥"}
    ],
    "pokemon": [
      {"name": "力壮鸡", "type": "火/格斗", "time": [], "weather": [], "region": []},
      {"name": "火焰鸡", "type": "火/格斗", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 128,
    "name": "音乐与杂志区",
    "conditions": [
      {"name": "CD播放器", "quantity": 1, "emoji": "💿"},
      {"name": "CD架", "quantity": 1, "emoji": "📚"},
      {"name": "杂志架", "quantity": 1, "emoji": "📰"}
    ],
    "pokemon": [
      {"name": "圆法师", "type": "火/超能力", "time": [], "weather": [], "region": []},
      {"name": "音箱蟀", "type": "虫", "time": [], "weather": [], "region": []},
      {"name": "洛托姆", "type": "电", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 129,
    "name": "迷你博物馆",
    "conditions": [
      {"name": "柱子", "quantity": 3, "emoji": "🏛️"},
      {"name": "展示台", "quantity": 1, "emoji": "🪧"},
      {"name": "大型遗物", "quantity": 1, "emoji": "🏺"}
    ],
    "pokemon": [
      {"name": "索财灵", "type": "幽灵", "time": [], "weather": [], "region": []},
      {"name": "风速狗", "type": "岩石", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 132,
    "name": "铁路道口",
    "conditions": [
      {"name": "铁路", "quantity": 1, "emoji": "🛤️"},
      {"name": "道口栏杆", "quantity": 1, "emoji": "🚧"}
    ],
    "pokemon": [
      {"name": "小炭仔", "type": "岩石/火", "time": [], "weather": [], "region": []},
      {"name": "巨炭山进化线", "type": "岩石/火", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 137,
    "name": "粉色高草丛",
    "conditions": [
      {"name": "粉色高草丛", "quantity": 4, "emoji": "🌷"}
    ],
    "pokemon": [
      {"name": "大颚蚁", "type": "虫", "time": [], "weather": [], "region": []},
      {"name": "超音波幼虫", "type": "虫", "time": [], "weather": [], "region": []},
      {"name": "青绵鸟", "type": "一般/飞行", "time": [], "weather": [], "region": []},
      {"name": "夜巡灵", "type": "幽灵", "time": ["Night"], "weather": [], "region": []}
    ]
  },
  {
    "id": 142,
    "name": "柔软花圃",
    "conditions": [
      {"name": "天空花", "quantity": 4, "emoji": "🌸"}
    ],
    "pokemon": [
      {"name": "六尾", "type": "火", "time": [], "weather": [], "region": []},
      {"name": "九尾", "type": "火", "time": [], "weather": [], "region": []},
      {"name": "稚山雀", "type": "一般/飞行", "time": [], "weather": [], "region": []},
      {"name": "梦妖", "type": "超能力", "time": ["Night"], "weather": [], "region": []},
      {"name": "???", "type": "未知", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 145,
    "name": "湖边小船",
    "conditions": [
      {"name": "独木舟", "quantity": 1, "emoji": "🛶"},
      {"name": "浮萍", "quantity": 2, "emoji": "🌿"},
      {"name": "水域", "quantity": 2, "emoji": "💧"},
      {"name": "高处位置", "quantity": 1, "emoji": "⛰️"}
    ],
    "pokemon": [
      {"name": "快龙", "type": "龙/飞行", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 151,
    "name": "精神能量场",
    "conditions": [
      {"name": "简单坐垫", "quantity": 1, "emoji": "🧘"},
      {"name": "水晶球", "quantity": 1, "emoji": "🔮"}
    ],
    "pokemon": [
      {"name": "???", "type": "未知", "time": [], "weather": [], "region": []},
      {"name": "胡地", "type": "超能力", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 152,
    "name": "占卜桌",
    "conditions": [
      {"name": "座位", "quantity": 2, "emoji": "🪑"},
      {"name": "桌子", "quantity": 1, "emoji": "🪵"},
      {"name": "水晶球", "quantity": 1, "emoji": "🔮"}
    ],
    "pokemon": [
      {"name": "凯西", "type": "超能力", "time": [], "weather": [], "region": []},
      {"name": "勇基拉", "type": "超能力", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 165,
    "name": "游乐场",
    "conditions": [
      {"name": "滑梯", "quantity": 1, "emoji": "🎢"},
      {"name": "玩具", "quantity": 1, "emoji": "🧸"}
    ],
    "pokemon": [
      {"name": "藤藤蛇", "type": "草", "time": [], "weather": [], "region": ["天空群岛"]}
    ]
  },
  {
    "id": 170,
    "name": "研究员办公桌",
    "conditions": [
      {"name": "桌子", "quantity": 2, "emoji": "🪵"},
      {"name": "通电电脑", "quantity": 1, "emoji": "💻"},
      {"name": "科学实验装置", "quantity": 1, "emoji": "🔬"}
    ],
    "pokemon": [
      {"name": "多边兽", "type": "一般", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 176,
    "name": "自然市场",
    "conditions": [
      {"name": "大型树", "quantity": 1, "emoji": "🌳"},
      {"name": "大石头", "quantity": 1, "emoji": "🪨"},
      {"name": "桌子", "quantity": 2, "emoji": "🪵"},
      {"name": "收银机", "quantity": 1, "emoji": "🧾"}
    ],
    "pokemon": [
      {"name": "雷丘", "type": "电", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 181,
    "name": "玩偶中心",
    "conditions": [
      {"name": "风速狗玩偶", "quantity": 1, "emoji": "🧸"},
      {"name": "皮卡丘玩偶", "quantity": 1, "emoji": "🧸"},
      {"name": "快龙玩偶", "quantity": 1, "emoji": "🧸"},
      {"name": "伊布玩偶", "quantity": 1, "emoji": "🧸"}
    ],
    "pokemon": [
      {"name": "飘飘球", "type": "草/幽灵", "time": [], "weather": [], "region": []},
      {"name": "随风球", "type": "草/幽灵", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 185,
    "name": "海钓点",
    "conditions": [
      {"name": "钓竿", "quantity": 1, "emoji": "🎣"},
      {"name": "座位", "quantity": 1, "emoji": "🪑"},
      {"name": "海水", "quantity": 1, "emoji": "🌊"}
    ],
    "pokemon": [
      {"name": "鲤鱼王", "type": "水", "time": [], "weather": [], "region": []},
      {"name": "无壳海兔", "type": "水", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 196,
    "name": "盾甲化石展示",
    "conditions": [
      {"name": "展示台", "quantity": 1, "emoji": "🪧"},
      {"name": "盾甲化石", "quantity": 1, "emoji": "🦴"}
    ],
    "pokemon": [
      {"name": "盾甲龙", "type": "岩石/龙", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 199,
    "name": "暴君化石展示",
    "conditions": [
      {"name": "展示台", "quantity": 2, "emoji": "🪧"},
      {"name": "暴君化石", "quantity": 1, "emoji": "🦴"}
    ],
    "pokemon": [
      {"name": "怪颚龙", "type": "岩石/龙", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 200,
    "name": "无限饮料",
    "conditions": [
      {"name": "座位", "quantity": 1, "emoji": "🪑"},
      {"name": "桌子", "quantity": 1, "emoji": "🪵"},
      {"name": "汽水漂浮饮料", "quantity": 1, "emoji": "🥤"}
    ],
    "pokemon": [
      {"name": "水伊布", "type": "水", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 201,
    "name": "电力薯条",
    "conditions": [
      {"name": "座位", "quantity": 1, "emoji": "🪑"},
      {"name": "桌子", "quantity": 1, "emoji": "🪵"},
      {"name": "薯条", "quantity": 1, "emoji": "🍟"}
    ],
    "pokemon": [
      {"name": "雷伊布", "type": "电", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 202,
    "name": "火辣披萨",
    "conditions": [
      {"name": "座位", "quantity": 1, "emoji": "🪑"},
      {"name": "桌子", "quantity": 1, "emoji": "🪵"},
      {"name": "披萨", "quantity": 1, "emoji": "🍕"}
    ],
    "pokemon": [
      {"name": "火伊布", "type": "火", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 203,
    "name": "优雅下午茶",
    "conditions": [
      {"name": "座位", "quantity": 1, "emoji": "🪑"},
      {"name": "桌子", "quantity": 1, "emoji": "🪵"},
      {"name": "下午茶", "quantity": 1, "emoji": "🍵"}
    ],
    "pokemon": [
      {"name": "太阳伊布", "type": "超能力", "time": ["Day"], "weather": [], "region": []}
    ]
  },
  {
    "id": 204,
    "name": "黑巧克力曲奇",
    "conditions": [
      {"name": "座位", "quantity": 1, "emoji": "🪑"},
      {"name": "桌子", "quantity": 1, "emoji": "🪵"},
      {"name": "巧克力曲奇", "quantity": 1, "emoji": "🍪"}
    ],
    "pokemon": [
      {"name": "月亮伊布", "type": "超能力", "time": ["Night"], "weather": [], "region": []}
    ]
  },
  {
    "id": 205,
    "name": "绿叶三明治",
    "conditions": [
      {"name": "座位", "quantity": 1, "emoji": "🪑"},
      {"name": "桌子", "quantity": 1, "emoji": "🪵"},
      {"name": "三明治", "quantity": 1, "emoji": "🥪"}
    ],
    "pokemon": [
      {"name": "叶伊布", "type": "草", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 206,
    "name": "冰沙刨冰",
    "conditions": [
      {"name": "座位", "quantity": 1, "emoji": "🪑"},
      {"name": "桌子", "quantity": 1, "emoji": "🪵"},
      {"name": "刨冰", "quantity": 1, "emoji": "🍧"}
    ],
    "pokemon": [
      {"name": "冰伊布", "type": "冰", "time": [], "weather": [], "region": []}
    ]
  },
  {
    "id": 207,
    "name": "丝带蛋糕",
    "conditions": [
      {"name": "座位", "quantity": 1, "emoji": "🪑"},
      {"name": "桌子", "quantity": 1, "emoji": "🪵"},
      {"name": "丝带蛋糕", "quantity": 1, "emoji": "🎂"}
    ],
    "pokemon": [
      {"name": "仙子伊布", "type": "妖精", "time": [], "weather": [], "region": []}
    ]
  }
];

const eeveeEvolutions = [
  {
    "name": "水伊布",
    "evolution": "伊布",
    "habitat": "无限饮料",
    "conditions": "座位+桌子+汽水漂浮饮料",
    "emoji": "💧"
  },
  {
    "name": "雷伊布",
    "evolution": "伊布",
    "habitat": "电力薯条",
    "conditions": "座位+桌子+薯条",
    "emoji": "⚡"
  },
  {
    "name": "火伊布",
    "evolution": "伊布",
    "habitat": "火辣披萨",
    "conditions": "座位+桌子+披萨",
    "emoji": "🔥"
  },
  {
    "name": "太阳伊布",
    "evolution": "伊布",
    "habitat": "优雅下午茶",
    "conditions": "座位+桌子+下午茶",
    "emoji": "☀️",
    "timeRequirement": "Day"
  },
  {
    "name": "月亮伊布",
    "evolution": "伊布",
    "habitat": "黑巧克力曲奇",
    "conditions": "座位+桌子+巧克力曲奇",
    "emoji": "🌙",
    "timeRequirement": "Night"
  },
  {
    "name": "叶伊布",
    "evolution": "伊布",
    "habitat": "绿叶三明治",
    "conditions": "座位+桌子+三明治",
    "emoji": "🌿"
  },
  {
    "name": "冰伊布",
    "evolution": "伊布",
    "habitat": "冰沙刨冰",
    "conditions": "座位+桌子+刨冰",
    "emoji": "❄️"
  },
  {
    "name": "仙子伊布",
    "evolution": "伊布",
    "habitat": "丝带蛋糕",
    "conditions": "座位+桌子+丝带蛋糕",
    "emoji": "🧚"
  }
];