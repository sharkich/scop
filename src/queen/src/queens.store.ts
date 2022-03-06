import { Queen } from '@interfaces/Queen';

export class QueensStore {
  queens: Queen[] = [];

  getQueen(host: string) {
    return this.queens.find(queen => queen.host === host) || null;
  }

  isHostExist(host: string) {
    return !!this.getQueen(host);
  }

  add(host: string, createdBy: string) {
    const queen = this.getQueen(host) ?? QueensStore.generateQueen(host, createdBy);
    if (!this.isHostExist(host)) {
      this.queens.push(queen);
    }

    return queen;
  }

  static isValidHost(host: string, from: string, hash: string) {
    // TODO
    return host === hash;
  }

  private static generateQueen(host: string, createdBy: string): Queen {
    return {
      host,
      created: new Date(),
      createdBy,
      status: null,
      lastOnline: null
    };
  }
}
