import {Command, flags} from '@oclif/command'

import * as _ from 'lodash'

import * as animals from './animals'

class Clinsay extends Command {
  static description = 'describe the command here'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    // add --help flag to show CLI version
    help: flags.help({char: 'h'}),
  }

  async run() {
    const {flags} = this.parse(Clinsay)

    const animal = _.sample(animals)
    this.log(`The ${animal!.name} says ${animal!.speak}!`)
  }
}

export = Clinsay
