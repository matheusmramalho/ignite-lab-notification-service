import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { AppService } from './app.service';
import { CreateNotificationBody } from './create-notification-body';
import { MailService } from './mail/mail.service';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly mailService: MailService,
    private readonly prismaService: PrismaService
  ) { }

  @Get(['hello', 'hello2'])
  getHello(): string {
    return this.mailService.sendEmail();
  }

  @Get()
  listNotifications() {
    return this.prismaService.notification.findMany();
  }

  @Post()
  async createNotification(@Body() body: CreateNotificationBody) {
    await this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        categeory: 'categoria 1',
        content: 'notificacao padrao',
        recipientId: randomUUID(),
      }
    });
  }

}
