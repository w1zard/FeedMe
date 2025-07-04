// RSS源接口
// name: 信息源名称
// url: RSS URL地址
// category: 分类名称

/**
 * @typedef {object} RssSource
 * @property {string} name - 信息源名称
 * @property {string} url - RSS URL地址
 * @property {string} category - 分类名称
 */

// 默认配置
export const config = {
  sources: [
    {
      name: "V2EX 热门",
      url: "https://dawn-hall-b677.hiapp.workers.dev/?url=https%3A//www.v2ex.com/api/topics/hot.json",
      category: "论坛",
    },
    {
      name: "V2EX 最新",
      url: "https://dawn-hall-b677.hiapp.workers.dev/?url=https://www.v2ex.com/api/topics/latest.json",
      category: "论坛",
    },
    {
      name: "Hacker News 近期最佳",
      url: "https://hnrss.org/best",
      category: "科技资讯",
    }
  ],
  maxItemsPerFeed: 20,
  dataPath: "./data",
}

export const defaultSource = config.sources[0]

/**
 * @param {string} url
 * @returns {RssSource | undefined}
 */
export function findSourceByUrl(url) {
  return config.sources.find((source) => source.url === url)
}

export function getSourcesByCategory() {
  return config.sources.reduce((acc, source) => {
    if (!acc[source.category]) {
      acc[source.category] = []
    }
    acc[source.category].push(source)
    return acc
  }, {})
}
