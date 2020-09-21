export class Poll {
  constructor(
    public question: string,
    public answers: Array<any>,
    public closed?: boolean,
    public id?: string
  ) {}

  get answersWithPercent() {
    let answersWithPercent: Array<any> = [];
    let total = 0;
    const answers = this.answers;

    answers.forEach((element) => {
      total += element.votes;
    });
    total = total === 0 ? 1 : total;
    answersWithPercent = answers.map((item) => {
      return {
        value: item.value,
        votes: item.votes,
        percent: Math.round((item.votes / total) * 100),
      };
    });
    return answersWithPercent;
  }
}
