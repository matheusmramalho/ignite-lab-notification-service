import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';
import { PostmarkMailService } from './mail/postmark-mail.service';
import { PrismaService } from './prisma.service';


@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: MailService,
      useClass: PostmarkMailService
    },
    PrismaService],
})
export class AppModule { }
