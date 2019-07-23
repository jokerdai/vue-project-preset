import echarts from 'echarts'
/* eslint-disable */
const ufeTheme = {
    "color": [
        "#007ace",
        "#5aac44",
        "#a86cc1",
        "#00aecc",
        "#e6c60d",
        "#e99e40",
        "#cf513d",
        "#97b552",
        "#95706d",
        "#dc69aa",
        "#008acd"
    ],
    "backgroundColor": "rgba(0,0,0,0)",
    "textStyle": {},
    "title": {
        "textStyle": {
            "color": "#007ace"
        },
        "subtextStyle": {
            "color": "#aaaaaa"
        }
    },
    "line": {
        "itemStyle": {
            "normal": {
                "borderWidth": 1
            }
        },
        "lineStyle": {
            "normal": {
                "width": 2
            }
        },
        "symbolSize": 3,
        "symbol": "emptyCircle",
        "smooth": true
    },
    "radar": {
        "itemStyle": {
            "normal": {
                "borderWidth": 1
            }
        },
        "lineStyle": {
            "normal": {
                "width": 2
            }
        },
        "symbolSize": 3,
        "symbol": "emptyCircle",
        "smooth": true
    },
    "bar": {
        "itemStyle": {
            "normal": {
                "barBorderWidth": 0,
                "barBorderColor": "#bdbdbd"
            },
            "emphasis": {
                "barBorderWidth": 0,
                "barBorderColor": "#bdbdbd"
            }
        }
    },
    "pie": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#bdbdbd"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#bdbdbd"
            }
        }
    },
    "scatter": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#bdbdbd"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#bdbdbd"
            }
        }
    },
    "boxplot": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#bdbdbd"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#bdbdbd"
            }
        }
    },
    "parallel": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#bdbdbd"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#bdbdbd"
            }
        }
    },
    "sankey": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#bdbdbd"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#bdbdbd"
            }
        }
    },
    "funnel": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#bdbdbd"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#bdbdbd"
            }
        }
    },
    "gauge": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#bdbdbd"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#bdbdbd"
            }
        }
    },
    "candlestick": {
        "itemStyle": {
            "normal": {
                "color": "#d87a80",
                "color0": "#2ec7c9",
                "borderColor": "#d87a80",
                "borderColor0": "#2ec7c9",
                "borderWidth": 1
            }
        }
    },
    "graph": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#bdbdbd"
            }
        },
        "lineStyle": {
            "normal": {
                "width": 1,
                "color": "#aaaaaa"
            }
        },
        "symbolSize": 3,
        "symbol": "emptyCircle",
        "smooth": true,
        "color": [
            "#007ace",
            "#5aac44",
            "#a86cc1",
            "#00aecc",
            "#e6c60d",
            "#e99e40",
            "#cf513d",
            "#97b552",
            "#95706d",
            "#dc69aa",
            "#008acd"
        ],
        "label": {
            "normal": {
                "textStyle": {
                    "color": "rgba(0,0,0,0.65)"
                }
            }
        }
    },
    "map": {
        "itemStyle": {
            "normal": {
                "areaColor": "#dddddd",
                "borderColor": "#eeeeee",
                "borderWidth": 0.5
            },
            "emphasis": {
                "areaColor": "rgba(254,153,78,1)",
                "borderColor": "#444444",
                "borderWidth": 1
            }
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#d87a80"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "rgb(100,0,0)"
                }
            }
        }
    },
    "geo": {
        "itemStyle": {
            "normal": {
                "areaColor": "#dddddd",
                "borderColor": "#eeeeee",
                "borderWidth": 0.5
            },
            "emphasis": {
                "areaColor": "rgba(254,153,78,1)",
                "borderColor": "#444444",
                "borderWidth": 1
            }
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#d87a80"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "rgb(100,0,0)"
                }
            }
        }
    },
    "categoryAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#bdbdbd"
            }
        },
        "axisTick": {
            "show": true,
            "lineStyle": {
                "color": "#bdbdbd"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "rgba(0,0,0,0.65)"
            }
        },
        "splitLine": {
            "show": false,
            "lineStyle": {
                "color": [
                    "#eee"
                ]
            }
        },
        "splitArea": {
            "show": true,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.3)",
                    "rgba(0,122,206,0.05)"
                ]
            }
        }
    },
    "valueAxis": {
        "axisLine": {
            "show": false,
            "lineStyle": {
                "color": "#008acd"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "rgba(0,0,0,0.65)"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#dddddd"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            }
        }
    },
    "logAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#008acd"
            }
        },
        "axisTick": {
            "show": true,
            "lineStyle": {
                "color": "#bdbdbd"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "rgba(0,0,0,0.65)"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#dddddd"
                ]
            }
        },
        "splitArea": {
            "show": true,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            }
        }
    },
    "timeAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#008acd"
            }
        },
        "axisTick": {
            "show": true,
            "lineStyle": {
                "color": "#bdbdbd"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "rgba(0,0,0,0.65)"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#dddddd"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            }
        }
    },
    "toolbox": {
        "iconStyle": {
            "normal": {
                "borderColor": "#007ace"
            },
            "emphasis": {
                "borderColor": "#00aecc"
            }
        }
    },
    "legend": {
        "textStyle": {
            "color": "#333333"
        }
    },
    "tooltip": {
        "axisPointer": {
            "lineStyle": {
                "color": "#bdbdbd",
                "width": "1"
            },
            "crossStyle": {
                "color": "#bdbdbd",
                "width": "1"
            }
        }
    },
    "timeline": {
        "lineStyle": {
            "color": "#007ace",
            "width": 1
        },
        "itemStyle": {
            "normal": {
                "color": "#007ace",
                "borderWidth": 1
            },
            "emphasis": {
                "color": "#a9334c"
            }
        },
        "controlStyle": {
            "normal": {
                "color": "#007ace",
                "borderColor": "#007ace",
                "borderWidth": 0.5
            },
            "emphasis": {
                "color": "#007ace",
                "borderColor": "#007ace",
                "borderWidth": 0.5
            }
        },
        "checkpointStyle": {
            "color": "#2ec7c9",
            "borderColor": "rgba(46,199,201,0.4)"
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#007ace"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "#007ace"
                }
            }
        }
    },
    "visualMap": {
        "color": [
            "#5ab1ef",
            "#e0ffff"
        ]
    },
    "dataZoom": {
        "backgroundColor": "rgba(47,69,84,0)",
        "dataBackgroundColor": "rgba(239,239,255,1)",
        "fillerColor": "rgba(182,162,222,0.2)",
        "handleColor": "#007ace",
        "handleSize": "100%",
        "textStyle": {
            "color": "#333333"
        }
    },
    "markPoint": {
        "label": {
            "normal": {
                "textStyle": {
                    "color": "rgba(0,0,0,0.65)"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "rgba(0,0,0,0.65)"
                }
            }
        }
    }
}

echarts.registerTheme('ufetheme', ufeTheme)

export default ufeTheme
