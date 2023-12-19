export default class Metric {
  private url: string

  private static instance: null | Metric = null
  private constructor() {
    this.url = 'mybestsite.com'
  }

  public static getInstance(): Metric {
    if (this.instance === null) {
      this.instance = new Metric()
    }

    return this.instance
  }

  public changeUrl(url: string) {
    Metric.getInstance().url = url
  }

  public send() {
    alert(this.url)
  }
}
