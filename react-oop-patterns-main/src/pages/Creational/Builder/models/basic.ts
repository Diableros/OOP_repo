export class Survey {
  title: string = ''
  questions: Question[] = []
}

export enum QuestionType {
  Text = 'Text',
  Number = 'Number',
  Select = 'Select'
}

export class Question {
  constructor(
    public text: string,
    public type: QuestionType,
    public options?: string[]
  ) {}
}

export class SurveyBuilder {
  private survey: Survey = new Survey()
  reset() {
    this.survey = new Survey()
  }

  setTitle(title: string): SurveyBuilder {
    this.survey.title = title
    return this
  }

  addTextQuestion(text: string): SurveyBuilder {
    this.survey.questions.push(new Question(text, QuestionType.Text))
    return this
  }

  addNumberQuestion(text: string): SurveyBuilder {
    this.survey.questions.push(new Question(text, QuestionType.Number))
    return this
  }

  addSelectQuestion(text: string, options?: string[]): SurveyBuilder {
    this.survey.questions.push(new Question(text, QuestionType.Select, options))
    return this
  }

  getResult(): Survey {
    const survey = this.survey
    this.reset()
    return survey
  }
}
