// Translators: Add to this structure
const i18next_data = {
    debug: true,
    fallbackLng: "en",
    nsSeparator: false,
    resources: {
        en: {
            translation: {
                "title": "Killer Mortal Reviewer",
                "round-dec": "&lt; Prev Round",
                "round-inc": "Next Round &gt",
                "prev-mismatch": "&lt; Prev Error",
                "next-mismatch": "Next Error &gt;",
                "ply-dec2": "&lt; Prev Choice",
                "ply-inc2": "Next Choice &gt;",
                "ply-dec": "&lt; Prev",
                "ply-inc": "Next &gt;",
                "toggle-hands": "Toggle show hands",
                "toggle-mortal-advice": "Toggle Mortal advice",
                "toggle-dealin-rate" : "Toggle dealin rate display<br><br>(Not output by Mortal, simple heuristics for riichi only)",
                "options-label": "Options",
                "options": "Options",
                "langLabel": "Language",
                "about": "About",
                "about-body-0":[
                    "Mortal's opinions shown with green bars",
                    "Top choice always 100% height",
                    "Others relative to the top choice",
                    "User's choice shown with a yellow bar",
                    "Click on discard bars to toggle spoiler-free WWYD mode",
                    "Click on round indicator to show score table",
                    "Click on a row in the table to skip to that round",
                    'Report issues with GUI on the <a href="https://github.com/killerducky/killer_mortal_gui" target="_blank">Github project</a>',
                ],
                "about-body-1":[
                    ['<code>Right</code> <code>Left</code>', 'Next/Prev'],
                    ['<code>Up</code> <code>Down</code>', 'Next/Prev Choice'],
                    ['<code>PgUp</code> <code>PgDown</code> or <code>,</code> <code>.</code>', 'Next/Prev Error'],
                    ['<code>Home</code> <code>End</code> or <code>[</code> <code>]</code>', 'Next/Prev Round'],
                    ['<code>m</code>', 'Toggle Mortal advice'],
                    ['<code>h</code>', 'Toggle show hands'],
                    ['<code>b</code>', 'Bookmark current position in URL'],
                    ['<code>?</code>', 'Show about'],
                    ['', 'Optional extra features:'
                        + '<br>The following are not output by Mortal.'
                        + '<br>Simple heuristics for riichi only.'
                        + '<br>Enable with <code>d</code>.'
                    ],
                    ['<code>d</code>', 'Toggle dealin display'],
                    ['<code>a</code>', 'Show accumulated dealin rate'],
                    ['<code>z</code>', 'Show detailed dealin rate'],
                ],
                'Engine'                : 'Engine'                     ,
                'Model tag'             : 'Model tag'                  ,
                'Mjai-reviewer version' : 'Mjai-reviewer version'      ,
                'Game length'           : 'Game length'                ,
                'Hanchan'               : 'Hanchan'                    ,
                'Loading time'          : 'Loading time'               ,
                'Review time'           : 'Review time'                ,
                'Temperature'           : 'Temperature'                ,
                'Matches/total'         : 'Matches/total'          ,
                'Rating'                : 'Rating'                 ,
                "position-rel": {
                    "Hero" : "Hero",
                    "Shimo" : "Shimo",
                    "Toimen" : "Toimen",
                    "Kami" : "Kami",
                    "Pot" : "Pot",
                },
                "E":"E",
                "S":"S",
                "W":"W",
                "N":"N",
                "Wh":"Wh",
                "G":"G",
                "R":"R",
                "1z":"$t(E)",
                "2z":"$t(S)",
                "3z":"$t(W)",
                "4z":"$t(N)",
                "5z":"$t(Wh)",
                "6z":"$t(G)",
                "7z":"$t(R)",
                "spoiler": "(Spoiler: Mortal evaluations hidden. Click to show)",
                "dealin-riichi-only": "Dealin rate: No opponents have called Riichi",
                "dealin-rate": "Dealin Rate",
                "accum-dealin-rate": "Accumulated Dealin Rate",
                "Pusher": "Pusher", // This player is discarding into someone who is tenpai
                "Tenpai": "Tenpai",
                "Tile": "Tile",
                "This %": "This %",
                "Total %": "Total %",
                "Details": "Details",
                "hit": "hit", // Tenpai player drew and won
                "miss": "miss", // Tenpai player's draw was not 
                "sujis-tested": "Sujis tested",
                "suji-dealin-rate": "Suji dealin rate",
                "Tile dealin rates": "Tile dealin rates",
                "waitTypeStr": ['Ryanmen', 'Kanchan', 'Penchan', 'Tanki', 'Shanpon'],
                "Wait type": "Wait type",
                "Tiles": "Tiles",
                "Left": "Left",
                // Advice words
                'dahai'   : 'Cut',
                'pon'     : 'Pon',
                'chi'     : 'Chi',
                'none'    : 'Skip',
                'hora'    : 'Tsumo', // Default to Tsumo. If ron, javascript will change it.
                'ron'     : 'Ron',
                'reach'   : 'Riichi',
                "Hmm..."  : "Hmm...",
                "Clack!"  : "Clack!",
                "ryukyoku" : "Draw", // Declare draw (I think this can only be nine terminals)
                // No need to disambiguate these in the GUI display -- context will show which kind it is
                'ankan'   : 'Kan',
                'daiminkan' : 'Kan',
                'kakan'   : 'Kan',
                // Results
                "Final"   : "Final", // Final score in score table
                "Final Result:"   : "Final Result:", // Final result in accum-dealin-rate table
                "Round"   : "Round",
                "Ron"     : "Ron",
                "win-by"  : "{{type}} by {{winner}}",
                "ron-full"  : "{{winner}} Rons {{loser}}",
                "tsumo-full"  : "{{winner}} Tsumos",
                "Tsumo"   : "Tsumo",
                "流局"    : "Draw",
                "流し満貫" : "Nagashi Mangan",
                "九種九牌" : 'Nine Terminal Draw',
                "四家立直" : "Draw: Quadruple riichi",
                "三家和了" : "Draw: Triple Ron",
                "四風連打" : "Draw: Four Winds",
                // Yakus, points
                '飜' : 'Han',
                '符' : 'Fu',
                '点' : 'Points',
                '点∀' : 'Points each',
                "満貫":         "Mangan",       
                "跳満":         "Haneman",      
                "倍満":         "Baiman",       
                "三倍満":       "Sanbaiman",    
                "役満":         "Yakuman",      
                "数え役満":     "Yakuman",
                "切り上げ満貫": "Mangan",
                "門前清自摸和" : "Fully Concealed Hand",
                "立直" : "Riichi",
                "槍槓" : "Robbing a Kan",
                "嶺上開花" : "After a Kan",
                "海底摸月" : "Under the Sea",
                "河底撈魚" : "Under the River",
                "役牌 白" : "White Dragon",
                "役牌 發" : "Green Dragon",
                "役牌 中" : "Red Dragon",
                "役牌:自風牌" : "Seat Wind",
                "役牌:場風牌" : "Prevalent Wind",
                "断幺九" : "All Simples",
                "一盃口" : "Pure Double Sequence",
                "平和" : "Pinfu",
                "混全帯幺九" : "Half Outside Hand",
                "一気通貫" : "Pure Straight",
                "三色同順" : "Mixed Triple Sequence",
                "ダブル立直" : "Double Riichi",
                "三色同刻" : "Triple Triplets",
                "三槓子" : "Three Quads",
                "対々和" : "All Triplets",
                "三暗刻" : "Three Concealed Triplets",
                "小三元" : "Little Three Dragons",
                "混老頭" : "All Terminals and Honors",
                "七対子" : "Seven Pairs",
                "純全帯幺九" : "Fully Outside Hand",
                "混一色" : "Half Flush",
                "二盃口" : "Twice Pure Double Sequence",
                "清一色" : "Full Flush",
                "一発" : "Ippatsu",
                "ドラ" : "Dora",
                "赤ドラ" : "Red Five",
                "裏ドラ" : "Ura Dora",
                "抜きドラ" : "Kita",
                "天和" : "Blessing of Heaven",
                "地和" : "Blessing of Earth",
                "大三元" : "Big Three Dragons",
                "四暗刻" : "Four Concealed Triplets",
                "字一色" : "All Honors",
                "緑一色" : "All Green",
                "清老頭" : "All Terminals",
                "国士無双" : "Thirteen Orphans",
                "小四喜" : "Four Little Winds",
                "四槓子" : "Four Quads",
                "九蓮宝燈" : "Nine Gates",
                "八連荘" : "Eight-time East Staying",
                "純正九蓮宝燈" : "True Nine Gates",
                "四暗刻単騎" : "Single-wait Four Concealed Triplets",
                "国士無双十三面待ち" : "Thirteen-wait Thirteen Orphans",
                "大四喜" : "Four Big Winds",
                "燕返し" : "Tsubame-gaeshi",
                "槓振り" : "Kanburi",
                "十二落抬" : "Shiiaruraotai",
                "五門斉" : "Uumensai",
                "三連刻" : "Three Chained Triplets",
                "一色三順" : "Pure Triple Chow",
                "一筒摸月" : "Iipinmoyue",
                "九筒撈魚" : "Chuupinraoyui",
                "人和" : "Hand of Man",
                "大車輪" : "Big Wheels",
                "大竹林" : "Bamboo Forest",
                "大数隣" : "Numerous Neighbours",
                "石の上にも三年" : "Ishinouenimosannen",
                "大七星" : "Big Seven Stars",
                "根" : "Root",
                "嶺上開花" : "After a Kan",
                "嶺上放銃" : "Dealing into Win after Kan",
                "無番和" : "Yakuless Win",
                "槍槓" : "Robbing a Kan",
                "対々和" : "All Triplets",
                "清一色" : "Full Flush",
                "七対子" : "Seven Pairs",
                "帯幺九" : "Terminals in All Sets",
                "金勾釣" : "Single Wait after 4 Triplets",
                "清対" : "Pure Triplets",
                "将対" : "2/5/8 Triplets",
                "龍七対" : "Seven Pairs with One Duplicate",
                "清七対" : "Pure Seven Pairs",
                "清金勾釣" : "Pure Single Wait after 4 Triplets",
                "清龍七対" : "Pure Seven Pairs with One Duplicate",
                "十八羅漢" : "Four Quads",
                "清十八羅漢" : "Pure Four Quads",
                "天和" : "Blessing of Heaven",
                "地和" : "Blessing of Earth",
                "清幺九" : "All Terminals",
                "海底摸月" : "Under the Sea",
            }
        },
        'zh-CN': {
            translation: {
                "title": "牌谱检讨",
                "round-dec": "&lt; 上一局",
                "round-inc": "下一局 &gt;",
                "prev-mismatch": "&lt; 上一错误",
                "next-mismatch": "下一错误 &gt;",
                "ply-dec2": "&lt; 上一切牌",
                "ply-inc2": "下一切牌 &gt;",
                "ply-dec": "&lt; 后退",
                "ply-inc": "前进 &gt;",
                "toggle-hands": "开关别家手牌",
                "toggle-mortal-advice": "开关 Mortal 提示",
                "toggle-dealin-rate" : "开关铳率条<br><br>（非 Mortal 输出，仅针对立直家，使用简单启发式算法）",
                "options-label": "选项",
                "options": "选项",
                "langLabel": "语言",
                "about": "关于",
                "about-body-0": [
                    "Mortal 切牌选择显示为绿条。",
                    "第一切牌选择固定为 100% 高度。",
                    "其他切牌选择为相对高度。",
                    "玩家切牌选择显示为黄条。",
                    "点击手牌区域，切换无提示何切模式。",
                    "点击局数指示器，显示得点表。",
                    "点击得点表任意一行，可跳转至该小局。",
                    '如遇界面 Bug，请提交问题至 <a href="https://github.com/killerducky/killer_mortal_gui" target="_blank">GitHub</a>。',
                ],
                "about-body-1":[
                    ['<code>右</code> <code>左</code>', '后退/前进'],
                    ['<code>上</code> <code>下</code>', '上一/下一切牌'],
                    ['<code>PgUp</code> <code>PgDown</code> 或 <code>,</code> <code>.</code>', '上一/下一错误'],
                    ['<code>Home</code> <code>End</code> 或 <code>[</code> <code>]</code>', '上一/下一局'],
                    ['<code>m</code>', '开关 Mortal 提示'],
                    ['<code>h</code>', '开关别家手牌'],
                    ['<code>b</code>', '将当前局面表示在网址中，方便以后访问'],
                    ['<code>?</code>', '显示关于窗口'],
                    ['', '可选的额外功能：'
                        + '<br>以下内容不是 Mortal 的输出。'
                        + '<br>仅使用了简单的启发式算法，仅针对立直家。'
                        + '<br>按 <code>d</code> 键启用。'
                    ],
                  ['<code>d</code>', '开关铳率条'],
                  ['<code>a</code>', '显示累积铳率'],
                  ['<code>z</code>', '显示详细铳率'],
                ],
                'Engine'                : 'AI 引擎'                ,
                'Model tag'             : '模型版本'               ,
                'Mjai-reviewer version' : 'Mjai-reviewer 版本'     ,
                'Game length'           : '对局长度'               ,
                'Hanchan'               : '半庄'                   ,
                'Loading time'          : '载入用时'               ,
                'Review time'           : '检讨用时'               ,
                'Temperature'           : '温度系数'               ,
                'Matches/total'         : 'AI 一致率'              ,
                'Rating'                : '分数'                   ,
                "position-rel": {
                    "Hero" : "自家",
                    "Shimo" : "下家",
                    "Toimen" : "对家",
                    "Kami" : "上家",
                    "Pot" : "场供",
                },
                "E":"东",
                "S":"南",
                "W":"西",
                "N":"北",
                "Wh":"白",
                "G":"发",
                "R":"中",
                "spoiler": "（注意：何切模式已开启。点击此处进行关闭）",
                "dealin-riichi-only": "铳率条：没有对手宣告立直",
                "dealin-rate": "铳率",
                "accum-dealin-rate": "累积铳率",
                "Pusher": "切牌家",
                "Tenpai": "听牌家",
                "Tile": "牌",
                "This %": "此行 %",
                "Total %": "累积 %",
                "Details": "详细信息",
                "hit": "成功", // Tenpai player drew and won
                "miss": "失败", // Tenpai player's draw was not 
                "sujis-tested": "已通过的筋",
                "suji-dealin-rate": "每条筋铳率",
                "Tile dealin rates": "各牌的铳率",
                "waitTypeStr": ['两面', '坎张', '边张', '单骑', '双碰'],
                "Wait type": "听牌形",
                "Tiles": "搭子",
                "Left": "剩余",
                // Advice words
                'dahai'   : '切',
                'pon'     : '碰',
                'chi'     : '吃',
                'none'    : '跳过',
                'hora'    : '自摸', // Default to Tsumo. If ron, javascript will change it.
                'ron'     : '荣和',
                'reach'   : '立直',
                "Hmm..."  : "嗯……",
                "Clack!"  : "异议！",
                "ryukyoku" : "流局", // Declare draw (I think this can only be nine terminals)
                // No need to disambiguate these in the GUI display -- context will show which kind it is
                'ankan'   : '杠',
                'daiminkan' : '杠',
                'kakan'   : '杠',
                // Results
                "Final"   : "结果", // Final score in score table
                "Final Result:"   : "最终结果：", // Final result in accum-dealin-rate table
                "Round"   : "局",
                "Ron"     : "荣和",
                "Tsumo"   : "自摸",
                "win-by"  : "{{winner}} {{type}}",
                "ron-full"  : "{{winner}} 荣和 {{loser}}",
                "tsumo-full"  : "{{winner}} 自摸",
                "流局"    : "荒牌流局",
                "流し満貫" : "流局满贯",
                "九種九牌" : "九种九牌",
                "四家立直" : "四家立直",
                "三家和了" : "三家和了",
                "四風連打" : "四风连打",
                // Yakus, points
                '飜' : '番',
                '符' : '符',
                '点' : '点',
                '点∀' : '点∀',
                "満貫":         "满贯",       
                "跳満":         "跳满",      
                "倍満":         "倍满",       
                "三倍満":       "三倍满",    
                "役満":         "役满",      
                "数え役満":     "累计役满",
                "切り上げ満貫": "切上满贯",
                "門前清自摸和" : "门前清自摸和",
                "立直" : "立直",
                "槍槓" : "枪杠",
                "嶺上開花" : "岭上开花",
                "海底摸月" : "海底摸月",
                "河底撈魚" : "河底捞鱼",
                "役牌 白" : "役牌 白",
                "役牌 發" : "役牌 发",
                "役牌 中" : "役牌 中",
                "役牌:自風牌" : "役牌：门风牌",
                "役牌:場風牌" : "役牌：场风牌",
                "断幺九" : "断幺九",
                "一盃口" : "一杯口",
                "平和" : "平和",
                "混全帯幺九" : "混全带幺九",
                "一気通貫" : "一气通贯",
                "三色同順" : "三色同顺",
                "ダブル立直" : "两立直",
                "三色同刻" : "三色同刻",
                "三槓子" : "三杠子",
                "対々和" : "对对和",
                "三暗刻" : "三暗刻",
                "小三元" : "小三元",
                "混老頭" : "混老头",
                "七対子" : "七对子",
                "純全帯幺九" : "纯全带幺九",
                "混一色" : "混一色",
                "二盃口" : "二杯口",
                "清一色" : "清一色",
                "一発" : "一发",
                "ドラ" : "宝牌",
                "赤ドラ" : "红宝牌",
                "裏ドラ" : "里宝牌",
                "抜きドラ" : "拔北宝牌",
                "天和" : "天和",
                "地和" : "地和",
                "大三元" : "大三元",
                "四暗刻" : "四暗刻",
                "字一色" : "字一色",
                "緑一色" : "绿一色",
                "清老頭" : "清老头",
                "国士無双" : "国士无双",
                "小四喜" : "小四喜",
                "四槓子" : "四杠子",
                "九蓮宝燈" : "九莲宝灯",
                "八連荘" : "八连庄",
                "純正九蓮宝燈" : "纯正九莲宝灯",
                "四暗刻単騎" : "四暗刻单骑",
                "国士無双十三面待ち" : "国士无双十三面",
                "大四喜" : "大四喜",
                "燕返し" : "燕返",
                "槓振り" : "杠振",
                "十二落抬" : "十二落抬",
                "五門斉" : "五门齐",
                "三連刻" : "三连刻",
                "一色三順" : "一色三同顺",
                "一筒摸月" : "一筒摸月",
                "九筒撈魚" : "九筒捞鱼",
                "人和" : "人和",
                "大車輪" : "大车轮",
                "大竹林" : "大竹林",
                "大数隣" : "大数邻",
                "石の上にも三年" : "石上三年",
                "大七星" : "大七星",
                "根" : "根",
                "嶺上開花" : "岭上开花",
                "嶺上放銃" : "杠上炮",
                "無番和" : "底和",
                "槍槓" : "枪杠",
                "対々和" : "对对和",
                "清一色" : "清一色",
                "七対子" : "七对子",
                "帯幺九" : "带幺九",
                "金勾釣" : "金钩钩",
                "清対" : "清对",
                "将対" : "将对",
                "龍七対" : "龙七对",
                "清七対" : "清七对",
                "清金勾釣" : "清金钩钩",
                "清龍七対" : "清龙七对",
                "十八羅漢" : "十八罗汉",
                "清十八羅漢" : "清十八罗汉",
                "天和" : "天和",
                "地和" : "地和",
                "清幺九" : "清幺九",
                "海底摸月" : "海底摸月",
            }
        },
        ko: {
            translation: {
                "title": "Killer Mortal Reviewer",
                "round-dec": "&lt; 이전 대국",
                "round-inc": "다음 대국 &gt",
                "prev-mismatch": "&lt; 이전 실수",
                "next-mismatch": "다음 실수 &gt;",
                "ply-dec2": "&lt; 이전 타패",
                "ply-inc2": "다음 타패 &gt;",
                "ply-dec": "&lt; 이전",
                "ply-inc": "다음 &gt;",
                "toggle-hands": "타가 손패 보기",
                "toggle-mortal-advice": "모탈 확률 보기",
                "toggle-dealin-rate" : "Toggle dealin rate display<br><br>(Not output by Mortal, simple heuristics for riichi only)",
                "options-label": "설정",
                "options": "설정",
                "langLabel": "언어",
                "about": "정보",
                "about-body-0": [
                    "모탈의 선택 확률은 초록색 막대로 표시됩니다.",
                    "가장 확률이 높은 선택지가 항상 100%의 높이를 가지고,",
                    "다른 선택지는 비례해서 높이를 계산합니다.",
                    "작사의 실제 선택은 노란색 막대로 표시됩니다.",
                    "확률 막대를 클릭하면 모탈의 선택 확률을 숨길 수 있습니다.",
                    "화면 중앙의 대국 표시를 클릭하면 점수표를 볼 수 있습니다.",
                    "점수표에서 특정 대국을 클릭하면 그 대국으로 이동할 수 있습니다.",
                    '<a href="https://github.com/killerducky/killer_mortal_gui" target="_blank">Github 프로젝트</a>에서 복기 UI 버그 제보하기',
                ],
                "about-body-1":[
                    ['<code>Right</code> <code>Left</code>', 'Next/Prev'],
                    ['<code>Up</code> <code>Down</code>', 'Next/Prev Choice'],
                    ['<code>PgUp</code> <code>PgDown</code> or <code>,</code> <code>.</code>', 'Next/Prev Error'],
                    ['<code>Home</code> <code>End</code> or <code>[</code> <code>]</code>', 'Next/Prev Round'],
                    ['<code>m</code>', 'Toggle Mortal advice'],
                    ['<code>h</code>', 'Toggle show hands'],
                    ['<code>b</code>', 'Bookmark current position in URL'],
                    ['<code>?</code>', 'Show about'],
                    ['', 'Optional extra features:'
                        + '<br>The following are not output by Mortal.'
                        + '<br>Simple heuristics for riichi only.'
                        + '<br>Enable with <code>d</code>.'
                    ],
                    ['<code>d</code>', 'Toggle dealin display'],
                    ['<code>a</code>', 'Show accumulated dealin rate'],
                    ['<code>z</code>', 'Show detailed dealin rate'],
                ],
                'Engine'                : '엔진'                 ,
                'Model tag'             : '모델 태그'              ,
                'Mjai-reviewer version' : '모탈 버전'  ,
                'Game length'           : '대국 길이'            ,
                'Hanchan'               : '반장'                    ,
                'Loading time'          : '로딩 시간'           ,
                'Review time'           : '복기 시간'            ,
                'Temperature'           : 'Temperature'            ,
                'Matches/total'         : 'Matches/total'          ,
                'Rating'                : '레이팅'                 ,
                "position-rel": {
                    "Hero" : "나",
                    "Shimo" : "하가",
                    "Toimen" : "대면",
                    "Kami" : "상가",
                    "Pot" : "공탁금",
                },
                "position-rel-subject": {
                    "Hero" : "내가",
                    "Shimo" : "하가이",
                    "Toimen" : "대면이",
                    "Kami" : "상가가",
                    "Pot" : "공탁금이",
                },
                "position-rel-possessive": {
                    "Hero" : "나의",
                    "Shimo" : "하가의",
                    "Toimen" : "대면의",
                    "Kami" : "상가의",
                    "Pot" : "공탁금의",
                },
                "position-rel-object": {
                    "Hero" : "나를",
                    "Shimo" : "하가를",
                    "Toimen" : "대면을",
                    "Kami" : "상가를",
                    "Pot" : "공탁금을",
                },
                "E":"동",
                "S":"남",
                "W":"서",
                "N":"북",
                "Wh":"백",
                "G":"발",
                "R":"중",
                "spoiler": "(모탈 선택 가려짐: 여기를 클릭하면 표시됩니다)",
                "dealin-riichi-only": "Dealin rate: No opponents have called Riichi",
                "dealin-rate": "Dealin Rate",
                "accum-dealin-rate": "Accumulated Dealin Rate",
                "Pusher": "Pusher",
                "Tenpai": "Tenpai",
                "Tile": "Tile",
                "This %": "This %",
                "Total %": "Total %",
                "Details": "Details",
                "hit": "hit", // Tenpai player drew and won
                "miss": "miss", // Tenpai player's draw was not 
                "sujis-tested": "Sujis tested",
                "suji-dealin-rate": "Suji dealin rate",
                "Tile dealin rates": "Tile dealin rates",
                "waitTypeStr": ['Ryanmen', 'Kanchan', 'Penchan', 'Tanki', 'Shanpon'],
                "Wait type": "Wait type",
                "Tiles": "Tiles",
                "Left": "Left",
                // Advice words
                'dahai'   : '타',
                'pon'     : '퐁',
                'chi'     : '치',
                'none'    : '스킵',
                'hora'    : '쯔모', // Default to Tsumo. If ron, javascript will change it.
                'ron'     : '론',
                'reach'   : '리치',
                "Hmm..."  : "흠...",
                "Clack!"  : "엣헴!",
                "ryukyoku" : "Draw", // Declare draw (I think this can only be nine terminals)
                // No need to disambiguate these in the GUI display -- context will show which kind it is
                'ankan'   : '깡',
                'daiminkan' : '깡',
                'kakan'   : '깡',
                // Results
                "Final"   : "최종", // Final score in score table
                "Final Result:"   : "Final Result:", // Final result in accum-dealin-rate table
                "Round"   : "국",
                "Ron"     : "론",
                "Tsumo"   : "쯔모",
                "win-by"  : "{{winner}}의 {{type}}",
                "ron-full"  : "{{winner}}의 {{loser}} 론",
                "tsumo-full"  : "{{winner}}의 쯔모",
                "流局"    : "유국",
                "流し満貫" : "유국만관",
                "九種九牌" : '구종구패',
                "四家立直" : "사가리치",
                "三家和了" : "삼가화",
                "四風連打" : "Draw: Four Winds",
                // Yakus, points
                '飜' : '판',
                '符' : '부',
                '点' : '점',
                '点∀' : '점∀',
                "満貫":         "만관",       
                "跳満":         "하네만",      
                "倍満":         "배만",       
                "三倍満":       "삼배만",    
                "役満":         "역만",      
                "数え役満":     "헤아림역만",
                "切り上げ満貫": "절상만관",
                "門前清自摸和" : "멘젠쯔모",
                "立直" : "리치",
                "槍槓" : "창깡",
                "嶺上開花" : "영상개화",
                "海底摸月" : "해저로월",
                "河底撈魚" : "하저로어",
                "役牌 白" : "역패 백",
                "役牌 發" : "역패 발",
                "役牌 中" : "역패 중",
                "役牌:自風牌" : "역패: 자풍패",
                "役牌:場風牌" : "역패: 장풍패",
                "断幺九" : "탕야오",
                "一盃口" : "이페코",
                "平和" : "핑후",
                "混全帯幺九" : "찬타",
                "一気通貫" : "일기통관",
                "三色同順" : "삼색동순",
                "ダブル立直" : "더블 리치",
                "三色同刻" : "삼색동순",
                "三槓子" : "산깡쯔",
                "対々和" : "또이또이",
                "三暗刻" : "산안커",
                "小三元" : "소삼원",
                "混老頭" : "혼노두",
                "七対子" : "치또이쯔",
                "純全帯幺九" : "준찬타",
                "混一色" : "혼일색",
                "二盃口" : "량페코",
                "清一色" : "청일색",
                "一発" : "일발",
                "ドラ" : "도라",
                "赤ドラ" : "적도라",
                "裏ドラ" : "뒷도라",
                "抜きドラ" : "북도라",
                "天和" : "천화",
                "地和" : "지화",
                "大三元" : "대삼원",
                "四暗刻" : "스안커",
                "字一色" : "자일색",
                "緑一色" : "녹일색",
                "清老頭" : "청노두",
                "国士無双" : "국사무쌍",
                "小四喜" : "소사희",
                "四槓子" : "스깡쯔",
                "九蓮宝燈" : "구련보등",
                "八連荘" : "팔연장",
                "純正九蓮宝燈" : "순정구련보등",
                "四暗刻単騎" : "스안커 단기",
                "国士無双十三面待ち" : "국사무쌍 13면 대기",
                "大四喜" : "대사희",
                "燕返し" : "츠바메가에시",
                "槓振り" : "깡후리",
                "十二落抬" : "십이낙태",
                "五門斉" : "오문제",
                "三連刻" : "산안커",
                "一色三順" : "일색삼순",
                "一筒摸月" : "일통모월",
                "九筒撈魚" : "구통노어",
                "人和" : "인화",
                "大車輪" : "대차륜",
                "大竹林" : "대죽림",
                "大数隣" : "대수린",
                "石の上にも三年" : "석상삼년",
                "大七星" : "대칠성",
                "根" : "루트",
                "嶺上開花" : "영상개화",
                "嶺上放銃" : "영상방총",
                "無番和" : "무번화",
                "槍槓" : "창깡",
                "対々和" : "또이또이",
                "清一色" : "청일색",
                "七対子" : "치또이쯔",
                "帯幺九" : "대요구",
                "金勾釣" : "금구조",
                "清対" : "청또이",
                "将対" : "장또이",
                "龍七対" : "용치또이",
                "清七対" : "청치또이",
                "清金勾釣" : "청금구조",
                "清龍七対" : "청룡치또이",
                "十八羅漢" : "십팔라한",
                "清十八羅漢" : "청십팔라한",
                "天和" : "천화",
                "地和" : "지화",
                "清幺九" : "청요구",
                "海底摸月" : "해저로월",
            }
        },
        ja: {
            translation: {
                "title": "Killer Mortal Reviewer",
                "round-dec": "&lt; 前の局",
                "round-inc": "次の局 &gt",
                "prev-mismatch": "&lt; 前のエラー",
                "next-mismatch": "次のエラー &gt;",
                "ply-dec2": "&lt; 前の選択",
                "ply-inc2": "次の選択 &gt;",
                "ply-dec": "&lt; 前",
                "ply-inc": "次 &gt;",
                "toggle-hands": "相手の手牌を表示/非表示",
                "toggle-mortal-advice": "Mortalのアドバイスを表示/非表示",
                "toggle-dealin-rate" : "放銃率を表示/非表示<br><br>(Mortalによる出力ではなく、単純なヒューリスティックのみ)",
                "options-label": "設定",
                "options": "設定",
                "langLabel": "言語",
                "about": "ヘルプ",
                "about-body-0":[
                    "Mortalの意見は、緑のバーで表示されます",
                    "トップの選択肢は常に100%の高さです",
                    "他の選択肢は、トップの選択肢に対する相対値です",
                    "ユーザーの選択は、黄色のバーで表示されます",
                    "捨て牌のバーをクリックすると、バーの表示・非表示を切り替えます",
                    "真ん中の局数をクリックすると、スコア表を表示します",
                    "スコア表の行をクリックすると、その局にジャンプします",
                    'GUIの問題は<a href="https://github.com/killerducky/killer_mortal_gui" target="_blank">GitHubプロジェクト</a>で報告してください',
                ],
                "about-body-1":[
                    ['<code>Right</code> <code>Left</code>', '次/前'],
                    ['<code>Up</code> <code>Down</code>', '次/前の選択'],
                    ['<code>PgUp</code> <code>PgDown</code> or <code>,</code> <code>.</code>', '次/前のエラー'],
                    ['<code>Home</code> <code>End</code> or <code>[</code> <code>]</code>', '次/前の局'],
                    ['<code>m</code>', 'Mortalのアドバイスを表示/非表示'],
                    ['<code>h</code>', '相手の手牌を表示/非表示'],
                    ['<code>b</code>', '現在の局面をURLに反映'],
                    ['<code>?</code>', 'ヘルプを表示'],
                    ['', 'Optional extra features:'
                        + '<br>The following are not output by Mortal.'
                        + '<br>Simple heuristics for riichi only.'
                        + '<br>Enable with <code>d</code>.'
                    ],
                    ['<code>d</code>', '放銃率を表示/非表示<br><br>(Mortalによる出力ではなく、単純なヒューリスティックのみ)'],
                    ['<code>a</code>', 'Show accumulated dealin rate'],
                    ['<code>z</code>', 'Show detailed dealin rate'],
                ],
                'Engine'                : 'エンジン'                     ,
                'Model tag'             : 'モデルタグ'                   ,
                'Mjai-reviewer version' : 'Mjai-reviewer のバージョン'   ,
                'Game length'           : '長さ'                ,
                'Hanchan'               : '半荘'                    ,
                'Loading time'          : '読み込み時間'               ,
                'Review time'           : 'レビュー時間'                ,
                'Temperature'           : '温度'                ,
                'Matches/total'         : '一致率'          ,
                'Rating'                : 'レーティング'                 ,
                "position-rel": {
                    "Hero" : "自分",
                    "Shimo" : "下家",
                    "Toimen" : "対面",
                    "Kami" : "上家",
                    "Pot" : "供託",
                },
                "E":"東",
                "S":"南",
                "W":"西",
                "N":"北",
                "Wh":"白",
                "G":"發",
                "R":"中",
                "1z":"$t(E)",
                "2z":"$t(S)",
                "3z":"$t(W)",
                "4z":"$t(N)",
                "5z":"$t(Wh)",
                "6z":"$t(G)",
                "7z":"$t(R)",
                "spoiler": "(ネタバレ注意: Mortalの意見は非表示。クリックで表示)",
                "dealin-riichi-only": "Dealin rate: No opponents have called Riichi",
                "dealin-rate": "Dealin Rate",
                "accum-dealin-rate": "Accumulated Dealin Rate",
                "Pusher": "Pusher",
                "Tenpai": "Tenpai",
                "Tile": "Tile",
                "This %": "This %",
                "Total %": "Total %",
                "Details": "Details",
                "hit": "hit", // Tenpai player drew and won
                "miss": "miss", // Tenpai player's draw was not 
                "sujis-tested": "Sujis tested",
                "suji-dealin-rate": "Suji dealin rate",
                "Tile dealin rates": "Tile dealin rates",
                "waitTypeStr": ['Ryanmen', 'Kanchan', 'Penchan', 'Tanki', 'Shanpon'],
                "Wait type": "Wait type",
                "Tiles": "Tiles",
                "Left": "Left",
                // Advice words
                'dahai'   : '打',
                'pon'     : 'ポン',
                'chi'     : 'チー',
                'none'    : 'スルー', // 「スキップ」 spends too much space
                'hora'    : 'ツモ', // Default to Tsumo. If ron, javascript will change it.
                'ron'     : 'ロン',
                'reach'   : 'リーチ',
                "Hmm..."  : "うーん...",
                "Clack!"  : "アカン！",
                "ryukyoku" : "Draw", // Declare draw (I think this can only be nine terminals)
                // No need to disambiguate these in the GUI display -- context will show which kind it is
                'ankan'   : 'カン',
                'daiminkan' : 'カン',
                'kakan'   : 'カン',
                // Results
                "Final"   : "最終結果", // 
                "Final Result:"   : "Final Result:", // Final result in accum-dealin-rate table
                "Round"   : "局",
                "Ron"     : "ロン",
                "win-by"  : "{{winner}} {{type}}",
                "ron-full"  : "{{winner}} {{loser}}からロン ",
                "tsumo-full"  : "{{winner}} ツモ",
                "Tsumo"   : "ツモ",
                "流局"    : "流局",
                "流し満貫" : "流し満貫",
                "九種九牌" : '九種九牌',
                "四家立直" : "四家立直",
                "三家和了" : "三家和了",
                "四風連打" : "四風連打",
                // Yakus, points
                '飜' : '飜',
                '符': '符',
                '点': '点',
                '点∀': 'オール',
                "満貫": "満貫",
                "跳満": "跳満",
                "倍満": "倍満",
                "三倍満": "三倍満",
                "役満": "役満",
                "数え役満": "数え役満",
                "切り上げ満貫": "切り上げ満貫",
                "門前清自摸和": "門前清自摸和",
                "立直": "立直",
                "槍槓": "槍槓",
                "嶺上開花": "嶺上開花",
                "海底摸月": "海底摸月",
                "河底撈魚": "河底撈魚",
                "役牌 白": "白",
                "役牌 發": "發",
                "役牌 中": "中",
                "役牌:自風牌": "自風牌",
                "役牌:場風牌": "場風牌",
                "断幺九": "断么九",
                "一盃口": "一盃口",
                "平和": "平和",
                "混全帯幺九": "混全帯么九",
                "一気通貫": "一気通貫",
                "三色同順": "三色同順",
                "ダブル立直": "ダブル立直",
                "三色同刻": "三色同刻",
                "三槓子": "三槓子",
                "対々和": "対々和",
                "三暗刻": "三暗刻",
                "小三元": "小三元",
                "混老頭": "混老頭",
                "七対子": "七対子",
                "純全帯幺九": "純全帯么九",
                "混一色": "混一色",
                "二盃口": "二盃口",
                "清一色": "清一色",
                "一発": "一発",
                "ドラ": "ドラ",
                "赤ドラ": "赤ドラ",
                "裏ドラ": "裏ドラ",
                "抜きドラ": "抜きドラ",
                "天和": "天和",
                "地和": "地和",
                "大三元": "大三元",
                "四暗刻": "四暗刻",
                "字一色": "字一色",
                "緑一色": "緑一色",
                "清老頭": "清老頭",
                "国士無双": "国士無双",
                "小四喜": "小四喜",
                "四槓子": "四槓子",
                "九蓮宝燈": "九蓮宝燈",
                "八連荘": "八連荘",
                "純正九蓮宝燈": "純正九蓮宝燈",
                "四暗刻単騎": "四暗刻単騎",
                "国士無双十三面待ち": "国士無双十三面待ち",
                "大四喜": "大四喜",
                "燕返し": "燕返し",
                "槓振り": "槓振り",
                "十二落抬": "十二落抬",
                "五門斉": "五門斉",
                "三連刻": "三連刻",
                "一色三順": "一色三順",
                "一筒摸月": "一筒摸月",
                "九筒撈魚": "九筒撈魚",
                "人和": "人和",
                "大車輪": "大車輪",
                "大竹林": "大竹林",
                "大数隣": "大数隣",
                "石の上にも三年": "石の上にも三年",
                "大七星": "大七星",
                "根": "根",
                "嶺上放銃": "嶺上放銃",
                "無番和": "無番和",
                "槍槓": "槍槓",
                "対々和": "対々和",
                "清一色": "清一色",
                "七対子": "七対子",
                "帯幺九": "帯么九",
                "金勾釣": "金勾釣",
                "清対": "清対",
                "将対": "将対",
                "龍七対": "龍七対",
                "清七対": "清七対",
                "清金勾釣": "清金勾釣",
                "清龍七対": "清龍七対",
                "十八羅漢": "十八羅漢",
                "清十八羅漢": "清十八羅漢",
                "天和": "天和",
                "地和": "地和",
                "清幺九": "清么九",
                "海底摸月": "海底摸月",
            }
        }
    }
}
