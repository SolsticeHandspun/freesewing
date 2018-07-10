import { PatternConfig } from './types'

export default class Pattern {
  config: PatternConfig;

  constructor(config: PatternConfig) {
    this.config = config;

    return this;
  }
}
