export class Name {
  private readonly name: string;

  get value(): string {
    return this.name;
  }

  private validateNameLength(name: string): boolean {
    return name.length >= 10 && name.length <= 36;
  }

  constructor(name: string) {
    const isNameLengthValid = this.validateNameLength(name);

    if (!isNameLengthValid) {
      throw new Error('Name length error.');
    }

    this.name = name;
  }
}
