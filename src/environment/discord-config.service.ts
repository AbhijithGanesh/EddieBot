import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DiscordModuleOption, DiscordOptionsFactory } from 'discord-nestjs';
import { Intents } from 'discord.js';
@Injectable()
export class DiscordConfigService implements DiscordOptionsFactory {
  constructor(private config: ConfigService) {}
  createDiscordOptions(): DiscordModuleOption {
    return {
      token: this.config.get('DISCORD_TOKEN'),
      commandPrefix: this.config.get('DISCORD_PREFIX'),
      intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
    };
  }
}
