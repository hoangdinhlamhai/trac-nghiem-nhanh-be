import { Controller, Get, Post, Param, Body, ParseUUIDPipe } from '@nestjs/common';
import { ResultsService } from './results.service.js';
import { UnlockResultDto } from './dto/unlock-result.dto.js';

@Controller('results')
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {}

  @Get(':id')
  async getResult(@Param('id', ParseUUIDPipe) id: string) {
    return this.resultsService.getResult(id);
  }

  @Post(':id/unlock')
  async unlockResult(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UnlockResultDto,
  ) {
    return this.resultsService.unlockResult(id, dto.code, dto.expectedCode);
  }
}
