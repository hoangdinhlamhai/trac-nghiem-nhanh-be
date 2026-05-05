import { Module } from '@nestjs/common';
import { DiscussionsController } from './discussions.controller.js';
import { DiscussionsService } from './discussions.service.js';

@Module({
  controllers: [DiscussionsController],
  providers: [DiscussionsService],
})
export class DiscussionsModule {}
