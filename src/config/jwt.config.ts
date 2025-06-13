import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

// eslint-disable-next-line @typescript-eslint/require-await
export const getJwtConfig = async (configService: ConfigService): Promise<JwtModuleOptions> => ({
  secret: configService.get('JWT_SECRET'),
});
